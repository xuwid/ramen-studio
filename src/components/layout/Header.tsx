import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import pandaLogo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Seats", path: "/seats" },
    { name: "About", path: "/about" },
    { name: "Visit Us", path: "/contact" },
  ];

  return (
    <header className="bg-card/85 backdrop-blur-md border-b border-korean-pink/20 sticky top-0 z-50">
      {/* Import Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
        rel="stylesheet"
      />

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 hover:scale-105 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-full shadow-lg overflow-hidden">
              <img
                src={pandaLogo}
                alt="Ramen Studio Panda"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Neon Glow Script Font */}
            <span className="neon-text text-3xl" style={{ fontFamily: "'Pacifico', cursive", transform: "rotate(-1deg)" }}>
              Ramen Studio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-semibold transition-all duration-300 hover:text-korean-rose ${
                  location.pathname === item.path
                    ? "text-korean-pink"
                    : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="kawaii"
              size="sm"
              className="hover:scale-105 transition-transform duration-150 ease-out"
            >
              Order Takeout 
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-semibold py-2 transition-colors duration-300 hover:text-accent ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="kawaii" size="sm" className="w-fit">
                Order Takeout
              </Button>
            </div>
          </nav>
        )}
      </div>

      {/* Custom CSS for Neon Glow */}
      <style>{`
  .neon-text {
    color: #ff66b3; /* slightly lighter pink */
    text-shadow:
      0 0 6px #ff66b3,
      0 0 12px #ff66b3,
      0 0 22px #ff66b3,
      0 0 45px #ff3399;
    letter-spacing: 1px;
  }
`}</style>
    </header>
  );
};

export default Header;
