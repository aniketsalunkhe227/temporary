"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

interface NavigationProps {
  onGetQuote: () => void;
}

export function Navigation({ onGetQuote }: NavigationProps) {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-background/50"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Chaitanya Genset</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Button variant="ghost" onClick={() => scrollToSection("services")}>
              Services
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("about")}>
              About
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("blog")}>
              Blog
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("contact")}>
              Contact
            </Button>
          </div>
          <Button className="rounded-full" onClick={onGetQuote}>
            Get Quote
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}