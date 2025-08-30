"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignInButton, useUser, useClerk } from "@clerk/nextjs";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const menuOptions = [
  { name: "Home", path: "/" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact", path: "/contact-us" },
];

const Header = () => {
  const { isSignedIn } = useUser();
  const { signOut } = useClerk();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="p-5 border-b">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Link href={"/"}>
            <Image src={"/logo.svg"} alt="logo" width={30} height={30} />
          </Link>
          <h2 className="font-bold text-2xl">AI TRIP PLANNER</h2>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-5 items-center">
          {menuOptions.map((menu) => (
            <Link key={menu.path} href={menu.path}>
              <h2 className="text-lg hover:scale-105 transition-all hover:text-primary">
                {menu.name}
              </h2>
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex gap-5 items-center">
          {isSignedIn ? (
            <Button className="min-w-[140px]" onClick={() => signOut()}>
              Sign Out
            </Button>
          ) : (
            <SignInButton mode="modal">
              <Button className="min-w-[140px]">Get Started</Button>
            </SignInButton>
          )}

          <Link href={isSignedIn ? "/create-new-trip" : "#"}>
            <Button className="min-w-[140px]" disabled={!isSignedIn}>
              Create New Trip
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown with Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="absolute top-0 right-0 h-full w-2/3 bg-white shadow-lg p-6 z-50 md:hidden"
          >
            {/* Close button inside drawer */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-bold text-xl">Menu</h2>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X size={28} />
              </button>
            </div>

            {/* Menu links */}
            <div className="flex flex-col gap-4">
              {menuOptions.map((menu) => (
                <Link
                  key={menu.path}
                  href={menu.path}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <h2 className="text-lg hover:text-primary">{menu.name}</h2>
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 mt-6">
              {isSignedIn ? (
                <Button
                  className="min-w-[140px]"
                  onClick={() => {
                    signOut();
                    setMobileMenuOpen(false);
                  }}
                >
                  Sign Out
                </Button>
              ) : (
                <SignInButton mode="modal">
                  <Button className="min-w-[140px]">Get Started</Button>
                </SignInButton>
              )}

              <Link href={isSignedIn ? "/create-new-trip" : "#"}>
                <Button className="min-w-[140px]" disabled={!isSignedIn}>
                  Create New Trip
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
