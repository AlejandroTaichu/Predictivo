import type { Language } from "@shared/schema";

export const translations = {
  tr: {
    nav: {
      logo: "Predictivo",
      howItWorks: "Nasıl Çalışır",
      industries: "Sektörler",
      faq: "SSS",
      contactUs: "Bize Ulaşın",
    },
    hero: {
      headline: "Makineleriniz Bozulmadan Önce Konuşsun.",
      subheadline: "Yapay zeka ve makine öğrenimi destekli kestirimci bakım çözümleri. ISO standartlarına uygun, gerçek zamanlı analiz.",
      primaryCta: "Bize Ulaşın",
      secondaryCta: "Daha Fazla Bilgi",
    },
    integrations: {
      title: "Güçlü Entegrasyonlar",
      subtitle: "Mevcut ERP sistemlerinizle sorunsuz entegrasyon",
    },
    process: {
      title: "Nasıl Çalışır?",
      subtitle: "Üç adımda kestirimci bakım",
      step1: {
        number: "01",
        title: "Sensör Verisi",
        description: "Endüstriyel sensörlerden gerçek zamanlı veri toplama. Titreşim, sıcaklık ve basınç ölçümleri.",
      },
      step2: {
        number: "02",
        title: "Yapay Zeka Analizi",
        description: "Makine öğrenimi algoritmaları ile anormal davranış tespiti ve trend analizi.",
      },
      step3: {
        number: "03",
        title: "Kestirimci Rapor",
        description: "Bakım planlaması için önceden uyarı ve detaylı arıza tahminleri.",
      },
    },
    techSpecs: {
      title: "Teknoloji & Gösterge Paneli",
      subtitle: "Endüstri standartlarına uygun ileri teknoloji",
      dashboardTitle: "Canlı İzleme Paneli",
      specs: [
        "ISO 10816 Titreşim Analizi",
        "ISO 27001 Bilgi Güvenliği",
        "Makine Öğrenimi Algoritmaları",
        "Gerçek Zamanlı Veri İşleme",
        "Bulut & On-Premise Dağıtım",
        "7/24 Destek & İzleme",
      ],
    },
    industries: {
      title: "Hedef Sektörler",
      subtitle: "Her sektöre özel çözümler",
      automotive: {
        title: "Otomotiv",
        description: "Üretim hatlarında kesintisiz çalışma ve kalite kontrol optimizasyonu.",
      },
      energy: {
        title: "Enerji & Kimya",
        description: "Kritik ekipman izleme ve güvenlik standartlarına uyum.",
      },
      logistics: {
        title: "Lojistik & Soğuk Zincir",
        description: "Filo yönetimi ve sıcaklık kontrollü depolama optimizasyonu.",
      },
    },
    contact: {
      title: "Bize Ulaşın",
      subtitle: "Kestirimci bakım çözümleri hakkında bilgi almak için formu doldurun",
      name: "Adınız",
      namePlaceholder: "Adınızı girin",
      email: "E-posta",
      emailPlaceholder: "ornek@sirket.com",
      company: "Şirket",
      companyPlaceholder: "Şirket adınızı girin",
      message: "Mesajınız",
      messagePlaceholder: "Projeniz hakkında bize bilgi verin...",
      submit: "Gönder",
      sending: "Gönderiliyor...",
      successTitle: "Mesajınız alındı!",
      successMessage: "En kısa sürede size dönüş yapacağız.",
      errorTitle: "Bir hata oluştu",
      errorMessage: "Lütfen daha sonra tekrar deneyin.",
      infoTitle: "Neden Predictivo?",
      infoItems: [
        "Endüstri 4.0 uyumlu çözümler",
        "7/24 teknik destek",
        "Hızlı entegrasyon süreci",
        "ISO sertifikalı sistemler",
      ],
      responseTime: "Ortalama yanıt süresi: 24 saat",
    },
    footer: {
      copyright: "Predictivo. Tüm hakları saklıdır.",
      tagline: "Kestirimci bakım çözümleri",
    },
  },
  en: {
    nav: {
      logo: "Predictivo",
      howItWorks: "How it Works",
      industries: "Industries",
      faq: "FAQ",
      contactUs: "Contact Us",
    },
    hero: {
      headline: "Let Your Machines Talk Before They Fail.",
      subheadline: "AI and machine learning powered predictive maintenance solutions. ISO compliant, real-time analysis.",
      primaryCta: "Contact Us",
      secondaryCta: "Learn More",
    },
    integrations: {
      title: "Powerful Integrations",
      subtitle: "Seamless integration with your existing ERP systems",
    },
    process: {
      title: "How It Works",
      subtitle: "Predictive maintenance in three steps",
      step1: {
        number: "01",
        title: "Sensor Data",
        description: "Real-time data collection from industrial sensors. Vibration, temperature, and pressure measurements.",
      },
      step2: {
        number: "02",
        title: "AI Analysis",
        description: "Anomaly detection and trend analysis with machine learning algorithms.",
      },
      step3: {
        number: "03",
        title: "Predictive Report",
        description: "Early warnings for maintenance planning and detailed failure predictions.",
      },
    },
    techSpecs: {
      title: "Technology & Dashboard",
      subtitle: "Advanced technology compliant with industry standards",
      dashboardTitle: "Live Monitoring Dashboard",
      specs: [
        "ISO 10816 Vibration Analysis",
        "ISO 27001 Information Security",
        "Machine Learning Algorithms",
        "Real-Time Data Processing",
        "Cloud & On-Premise Deployment",
        "24/7 Support & Monitoring",
      ],
    },
    industries: {
      title: "Target Industries",
      subtitle: "Tailored solutions for every sector",
      automotive: {
        title: "Automotive",
        description: "Continuous operation on production lines and quality control optimization.",
      },
      energy: {
        title: "Energy & Chemical",
        description: "Critical equipment monitoring and safety standards compliance.",
      },
      logistics: {
        title: "Logistics & Cold Chain",
        description: "Fleet management and temperature-controlled storage optimization.",
      },
    },
    contact: {
      title: "Contact Us",
      subtitle: "Fill out the form to learn about our predictive maintenance solutions",
      name: "Your Name",
      namePlaceholder: "Enter your name",
      email: "Email",
      emailPlaceholder: "example@company.com",
      company: "Company",
      companyPlaceholder: "Enter your company name",
      message: "Your Message",
      messagePlaceholder: "Tell us about your project...",
      submit: "Submit",
      sending: "Sending...",
      successTitle: "Message received!",
      successMessage: "We will get back to you shortly.",
      errorTitle: "An error occurred",
      errorMessage: "Please try again later.",
      infoTitle: "Why Predictivo?",
      infoItems: [
        "Industry 4.0 compatible solutions",
        "24/7 technical support",
        "Fast integration process",
        "ISO certified systems",
      ],
      responseTime: "Average response time: 24 hours",
    },
    footer: {
      copyright: "Predictivo. All rights reserved.",
      tagline: "Predictive maintenance solutions",
    },
  },
};

export function getTranslation(lang: Language) {
  return translations[lang];
}
