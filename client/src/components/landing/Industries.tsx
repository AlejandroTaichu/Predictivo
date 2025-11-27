import { motion } from "framer-motion";
import { Car, Zap, Truck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/lib/language-context";

export function Industries() {
  const { t } = useLanguage();

  const industries = [
    {
      id: "automotive",
      icon: Car,
      title: t.industries.automotive.title,
      description: t.industries.automotive.description,
    },
    {
      id: "energy",
      icon: Zap,
      title: t.industries.energy.title,
      description: t.industries.energy.description,
    },
    {
      id: "logistics",
      icon: Truck,
      title: t.industries.logistics.title,
      description: t.industries.logistics.description,
    },
  ];

  return (
    <section id="industries" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="font-mono text-2xl md:text-4xl font-bold text-foreground mb-4"
            data-testid="text-industries-title"
          >
            {t.industries.title}
          </h2>
          <p 
            className="text-muted-foreground text-lg max-w-xl mx-auto"
            data-testid="text-industries-subtitle"
          >
            {t.industries.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  className="p-6 md:p-8 h-full min-h-[280px] group hover-elevate border-2 border-transparent hover:border-primary/20 transition-colors duration-300"
                  data-testid={`card-industry-${industry.id}`}
                >
                  <div className="flex flex-col h-full">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 
                      className="font-mono text-xl font-semibold text-foreground mb-4"
                      data-testid={`text-industry-${industry.id}-title`}
                    >
                      {industry.title}
                    </h3>
                    <p 
                      className="text-muted-foreground leading-relaxed flex-1"
                      data-testid={`text-industry-${industry.id}-description`}
                    >
                      {industry.description}
                    </p>
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
