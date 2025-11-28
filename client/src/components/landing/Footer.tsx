import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-foreground via-gray-900 to-foreground text-background">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Brand Section */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <span className="font-mono text-lg font-bold text-white">P</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-lg font-bold text-background group-hover:text-primary transition-colors">
                {t.nav.logo}
              </span>
              <span className="text-xs text-background/70">
                {t.footer.tagline}
              </span>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <p
              className="text-sm text-background/80 hover:text-background transition-colors"
              data-testid="text-footer-copyright"
            >
              © {currentYear} {t.footer.copyright}
            </p>
            <p className="text-xs text-background/60 mt-1">
              Built with ❤️ by Altis Teknoloji
            </p>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-px bg-gradient-to-r from-transparent via-background/30 to-transparent my-6 origin-left"
        />

        {/* Bottom Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 text-xs text-background/70"
        >
          <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-background transition-colors">Contact</a>
          <a href="#" className="hover:text-background transition-colors">Documentation</a>
        </motion.div>
      </div>
    </footer>
  );
}
