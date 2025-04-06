"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react"; // Import React

interface BlogProps {
  id?: string; // Define the id prop as optional
}

export function Blog({ id }: BlogProps) { // Accept the id prop
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-secondary/50" id={id}> {/* Pass the id prop to the section element */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest insights about power solutions and generator maintenance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden backdrop-blur-sm bg-card/50">
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="outline" className="w-full">Read More</Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const posts = [
  {
    title: "Generator Maintenance Tips",
    excerpt: "Essential maintenance practices to keep your generator running smoothly.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
  },
  {
    title: "Choosing the Right Generator",
    excerpt: "Factors to consider when selecting a generator for your needs.",
    image: "https://images.unsplash.com/photo-1595241751423-a7f51c81ba52",
  },
  {
    title: "Power Backup Solutions",
    excerpt: "Complete guide to implementing reliable power backup systems.",
    image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1",
  },
];