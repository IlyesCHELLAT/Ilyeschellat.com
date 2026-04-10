import { Shield, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Shield className="h-6 w-6 text-emerald-400" />
            <span className="text-white">Ilyes Chellat</span>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>by Ilyes Chellat</span>
          </div>
          
          <div className="text-gray-400 text-sm mt-4 md:mt-0">
            © 2026 Ilyes Chellat. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}