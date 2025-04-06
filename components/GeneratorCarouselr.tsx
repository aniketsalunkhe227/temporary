"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CAROUSEL_ITEMS = [
  {
    image: "/api/placeholder/1200/800?text=Power+Solutions",
    title: "Reliable Power Generation",
    description: "Cutting-edge generators for seamless performance"
  },
  {
    image: "/api/placeholder/1200/800?text=Event+Power",
    title: "Event Power Management",
    description: "Uninterrupted power for any scale of event"
  },
  {
    image: "/api/placeholder/1200/800?text=Industrial+Generators",
    title: "Industrial Strength Solutions",
    description: "High-capacity generators for demanding environments"
  }
];

export function GeneratorCarouselr() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CAROUSEL_ITEMS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CAROUSEL_ITEMS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + CAROUSEL_ITEMS.length) % CAROUSEL_ITEMS.length);
  };

  return (
    <div className="relative w-full h-full mx-auto group">
      {/* Carousel Container */}
      <div className="relative w-full h-full overflow-hidden">
        <AnimatePresence>
          {CAROUSEL_ITEMS.map((item, index) => (
            index === currentIndex && (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    filter: 'brightness(0.6) saturate(1.2)'
                  }}
                />

                {/* Content Overlay */}
                <div className="relative z-10 text-center px-4 max-w-3xl
                  bg-black/30 dark:bg-black/50 backdrop-blur-sm
                  rounded-xl p-6 mx-4
                  absolute bottom-10 md:bottom-20 left-1/2 transform -translate-x-1/2
                  carousel-content" // Added the 'carousel-content' class
                >
                  <h2 className="text-3xl md:text-5xl font-bold mb-3 drop-shadow-lg text-white dark:text-white">
                    {item.title}
                  </h2>
                  <p className="text-white text-base md:text-lg mb-4 drop-shadow-md dark:text-white">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2
            bg-white/20 hover:bg-white/40 backdrop-blur-sm
            text-white rounded-full p-3 z-20
            opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2
            bg-white/20 hover:bg-white/40 backdrop-blur-sm
            text-white rounded-full p-3 z-20
            opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {CAROUSEL_ITEMS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}