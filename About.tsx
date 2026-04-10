import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Users, BookOpen, Globe, Layers } from "lucide-react";

export function About() {
  const stats = [
    { icon: BookOpen, label: "Diploma (Ongoing)", value: "BTS" },
    { icon: Layers, label: "Social Pages Managed", value: "15+" },
    { icon: Globe, label: "Languages", value: "3" },
    { icon: Users, label: "Projects", value: "2+" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-white">About Me</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Passionate about cybersecurity, technology, and creative digital solutions — combining technical expertise with a strong creative edge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a cybersecurity student with a solid foundation in networking, systems administration, and security principles. My journey in tech is driven by curiosity and a deep desire to understand how systems work — and how to protect them. I enjoy exploring the intersection between technology and security, constantly improving my skills to stay ahead in this evolving field.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Beyond cybersecurity, I bring a strong creative dimension to my work. I've managed and grown over 15 commercial social media pages, producing engaging content, designing visual identities, and delivering impactful digital experiences. This blend of technical knowledge and creativity allows me to approach problems from multiple angles.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                  Cybersecurity Student
                </Badge>
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                  Digital Creator
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                  Tech Enthusiast
                </Badge>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-black/40 border-gray-700 hover:border-emerald-500/50 transition-colors">
                  <CardContent className="p-6 text-center">
                    <stat.icon className="h-8 w-8 text-emerald-400 mx-auto mb-3" />
                    <div className="text-2xl text-white mb-1">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}