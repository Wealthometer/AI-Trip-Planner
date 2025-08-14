import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { Globe2, Icon, icons, Send } from "lucide-react";
// import { title } from "process";

const suggestions = [
    {
        title : "Create New Trip",
        icon : <Globe2 className="text-blue-500 h-5 w-5" />
    }
]

function Hero() {
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
             <Textarea placeholder="Create and Plan A Trip Idea" className="w-full h-28 bg-transparent border-none focus-visible:ring-0 shadow-none resize-none"/>
             <Button size={'icon'} className="absolute bottom-6 right-6">
                <Send className="h-4 w-4"/>
             </Button>
           </div> 
        </div>
      </div>
    </div>
  );
}

export default Hero;
