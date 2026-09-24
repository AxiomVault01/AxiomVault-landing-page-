import {
  AlertTriangle,
  BarChart3,
  CheckCircle,
  FileSearchCornerIcon,
  Icon,
  Lock,
} from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    icon: Lock,
    title: "Secure Login & Access",
    description:
      "Multi-factor authentication ensures only authorized auditors can access the system.",
    number: 1,
  },
  {
    icon: BarChart3,
    title: "Dashboard Overview",
    description:
      "View all high-risk cases at a glance with color-coded risk indicators and priority alerts.",
    number: 2,
  },
  {
    icon: FileSearchCornerIcon,
    title: "Case Investigation",
    description:
      "Drill down into suspicious records with side-by-side comparisons and detailed analysis.",
    number: 3,
  },
  {
    icon: AlertTriangle,
    title: "Risk Assessment",
    description:
      "AI-powered scoring evaluates fraud probability and suggests next actions.",
    number: 4, 
  },
  {
    icon: CheckCircle,
    title: "Documentation",
    description:
      "Generate comprehensive reports and maintain complete audit trails automatically.",
    number: 5,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 font-display">
            How AxiomVault Works
          </h2>
          <p className="text-slate-500 text-md max-w-2xl mx-auto">
            A streamlined workflow designed for efficient fraud detection and
            investigation.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-[#F9FAFB] p-8 rounded-md flex items-center gap-5"
            >
              <div className="bg-[#0A1F44] px-6 py-3 rounded-xl text-lg font-bold text-white">
                {" "}
                {step.number}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 font-display flex items-center gap-1">
                  <step.icon size={20} className="text-[#A64712]" /> {step.title}
                </h3>
                <p className="text-slate-500 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
