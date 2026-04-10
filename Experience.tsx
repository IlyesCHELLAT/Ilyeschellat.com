import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Building2, Calendar, GraduationCap } from "lucide-react";

export function Experience() {
  const education = [
    {
      title: "Higher Technician Diploma in Cybersecurity",
      institution: "Currently Enrolled",
      period: "Ongoing",
      type: "Education",
      description:
        "Comprehensive program covering cybersecurity fundamentals, network architectures, switching & routing, systems administration, and security by design principles.",
      highlights: [
        "Cybersecurity Fundamentals & Principles",
        "Network Architectures & Protocols",
        "Switching, Routing & WLAN Configuration",
        "Windows & Linux Systems Administration",
        "Virtualization & Security by Design",
      ],
    },
    {
      title: "Baccalaureate in Mathematics",
      institution: "High School",
      period: "Completed",
      type: "Education",
      description:
        "Strong analytical and mathematical foundation that supports logical thinking and problem-solving in technical cybersecurity and IT contexts.",
      highlights: [
        "Advanced Mathematics",
        "Analytical & Logical Reasoning",
        "Scientific Problem-Solving",
      ],
    },
  ];

  const experiences = [
    {
      title: "Media Manager",
      company: "Multiple Clients",
      period: "Experience",
      type: "Professional",
      description:
        "Managed and grew multiple social media platforms, delivering professional event coverage through photography and storytelling, and coordinating media strategies with teams.",
      achievements: [
        "Managed and grew 15+ commercial social media pages",
        "Delivered professional event coverage through photography",
        "Designed promotional materials and brand identities",
        "Coordinated media strategies with teams",
      ],
      technologies: ["Canva", "Photoshop", "Illustrator", "CapCut", "Social Media Platforms"],
    },
    {
      title: "Freelance Media & Content Creator",
      company: "Self-Employed",
      period: "Ongoing",
      type: "Freelance",
      description:
        "Produced and edited high-quality video content, created branding assets and marketing visuals, recorded voice-overs for promotional campaigns, and delivered tailored digital content for clients.",
      achievements: [
        "Produced and edited high-quality video content",
        "Created branding assets and marketing visuals",
        "Recorded voice-overs for promotional campaigns",
        "Delivered tailored digital content for various clients",
      ],
      technologies: ["CapCut", "Photoshop", "Illustrator", "Canva", "Figma"],
    },
    {
      title: "Sales Assistant",
      company: "Retail",
      period: "Experience",
      type: "Professional",
      description:
        "Managed customer communication and orders, organized wholesale products efficiently, and ensured smooth daily operations.",
      achievements: [
        "Managed customer communication and order processing",
        "Organized and maintained wholesale product inventory",
        "Ensured smooth and efficient daily operations",
      ],
      technologies: ["Microsoft Office", "Excel", "Customer Communication"],
    },
    {
      title: "Shop Manager",
      company: "Retail Business",
      period: "Experience",
      type: "Management",
      description:
        "Oversaw daily business operations and sales, managed inventory and supplier coordination, and improved workflow efficiency and organization.",
      achievements: [
        "Oversaw daily business operations and sales",
        "Managed inventory and supplier coordination",
        "Improved workflow efficiency and organizational processes",
      ],
      technologies: ["Inventory Management", "Microsoft Office", "Team Coordination"],
    },
  ];

  const typeColors: Record<string, string> = {
    Education: "border-blue-500 text-blue-400",
    Professional: "border-emerald-500 text-emerald-400",
    Freelance: "border-purple-500 text-purple-400",
    Management: "border-yellow-500 text-yellow-400",
  };

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-white">Experience & Education</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A journey shaped by academic study in cybersecurity, hands-on media management, 
              and diverse professional experiences.
            </p>
          </div>

          {/* Education */}
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <GraduationCap className="h-6 w-6 text-blue-400" />
              <h3 className="text-2xl text-blue-400">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-gray-900 border-gray-700 hover:border-blue-500/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="mb-4 md:mb-0">
                        <h3 className="text-xl text-white mb-2">{edu.title}</h3>
                        <div className="flex items-center space-x-4 text-gray-400 mb-2">
                          <div className="flex items-center space-x-2">
                            <Building2 className="h-4 w-4" />
                            <span>{edu.institution}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.period}</span>
                          <Badge variant="outline" className={`ml-2 ${typeColors[edu.type]}`}>
                            {edu.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">{edu.description}</p>
                    <div>
                      <h4 className="text-blue-400 mb-2">Key Topics:</h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        {edu.highlights.map((item, i) => (
                          <li key={i} className="text-sm">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Building2 className="h-6 w-6 text-emerald-400" />
              <h3 className="text-2xl text-emerald-400">Professional Experience</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="bg-gray-900 border-gray-700 hover:border-emerald-500/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="mb-4 md:mb-0">
                        <h3 className="text-xl text-white mb-2">{exp.title}</h3>
                        <div className="flex items-center space-x-4 text-gray-400 mb-2">
                          <div className="flex items-center space-x-2">
                            <Building2 className="h-4 w-4" />
                            <span>{exp.company}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                          <Badge
                            variant="outline"
                            className={`ml-2 ${typeColors[exp.type]}`}
                          >
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                    <div className="mb-4">
                      <h4 className="text-emerald-400 mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-sm">{achievement}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-emerald-400 mb-2">Tools & Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="bg-gray-800 text-gray-300 border-gray-600"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="mt-12">
            <h3 className="text-2xl text-emerald-400 mb-6">Languages</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { lang: "Arabic", flag: "🇩🇿", level: "Native", pct: 100, color: "bg-emerald-500" },
                { lang: "English", flag: "🇬🇧", level: "Very Good", pct: 80, color: "bg-blue-500" },
                { lang: "French", flag: "🇫🇷", level: "Good", pct: 65, color: "bg-purple-500" },
              ].map((l, i) => (
                <Card key={i} className="bg-gray-900 border-gray-700 hover:border-emerald-500/50 transition-colors">
                  <CardContent className="p-5 text-center">
                    <div className="text-3xl mb-2">{l.flag}</div>
                    <div className="text-white mb-1">{l.lang}</div>
                    <div className="text-gray-400 text-sm mb-3">{l.level}</div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`${l.color} h-2 rounded-full`}
                        style={{ width: `${l.pct}%` }}
                      />
                    </div>
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
