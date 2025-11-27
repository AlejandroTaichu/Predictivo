import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Activity, Shield, Cpu, Clock, CloudCog, Headphones, TrendingUp, AlertTriangle, CheckCircle, ArrowDown, ArrowUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/language-context";

const specIcons = [Activity, Shield, Cpu, Clock, CloudCog, Headphones];

function AnimatedValue({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return <>{displayValue.toLocaleString()}{suffix}</>;
}

function LiveWaveform() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 2) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const generatePath = () => {
    let path = "M0 50";
    for (let x = 0; x <= 400; x += 10) {
      const y = 50 + Math.sin((x + offset * 4) * 0.05) * 20 + Math.sin((x + offset * 2) * 0.02) * 10;
      path += ` L${x} ${y}`;
    }
    return path;
  };

  return (
    <svg viewBox="0 0 400 100" className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#FF6B00" stopOpacity="1" />
          <stop offset="100%" stopColor="#FFB800" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <path
        d={generatePath()}
        fill="none"
        stroke="url(#lineGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d={`${generatePath()} L400 100 L0 100 Z`}
        fill="url(#waveGradient)"
      />
    </svg>
  );
}

function MiniBarChart({ data, hoveredIndex, onHover }: { 
  data: number[]; 
  hoveredIndex: number | null;
  onHover: (index: number | null) => void;
}) {
  const maxValue = Math.max(...data);
  
  return (
    <div className="flex items-end gap-1 h-12">
      {data.map((value, index) => {
        const height = (value / maxValue) * 100;
        const isHovered = hoveredIndex === index;
        return (
          <motion.div
            key={index}
            className="flex-1 rounded-t cursor-pointer transition-colors"
            style={{ 
              height: `${height}%`,
              backgroundColor: isHovered ? "#FFB800" : "#FF6B00",
              opacity: isHovered ? 1 : 0.6
            }}
            whileHover={{ scale: 1.1 }}
            onMouseEnter={() => onHover(index)}
            onMouseLeave={() => onHover(null)}
            initial={{ height: 0 }}
            animate={{ height: `${height}%` }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          />
        );
      })}
    </div>
  );
}

export function TechSpecs() {
  const { t, language } = useLanguage();
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [hoveredBarIndex, setHoveredBarIndex] = useState<number | null>(null);
  const [alerts, setAlerts] = useState<{ type: "warning" | "success"; message: string }[]>([]);

  const barData = [65, 78, 82, 71, 89, 95, 88, 76, 92, 85, 79, 94];

  const stats = [
    { 
      label: language === "tr" ? "Aktif Sensör" : "Active Sensors", 
      value: 2847, 
      trend: "+12%",
      icon: Activity
    },
    { 
      label: language === "tr" ? "Çalışma Süresi" : "Uptime", 
      value: 99.8, 
      suffix: "%",
      trend: "+0.3%",
      icon: CheckCircle
    },
    { 
      label: language === "tr" ? "Tahminler" : "Predictions", 
      value: 156, 
      trend: "+24",
      icon: TrendingUp
    },
  ];

  useEffect(() => {
    const alertMessages = {
      tr: [
        { type: "success" as const, message: "Motor #A7 bakımı tamamlandı" },
        { type: "warning" as const, message: "Pompa #12 titreşim uyarısı" },
        { type: "success" as const, message: "Tüm sistemler normal" },
      ],
      en: [
        { type: "success" as const, message: "Motor #A7 maintenance complete" },
        { type: "warning" as const, message: "Pump #12 vibration alert" },
        { type: "success" as const, message: "All systems normal" },
      ],
    };

    const cycleAlerts = () => {
      const msgs = alertMessages[language];
      setAlerts((prev) => {
        const next = [...prev];
        if (next.length >= 3) next.shift();
        next.push(msgs[Math.floor(Math.random() * msgs.length)]);
        return next;
      });
    };

    cycleAlerts();
    const interval = setInterval(cycleAlerts, 4000);
    return () => clearInterval(interval);
  }, [language]);

  const specPositions = [
    { position: "top", arrow: ArrowDown },
    { position: "top-right", arrow: ArrowDown },
    { position: "bottom-right", arrow: ArrowUp },
    { position: "bottom", arrow: ArrowUp },
    { position: "bottom-left", arrow: ArrowUp },
    { position: "top-left", arrow: ArrowDown },
  ];

  return (
    <section id="techspecs" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
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
            <span className="text-primary font-semibold text-sm">Dashboard</span>
          </motion.div>
          <h2 
            className="font-mono text-3xl md:text-5xl font-bold text-foreground mb-4"
            data-testid="text-techspecs-title"
          >
            {t.techSpecs.title}
          </h2>
          <p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
            data-testid="text-techspecs-subtitle"
          >
            {t.techSpecs.subtitle}
          </p>
        </motion.div>

        {/* Radial Layout */}
        <div className="relative max-w-6xl mx-auto">
          {/* Top Specs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[0, 1, 2].map((index) => {
              const Icon = specIcons[index] || Check;
              const ArrowIcon = specPositions[index].arrow;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="relative group"
                  data-testid={`techspec-item-${index}`}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-card via-background to-card border border-card-border hover:border-primary/50 transition-all duration-300 card-hover w-full md:w-auto md:min-w-max">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center flex-shrink-0 shadow-md">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-mono text-sm font-semibold text-foreground whitespace-nowrap">
                        {t.techSpecs.specs[index]}
                      </span>
                    </div>
                    <motion.div
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-primary"
                    >
                      <ArrowIcon className="w-5 h-5" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Center Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group mb-12"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-orange-500/20 to-primary/20 rounded-2xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
            <Card className="relative p-2 md:p-4 bg-gradient-to-br from-card to-background border border-card-border overflow-visible shadow-xl max-w-3xl mx-auto">
              <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden relative">
                <div className="absolute inset-0 p-4 md:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-3 h-3 rounded-full bg-red-500/80"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2.2, repeat: Infinity }}
                        className="w-3 h-3 rounded-full bg-yellow-500/80"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2.4, repeat: Infinity }}
                        className="w-3 h-3 rounded-full bg-green-500/80"
                      />
                      <span className="ml-4 text-xs font-mono text-gray-400">
                        {t.techSpecs.dashboardTitle}
                      </span>
                    </div>
                    <Badge variant="outline" className="text-[10px] border-green-500/50 text-green-400 bg-green-500/10 animate-pulse">
                      ● LIVE
                    </Badge>
                  </div>

                  <div className="grid grid-cols-3 gap-3 md:gap-4 mb-4">
                    {stats.map((stat, i) => {
                      const StatIcon = stat.icon;
                      return (
                        <motion.div
                          key={i}
                          className="bg-gradient-to-br from-gray-800/60 to-gray-900/40 rounded-lg p-2 md:p-3 border border-gray-700/50 cursor-pointer transition-all duration-300"
                          style={{
                            borderColor: hoveredStat === i ? "#FF6B00" : "rgba(55, 65, 81, 0.5)",
                            backgroundColor: hoveredStat === i ? "rgba(255, 107, 0, 0.15)" : "rgba(55, 65, 81, 0.3)"
                          }}
                          onMouseEnter={() => setHoveredStat(i)}
                          onMouseLeave={() => setHoveredStat(null)}
                          whileHover={{ scale: 1.05, y: -2 }}
                          data-testid={`dashboard-stat-${i}`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-[10px] md:text-xs text-gray-400 font-medium">{stat.label}</p>
                            <StatIcon className="w-3.5 h-3.5 text-primary" />
                          </div>
                          <p className="text-sm md:text-lg font-mono font-bold text-white">
                            <AnimatedValue value={stat.value} suffix={stat.suffix} />
                          </p>
                          <p className="text-[10px] text-green-400 font-semibold">{stat.trend}</p>
                        </motion.div>
                      );
                    })}
                  </div>

                  <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4">
                    <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/30 rounded-lg p-3 border border-gray-700/40 hover:border-primary/50 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono text-gray-400">
                          {language === "tr" ? "Aylık Performans" : "Monthly Performance"}
                        </span>
                      </div>
                      <MiniBarChart 
                        data={barData} 
                        hoveredIndex={hoveredBarIndex}
                        onHover={setHoveredBarIndex}
                      />
                      {hoveredBarIndex !== null && (
                        <p className="text-[10px] text-center mt-1 text-gray-400">
                          {language === "tr" ? "Ay" : "Month"} {hoveredBarIndex + 1}: {barData[hoveredBarIndex]}%
                        </p>
                      )}
                    </div>

                    <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/30 rounded-lg p-3 border border-gray-700/40 hover:border-primary/50 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono text-gray-400">
                          {language === "tr" ? "Son Uyarılar" : "Recent Alerts"}
                        </span>
                      </div>
                      <div className="space-y-1.5 h-12 overflow-hidden">
                        <AnimatePresence mode="popLayout">
                          {alerts.map((alert, index) => (
                            <motion.div
                              key={`${alert.message}-${index}`}
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              className="flex items-center gap-1.5"
                            >
                              {alert.type === "warning" ? (
                                <AlertTriangle className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                              ) : (
                                <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                              )}
                              <span className="text-[10px] text-gray-300 truncate">
                                {alert.message}
                              </span>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/30 rounded-lg p-3 md:p-4 border border-gray-700/40 hover:border-primary/50 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono text-gray-400">
                        {language === "tr" ? "Titreşim Analizi" : "Vibration Analysis"}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-gray-500">Hz: 245.3</span>
                        <Badge variant="outline" className="text-[10px] border-green-500/50 text-green-400 bg-green-500/10">
                          {language === "tr" ? "NORMAL" : "NORMAL"}
                        </Badge>
                      </div>
                    </div>
                    <div className="relative h-16 md:h-24">
                      <LiveWaveform />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Bottom Specs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[3, 4, 5].map((index) => {
              const Icon = specIcons[index] || Check;
              const ArrowIcon = specPositions[index].arrow;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: 0.1 * (index - 3) }}
                  className="relative group"
                  data-testid={`techspec-item-${index}`}
                >
                  <div className="flex flex-col items-center gap-3">
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-primary"
                    >
                      <ArrowIcon className="w-5 h-5" />
                    </motion.div>
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-card via-background to-card border border-card-border hover:border-primary/50 transition-all duration-300 card-hover w-full md:w-auto md:min-w-max">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center flex-shrink-0 shadow-md">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-mono text-sm font-semibold text-foreground whitespace-nowrap">
                        {t.techSpecs.specs[index]}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
