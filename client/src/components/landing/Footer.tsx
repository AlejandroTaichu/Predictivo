import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2">
            <span className="font-mono text-lg font-bold">{t.nav.logo}</span>
            <span className="text-muted-foreground text-sm">
              — {t.footer.tagline}
            </span>
          </div>
          <p 
            className="text-sm text-muted-foreground"
            data-testid="text-footer-copyright"
          >
            © {currentYear} {t.footer.copyright}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
