import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "wgponseca@mymail.mapua.edu.ph",
      link: "mailto:wgponseca@mymail.mapua.edu.ph"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+639380542839",
      link: "tel:+639380542839"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Manila, Philippines",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Mail className="h-5 w-5" />,
      name: "GitHub",
      url: "https://github.com/Sentinail",
      handle: "@Sentinail"
    },
    {
      icon: <Send className="h-5 w-5" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/wilson-ponseca-40495026b/",
      handle: "Wilson Ponseca"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      name: "Portfolio",
      url: "https://wilson-react-portfolio.vercel.app/",
      handle: "My Portfolio"
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      name: "Discord",
      url: "#",
      handle: "Sentinail"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-[rgb(25,29,43)]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'd love to hear from fellow students, educators, software engineers, 
            or anyone interested in the intersection of art, technology, and creative collaboration. 
            Let's connect and share ideas!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-[rgb(50,59,84)] border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <Send className="h-6 w-6 text-[rgb(39,174,96)]" />
                  Send me a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-300">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="bg-[rgb(25,29,43)] border-white/20 text-white placeholder:text-gray-400 focus:border-[rgb(39,174,96)]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-300">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-[rgb(25,29,43)] border-white/20 text-white placeholder:text-gray-400 focus:border-[rgb(39,174,96)]"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="bg-[rgb(25,29,43)] border-white/20 text-white placeholder:text-gray-400 focus:border-[rgb(39,174,96)]"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your thoughts, questions, or collaboration ideas..."
                      required
                      rows={5}
                      className="bg-[rgb(25,29,43)] border-white/20 text-white placeholder:text-gray-400 focus:border-[rgb(39,174,96)] resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[rgb(39,174,96)] hover:bg-[rgb(39,174,96)]/90 text-[rgb(25,29,43)] font-semibold"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="bg-[rgb(50,59,84)] border-white/10">
              <CardHeader>
                <CardTitle className="text-xl text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.link}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-[rgb(25,29,43)]/50 transition-colors group"
                  >
                    <div className="text-[rgb(39,174,96)] group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{info.label}</div>
                      <div className="text-white font-medium">{info.value}</div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-[rgb(50,59,84)] border-white/10">
              <CardHeader>
                <CardTitle className="text-xl text-white">Connect with me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-[rgb(25,29,43)]/50 transition-colors group"
                  >
                    <div className="text-[rgb(39,174,96)] group-hover:scale-110 transition-transform">
                      {social.icon}
                    </div>
                    <div>
                      <div className="text-white font-medium">{social.name}</div>
                      <div className="text-sm text-gray-400">{social.handle}</div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Quick Note */}
            <div className="p-6 rounded-xl bg-linear-to-r from-[rgb(39,174,96)]/20 to-[rgb(50,59,84)] border border-[rgb(39,174,96)]/30">
              <h3 className="text-lg font-semibold text-[rgb(39,174,96)] mb-3">
                Open for Collaboration
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                I'm always excited to discuss art, culture, and creative projects. 
                Whether you're a fellow student, educator, or art enthusiast, 
                feel free to reach out!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;