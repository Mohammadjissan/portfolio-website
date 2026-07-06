import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import ResumeButton from "./ResumeButton";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-semibold">
              MJ
            </div>
            <h1 className="text-base font-medium hidden sm:block">
              Mohammadjissan Kharadi
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary px-3 py-2 rounded-md transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary px-3 py-2 rounded-md transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-foreground hover:text-primary px-3 py-2 rounded-md transition-colors"
              >
                Skills
              </button>

              <button
                onClick={() => scrollToSection("projects")}
                className="text-foreground hover:text-primary px-3 py-2 rounded-md transition-colors"
              >
                Projects
              </button>

              <button
                onClick={() => scrollToSection("experience")}
                className="text-foreground hover:text-primary px-3 py-2 rounded-md transition-colors"
              >
                Experience
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary px-3 py-2 rounded-md transition-colors"
              >
                Contact
              </button>
  <div className="flex items-center">
  {/* Home About Skills Projects Experience Contact wale links */}
  <ResumeButton />
</div>              
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md w-full text-left transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md w-full text-left transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md w-full text-left transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md w-full text-left transition-colors"
              >
                Projects
              </button>
                            <button
                onClick={() => scrollToSection("experience")}
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md w-full text-left transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md w-full text-left transition-colors"
              >
                Contact
              </button>
            </div>
              <div className="flex items-center">
  {/* Home About Skills Projects Experience Contact wale links */}
  <ResumeButton />
</div> 
          </div>
        )}
      </div>
    </header>
  );
}

