"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

interface ServicesProps {
  id: string;
  onGetQuote: () => void;
}

const services = [
  {
    title: "Industrial Generators",
    description: "High-capacity generators for industrial applications",
    specs: "500kVA - 2000kVA",
    details: [
      "24/7 Technical Support",
      "Fuel Management System",
      "Remote Monitoring",
      "Emergency Response",
      "Preventive Maintenance",
    ]
  },
  {
    title: "Commercial Generators",
    description: "Reliable power backup for businesses & companies",
    specs: "100kVA - 500kVA",
    details: [
      "Automatic Transfer Switch",
      "Noise Reduction System",
      "Regular Maintenance",
      "Fuel Delivery Service",
      "Load Bank Testing",
    ]
  },
  {
    title: "Event Generators",
    description: "Portable generators for outdoor , commercial events",
    specs: "20kVA - 100kVA",
    details: [
      "Quick Setup",
      "Silent Operation",
      "Distribution Boards",
      "Cable Management",
      "On-site Support",
    ]
  },
];

export function Services({ id, onGetQuote }: ServicesProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [showDialog, setShowDialog] = useState(false);

  return (
    <section id={id} ref={ref} className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our wide range of generator solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="p-6 backdrop-blur-sm bg-card/50">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <p className="text-sm font-medium mb-4">{service.specs}</p>
                <div className="space-y-4">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      setSelectedService(service);
                      setShowDialog(true);
                    }}
                  >
                    Learn More
                  </Button>
                  <Button 
                    className="w-full"
                    onClick={onGetQuote}
                  >
                    Get Quote
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>{selectedService?.title}</DialogTitle>
            <DialogDescription>
              {selectedService?.description}
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <h4 className="font-semibold mb-3">Specifications</h4>
            <p className="text-muted-foreground mb-4">{selectedService?.specs}</p>
            <h4 className="font-semibold mb-3">Features & Benefits</h4>
            <ul className="list-disc pl-5 space-y-2">
              {selectedService?.details.map((detail, index) => (
                <li key={index} className="text-muted-foreground">{detail}</li>
              ))}
            </ul>
            <div className="mt-6">
              <Button className="w-full" onClick={() => {
                setShowDialog(false);
                onGetQuote();
              }}>
                Request Quote
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}