import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: "process", label: t.nav.howItWorks },
    { id: "industries", label: t.nav.industries },
    { id: "faq", label: t.nav.faq },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2"
            data-testid="link-logo"
          >
            <span className="font-mono text-xl md:text-2xl font-bold text-foreground tracking-tight">
              {t.nav.logo}
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid={`link-nav-${link.id}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1 text-sm font-medium">
              <button
                onClick={() => setLanguage("tr")}
                className={`px-2 py-1 rounded transition-colors ${
                  language === "tr"
                    ? "text-primary font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                data-testid="button-lang-tr"
              >
                TR
              </button>
              <span className="text-muted-foreground">|</span>
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-1 rounded transition-colors ${
                  language === "en"
                    ? "text-primary font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                data-testid="button-lang-en"
              >
                EN
              </button>
            </div>
            <Button
              onClick={() => scrollToSection("contact")}
              data-testid="button-nav-contact"
            >
              {t.nav.contactUs}
            </Button>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <div className="flex items-center gap-1 text-sm font-medium">
              <button
                onClick={() => setLanguage("tr")}
                className={`px-1.5 py-1 rounded transition-colors ${
                  language === "tr"
                    ? "text-primary font-bold"
                    : "text-muted-foreground"
                }`}
                data-testid="button-lang-tr-mobile"
              >
                TR
              </button>
              <span className="text-muted-foreground">|</span>
              <button
                onClick={() => setLanguage("en")}
                className={`px-1.5 py-1 rounded transition-colors ${
                  language === "en"
                    ? "text-primary font-bold"
                    : "text-muted-foreground"
                }`}
                data-testid="button-lang-en-mobile"
              >
                EN
              </button>
            </div>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden py-4 border-t border-border bg-background"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="px-4 py-3 text-left text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
                  data-testid={`link-nav-${link.id}-mobile`}
                >
                  {link.label}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full"
                  data-testid="button-nav-contact-mobile"
                >
                  {t.nav.contactUs}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
