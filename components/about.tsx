"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import React from "react"; // Import React

interface AboutProps {
  id?: string; // Define the id prop as optional
}

export function About({ id }: AboutProps) { // Accept the id prop
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20" id={id}> {/* Pass the id prop to the section element */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1"
              alt="Generator maintenance"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">About Chaitanya Genset</h2>
            <p className="text-muted-foreground mb-6">
              With over a decade of experience in power solutions, Chaitanya Genset
              has been the trusted partner for businesses across industries. Our
              commitment to reliability and excellence has made us the go-to choice
              for generator rentals.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-2xl font-bold mb-2">10+</h4>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">500+</h4>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}