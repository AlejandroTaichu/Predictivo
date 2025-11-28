import { motion } from "framer-motion";
import { Car, Zap, Truck, Factory, Shirt, UtensilsCrossed } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/language-context";

export function Industries() {
  const { t } = useLanguage();

  const industries = [
    {
      id: "automotive",
      icon: Car,
      title: t.industries.automotive.title,
      description: t.industries.automotive.description,
      gradient: "from-blue-500 to-cyan-500",
      badge: "High-Volume",
    },
    {
      id: "energy",
      icon: Zap,
      title: t.industries.energy.title,
      description: t.industries.energy.description,
      gradient: "from-yellow-500 to-orange-500",
      badge: "Critical Systems",
    },
    {
      id: "logistics",
      icon: Truck,
      title: t.industries.logistics.title,
      description: t.industries.logistics.description,
      gradient: "from-green-500 to-emerald-500",
      badge: "24/7 Operations",
    },
    {
      id: "heavyIndustry",
      icon: Factory,
      title: t.industries.heavyIndustry.title,
      description: t.industries.heavyIndustry.description,
      gradient: "from-red-500 to-pink-500",
      badge: "High Temp",
    },
    {
      id: "textile",
      icon: Shirt,
      title: t.industries.textile.title,
      description: t.industries.textile.description,
      gradient: "from-purple-500 to-violet-500",
      badge: "Precision Control",
    },
    {
      id: "foodBeverage",
      icon: UtensilsCrossed,
      title: t.industries.foodBeverage.title,
      description: t.industries.foodBeverage.description,
      gradient: "from-amber-500 to-orange-500",
      badge: "Quality First",
    },
  ];

  return (
    <section id="industries" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6"
          >
            <span className="text-primary font-semibold text-sm">Industries</span>
          </motion.div>
          <h2
            className="font-mono text-3xl md:text-5xl font-bold text-foreground mb-4"
            data-testid="text-industries-title"
          >
            {t.industries.title}
          </h2>
          <p
            className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
            data-testid="text-industries-subtitle"
          >
            {t.industries.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card
                  className="relative p-8 h-full min-h-[320px] bg-gradient-to-br from-card to-background border border-card-border hover:border-primary/50 transition-all duration-300 overflow-hidden card-hover"
                  data-testid={`card-industry-${industry.id}`}
                >
                  {/* Animated gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />

                  {/* Background decoration */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300 pointer-events-none" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-6">
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: -5 }}
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      >
                        <Badge
                          className={`bg-gradient-to-r ${industry.gradient} text-white border-0 px-3 py-1`}
                        >
                          {industry.badge}
                        </Badge>
                      </motion.div>
                    </div>

                    <h3
                      className="font-mono text-xl md:text-2xl font-semibold text-foreground mb-4"
                      data-testid={`text-industry-${industry.id}-title`}
                    >
                      {industry.title}
                    </h3>

                    <p
                      className="text-muted-foreground leading-relaxed flex-1 text-sm md:text-base"
                      data-testid={`text-industry-${industry.id}-description`}
                    >
                      {industry.description}
                    </p>

                    {/* Hover action indicator */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="mt-6 flex items-center gap-2 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <span>Learn more</span>
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
