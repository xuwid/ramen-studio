import { Heart } from "lucide-react";
import pandaLogo from "@/assets/panda-logo.png";

const Footer = () => {
  return (
    <footer className="bg-wood-medium/30 border-t border-border mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={pandaLogo} alt="Ramen Studios" className="w-8 h-8" />
              <span className="text-xl font-bold kawaii-text">Ramen Studios</span>
            </div>
            <p className="text-muted-foreground">
              Make your own ramen experience! Cozy, fun, and delicious - just like home.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground">Home</p>
              <p className="text-muted-foreground">Menu</p>
              <p className="text-muted-foreground">About</p>
              <p className="text-muted-foreground">Visit Us</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Visit Us</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>123 Kawaii Street</p>
              <p>Ramen District, RD 12345</p>
              <p>Limited seating: 10-12 people</p>
              <p>Call: (555) RAMEN-UP</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-accent" fill="currentColor" /> for ramen lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;