"use client"
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { Globe2, Map, Icon, icons, Landmark, Plane, Send, ArrowDown } from "lucide-react";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
// import { title } from "process";

const suggestions = [
  {
    title: "Create New Trip",
    icon: <Globe2 className="text-blue-500 h-5 w-5" />,
  },
  {
    title: "Inspire Me Where To Go",
    icon: <Plane className="text-green-500 h-5 w-5" />,
  },
  {
    title: "Discover Hidden Gems",
    icon: <Landmark className="text-orange-500 h-5 w-5" />,
  },
  {
    title: "Adventure Destination",
    icon: <Map className="text-yellow-500 h-5 w-5" />,
  },
];

function Hero() {
  
  const { user } = useUser();
  const router = useRouter();
  const onSend = () => {
    if(!user)
    {
      router.push('/sign-in')
      return;
    }
  }

  return (
    <div className="mt-24 w-full flex justify-center">
      <div className="max-w-4xl w-full text-center space-y-6">
        <h1 className="text-xl md:text-5xl font-bold ">
          Hey I am Your Personal{" "}
          <span className="text-primary">Trip Planner</span>
        </h1>

        <p className="text-lg">
          Tell Me What You Want, and I'll Handle The Rest: Flights, Hotels, Trip
          Planner - all in seconds
        </p>

        <div>
          <div className="border rounded-2xl p-4 shadow relative">
            <Textarea
              placeholder="Create and Plan A Trip Idea"
              className="w-full h-28 bg-transparent border-none focus-visible:ring-0 shadow-none resize-none"
            />
            <Button size={"icon"} className="absolute bottom-6 right-6" onClick={() => onSend()}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex gap-5">
          {suggestions.map((suggestions, index) => (
            <div
              key={index}
              className="flex items-center gap-2 border rounded-full p-2 cursor-pointer hover:bg-primary hover:text-white"
            >
              {suggestions.icon}
              <h2 className="text-xs">{suggestions.title}</h2>
            </div>
          ))}
        </div>

        <div className="items-center justify-center flex-column">

        <h2 className="my-7 mt-14 flex gap-2 text-center justify-center">Not Sure Where To Start ..? <strong>See How It Works ..!</strong><ArrowDown /></h2>

          <div className="relative">
            <HeroVideoDialog
              className="block dark:hidden"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/watch?v=TtDG42xDxjg"
              thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
              thumbnailAlt="Hero Video"
            />

            {/* <HeroVideoDialog
              className="hidden dark:block"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
              thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
              thumbnailAlt="Hero Video"
            /> */}
          </div>

        </div>

      </div>
    </div>
  );
}

export default Hero;
