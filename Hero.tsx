import { Button } from "./ui/button";
import { ArrowDown, Shield, Lock, Eye } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzEwYjk4MSIgZmlsbC1vcGFjaXR5PSIwLjIiLz4KPC9zdmc+')] opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Security Icons */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="p-3 rounded-full bg-emerald-500/20 border border-emerald-500/30">
              <Shield className="h-8 w-8 text-emerald-400" />
            </div>
            <div className="p-3 rounded-full bg-blue-500/20 border border-blue-500/30">
              <Lock className="h-8 w-8 text-blue-400" />
            </div>
            <div className="p-3 rounded-full bg-purple-500/20 border border-purple-500/30">
              <Eye className="h-8 w-8 text-purple-400" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            Ilyes Chellat
          </h1>
          
          <p className="text-xl md:text-2xl text-emerald-400 mb-4 leading-relaxed">
            Cybersecurity Student · Digital Creator · Tech Enthusiast
          </p>

          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            🔐 Securing systems. &nbsp;🎨 Crafting visuals. &nbsp;🚀 Building digital impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 px-8 py-3"
            >
              <a href="#projects">View Projects</a>
            </Button>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-emerald-400 mx-auto" />
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758773263238-1989d0cc788c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwdGVjaG5vbG9neSUyMGRhcmt8ZW58MXx8fHwxNzU4OTA3MjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Cybersecurity background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
    </section>
  );
}