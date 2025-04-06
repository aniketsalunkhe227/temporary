import { useState } from 'react';
import { Calendar, Clock, Battery, DollarSign } from 'lucide-react';

const GeneratorShowcase = ({ darkMode = false }) => {
  const [selectedGenerator, setSelectedGenerator] = useState(0);

  const generators = [
    {
      id: 1,
      name: "Pro 2000W",
      description: "Portable power solution for outdoor events and small projects",
      specs: {
        power: "2000W",
        runtime: "8-10 hours",
        noise: "58 dB",
        price: 45
      },
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      name: "Industrial 5000W",
      description: "Heavy-duty generator for construction sites and large events",
      specs: {
        power: "5000W",
        runtime: "12-15 hours",
        noise: "65 dB",
        price: 89
      },
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      name: "Silent Home Backup",
      description: "Quiet and reliable power backup for home emergencies",
      specs: {
        power: "3500W",
        runtime: "10-12 hours",
        noise: "52 dB",
        price: 65
      },
      image: "/api/placeholder/400/300"
    }
  ];

  // iOS-style glassmorphism card component
  const GlassCard = ({ children, className = "" }) => (
    <div 
      className={`rounded-2xl p-6 backdrop-blur-lg shadow-lg
      ${darkMode ? 'bg-slate-800/70 text-white shadow-slate-900/40' : 'bg-white/70 text-slate-800 shadow-slate-200/40'}
      ${className}`}
    >
      {children}
    </div>
  );

  return (
    <section className={`py-12 px-4 ${darkMode ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'}`}>
      <div className="max-w-6xl mx-auto">
        {/* iOS-inspired Tabs */}
        <div className="flex justify-center mb-8">
          <div className={`inline-flex rounded-full p-1 ${darkMode ? 'bg-slate-800' : 'bg-slate-200'}`}>
            {generators.map((gen, index) => (
              <button
                key={gen.id}
                onClick={() => setSelectedGenerator(index)}
                className={`py-2 px-6 rounded-full transition-all duration-300 font-medium text-sm
                ${selectedGenerator === index ? 
                  (darkMode ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 shadow-md') : 
                  (darkMode ? 'text-slate-400' : 'text-slate-600')}`}
              >
                {gen.name}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Generator Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <GlassCard className="flex items-center justify-center overflow-hidden">
            <img
              src={generators[selectedGenerator].image}
              alt={generators[selectedGenerator].name}
              className="rounded-lg w-full h-64 object-cover"
            />
          </GlassCard>

          {/* Details Section */}
          <GlassCard>
            <h2 className="text-2xl font-bold mb-2">{generators[selectedGenerator].name}</h2>
            <p className={`mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              {generators[selectedGenerator].description}
            </p>
            
            {/* iOS-style specs indicators */}
            <div className="grid grid-cols-2 gap-4">
              <div className={`flex items-center p-4 rounded-xl ${darkMode ? 'bg-slate-700/50' : 'bg-slate-100/70'}`}>
                <Battery className={`mr-3 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                <div>
                  <p className="text-xs uppercase font-semibold opacity-70">Power Output</p>
                  <p className="font-medium">{generators[selectedGenerator].specs.power}</p>
                </div>
              </div>
              
              <div className={`flex items-center p-4 rounded-xl ${darkMode ? 'bg-slate-700/50' : 'bg-slate-100/70'}`}>
                <Clock className={`mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                <div>
                  <p className="text-xs uppercase font-semibold opacity-70">Runtime</p>
                  <p className="font-medium">{generators[selectedGenerator].specs.runtime}</p>
                </div>
              </div>
              
              <div className={`flex items-center p-4 rounded-xl ${darkMode ? 'bg-slate-700/50' : 'bg-slate-100/70'}`}>
                <DollarSign className={`mr-3 ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
                <div>
                  <p className="text-xs uppercase font-semibold opacity-70">Daily Rate</p>
                  <p className="font-medium">${generators[selectedGenerator].specs.price}/day</p>
                </div>
              </div>
              
              <div className={`flex items-center p-4 rounded-xl ${darkMode ? 'bg-slate-700/50' : 'bg-slate-100/70'}`}>
                <Calendar className={`mr-3 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                <div>
                  <p className="text-xs uppercase font-semibold opacity-70">Availability</p>
                  <p className="font-medium">Check Calendar</p>
                </div>
              </div>
            </div>
            
            {/* iOS-style CTA button */}
            <button className={`w-full mt-6 py-3 px-4 rounded-xl font-medium 
              transition-all duration-300 flex items-center justify-center
              ${darkMode ? 
                'bg-blue-600 hover:bg-blue-700 text-white' : 
                'bg-blue-600 hover:bg-blue-700 text-white'}`}>
              Reserve This Generator
            </button>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default GeneratorShowcase;