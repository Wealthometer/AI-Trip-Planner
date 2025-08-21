"use client";
import React, { useEffect } from "react";
import Header from "./_components/Header";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { UserDetailContext } from "../context/UserDetailContext"

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const CreateUser = useMutation(api.user.CreateNewUser);

  const { user } = useUser();

  useEffect(() => {
    user && CreateNewUser();
  }, [user]);

  async function CreateNewUser() {
    const result = await CreateUser({
      email: user?.primaryEmailAddress?.emailAddress ?? "",
      imageUrl: user?.imageUrl ?? "",
      name: user?.fullName ?? "",
    });
  }

  return (
    <UserDetailContext.Provider value={{}}>
      <div>
        <Header />
        {children}
      </div>
    </UserDetailContext.Provider>
  );
}

export default Provider;
