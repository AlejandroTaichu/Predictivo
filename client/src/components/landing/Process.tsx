import { motion } from "framer-motion";
import { Radio, Brain, FileText, ArrowRight, ArrowDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/lib/language-context";

export function Process() {
  const { t } = useLanguage();

  const steps = [
    {
      number: t.process.step1.number,
      title: t.process.step1.title,
      description: t.process.step1.description,
      icon: Radio,
    },
    {
      number: t.process.step2.number,
      title: t.process.step2.title,
      description: t.process.step2.description,
      icon: Brain,
    },
    {
      number: t.process.step3.number,
      title: t.process.step3.title,
      description: t.process.step3.description,
      icon: FileText,
    },
  ];

  return (
    <section id="process" className="py-20 md:py-28 bg-background">
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
            data-testid="text-process-title"
          >
            {t.process.title}
          </h2>
          <p 
            className="text-muted-foreground text-lg max-w-xl mx-auto"
            data-testid="text-process-subtitle"
          >
            {t.process.subtitle}
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                >
                  <Card 
                    className="p-6 md:p-8 h-full hover-elevate"
                    data-testid={`card-process-step-${index + 1}`}
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                        </div>
                        <span className="font-mono text-3xl md:text-4xl font-bold text-chart-2">
                          {step.number}
                        </span>
                      </div>
                      <h3 
                        className="font-mono text-lg md:text-xl font-semibold text-foreground mb-3"
                        data-testid={`text-process-step-${index + 1}-title`}
                      >
                        {step.title}
                      </h3>
                      <p 
                        className="text-muted-foreground leading-relaxed flex-1"
                        data-testid={`text-process-step-${index + 1}-description`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </Card>

                  {index < steps.length - 1 && (
                    <>
                      <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                          <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        </div>
                      </div>
                      <div className="flex md:hidden justify-center py-4">
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                          <ArrowDown className="w-4 h-4 text-muted-foreground" />
                        </div>
                      </div>
                    </>
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
