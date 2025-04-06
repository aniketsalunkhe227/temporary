// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef, useState } from "react";
// import { useInView } from "react-intersection-observer";
// import { Button } from "@/components/ui/button";
// import { ModeToggle } from "@/components/mode-toggle";
// // import { GeneratorCarousel } from "@/components/generatorCarousel"; // Updated import
// import { Navigation } from "@/components/navigation";
// import { Contact } from "@/components/contact";
// import { Services } from "@/components/services";
// import { About } from "@/components/about";
// import { Blog } from "@/components/blog";
// import { Footer } from "@/components/footer";
// import  GeneratorShowcase from "@/components/generatorShowcase"; // Assuming you save this component in a 'components/generatorShowcase.tsx' file
// import { RentalHighlight } from "@/components/rentalHighlight"; // Assuming you save this component in a 'components/rentalHighlight.tsx' file
// import GeneratorCarousel from "@/components/GeneratorCarousel" ;

// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";

// export default function Home() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [showQuoteDialog, setShowQuoteDialog] = useState(false);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   const [heroRef, heroInView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const scrollToSection = (sectionId: string) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <main className="relative min-h-screen bg-background">
//       <Navigation onGetQuote={() => setShowQuoteDialog(true)} />
      
//       {/* Hero Section */}
//       <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           {/* <GeneratorCarousel /> */}
//         </div>
//         <GeneratorCarousel/>

//         <div className="container relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             className="text-center"
//           >
//             {/* <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
//               Power Your Success
//             </h1>
//             <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
//               Premium generator rental solutions for businesses and events.
//               Reliable power, whenever and wherever you need it.
//             </p> */}
//             {/* <Button 
//               size="lg" 
//               className="rounded-full"
//               onClick={() => scrollToSection("services")}
//             >
//               Get Started
//             </Button> */}
//           </motion.div>
//         </div>
//       </section>
//       <RentalHighlight onGetQuote={() => setShowQuoteDialog(true)} />
//       <GeneratorShowcase/>


//       {/* Services Section */}
//       <Services id="services" onGetQuote={() => setShowQuoteDialog(true)} />

//       {/* About Section */}
//       <About id="about" />

//       {/* Blog Section */}
//       <Blog id="blog" />

//       {/* Contact Section */}
//       <Contact id="contact" />

//       {/* Footer */}
//       <Footer />

//       {/* Theme Toggle */}
//       <div className="fixed bottom-4 right-4 z-50">
//         <ModeToggle />
//       </div>

//       {/* Quote Dialog */}
//       <Dialog open={showQuoteDialog} onOpenChange={setShowQuoteDialog}>
//         <DialogContent className="sm:max-w-[425px]">
//           <DialogHeader>
//             <DialogTitle>Get a Quote</DialogTitle>
//             <DialogDescription>
//               Fill out the form below and we'll get back to you with a customized quote.
//             </DialogDescription>
//           </DialogHeader>
//           <div className="grid gap-4 py-4">
//             <div className="space-y-2">
//               <input
//                 className="w-full px-3 py-2 border rounded-md"
//                 placeholder="Your Name"
//               />
//             </div>
//             <div className="space-y-2">
//               <input
//                 className="w-full px-3 py-2 border rounded-md"
//                 type="email"
//                 placeholder="Email Address"
//               />
//             </div>
//             <div className="space-y-2">
//               <input
//                 className="w-full px-3 py-2 border rounded-md"
//                 placeholder="Phone Number"
//               />
//             </div>
//             <div className="space-y-2">
//               <textarea
//                 className="w-full px-3 py-2 border rounded-md"
//                 rows={4}
//                 placeholder="Tell us about your power requirements"
//               />
//             </div>
//             <Button onClick={() => setShowQuoteDialog(false)}>
//               Submit Quote Request
//             </Button>
//           </div>
//         </DialogContent>
//       </Dialog>
//     </main>
//   );
// }



"use client";

const page = () => {
  return (
    <div>page</div>
  )
}

export default page