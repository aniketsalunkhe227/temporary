import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Calendar, Battery, Clock, Tag } from 'lucide-react';

const GeneratorCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef(null);

  const generators = [
    {
      id: 1,
      name: "Portable Pro 2000W",
      description: "Perfect for camping, outdoor events, and emergency backup",
      power: "2000W",
      runtime: "8 hours",
      price: "$45/day",
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      name: "Industrial 5000W",
      description: "Heavy-duty generator for construction sites and large events",
      power: "5000W",
      runtime: "12 hours",
      price: "$89/day",
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      name: "Silent Home Backup",
      description: "Ultra-quiet operation, perfect for residential areas",
      power: "3500W",
      runtime: "10 hours",
      price: "$65/day",
      image: "/api/placeholder/400/300"
    },
    {
      id: 4,
      name: "Compact 1000W",
      description: "Lightweight and efficient for small appliances and devices",
      power: "1000W",
      runtime: "6 hours",
      price: "$35/day",
      image: "/api/placeholder/400/300"
    }
  ];

  const nextSlide = () => {
    setActiveIndex((current) => (current === generators.length - 1 ? 0 : current + 1));
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? generators.length - 1 : current - 1));
  };

  // Touch and drag handlers
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleMouseDown = (e) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    handleDrag(currentX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    handleDrag(currentX);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDrag = (currentX) => {
    const diff = startX - currentX;
    if (diff > 50) {
      nextSlide();
      setIsDragging(false);
    } else if (diff < -50) {
      prevSlide();
      setIsDragging(false);
    }
  };

  useEffect(() => {
    // Auto-advance the carousel every 5 seconds
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="py-12 px-4 w-full overflow-hidden">
      <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-500">Featured Generators</h2>
      
      <div 
        ref={carouselRef}
        className="relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleDragEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
      >
        {/* Carousel container */}
        <div className="overflow-hidden rounded-2xl">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {generators.map((generator) => (
              <div key={generator.id} className="w-full flex-shrink-0">
                <div className="backdrop-blur-lg bg-white/70 dark:bg-slate-800/70 rounded-2xl shadow-lg overflow-hidden">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={generator.image} 
                      alt={generator.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                      <h3 className="text-xl font-bold text-white">{generator.name}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-700 dark:text-gray-300 mb-6">{generator.description}</p>
                    
                    {/* Specs with iOS-style indicators */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-blue-50 dark:bg-blue-900/30">
                        <Battery className="h-5 w-5 text-blue-600 dark:text-blue-400 mb-1" />
                        <span className="text-xs text-gray-500 dark:text-gray-400">Power</span>
                        <span className="font-medium text-gray-800 dark:text-gray-200">{generator.power}</span>
                      </div>
                      
                      <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-green-50 dark:bg-green-900/30">
                        <Clock className="h-5 w-5 text-green-600 dark:text-green-400 mb-1" />
                        <span className="text-xs text-gray-500 dark:text-gray-400">Runtime</span>
                        <span className="font-medium text-gray-800 dark:text-gray-200">{generator.runtime}</span>
                      </div>
                      
                      <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-purple-50 dark:bg-purple-900/30">
                        <Tag className="h-5 w-5 text-purple-600 dark:text-purple-400 mb-1" />
                        <span className="text-xs text-gray-500 dark:text-gray-400">Price</span>
                        <span className="font-medium text-gray-800 dark:text-gray-200">{generator.price}</span>
                      </div>
                    </div>
                    
                    <button className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium rounded-xl transition-colors duration-300 flex items-center justify-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Reserve Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* iOS-style pagination dots */}
        <div className="flex justify-center mt-6 gap-2">
          {generators.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index 
                  ? 'w-6 bg-blue-500 dark:bg-blue-400' 
                  : 'w-2 bg-gray-300 dark:bg-gray-600'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Navigation arrows */}
        <button 
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 h-10 w-10 flex items-center justify-center rounded-full bg-white/80 dark:bg-slate-800/80 text-gray-800 dark:text-white shadow-lg backdrop-blur-sm z-10"
          aria-label="Previous slide"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 h-10 w-10 flex items-center justify-center rounded-full bg-white/80 dark:bg-slate-800/80 text-gray-800 dark:text-white shadow-lg backdrop-blur-sm z-10"
          aria-label="Next slide"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default GeneratorCarousel;