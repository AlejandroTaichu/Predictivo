import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Zap, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";

export function Hero() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stats = [
    { icon: Zap, label: "AI-Destekli", value: "2847 Sensör" },
    { icon: Shield, label: "Gerçek Zamanlı", value: "Tam Zamanlı Çalışma" },
    { icon: TrendingUp, label: "Sonuçlar", value: "+156% ROI" },
  ];

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* Enhanced background with multiple gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,107,0,0.25),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,184,0,0.2),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(100,150,255,0.15),transparent_60%)]" />
        </div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Animated light effects */}
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
            backgroundPosition: '0% 0%',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center mb-8"
          >
            <motion.div
              animate={{ borderColor: ['rgba(255, 107, 0, 0.5)', 'rgba(255, 184, 0, 0.5)', 'rgba(255, 107, 0, 0.5)'] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-primary/50 backdrop-blur-xl hover:bg-white/10 transition-all"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary to-orange-500"
              />
              <span className="text-sm font-semibold text-white">Powered by Advanced AI & Real-time Analytics</span>
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-mono text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tighter max-w-5xl mx-auto mb-6"
            data-testid="text-hero-headline"
          >
            {t.hero.headline.split(' ').map((word, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.08 }}
                className={idx === 0 || idx === 2 ? "bg-gradient-to-r from-primary via-orange-400 to-yellow-300 bg-clip-text text-transparent" : "text-white"}
              >
                {word}{' '}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light mb-8"
            data-testid="text-hero-subheadline"
          >
            {t.hero.subheadline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="btn-premium w-full sm:w-auto min-w-[220px] bg-gradient-to-r from-primary via-orange-500 to-yellow-400 text-white font-semibold py-6 text-base hover:shadow-2xl hover:shadow-primary/50 border-0 rounded-lg"
                data-testid="button-hero-contact"
              >
                {t.hero.primaryCta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("process")}
                className="w-full sm:w-auto min-w-[220px] border border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold py-6 text-base backdrop-blur-md transition-all rounded-lg"
                data-testid="button-hero-learn"
              >
                {t.hero.secondaryCta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="p-6 rounded-lg bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 backdrop-blur-xl hover:border-primary/50 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/30 to-orange-500/30 flex items-center justify-center group-hover:from-primary/50 group-hover:to-orange-500/50 transition-all">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
                    <p className="text-lg font-semibold text-white">{stat.value}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          onClick={() => scrollToSection("integrations")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors group"
          data-testid="button-scroll-down"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="group-hover:text-primary transition-colors"
          >
            <ChevronDown className="h-8 w-8" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
