import { motion } from "framer-motion";
import {
  Database,
  Cloud,
  Server,
  Layers,
  GitBranch,
  Workflow,
  Box,
  BarChart3
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const integrations = [
  { name: "SAP", icon: Database, gradient: "from-blue-500 to-blue-600" },
  { name: "Oracle", icon: Server, gradient: "from-red-500 to-red-600" },
  { name: "Microsoft", icon: Cloud, gradient: "from-sky-500 to-sky-600" },
  { name: "Salesforce", icon: Layers, gradient: "from-indigo-500 to-indigo-600" },
  { name: "ServiceNow", icon: Workflow, gradient: "from-green-500 to-green-600" },
  { name: "Siemens", icon: Box, gradient: "from-cyan-500 to-cyan-600" },
  { name: "Rockwell", icon: GitBranch, gradient: "from-orange-500 to-orange-600" },
  { name: "Schneider", icon: BarChart3, gradient: "from-violet-500 to-violet-600" },
];

export function Integrations() {
  const { t } = useLanguage();

  return (
    <section
      id="integrations"
      className="py-16 md:py-24 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6"
          >
            <span className="text-primary font-semibold text-sm">Integrations</span>
          </motion.div>
          <h2
            className="font-mono text-3xl md:text-4xl font-bold text-foreground mb-3"
            data-testid="text-integrations-title"
          >
            {t.integrations.title}
          </h2>
          <p
            className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
            data-testid="text-integrations-subtitle"
          >
            {t.integrations.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6"
        >
          {integrations.map((integration, index) => {
            const Icon = integration.icon;
            return (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group flex flex-col items-center gap-3"
                data-testid={`integration-${integration.name.toLowerCase()}`}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotateZ: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${integration.gradient} flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1`}
                >
                  <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </motion.div>
                <motion.span
                  initial={{ opacity: 0.6 }}
                  whileHover={{ opacity: 1 }}
                  className="text-xs md:text-sm font-semibold text-foreground transition-all duration-300"
                >
                  {integration.name}
                </motion.span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Integration Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-16 border-t border-border"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent mb-2"
              >
                15+
              </motion.div>
              <p className="text-muted-foreground text-sm md:text-base">Kurumsal Entegrasyon</p>
            </div>
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent mb-2"
              >
                99.9%
              </motion.div>
              <p className="text-muted-foreground text-sm md:text-base">Tam Zamanlı Projeler</p>
            </div>
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent mb-2"
              >
                &lt;1 Gün
              </motion.div>
              <p className="text-muted-foreground text-sm md:text-base">Kolay Kurulum</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
