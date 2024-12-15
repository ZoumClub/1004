"use client";

import { Button } from "@/components/ui/button";
import { Car } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-6xl font-bold mb-6">Find Your Perfect Car</h1>
          <p className="text-xl mb-8">Discover the best deals on new and used cars. Your dream car is just a click away.</p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <Car className="mr-2 h-5 w-5" />
            Sell Your Car
          </Button>
        </div>
      </div>
    </section>
  );
}