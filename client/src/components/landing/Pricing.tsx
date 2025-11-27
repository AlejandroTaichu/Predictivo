import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Calendar, Clock, ArrowRight, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/lib/language-context";
import { useToast } from "@/hooks/use-toast";

const timeSlots = [
  "09:00", "10:00", "11:00", "14:00", "15:00", "16:00"
];

function generateNextDays(count: number): Date[] {
  const days: Date[] = [];
  const today = new Date();
  
  for (let i = 1; i <= count + 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    if (date.getDay() !== 0 && date.getDay() !== 6) {
      days.push(date);
      if (days.length === count) break;
    }
  }
  return days;
}

export function Pricing() {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const availableDates = generateNextDays(5);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString(language === "tr" ? "tr-TR" : "en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const handleScheduleDemo = async () => {
    if (!selectedDate || !selectedTime || !name || !email) {
      return;
    }

    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: t.pricing.successTitle,
      description: t.pricing.successMessage,
    });

    setSelectedDate(null);
    setSelectedTime(null);
    setName("");
    setEmail("");
    setPhone("");
    setIsSubmitting(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-20 md:py-28 bg-muted/30">
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
            data-testid="text-pricing-title"
          >
            {t.pricing.title}
          </h2>
          <p
            className="text-muted-foreground text-lg max-w-xl mx-auto"
            data-testid="text-pricing-subtitle"
          >
            {t.pricing.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {t.pricing.plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <Badge className="bg-primary text-primary-foreground px-4">
                    {t.pricing.popular}
                  </Badge>
                </div>
              )}
              <Card
                className={`p-6 md:p-8 h-full flex flex-col ${
                  plan.popular
                    ? "border-2 border-primary"
                    : ""
                }`}
                data-testid={`card-pricing-${index}`}
              >
                <div className="mb-6">
                  <h3 className="font-mono text-xl font-semibold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="font-mono text-3xl md:text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    {plan.price !== "Özel Fiyat" && plan.price !== "Custom" && (
                      <span className="text-muted-foreground">
                        {t.pricing.perMonth}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex-1 space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => scrollToSection("demo-scheduler")}
                  data-testid={`button-pricing-select-${index}`}
                >
                  {t.pricing.scheduleDemo}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          id="demo-scheduler"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="p-6 md:p-8">
            <div className="text-center mb-8">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-mono text-xl font-semibold text-foreground mb-2">
                {t.pricing.scheduleDemo}
              </h3>
              <p className="text-muted-foreground">
                {t.pricing.scheduleDemoSubtitle}
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  {t.pricing.selectDate}
                </label>
                <div className="grid grid-cols-5 gap-2 mt-2">
                  {availableDates.map((date, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedDate(date)}
                      className={`p-3 rounded-lg border text-center transition-all ${
                        selectedDate?.toDateString() === date.toDateString()
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border bg-background hover:border-primary/50"
                      }`}
                      data-testid={`button-date-${index}`}
                    >
                      <p className="text-xs font-medium">
                        {formatDate(date).split(" ")[0]}
                      </p>
                      <p className="text-lg font-mono font-bold">
                        {date.getDate()}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  {t.pricing.selectTime}
                </label>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mt-2">
                  {timeSlots.map((time, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedTime(time)}
                      className={`p-2 rounded-lg border font-mono text-sm transition-all ${
                        selectedTime === time
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border bg-background hover:border-primary/50"
                      }`}
                      data-testid={`button-time-${index}`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-3 block">
                  {t.pricing.yourInfo}
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
                  <Input
                    placeholder={t.pricing.namePlaceholder}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    data-testid="input-demo-name"
                  />
                  <Input
                    type="email"
                    placeholder={t.pricing.emailPlaceholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    data-testid="input-demo-email"
                  />
                  <Input
                    type="tel"
                    placeholder={t.pricing.phonePlaceholder}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    data-testid="input-demo-phone"
                  />
                </div>
              </div>

              <Button
                className="w-full"
                size="lg"
                disabled={
                  !selectedDate ||
                  !selectedTime ||
                  !name ||
                  !email ||
                  isSubmitting
                }
                onClick={handleScheduleDemo}
                data-testid="button-schedule-demo"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin mr-2">
                      <Send className="w-4 h-4" />
                    </span>
                    {t.pricing.scheduling}
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    {t.pricing.scheduleButton}
                  </>
                )}
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
