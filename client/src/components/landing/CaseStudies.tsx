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
    <section id="case-studies" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
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
            <span className="text-primary font-semibold text-sm">Success Stories</span>
          </motion.div>
          <h2
            className="font-mono text-3xl md:text-5xl font-bold text-foreground mb-4"
            data-testid="text-casestudies-title"
          >
            {t.caseStudies.title}
          </h2>
          <p
            className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
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
                className="p-8 h-full flex flex-col bg-gradient-to-br from-card to-background border border-card-border hover:border-primary/50 transition-all duration-300 card-hover group cursor-pointer relative overflow-hidden"
                onClick={() => setSelectedCase(index)}
                data-testid={`card-casestudy-${index}`}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-orange-500/0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10 flex items-start justify-between mb-6">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center font-mono font-bold text-lg text-white shadow-md"
                  >
                    {caseStudy.logo}
                  </motion.div>
                  <Badge className="bg-primary/10 text-primary border border-primary/30 text-xs font-semibold px-3 py-1">
                    {caseStudy.industry}
                  </Badge>
                </div>

                <h3 className="font-mono text-xl font-bold text-foreground mb-3">
                  {caseStudy.company}
                </h3>

                <p className="text-sm text-muted-foreground mb-6 line-clamp-3 flex-1 leading-relaxed">
                  {caseStudy.challenge}
                </p>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {caseStudy.results.slice(0, 3).map((result, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="text-center p-3 rounded-lg bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20"
                    >
                      <p className="font-mono text-lg font-bold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                        {result.value}
                      </p>
                      <p className="text-[10px] text-muted-foreground font-semibold truncate mt-1">
                        {result.metric}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                  className="flex items-center text-sm font-semibold text-primary group-hover:gap-2 transition-all"
                  whileHover={{ x: 4 }}
                >
                  {t.caseStudies.readMore}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
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
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="bg-gradient-to-br from-card to-background rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-card-border"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 md:p-10 sticky top-0 bg-gradient-to-b from-card via-card to-transparent pb-6 border-b border-card-border">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center font-mono font-bold text-2xl text-white shadow-lg">
                        {t.caseStudies.cases[selectedCase].logo}
                      </div>
                      <div>
                        <h3 className="font-mono text-2xl font-bold text-foreground">
                          {t.caseStudies.cases[selectedCase].company}
                        </h3>
                        <Badge className="bg-primary/10 text-primary border border-primary/30 text-xs font-semibold mt-2">
                          {t.caseStudies.cases[selectedCase].industry}
                        </Badge>
                      </div>
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => setSelectedCase(null)}
                      className="hover:bg-muted/50"
                      data-testid="button-close-modal"
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                <div className="p-6 md:p-10 space-y-8">
                  {/* Challenge Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="font-mono text-sm font-bold text-primary mb-3 uppercase tracking-wider flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      Challenge
                    </h4>
                    <p className="text-foreground leading-relaxed">
                      {t.caseStudies.cases[selectedCase].challenge}
                    </p>
                  </motion.div>

                  {/* Solution Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <h4 className="font-mono text-sm font-bold text-primary mb-3 uppercase tracking-wider flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      Solution
                    </h4>
                    <p className="text-foreground leading-relaxed">
                      {t.caseStudies.cases[selectedCase].solution}
                    </p>
                  </motion.div>

                  {/* Results Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <h4 className="font-mono text-sm font-bold text-primary mb-4 uppercase tracking-wider flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      {t.caseStudies.results}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {t.caseStudies.cases[selectedCase].results.map(
                        (result, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            className="p-4 rounded-lg bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 hover:border-primary/50 transition-colors"
                          >
                            <p className="font-mono text-3xl font-bold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent mb-2">
                              {result.value}
                            </p>
                            <p className="font-semibold text-foreground mb-1">
                              {result.metric}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {result.description}
                            </p>
                          </motion.div>
                        )
                      )}
                    </div>
                  </motion.div>

                  {/* Quote Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="pt-6 border-t border-card-border"
                  >
                    <div className="flex items-start gap-4">
                      <Quote className="w-8 h-8 text-primary/40 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-foreground italic text-lg leading-relaxed mb-4">
                          "{t.caseStudies.cases[selectedCase].quote}"
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center font-mono font-bold text-sm text-white shadow-md">
                            {t.caseStudies.cases[selectedCase].author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">
                              {t.caseStudies.cases[selectedCase].author}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {t.caseStudies.cases[selectedCase].role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
