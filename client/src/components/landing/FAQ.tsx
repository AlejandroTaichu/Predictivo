import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/lib/language-context";

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
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="font-mono text-2xl md:text-4xl font-bold text-foreground mb-4"
            data-testid="text-faq-title"
          >
            {t.nav.faq}
          </h2>
          <p className="text-muted-foreground text-lg">
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
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 data-[state=open]:bg-muted/30"
                data-testid={`faq-item-${index}`}
              >
                <AccordionTrigger 
                  className="text-left font-mono font-medium text-foreground hover:no-underline py-4"
                  data-testid={`faq-question-${index}`}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent 
                  className="text-muted-foreground pb-4 leading-relaxed"
                  data-testid={`faq-answer-${index}`}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
