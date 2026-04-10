import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, Shield, Globe } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "Cybersecurity Dashboard",
      description:
        "A centralized dashboard designed to monitor network activity, detect threats, and simplify security operations. Built to demonstrate real-world SIEM concepts and threat visibility.",
      image:
        "https://images.unsplash.com/photo-1751448555253-f39c06e29d82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwZGFzaGJvYXJkJTIwbmV0d29yayUyMG1vbml0b3JpbmclMjBkYXJrfGVufDF8fHx8MTc3NTg0MTQwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Python", "SIEM Tools", "Networking"],
      icon: Shield,
      status: "Coming Soon",
      github: null,
      live: null,
    },
    {
      title: "Personal Portfolio Website",
      description:
        "A modern, cybersecurity-themed portfolio website showcasing my skills, projects, and professional journey. Designed with a dark aesthetic, emerald & blue accents, and smooth UX.",
      image:
        "https://images.unsplash.com/photo-1534665482403-a909d0d97c67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjB3ZWJzaXRlJTIwZGV2ZWxvcGVyJTIwY29kaW5nJTIwbGFwdG9wfGVufDF8fHx8MTc3NTg0MTQwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "Tailwind CSS", "TypeScript"],
      icon: Globe,
      status: "Live",
      github: "https://github.com/yourusername",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-white">Featured Projects</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A growing portfolio of projects reflecting my passion for cybersecurity and digital craftsmanship.
              More exciting work is on the way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-black border-gray-700 hover:border-emerald-500/50 transition-all duration-300 group overflow-hidden"
              >
                <div className="relative">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge
                      variant={project.status === "Live" ? "default" : "secondary"}
                      className={
                        project.status === "Live"
                          ? "bg-emerald-600 text-white"
                          : "bg-yellow-600/90 text-white"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute top-3 left-3 p-2 rounded-lg bg-black/50 backdrop-blur-sm">
                    <project.icon className="h-5 w-5 text-emerald-400" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="text-xs border-gray-600 text-gray-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.live && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-emerald-500 text-emerald-400 hover:bg-emerald-500/10"
                        asChild
                      >
                        <a href={project.live}>
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Live
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-gray-400 hover:text-white"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {!project.live && !project.github && (
                      <p className="text-gray-500 text-sm italic">🔧 In development...</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
