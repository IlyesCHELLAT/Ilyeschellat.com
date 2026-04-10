import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Shield, Monitor, Palette, Video, Code, Users } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Cybersecurity & Networking",
      icon: Shield,
      color: "text-emerald-400",
      bg: "bg-emerald-500/20",
      skills: [
        { name: "Cybersecurity Fundamentals", level: 78 },
        { name: "Network Architectures & Protocols", level: 72 },
        { name: "Switching, Routing & WLAN", level: 68 },
        { name: "Security by Design", level: 70 },
      ],
    },
    {
      title: "Systems & IT",
      icon: Monitor,
      color: "text-blue-400",
      bg: "bg-blue-500/20",
      skills: [
        { name: "Windows Administration", level: 75 },
        { name: "Linux Administration", level: 70 },
        { name: "Virtualization Concepts", level: 65 },
        { name: "Hardware & System Management", level: 72 },
      ],
    },
    {
      title: "Design & Creative Tools",
      icon: Palette,
      color: "text-purple-400",
      bg: "bg-purple-500/20",
      skills: [
        { name: "Canva", level: 92 },
        { name: "Adobe Photoshop", level: 80 },
        { name: "Adobe Illustrator", level: 75 },
        { name: "Figma", level: 70 },
      ],
    },
    {
      title: "Media & Content Creation",
      icon: Video,
      color: "text-pink-400",
      bg: "bg-pink-500/20",
      skills: [
        { name: "Social Media Management", level: 90 },
        { name: "Video Editing & Montage", level: 82 },
        { name: "Branding & Visual Identity", level: 85 },
        { name: "Event Photography", level: 78 },
      ],
    },
    {
      title: "Web Development",
      icon: Code,
      color: "text-yellow-400",
      bg: "bg-yellow-500/20",
      skills: [
        { name: "Front-end Development", level: 60 },
        { name: "Back-end Development", level: 50 },
      ],
    },
    {
      title: "Soft Skills",
      icon: Users,
      color: "text-teal-400",
      bg: "bg-teal-500/20",
      skills: [
        { name: "Communication & Teamwork", level: 88 },
        { name: "Creativity & Problem Solving", level: 85 },
        { name: "Organization & Time Management", level: 80 },
        { name: "Adaptability & Continuous Learning", level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-white">Skills & Expertise</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A diverse skill set spanning cybersecurity, systems, creative design, and digital media — 
              built through study, hands-on experience, and continuous self-improvement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-gray-900 border-gray-700 hover:border-emerald-500/50 transition-colors">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-3 text-white">
                    <div className={`p-2 rounded-lg ${category.bg}`}>
                      <category.icon className={`h-5 w-5 ${category.color}`} />
                    </div>
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-300 text-sm">{skill.name}</span>
                          <span className={`text-sm ${category.color}`}>{skill.level}%</span>
                        </div>
                        <Progress
                          value={skill.level}
                          className="h-2 bg-gray-700"
                        />
                      </div>
                    ))}
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
