import { motion } from "framer-motion";
import { Radio, Brain, FileText, Zap, BarChart3, CheckCircle2, ArrowRight, ArrowDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/lib/language-context";

export function Process() {
  const { t } = useLanguage();

  const steps = [
    {
      number: t.process.step1.number,
      title: t.process.step1.title,
      description: t.process.step1.description,
      icon: BarChart3,
      gradient: "from-blue-500 to-blue-600",
    },
    {
      number: t.process.step2.number,
      title: t.process.step2.title,
      description: t.process.step2.description,
      icon: Zap,
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      number: t.process.step3.number,
      title: t.process.step3.title,
      description: t.process.step3.description,
      icon: Radio,
      gradient: "from-purple-500 to-blue-600",
    },
    {
      number: t.process.step4.number,
      title: t.process.step4.title,
      description: t.process.step4.description,
      icon: Brain,
      gradient: "from-orange-500 to-red-500",
    },
    {
      number: t.process.step5.number,
      title: t.process.step5.title,
      description: t.process.step5.description,
      icon: BarChart3,
      gradient: "from-pink-500 to-orange-500",
    },
    {
      number: t.process.step6.number,
      title: t.process.step6.title,
      description: t.process.step6.description,
      icon: FileText,
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section id="process" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl" />
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
            <span className="text-primary font-semibold text-sm">How It Works</span>
          </motion.div>
          <h2
            className="font-mono text-3xl md:text-5xl font-bold text-foreground mb-4"
            data-testid="text-process-title"
          >
            {t.process.title}
          </h2>
          <p
            className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
            data-testid="text-process-subtitle"
          >
            {t.process.subtitle}
          </p>
        </motion.div>

        <div className="relative">
          {/* For larger screens: 2 rows x 3 columns */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <Card
                    className="p-8 h-full bg-gradient-to-br from-card to-muted/30 border border-card-border hover:border-primary/50 transition-all duration-300 card-hover overflow-hidden"
                    data-testid={`card-process-step-${index + 1}`}
                  >
                    {/* Animated gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-start justify-between mb-8">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                          className="flex items-center justify-center"
                        >
                          <span className="font-mono text-5xl font-bold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                            {step.number}
                          </span>
                        </motion.div>
                      </div>
                      <h3
                        className="font-mono text-xl md:text-2xl font-semibold text-foreground mb-4"
                        data-testid={`text-process-step-${index + 1}-title`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="text-muted-foreground leading-relaxed flex-1 text-sm md:text-base"
                        data-testid={`text-process-step-${index + 1}-description`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </Card>

                  {/* Connecting arrows - only between cards in same row */}
                  {(index === 0 || index === 1 || index === 3 || index === 4) && (
                    <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-orange-500 flex items-center justify-center shadow-lg"
                      >
                        <ArrowRight className="w-4 h-4 text-white" />
                      </motion.div>
                    </div>
                  )}

                  {/* Arrow down between rows */}
                  {(index === 2 || index === 5) && (
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 z-20">
                      <motion.div
                        animate={{ y: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-orange-500 flex items-center justify-center shadow-lg"
                      >
                        <ArrowDown className="w-4 h-4 text-white" />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* For medium screens: 3 rows x 2 columns */}
          <div className="hidden md:grid md:grid-cols-2 lg:hidden gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <Card
                    className="p-8 h-full bg-gradient-to-br from-card to-muted/30 border border-card-border hover:border-primary/50 transition-all duration-300 card-hover overflow-hidden"
                    data-testid={`card-process-step-${index + 1}`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-start justify-between mb-8">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        >
                          <span className="font-mono text-5xl font-bold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                            {step.number}
                          </span>
                        </motion.div>
                      </div>
                      <h3
                        className="font-mono text-xl md:text-2xl font-semibold text-foreground mb-4"
                        data-testid={`text-process-step-${index + 1}-title`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="text-muted-foreground leading-relaxed flex-1 text-sm md:text-base"
                        data-testid={`text-process-step-${index + 1}-description`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </Card>

                  {/* Connecting arrows */}
                  {(index === 0 || index === 2 || index === 4) && (
                    <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-orange-500 flex items-center justify-center shadow-lg"
                      >
                        <ArrowRight className="w-4 h-4 text-white" />
                      </motion.div>
                    </div>
                  )}

                  {/* Arrow down between rows */}
                  {(index === 1 || index === 3) && (
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 z-20">
                      <motion.div
                        animate={{ y: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-orange-500 flex items-center justify-center shadow-lg"
                      >
                        <ArrowDown className="w-4 h-4 text-white" />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* For mobile: 1 column */}
          <div className="md:hidden flex flex-col gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <Card
                    className="p-8 h-full bg-gradient-to-br from-card to-muted/30 border border-card-border hover:border-primary/50 transition-all duration-300 card-hover overflow-hidden"
                    data-testid={`card-process-step-${index + 1}`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-start justify-between mb-8">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        >
                          <span className="font-mono text-5xl font-bold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                            {step.number}
                          </span>
                        </motion.div>
                      </div>
                      <h3
                        className="font-mono text-xl md:text-2xl font-semibold text-foreground mb-4"
                        data-testid={`text-process-step-${index + 1}-title`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="text-muted-foreground leading-relaxed flex-1 text-sm md:text-base"
                        data-testid={`text-process-step-${index + 1}-description`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </Card>

                  {/* Arrow down for mobile */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center py-6">
                      <motion.div
                        animate={{ y: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-orange-500 flex items-center justify-center shadow-lg"
                      >
                        <ArrowDown className="w-4 h-4 text-white" />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
