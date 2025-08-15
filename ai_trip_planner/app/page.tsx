import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import '../app/globals.css'
import { Button } from "@/components/ui/button";
import Hero from "./_components/Hero";
import { AppleCardsCarouselDemo } from "./_components/carousel";

export default function Home() {
  return (
    <div>
      <Hero/>
      <AppleCardsCarouselDemo />
    </div>
  );
}
