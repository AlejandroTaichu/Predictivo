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
  { name: "SAP", icon: Database },
  { name: "Oracle", icon: Server },
  { name: "Microsoft", icon: Cloud },
  { name: "Salesforce", icon: Layers },
  { name: "ServiceNow", icon: Workflow },
  { name: "Siemens", icon: Box },
  { name: "Rockwell", icon: GitBranch },
  { name: "Schneider", icon: BarChart3 },
];

export function Integrations() {
  const { t } = useLanguage();

  return (
    <section
      id="integrations"
      className="py-16 md:py-20 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="font-mono text-2xl md:text-3xl font-bold text-foreground mb-3"
            data-testid="text-integrations-title"
          >
            {t.integrations.title}
          </h2>
          <p
            className="text-muted-foreground max-w-xl mx-auto"
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
          className="grid grid-cols-4 md:grid-cols-8 gap-6 md:gap-8"
        >
          {integrations.map((integration, index) => {
            const Icon = integration.icon;
            return (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col items-center gap-2 group"
                data-testid={`integration-${integration.name.toLowerCase()}`}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg bg-background border border-border flex items-center justify-center opacity-40 group-hover:opacity-70 transition-opacity duration-300">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-muted-foreground" />
                </div>
                <span className="text-xs font-medium text-muted-foreground opacity-60 group-hover:opacity-100 transition-opacity">
                  {integration.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
