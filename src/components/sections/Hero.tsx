import { Button } from "@/components/ui/button";
import { ArrowDown, Eye } from 'lucide-react';
import { getAssetPath } from '@/lib/utils';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-linear-to-br from-[rgb(25,29,43)] to-[rgb(50,59,84)] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-[rgb(39,174,96)] opacity-20"
          style={{
            clipPath: 'polygon(0 0, 60% 0, 40% 100%, 0 100%)'
          }}
        />
        <div 
          className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-[rgb(39,174,96)] to-transparent opacity-10"
        />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold">
                <span className="text-white">I'm </span>
                <span className="text-[rgb(39,174,96)]">Wilson G. Ponseca</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-[rgb(39,174,96)]">
                Software Engineer & BSCS Student
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                Welcome to my GED108 Art Appreciation Digital Portfolio. 
                As a Software Engineer and 2nd-year BSCS student at Mapúa University, 
                I'm passionate about exploring the intersection of art, technology, and creativity. 
                This portfolio showcases my creative outputs and learning experiences 
                from the GED 108 Art Appreciation course, demonstrating how artistic understanding 
                enhances technical innovation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#portfolio">
                <Button 
                  size="lg" 
                  className="bg-[rgb(39,174,96)] hover:bg-[rgb(39,174,96)]/90 text-[rgb(25,29,43)] font-semibold px-8"
                >
                  <Eye className="mr-2 h-5 w-5" />
                  View My Work
                </Button>
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-[rgb(39,174,96)]">8</div>
                <div className="text-sm text-gray-400">Course Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[rgb(39,174,96)]">3</div>
                <div className="text-sm text-gray-400">Video Presentations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[rgb(39,174,96)]">2</div>
                <div className="text-sm text-gray-400">Years BSCS</div>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative">
              {/* Main image with clip-path effect */}
              <div 
                className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-[rgb(39,174,96)]"
                style={{
                  clipPath: 'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)'
                }}
              >
                <img 
                  src={getAssetPath("assets/outputs/Portrait_AI_Cropped.png")} 
                  alt="Wilson G. Ponseca - Portfolio"

                  style={{
                    objectPosition: '50% 15%'
                  }}
                  
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[rgb(25,29,43)]/30 to-transparent" />
              </div>
              
              {/* Floating accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[rgb(39,174,96)] rounded-full opacity-20 blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[rgb(39,174,96)] rounded-full opacity-10 blur-2xl" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-[rgb(39,174,96)] h-6 w-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;