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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/80 backdrop-blur-2xl border-b border-border/50 shadow-lg"
          : "bg-transparent"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
            data-testid="link-logo"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center">
              <span className="font-mono text-lg font-bold text-white">P</span>
            </div>
            <span className="font-mono text-xl md:text-2xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
              {t.nav.logo}
            </span>
          </motion.button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                whileHover={{ y: -2 }}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
                data-testid={`link-nav-${link.id}`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-orange-500 group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm font-medium bg-muted/50 rounded-full p-1">
              <button
                onClick={() => setLanguage("tr")}
                className={`px-3 py-1.5 rounded-full transition-all ${language === "tr"
                    ? "text-white font-bold bg-gradient-to-r from-primary to-orange-500 shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                  }`}
                data-testid="button-lang-tr"
              >
                TR
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1.5 rounded-full transition-all ${language === "en"
                    ? "text-white font-bold bg-gradient-to-r from-primary to-orange-500 shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                  }`}
                data-testid="button-lang-en"
              >
                EN
              </button>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection("contact")}
                className="btn-premium bg-gradient-to-r from-primary to-orange-500 hover:shadow-lg hover:shadow-primary/50"
                data-testid="button-nav-contact"
              >
                {t.nav.contactUs}
              </Button>
            </motion.div>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <div className="flex items-center gap-1 text-xs font-medium bg-muted/50 rounded-full p-0.5">
              <button
                onClick={() => setLanguage("tr")}
                className={`px-2 py-1 rounded-full transition-all ${language === "tr"
                    ? "text-white font-bold bg-gradient-to-r from-primary to-orange-500"
                    : "text-muted-foreground"
                  }`}
                data-testid="button-lang-tr-mobile"
              >
                TR
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-1 rounded-full transition-all ${language === "en"
                    ? "text-white font-bold bg-gradient-to-r from-primary to-orange-500"
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
              className="hover:bg-muted/50"
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
            className="md:hidden py-4 border-t border-border/50 bg-gradient-to-b from-background to-muted/30"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <motion.button
                  key={link.id}
                  whileHover={{ x: 4 }}
                  onClick={() => scrollToSection(link.id)}
                  className="px-4 py-3 text-left text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/70 rounded-lg transition-all"
                  data-testid={`link-nav-${link.id}-mobile`}
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="px-4 pt-2">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full btn-premium bg-gradient-to-r from-primary to-orange-500"
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
