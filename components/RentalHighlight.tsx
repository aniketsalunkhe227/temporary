"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";
import { Cloud as CloudIcon } from "lucide-react"; // Example icon

interface RentalHighlightProps {
  onGetQuote: () => void;
}

export function RentalHighlight({ onGetQuote }: RentalHighlightProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-background dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="bg-white dark:bg-gray-800 dark:bg-opacity-80 backdrop-blur-sm rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transition-colors duration-300"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            {/* Image/Icon Side */}
            <div className="p-8 flex justify-center items-center">
              <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                <CloudIcon className="w-16 h-16 md:w-24 md:h-24 text-primary dark:text-primary-foreground" />
                {/* You can replace the icon with an actual Image component here if you have one */}
                {/* <Image src="/path/to/your/generator-image.png" alt="Generator Rental" width={192} height={192} className="rounded-full object-cover" /> */}
              </div>
            </div>

            {/* Text Content Side */}
            <div className="py-8 px-6 md:p-12 text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 transition-colors duration-300">
                Powering Your Needs with Reliable Geneset Rentals
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed transition-colors duration-300">
                Whether it's for a critical business operation, a large-scale event, or temporary power during an outage, our premium selection of generators ensures you have the power you need, exactly when you need it. Experience seamless performance and dependable support.
              </p>
              <Button size="lg" className="rounded-full" onClick={onGetQuote}>
                Get a Rental Quote
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}