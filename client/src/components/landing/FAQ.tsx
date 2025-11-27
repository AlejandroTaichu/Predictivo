import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/lib/language-context";
import { HelpCircle } from "lucide-react";

const faqData = {
  tr: [
    {
      question: "Kestirimci bakım nedir?",
      answer: "Kestirimci bakım, sensör verileri ve yapay zeka algoritmaları kullanarak ekipman arızalarını önceden tahmin eden bir bakım stratejisidir. Bu sayede plansız duruşlar önlenir ve bakım maliyetleri optimize edilir.",
    },
    {
      question: "Hangi sektörlere hizmet veriyorsunuz?",
      answer: "Otomotiv, enerji, kimya, lojistik ve üretim sektörlerinde faaliyet gösteren tüm işletmelere hizmet veriyoruz. Çözümlerimiz her sektörün özel ihtiyaçlarına göre özelleştirilebilir.",
    },
    {
      question: "Mevcut sistemlerimle entegrasyon mümkün mü?",
      answer: "Evet, SAP, Oracle, Microsoft Dynamics ve diğer önde gelen ERP sistemleriyle sorunsuz entegrasyon sağlıyoruz. API tabanlı mimarimiz sayesinde mevcut altyapınıza kolayca entegre oluruz.",
    },
    {
      question: "Kurulum süreci ne kadar sürer?",
      answer: "Projenin kapsamına bağlı olarak kurulum süreci 2-6 hafta arasında değişir. Pilot uygulama ile başlayıp, başarılı sonuçlar sonrasında ölçeklendirme yapıyoruz.",
    },
    {
      question: "Hangi güvenlik standartlarına uyumsunuz?",
      answer: "ISO 27001 bilgi güvenliği standardına tam uyumluyuz. Verileriniz en yüksek güvenlik protokolleriyle korunur ve bulut veya on-premise dağıtım seçenekleri sunuyoruz.",
    },
  ],
  en: [
    {
      question: "What is predictive maintenance?",
      answer: "Predictive maintenance is a maintenance strategy that uses sensor data and AI algorithms to predict equipment failures in advance. This prevents unplanned downtime and optimizes maintenance costs.",
    },
    {
      question: "Which industries do you serve?",
      answer: "We serve all businesses operating in automotive, energy, chemical, logistics, and manufacturing sectors. Our solutions can be customized according to the specific needs of each industry.",
    },
    {
      question: "Is integration with my existing systems possible?",
      answer: "Yes, we provide seamless integration with SAP, Oracle, Microsoft Dynamics, and other leading ERP systems. Our API-based architecture allows easy integration with your existing infrastructure.",
    },
    {
      question: "How long does the installation process take?",
      answer: "Depending on the scope of the project, the installation process takes 2-6 weeks. We start with a pilot application and scale up after successful results.",
    },
    {
      question: "What security standards do you comply with?",
      answer: "We are fully compliant with ISO 27001 information security standard. Your data is protected with the highest security protocols, and we offer cloud or on-premise deployment options.",
    },
  ],
};

export function FAQ() {
  const { language, t } = useLanguage();
  const faqs = faqData[language];

  return (
    <section id="faq" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold text-sm">FAQ</span>
          </motion.div>
          <h2
            className="font-mono text-3xl md:text-5xl font-bold text-foreground mb-4"
            data-testid="text-faq-title"
          >
            {t.nav.faq}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {language === "tr"
              ? "Sıkça sorulan sorular ve cevapları"
              : "Frequently asked questions and answers"}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-card-border rounded-lg px-6 py-0 bg-gradient-to-br from-card to-background hover:border-primary/50 transition-all duration-300 data-[state=open]:bg-gradient-to-br data-[state=open]:from-primary/5 data-[state=open]:via-card data-[state=open]:to-background data-[state=open]:border-primary/30"
                  data-testid={`faq-item-${index}`}
                >
                  <AccordionTrigger
                    className="text-left font-mono font-semibold text-foreground hover:no-underline py-5 hover:text-primary transition-colors"
                    data-testid={`faq-question-${index}`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent
                    className="text-muted-foreground pb-5 leading-relaxed text-base"
                    data-testid={`faq-answer-${index}`}
                  >
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
