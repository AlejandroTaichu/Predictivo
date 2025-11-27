import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Send, CheckCircle2, Clock, Shield, Zap, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/lib/language-context";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const infoIcons = [Shield, Zap, Clock, Award];

export function ContactForm() {
  const { t } = useLanguage();
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: t.contact.successTitle,
        description: t.contact.successMessage,
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: t.contact.errorTitle,
        description: t.contact.errorMessage,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
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
            <span className="text-primary font-semibold text-sm">Get Started</span>
          </motion.div>
          <h2
            className="font-mono text-3xl md:text-5xl font-bold text-foreground mb-4"
            data-testid="text-contact-title"
          >
            {t.contact.title}
          </h2>
          <p
            className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
            data-testid="text-contact-subtitle"
          >
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <Card className="p-8 md:p-10 bg-gradient-to-br from-card to-background border border-card-border">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-foreground mb-2 block">
                              {t.contact.name}
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder={t.contact.namePlaceholder}
                                className="rounded-lg border border-border bg-background/50 hover:bg-background transition-colors focus:border-primary"
                                data-testid="input-contact-name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-foreground mb-2 block">
                              {t.contact.email}
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder={t.contact.emailPlaceholder}
                                className="rounded-lg border border-border bg-background/50 hover:bg-background transition-colors focus:border-primary"
                                data-testid="input-contact-email"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-foreground mb-2 block">
                            {t.contact.company}
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder={t.contact.companyPlaceholder}
                              className="rounded-lg border border-border bg-background/50 hover:bg-background transition-colors focus:border-primary"
                              data-testid="input-contact-company"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-foreground mb-2 block">
                            {t.contact.message}
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={t.contact.messagePlaceholder}
                              className="resize-none rounded-lg border border-border bg-background/50 hover:bg-background transition-colors focus:border-primary min-h-[140px]"
                              data-testid="input-contact-message"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        className="w-full btn-premium bg-gradient-to-r from-primary to-orange-500 text-white hover:shadow-lg hover:shadow-primary/50 font-semibold py-6 text-base"
                        size="lg"
                        disabled={mutation.isPending}
                        data-testid="button-contact-submit"
                      >
                        {mutation.isPending ? (
                          <>
                            <motion.span
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity }}
                              className="mr-2 inline-block"
                            >
                              <Send className="h-4 w-4" />
                            </motion.span>
                            {t.contact.sending}
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            {t.contact.submit}
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </Form>
              </Card>
            </motion.div>

            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card className="p-8 md:p-10 bg-gradient-to-br from-primary/5 via-card to-background border border-card-border h-full">
                <h3
                  className="font-mono text-2xl font-bold text-foreground mb-8"
                  data-testid="text-contact-info-title"
                >
                  {t.contact.infoTitle}
                </h3>
                <div className="space-y-5 mb-10">
                  {t.contact.infoItems.map((item, index) => {
                    const Icon = infoIcons[index] || CheckCircle2;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start gap-4"
                        data-testid={`text-contact-info-item-${index}`}
                      >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center flex-shrink-0 shadow-md">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm text-foreground font-medium leading-relaxed pt-0.5">{item}</span>
                      </motion.div>
                    );
                  })}
                </div>
                <div className="pt-8 border-t border-border">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex items-center gap-3 text-sm"
                  >
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-muted-foreground" data-testid="text-contact-response-time">
                      {t.contact.responseTime}
                    </span>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
