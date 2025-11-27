import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Quote, TrendingUp, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/language-context";

export function CaseStudies() {
  const { t } = useLanguage();
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  return (
    <section id="case-studies" className="py-20 md:py-28 bg-background">
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
            data-testid="text-casestudies-title"
          >
            {t.caseStudies.title}
          </h2>
          <p
            className="text-muted-foreground text-lg max-w-xl mx-auto"
            data-testid="text-casestudies-subtitle"
          >
            {t.caseStudies.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {t.caseStudies.cases.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="p-6 h-full flex flex-col hover-elevate cursor-pointer group"
                onClick={() => setSelectedCase(index)}
                data-testid={`card-casestudy-${index}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center font-mono font-bold text-xl text-primary">
                    {caseStudy.logo}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {caseStudy.industry}
                  </Badge>
                </div>

                <h3 className="font-mono text-lg font-semibold text-foreground mb-2">
                  {caseStudy.company}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
                  {caseStudy.challenge}
                </p>

                <div className="grid grid-cols-3 gap-2 mb-4">
                  {caseStudy.results.slice(0, 3).map((result, i) => (
                    <div
                      key={i}
                      className="text-center p-2 rounded-lg bg-muted/50"
                    >
                      <p className="font-mono text-lg font-bold text-primary">
                        {result.value}
                      </p>
                      <p className="text-[10px] text-muted-foreground truncate">
                        {result.metric}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center text-sm text-primary font-medium group-hover:gap-2 transition-all">
                  {t.caseStudies.readMore}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedCase !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedCase(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-background rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center font-mono font-bold text-2xl text-primary">
                        {t.caseStudies.cases[selectedCase].logo}
                      </div>
                      <div>
                        <h3 className="font-mono text-xl font-bold text-foreground">
                          {t.caseStudies.cases[selectedCase].company}
                        </h3>
                        <Badge variant="secondary">
                          {t.caseStudies.cases[selectedCase].industry}
                        </Badge>
                      </div>
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => setSelectedCase(null)}
                      data-testid="button-close-modal"
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-mono text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                        Challenge
                      </h4>
                      <p className="text-foreground">
                        {t.caseStudies.cases[selectedCase].challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-mono text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                        Solution
                      </h4>
                      <p className="text-foreground">
                        {t.caseStudies.cases[selectedCase].solution}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-mono text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        {t.caseStudies.results}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {t.caseStudies.cases[selectedCase].results.map(
                          (result, i) => (
                            <div
                              key={i}
                              className="p-4 rounded-lg bg-muted/50 border border-border"
                            >
                              <p className="font-mono text-2xl font-bold text-primary mb-1">
                                {result.value}
                              </p>
                              <p className="text-sm font-medium text-foreground">
                                {result.metric}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {result.description}
                              </p>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <div className="flex items-start gap-3">
                        <Quote className="w-8 h-8 text-primary/30 flex-shrink-0" />
                        <div>
                          <p className="text-foreground italic mb-3">
                            "{t.caseStudies.cases[selectedCase].quote}"
                          </p>
                          <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-mono font-bold text-sm text-primary">
                              {t.caseStudies.cases[selectedCase].author
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>
                            <div>
                              <p className="font-medium text-foreground">
                                {t.caseStudies.cases[selectedCase].author}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {t.caseStudies.cases[selectedCase].role}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
