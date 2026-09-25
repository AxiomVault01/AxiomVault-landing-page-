import { ArrowBigDown, LineChart, Lock, Target } from 'lucide-react';
import { motion } from 'motion/react';
import { BsLightning, BsThunderbolt, BsThunderboltFill } from 'react-icons/bs';

const values = [
  {
    id: 1,
    icon: BsLightning,
    value: "75%",
    tag: "Time Saved",
    description:
      "Reduce manual audit time by 75% with automated fraud detection and risk scoring.",
  },
  {
    id: 2,
    icon: Target,
    value: "98%",
    tag: "Detection Rate",
    description:
      "AI-powered analysis detects patterns humans might miss, improving fraud detection rates.",
  },
  {
    id: 3,
    icon: Lock,
    value: "256-bit",
    tag: "SSL Encryption",
    description:
      "Bank-grade encryption and compliance with government security standards.",
  },
  {
    id: 4,
    icon: LineChart,
    value: "$2.5M",
    tag: "Boost ROI",
    description:
      "Recover more fraudulent funds and prevent future losses with proactive monitoring.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 bg-slate-50/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 font-display">
            Why Organizations Choose AxiomVault
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Proven results that protect your organization and improve audit
            efficiency
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {values.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[1rem] border border-slate-200 shadow-sm flex flex-col items-start gap-4 "
            >
              <div className="w-10 h-10  rounded-lg flex items-center justify-center  bg-[#0A1F44] text-white">
                <item.icon size={18} />
              </div>
              <div className="text-3xl font-bold uppercase tracking-widest text-[#0A1F44]">
                {item.value}
              </div>
              <div className=" rounded-full text-xs font-bold text-slate-400">
                {item.tag}
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
