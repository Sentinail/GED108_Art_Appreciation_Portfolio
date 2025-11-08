import { ArrowUp, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  const courseInfo = [
    { name: 'GED108 Art Appreciation', href: '#' },
    { name: 'Course Syllabus', href: '#' },
    { name: 'Learning Outcomes', href: '#' },
    { name: 'Assessment Rubrics', href: '#' }
  ];

  return (
    <footer className="bg-[rgb(50,59,84)] border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[rgb(39,174,96)]">W.G.P</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              A digital portfolio showcasing my journey as a Software Engineer and BSCS student 
              through GED108 Art Appreciation, exploring the intersection of technology, art, and creativity.
            </p>
            <div className="text-sm text-gray-400">
              <p>Software Engineer & Student Portfolio</p>
              <p>Academic Year 2024-2025</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-[rgb(39,174,96)] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Course Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Course Resources</h4>
            <ul className="space-y-2">
              {courseInfo.map((info) => (
                <li key={info.name}>
                  <a 
                    href={info.href} 
                    className="text-gray-300 hover:text-[rgb(39,174,96)] transition-colors text-sm"
                  >
                    {info.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Academic Information</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>University: Mapúa University</p>
              <p>Program: BSCS (Bachelor of Science in Computer Science)</p>
              <p>Year Level: 2nd Year</p>
              <p>Course: GED108 - Art Appreciation</p>
              <p>Profession: Software Engineer</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© {currentYear} Wilson G. Ponseca. Made with</span>
              <Heart className="h-4 w-4 text-[rgb(39,174,96)]" />
              <span>for GED108</span>
            </div>

            {/* Additional Info */}
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p>Software Engineer's Art Portfolio | GED108 Journey</p>
              <p className="mt-1">Built with React, TypeScript & Tailwind CSS</p>
            </div>

            {/* Back to Top */}
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="border-[rgb(39,174,96)] text-[rgb(39,174,96)] hover:bg-[rgb(39,174,96)]/10"
            >
              <ArrowUp className="h-4 w-4 mr-1" />
              Top
            </Button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-white/5">
          <p className="text-center text-xs text-gray-500 leading-relaxed">
            This portfolio is created as part of academic requirements for GED108 Art Appreciation course. 
            All content and creative works are original submissions unless otherwise noted. 
            This website serves as a digital showcase of learning outcomes and creative development.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;