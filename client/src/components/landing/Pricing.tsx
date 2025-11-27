import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/language-context";

export function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
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
            <span className="text-primary font-semibold text-sm">{t.pricing.title}</span>
          </motion.div>
          <h2
            className="font-mono text-3xl md:text-5xl font-bold text-foreground mb-4"
            data-testid="text-pricing-title"
          >
            {t.pricing.title}
          </h2>
          <p
            className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
            data-testid="text-pricing-subtitle"
          >
            {t.pricing.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
          {t.pricing.plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {plan.popular && (
                <motion.div
                  layoutId="popularBadge"
                  className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
                >
                  <Badge className="bg-gradient-to-r from-primary to-orange-500 text-white px-4 py-1 shadow-lg border-0">
                    <Zap className="w-3 h-3 mr-1 inline" />
                    {t.pricing.popular}
                  </Badge>
                </motion.div>
              )}
              <Card
                className={`p-8 h-full flex flex-col relative overflow-hidden transition-all duration-300 ${plan.popular
                    ? "border-2 border-primary bg-gradient-to-br from-card via-card to-primary/5 shadow-xl"
                    : "border border-card-border bg-gradient-to-br from-card to-background hover:border-primary/50 card-hover"
                  }`}
                data-testid={`card-pricing-${index}`}
              >
                {/* Animated gradient overlay for popular plan */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-orange-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
                )}

                <div className="relative z-10 mb-8">
                  <h3 className="font-mono text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    {plan.price !== "Özel Fiyat" && plan.price !== "Custom" && (
                      <span className="text-muted-foreground font-semibold">
                        {t.pricing.perMonth}
                      </span>
                    )}
                  </div>
                </div>

                <div className="relative z-10 flex-1 space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-primary to-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-foreground font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    className={`w-full relative overflow-hidden ${plan.popular
                        ? "btn-premium bg-gradient-to-r from-primary to-orange-500 text-white hover:shadow-lg hover:shadow-primary/50"
                        : "border border-primary/30 hover:border-primary/60 hover:bg-primary/5"
                      }`}
                    variant={plan.popular ? "default" : "outline"}
                    data-testid={`button-pricing-select-${index}`}
                  >
                    {t.contact.title}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
