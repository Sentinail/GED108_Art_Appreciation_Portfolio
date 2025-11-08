import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye, Camera, PenTool, Globe, Users, MessageSquare, BookOpen, Calendar, Link as LinkIcon, FileText, X, Play, Download } from 'lucide-react';
import { useState } from 'react';
import { getAssetPath } from '@/lib/utils';

// Custom Modal Component
const CustomModal = ({ isOpen, onClose, project }: { isOpen: boolean; onClose: () => void; project: any }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <button
        className="fixed inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
        aria-label="Close modal"
      />
      
      {/* Modal Content */}
      <Card className="relative z-10 w-[95vw] max-w-7xl max-h-[95vh] overflow-hidden bg-[rgb(25,29,43)] border-[rgb(39,174,96)]/20 m-4">
        {/* Header */}
        <CardHeader className="border-b border-[rgb(39,174,96)]/20 p-8">
          <div className="flex items-start justify-between">
            <CardTitle className="text-3xl text-[rgb(39,174,96)]">
              {project.title}
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-gray-400 hover:text-white hover:bg-[rgb(50,59,84)] focus:outline-none focus:ring-2 focus:ring-[rgb(39,174,96)] focus:ring-opacity-50 bg-transparent border-0 font-medium"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
        </CardHeader>
        
        {/* Scrollable Content */}
        <CardContent className="p-0">
          <div className="max-h-[calc(95vh-120px)] overflow-y-auto p-8">
            <div className="grid xl:grid-cols-2 gap-16">
              {/* Left Side - Preview */}
              <div className="space-y-8">
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-80 object-cover"
                  />
                </div>
                
                {/* Assignment Details */}
                <div className="space-y-6 p-8 bg-[rgb(50,59,84)] rounded-xl">
                  <h4 className="text-xl font-semibold text-white mb-6">Assignment Details</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-gray-300">
                      <Calendar className="h-6 w-6 text-[rgb(39,174,96)]" />
                      <span className="font-medium text-lg">{project.assignment}</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-300">
                      <FileText className="h-6 w-6 text-[rgb(39,174,96)]" />
                      <span className="text-lg">Format: {project.format}</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-300">
                      <Eye className="h-6 w-6 text-[rgb(39,174,96)]" />
                      <span className="text-lg">Category: {project.category.replace('-', ' ').toUpperCase()}</span>
                    </div>
                  </div>
                </div>
                
                {/* Tags */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-400 uppercase tracking-wider">Tags</h4>
                  <div className="flex flex-wrap gap-4">
                    {project.tags.map((tag: string) => (
                      <Badge 
                        key={tag}
                        variant="secondary"
                        className="bg-[rgb(39,174,96)]/20 text-[rgb(39,174,96)] border-[rgb(39,174,96)]/30 px-4 py-2 text-sm"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side - Details */}
              <div className="space-y-10">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-6">Project Overview</h3>
                  <p className="text-gray-300 leading-relaxed text-xl">
                    {project.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-white mb-6">Detailed Description</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {project.detailedDescription}
                  </p>
                </div>

                <div className="space-y-8">
                  <h3 className="text-2xl font-semibold text-white">Project Actions</h3>
                  
                  <div className="space-y-4">
                    {project.link && project.link !== "#" && (
                      <Button 
                        className="w-full bg-[rgb(39,174,96)] hover:bg-[rgb(39,174,96)]/90 text-[rgb(25,29,43)] hover:text-[rgb(25,29,43)] font-semibold h-14 text-lg focus:outline-none focus:ring-2 focus:ring-[rgb(39,174,96)] focus:ring-opacity-75 focus:ring-offset-2 focus:ring-offset-[rgb(25,29,43)] border-0"
                        onClick={() => window.open(project.link, '_blank')}
                      >
                        {project.isVideo ? (
                          <>
                            <Play className="h-6 w-6 mr-4" />
                            Watch Video Presentation
                          </>
                        ) : (
                          <>
                            <LinkIcon className="h-6 w-6 mr-4" />
                            View Project Output
                          </>
                        )}
                      </Button>
                    )}
                    
                    {project.downloadLink && (
                      <Button 
                        variant="outline" 
                        className="w-full border-[rgb(39,174,96)] text-[rgb(39,174,96)] hover:bg-[rgb(39,174,96)]/10 hover:text-[rgb(39,174,96)] h-14 text-lg focus:outline-none focus:ring-2 focus:ring-[rgb(39,174,96)] focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-[rgb(25,29,43)] bg-transparent font-medium"
                        onClick={() => {
                          const link = document.createElement('a');
                          link.href = project.downloadLink;
                          link.download = project.downloadLink.split('/').pop() || 'download';
                          document.body.appendChild(link);
                          link.click();
                          link.remove();
                        }}
                      >
                        <Download className="h-6 w-6 mr-4" />
                        Download PDF Materials
                      </Button>
                    )}
                    
                    {project.hasFile && !project.downloadLink && !project.isVideo && (
                      <Button 
                        variant="outline" 
                        className="w-full border-[rgb(39,174,96)] text-[rgb(39,174,96)] hover:bg-[rgb(39,174,96)]/10 hover:text-[rgb(39,174,96)] h-14 text-lg focus:outline-none focus:ring-2 focus:ring-[rgb(39,174,96)] focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-[rgb(25,29,43)] bg-transparent font-medium"
                        onClick={() => {
                          const link = document.createElement('a');
                          link.href = project.link;
                          link.download = project.link.split('/').pop() || 'download';
                          document.body.appendChild(link);
                          link.click();
                          link.remove();
                        }}
                      >
                        <Download className="h-6 w-6 mr-4" />
                        Download Assignment
                      </Button>
                    )}
                  </div>
                </div>

                {/* Learning Outcomes */}
                <div className="p-8 rounded-xl bg-[rgb(39,174,96)]/10 border border-[rgb(39,174,96)]/20">
                  <h4 className="font-semibold text-[rgb(39,174,96)] mb-6 text-xl">Key Learning Outcomes</h4>
                  <ul className="text-gray-300 space-y-4 text-lg">
                    <li className="flex items-start gap-4">
                      <span className="text-[rgb(39,174,96)] mt-1 text-xl">•</span>
                      <span>Enhanced critical thinking and analytical skills</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-[rgb(39,174,96)] mt-1 text-xl">•</span>
                      <span>Improved understanding of art history and cultural context</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-[rgb(39,174,96)] mt-1 text-xl">•</span>
                      <span>Developed creative expression and communication abilities</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-[rgb(39,174,96)] mt-1 text-xl">•</span>
                      <span>Gained appreciation for diverse artistic perspectives</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const categories = [
    { id: 'all', name: 'All Projects', icon: <BookOpen className="h-4 w-4" /> },
    { id: 'visual-analysis', name: 'Visual Analysis', icon: <Eye className="h-4 w-4" /> },
    { id: 'photo-essay', name: 'Photo Essays', icon: <Camera className="h-4 w-4" /> },
    { id: 'museum-visit', name: 'Museum Visits', icon: <Globe className="h-4 w-4" /> },
    { id: 'cultural-study', name: 'Cultural Studies', icon: <Users className="h-4 w-4" /> },
    { id: 'art-talk', name: 'Art Talks', icon: <MessageSquare className="h-4 w-4" /> },
  ];

  const projects = [
    {
      id: 1,
      title: "My Mapúa Journey - Photo Essay",
      description: "A visual storytelling project with 4-5 photos documenting my personal journey at Mapúa University, capturing significant moments and experiences.",
      detailedDescription: "This photo essay represents my personal narrative at Mapúa University through visual storytelling. Using 4-5 carefully selected photographs, I documented key moments, challenges, and achievements throughout my academic journey. Each image tells a part of my story, from the first day of classes to meaningful interactions with professors and peers. The project follows professional photo essay guidelines, combining composition, lighting, and narrative flow to create a compelling visual story.",
      category: "photo-essay",
      image: getAssetPath("assets/outputs/Photo Essay.png"),
      tags: ["Photography", "Storytelling", "Personal Journey", "Documentary"],
      date: "Quiz 1",
      link: getAssetPath("assets/outputs/Photo Essay.png"),
      assignment: "Quiz 1: Photo Essay",
      format: "PNG",
      hasFile: true
    },
    {
      id: 2,
      title: "Why the Arts Should Matter - Insight Paper",
      description: "An essay-form insight paper analyzing Dr. Jose Dalisay Jr.'s article, exploring new learnings about the importance of arts in society.",
      detailedDescription: "This insight paper provides a comprehensive analysis of Dr. Jose Dalisay Jr.'s article 'Why the Arts Should Matter.' Through critical reading and reflection, I explored the fundamental role of arts in society, education, and personal development. The paper examines how arts contribute to cultural understanding, emotional intelligence, and creative problem-solving. I reflected on how the article changed my perspective on artistic expression and its relevance in contemporary society, particularly in the Filipino context.",
      category: "cultural-study",
      image: getAssetPath("assets/outputs/Insight Paper Preview.png"),
      tags: ["Essay Writing", "Critical Analysis", "Arts Advocacy", "Reflection"],
      date: "Assignment 1",
      link: getAssetPath("assets/outputs/Insight Paper.pdf"),
      assignment: "Assignment 1: Insight Paper",
      format: "PDF",
      hasFile: true
    },
    {
      id: 3,
      title: "Visual Analysis - Creative Infographic",
      description: "A comprehensive visual analysis of a chosen artwork presented as a creative infographic covering description, analysis, interpretation, and evaluation.",
      detailedDescription: "This project involves creating a creative infographic design analyzing a selected artwork through four comprehensive steps: Description (providing essential artwork information and compositional analysis), Analysis (examining elements of art and principles of design), Interpretation (exploring personal emotional responses and artistic messages), and Evaluation (assessing the artwork's effectiveness and contemporary relevance). The infographic includes the original artwork image and demonstrates critical thinking about visual culture and artistic expression.",
      category: "visual-analysis",
      image: getAssetPath("assets/outputs/Visual Analysis Preview.jpg"),
      tags: ["Visual Analysis", "Infographic Design", "Art Criticism", "Elements & Principles"],
      date: "Exam 1",
      link: getAssetPath("assets/outputs/Visual Analyis.pdf"),
      assignment: "Exam 1: Visual Analysis",
      format: "PDF",
      hasFile: true
    },
    {
      id: 4,
      title: "Museum Visit Experience Documentation",
      description: "Comprehensive documentation of both F2F and virtual museum visits, exploring art history and creating reflective essays with photo evidence.",
      detailedDescription: "This assignment involved conducting both face-to-face and virtual museum visits to explore various aspects of art history including Western, Asian, and Philippine art traditions. The project resulted in a detailed Museum/Gallery Visit Experience Essay or Video Presentation focusing on meaningful experiences, realizations, and lessons learned. Critical reflection on curatorial choices, cultural narratives, and artistic movements formed the core of this work, supported by photo documentation and evidence including a completed scavenger hunt activity.",
      category: "museum-visit",
      image: getAssetPath("assets/outputs/Museum Visit Preview.png"),
      tags: ["Museum Studies", "Art History", "Cultural Documentation", "Reflection"],
      date: "Assignment 2",
      link: getAssetPath("assets/outputs/Museum Visit.pdf"),
      assignment: "Assignment 2: Museum Visit Experience",
      format: "PDF",
      hasFile: true
    },
    {
      id: 5,
      title: "Intercultural Art Understanding Project",
      description: "Analysis of artwork from another culture, exploring how art facilitates intercultural understanding and multicultural dialogue.",
      detailedDescription: "This project involved selecting and analyzing a piece of art that effectively captures and teaches about a culture different from my own. Through detailed examination, I explored what the artwork revealed about its cultural context and how it changed my understanding of both myself and others. The analysis addressed the crucial role that art plays in fostering intercultural understanding and building bridges in multicultural societies. The project demonstrates how artistic expression transcends cultural boundaries and promotes global empathy.",
      category: "cultural-study",
      image: getAssetPath("assets/outputs/Cultural Study Preview.png"),
      tags: ["Intercultural Studies", "Cultural Analysis", "Global Art", "Multiculturalism"],
      date: "Assignment 3",
      link: getAssetPath("assets/outputs/Cultural Study.pdf"),
      assignment: "Intercultural Art Understanding",
      format: "PDF",
      hasFile: true
    },
    {
      id: 6,
      title: "Art Movement & Style Presentation",
      description: "A 10-minute creative presentation exploring a chosen art movement, its historical context, influential artists, and sociopolitical impact.",
      detailedDescription: "This comprehensive presentation project involved researching and presenting a specific art movement or style through a 10-minute pre-recorded video presentation. The content includes historical background, factors leading to the movement's emergence, socio-political issues of the time, influential artists and their significant works, and prevalent art forms and media. The presentation combines visual elements (PPT/Canva) with engaging narration to provide audiences with a thorough understanding of the chosen art movement's cultural and historical significance.",
      category: "art-talk",
      image: getAssetPath("assets/outputs/Art Movement Preview.png"),
      tags: ["Art History", "Presentation", "Research", "Art Movements"],
      date: "Assignment 4",
      link: "https://drive.google.com/file/d/1mf9tmN8nU2obU1t-dMQJr3AkQPNrFP7W/view?usp=sharing",
      assignment: "Art Movement & Style Presentation",
      format: "Video Presentation",
      hasFile: true,
      isVideo: true,
      downloadLink: getAssetPath("assets/outputs/Art Movement.pdf")
    },
    {
      id: 7,
      title: "Photo Appropriation Project",
      description: "Creative appropriation of a notable artwork, analyzing different types of appropriation and contemporary artistic commentary.",
      detailedDescription: "This project involved creating a photo appropriation of a notable painting or sculpture, following a structured 5-slide presentation format. The work includes the original artwork with complete details, my appropriation output, a side-by-side comparison, and a detailed explanation of the appropriation type (subject, object, motif, content, or style appropriation). The project explores contemporary issues, advocacy, and artistic commentary through the lens of appropriation, demonstrating understanding of how artists reinterpret and recontextualize existing works to create new meanings.",
      category: "photo-essay",
      image: getAssetPath("assets/outputs/Photo Appropriation Preview.png"),
      tags: ["Appropriation", "Contemporary Art", "Critical Commentary", "Artistic Interpretation"],
      date: "Assignment 3",
      link: "https://drive.google.com/file/d/1s5eFwqdiYquJhV85_OLlFq1RaNeXgE-F/view?usp=sharing",
      assignment: "A3: Photo Appropriation",
      format: "Video Presentation",
      hasFile: true,
      isVideo: true,
      downloadLink: getAssetPath("assets/outputs/Photo Appropriation.pdf")
    },
    {
      id: 8,
      title: "Personal Art Talk - Artist Presentation",
      description: "A 5-minute video presentation discussing my personal artistic practice and creative journey.",
      detailedDescription: "This artist talk video presentation explores my personal artistic practice and creative journey. The 5-minute presentation covers the art forms I engage with in my life, whether it's watercolor painting, travel photography, dance, theater, calligraphy, singing, or other creative pursuits. The talk provides insight into my artistic process, inspirations, challenges, and how these creative practices have shaped my understanding of art and self-expression. It demonstrates the personal connection between artistic practice and identity formation.",
      category: "art-talk",
      image: getAssetPath("assets/outputs/Art Talk Preview.png"),
      tags: ["Artist Talk", "Personal Practice", "Creative Process", "Self-Reflection"],
      date: "Quiz 3",
      link: "https://drive.google.com/file/d/19ssigd2z4vx2zwq6z5bfP9jYDczy4xpG/view?usp=drive_link",
      assignment: "Q3: Art Talk (Artist Talk)",
      format: "Video Presentation",
      hasFile: true,
      isVideo: true
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-[rgb(50,59,84)]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            My Creative Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my GED108 Art Appreciation journey through various creative 
            outputs, research projects, and cultural explorations.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              onClick={() => setFilter(category.id)}
              className={`
                flex items-center gap-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[rgb(39,174,96)] focus:ring-opacity-50 font-medium
                ${filter === category.id 
                  ? 'bg-[rgb(39,174,96)] text-[rgb(25,29,43)] hover:bg-[rgb(39,174,96)]/90 hover:text-[rgb(25,29,43)]' 
                  : 'border-[rgb(39,174,96)] text-[rgb(39,174,96)] hover:bg-[rgb(39,174,96)]/10 hover:text-[rgb(39,174,96)] bg-transparent'
                }
              `}
            >
              {category.icon}
              {category.name}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id}
              className="bg-[rgb(25,29,43)] border-white/10 hover:border-[rgb(39,174,96)]/50 transition-all duration-300 group overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[rgb(25,29,43)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    size="sm" 
                    className="bg-[rgb(39,174,96)] hover:bg-[rgb(39,174,96)]/90 text-[rgb(25,29,43)] hover:text-[rgb(25,29,43)] focus:outline-none focus:ring-2 focus:ring-[rgb(39,174,96)] focus:ring-opacity-75 font-medium border-0"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-white text-lg group-hover:text-[rgb(39,174,96)] transition-colors">
                    {project.title}
                  </CardTitle>
                  <span className="text-sm text-gray-400 whitespace-nowrap">
                    {project.date}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag}
                      variant="secondary"
                      className="bg-[rgb(50,59,84)] text-[rgb(39,174,96)] text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Button */}
                <Button 
                  variant="ghost" 
                  className="w-full text-[rgb(39,174,96)] hover:bg-[rgb(39,174,96)]/10 hover:text-[rgb(39,174,96)] focus:outline-none focus:ring-2 focus:ring-[rgb(39,174,96)] focus:ring-opacity-50 bg-transparent border-0 font-medium"
                  onClick={() => openModal(project)}
                >
                  <PenTool className="h-4 w-4 mr-2" />
                  View Project Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Reflection Section */}
        <div className="mt-20 p-8 rounded-2xl bg-[rgb(25,29,43)] border border-[rgb(39,174,96)]/20">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-semibold text-[rgb(39,174,96)]">
              Reflections on My Learning Journey
            </h3>
            <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Through these diverse projects, I have gained a deeper appreciation for art's role 
              in society and culture as both a software engineer and student. Each assignment has 
              challenged me to think critically about artistic expression, cultural context, and 
              how technology can preserve and enhance artistic heritage. This portfolio represents 
              not just academic work, but a personal transformation in how I perceive the intersection 
              of art and technology in our digital age.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-[rgb(39,174,96)]">8</div>
                <p className="text-gray-400">Course Projects</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-[rgb(39,174,96)]">3</div>
                <p className="text-gray-400">Video Presentations</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-[rgb(39,174,96)]">7</div>
                <p className="text-gray-400">Files Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Modal */}
      {selectedProject && (
        <CustomModal 
          isOpen={isModalOpen} 
          onClose={closeModal} 
          project={selectedProject} 
        />
      )}
    </section>
  );
};

export default Portfolio;