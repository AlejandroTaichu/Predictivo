import { motion } from "framer-motion";
import { Check, Activity, Shield, Cpu, Clock, CloudCog, Headphones } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/language-context";

const specIcons = [Activity, Shield, Cpu, Clock, CloudCog, Headphones];

export function TechSpecs() {
  const { t } = useLanguage();

  return (
    <section id="techspecs" className="py-20 md:py-28 bg-muted/30">
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
            data-testid="text-techspecs-title"
          >
            {t.techSpecs.title}
          </h2>
          <p 
            className="text-muted-foreground text-lg max-w-xl mx-auto"
            data-testid="text-techspecs-subtitle"
          >
            {t.techSpecs.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-chart-2/10 to-primary/10 rounded-2xl blur-xl opacity-50" />
              <Card className="relative p-4 bg-card border-card-border overflow-visible">
                <div className="aspect-[16/10] rounded-lg bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden relative">
                  <div className="absolute inset-0 p-4 md:p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      <span className="ml-4 text-xs font-mono text-gray-400">
                        {t.techSpecs.dashboardTitle}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-3 md:gap-4 mb-4">
                      {[
                        { label: "Active Sensors", value: "2,847", trend: "+12%" },
                        { label: "Uptime", value: "99.8%", trend: "+0.3%" },
                        { label: "Predictions", value: "156", trend: "+24" },
                      ].map((stat, i) => (
                        <div
                          key={i}
                          className="bg-gray-800/50 rounded-lg p-2 md:p-3 border border-gray-700/50"
                        >
                          <p className="text-[10px] md:text-xs text-gray-400 mb-1">{stat.label}</p>
                          <p className="text-sm md:text-lg font-mono font-bold text-white">
                            {stat.value}
                          </p>
                          <p className="text-[10px] text-green-400">{stat.trend}</p>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gray-800/30 rounded-lg p-3 md:p-4 border border-gray-700/30">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono text-gray-400">Vibration Analysis</span>
                        <Badge variant="outline" className="text-[10px] border-green-500/30 text-green-400">
                          LIVE
                        </Badge>
                      </div>
                      <div className="relative h-16 md:h-24">
                        <svg
                          viewBox="0 0 400 100"
                          className="w-full h-full"
                          preserveAspectRatio="none"
                        >
                          <defs>
                            <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.3" />
                              <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M0 50 Q 25 30, 50 50 T 100 50 T 150 50 T 200 50 T 250 50 T 300 50 T 350 50 T 400 50"
                            fill="none"
                            stroke="#FF6B00"
                            strokeWidth="2"
                            className="animate-pulse"
                          />
                          <path
                            d="M0 50 Q 25 30, 50 50 T 100 50 T 150 50 T 200 50 T 250 50 T 300 50 T 350 50 T 400 50 L 400 100 L 0 100 Z"
                            fill="url(#waveGradient)"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {t.techSpecs.specs.map((spec, index) => {
              const Icon = specIcons[index] || Check;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-center gap-4 p-3 rounded-lg bg-background border border-border hover-elevate"
                  data-testid={`techspec-item-${index}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-mono text-sm md:text-base font-medium text-foreground">
                    {spec}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
