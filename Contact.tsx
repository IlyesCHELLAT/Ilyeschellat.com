import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ilyeschellat31@gmail.com",
      href: "mailto:ilyeschellat31@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Constantine Algeria",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ilyes-chellat-5b079324a/",
      color: "text-blue-400 hover:text-blue-300",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/IlyesCHELLAT",
      color: "text-gray-400 hover:text-white",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-white">Get In Touch</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              I'm always open to collaboration, opportunities, and meaningful conversations. 
              Feel free to reach out — let's build something great together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-black border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-gray-300">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="mt-1 bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-gray-300">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className="mt-1 bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-300">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="mt-1 bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-gray-300">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="Collaboration / Opportunity / Other"
                      className="mt-1 bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-gray-300">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me what's on your mind..."
                      rows={5}
                      className="mt-1 bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="p-3 rounded-lg bg-emerald-500/20 border border-emerald-500/30">
                        <info.icon className="h-5 w-5 text-emerald-400" />
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">{info.label}</div>
                        <a
                          href={info.href}
                          className="text-white hover:text-emerald-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl text-white mb-6">Find Me Online</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg bg-gray-800 border border-gray-700 hover:border-emerald-500/50 transition-colors ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>

              <Card className="bg-black border-gray-700">
                <CardContent className="p-6">
                  <h4 className="text-white mb-3">Open to:</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Cybersecurity Internships & Opportunities</li>
                    <li>• Freelance Media & Content Creation</li>
                    <li>• Collaboration on Tech Projects</li>
                    <li>• Social Media Management & Branding</li>
                    <li>• Meaningful Conversations & Networking</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}