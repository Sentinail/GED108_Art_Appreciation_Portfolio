import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Palette, BookOpen, Lightbulb } from 'lucide-react';

const About = () => {
  const skills = [
    "Software Engineering", "Visual Analysis", "Art History", "Cultural Studies", 
    "Creative Writing", "Photography", "Digital Design", "Web Development", 
    "Art Criticism", "Museum Studies", "Computer Science", "Technology & Art"
  ];

  const achievements = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Academic & Professional Excellence",
      description: "Software Engineer and 2nd-year BSCS student maintaining high standards in GED108"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Creative-Technical Projects",
      description: "Bridging software engineering skills with artistic creativity in course projects"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Research & Analysis",
      description: "In-depth study of global art movements with a technology-enhanced perspective"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation & Critical Thinking",
      description: "Combining analytical skills from engineering with artistic appreciation"
    }
  ];

  return (
    <section id="about" className="py-20 bg-[rgb(25,29,43)]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Software Engineer and BSCS student passionate about exploring the intersection 
            of technology and art through academic excellence and creative innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Personal Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[rgb(39,174,96)]">
                My Journey as a Software Engineer & Student
              </h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  I am Wilson G. Ponseca, a Software Engineer and 2nd-year BSCS student 
                  at Mapúa University, currently enrolled in GED108 Art Appreciation. 
                  This course has opened my eyes to the rich tapestry of global art and culture, 
                  allowing me to develop a deeper understanding of creative expression and 
                  its intersection with technology.
                </p>
                <p>
                  Through this digital portfolio, I showcase my learning journey in art appreciation, 
                  creative outputs, and personal reflections on how artistic understanding 
                  enhances my perspective as a software engineer. Each project represents 
                  a milestone in bridging technical skills with artistic insight.
                </p>
                <p>
                  My interests span across various art forms, cultural studies, and digital innovation, 
                  with a particular focus on how technology can preserve, enhance, and democratize 
                  artistic expression in the modern world.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Skills & Competencies</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-[rgb(50,59,84)] text-[rgb(39,174,96)] hover:bg-[rgb(39,174,96)] hover:text-[rgb(25,29,43)] transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Achievements Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {achievements.map((achievement) => (
              <Card 
                key={achievement.title} 
                className="bg-[rgb(50,59,84)] border-white/10 hover:border-[rgb(39,174,96)]/50 transition-all duration-300 group"
              >
                <CardContent className="p-6 space-y-3">
                  <div className="text-[rgb(39,174,96)] group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <h4 className="font-semibold text-white text-lg">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Learning Outcomes Section */}
        <div className="mt-20 p-8 rounded-2xl bg-linear-to-r from-[rgb(50,59,84)] to-[rgb(39,174,96)]/20 border border-[rgb(39,174,96)]/20">
          <h3 className="text-2xl font-semibold text-[rgb(39,174,96)] mb-6 text-center">
            Key Learning Outcomes from GED108
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto bg-[rgb(39,174,96)] rounded-full flex items-center justify-center">
                <span className="text-[rgb(25,29,43)] font-bold">1</span>
              </div>
              <h4 className="font-semibold text-white">Cultural Awareness</h4>
              <p className="text-gray-300 text-sm">
                Developed deep understanding of global art traditions and cultural contexts
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto bg-[rgb(39,174,96)] rounded-full flex items-center justify-center">
                <span className="text-[rgb(25,29,43)] font-bold">2</span>
              </div>
              <h4 className="font-semibold text-white">Critical Analysis</h4>
              <p className="text-gray-300 text-sm">
                Enhanced ability to analyze and interpret artistic works and their meanings
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto bg-[rgb(39,174,96)] rounded-full flex items-center justify-center">
                <span className="text-[rgb(25,29,43)] font-bold">3</span>
              </div>
              <h4 className="font-semibold text-white">Creative Expression</h4>
              <p className="text-gray-300 text-sm">
                Improved personal creative output and artistic communication skills
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;