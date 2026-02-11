import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="text-xl font-bold text-primary">
          <span className="text-glow text-foreground">Aditi Kumari</span> Portfolio
        </a>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Desktop nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link text-foreground/80"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Theme toggle */}
          <ThemeToggle />

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMenuOpen((p) => !p)}
            className="md:hidden p-2 text-foreground z-50"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-30",
            "flex flex-col items-center justify-center md:hidden",
            "transition-all duration-300",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-2xl">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link text-foreground/80"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
