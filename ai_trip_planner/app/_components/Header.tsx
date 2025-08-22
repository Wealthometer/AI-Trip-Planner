"use client";
import Image from "next/image";
// import path from 'path'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignInButton, useUser, useClerk } from "@clerk/nextjs";
// import { ThemeToggle } from "./themetoggle";

const menuOptions = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Pricing",
    path: "/pricing",
  },
  {
    name: "Contact",
    path: "/contact-us",
  },
];

const Header = () => {
  const { isSignedIn, user } = useUser();
  const { signOut } = useClerk();

  return (
    <div className="flex justify-between items-center p-5">
      <div className="flex gap-2 items-center">
        <Image src={"/logo.svg"} alt="logo" width={30} height={30} />
        <h2 className="font-bold text-2xl">AI TRIP PLANNER</h2>
      </div>

      <div className="flex gap-5 items-center">
        {menuOptions.map((menu, index) => (
          <Link key={menu.path} href={menu.path}>
            <h2 className="text-lg hover:scale-105 transition-all hover:text-primary">
              {menu.name}
            </h2>
          </Link>
        ))}
      </div>
      
      <div className="flex gap-5 items-center">
        {isSignedIn ? (
          <Button onClick={() => signOut()}>Sign Out</Button>
        ) : (
          <SignInButton mode="modal">
            <Button>Get Started</Button>
          </SignInButton>
        )}

        <Link href={isSignedIn ? "/create-trip" : "#"}>
          <Button disabled={!isSignedIn}>Create New Trip</Button>
        </Link>

        
      </div>
    </div>
  );
};

export default Header;
