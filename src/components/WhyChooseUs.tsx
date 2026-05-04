import { motion } from 'motion/react';

const values = [
  {
    label: 'Time Saved',
    value: '75%',
    tag: 'Save Time',
    description: 'Reduce manual audit time by 75% with automated fraud detection and risk scoring.'
  },
  {
    label: 'Detection Rate',
    value: '98%',
    tag: 'Increase Accuracy',
    description: 'AI-powered analysis detects patterns humans might miss, improving fraud detection rates.'
  },
  {
    label: 'SSL Encryption',
    value: '256-bit',
    tag: 'Ensure Security',
    description: 'Bank-grade encryption and compliance with government security standards.'
  },
  {
    label: 'Avg. Recovered',
    value: '$2.5M',
    tag: 'Boost ROI',
    description: 'Recover more fraudulent funds and prevent future losses with proactive monitoring.'
  }
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
            Proven results that protect your organization and improve audit efficiency
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col items-start gap-4"
            >
              <div className="text-3xl font-bold text-slate-900 font-display">
                {item.value}
              </div>
              <div className="text-xs font-normal uppercase tracking-widest text-slate-400">
                {item.label}
              </div>
              <div className="mt-4 py-1.5  rounded-full text-sm font-bold text-slate-900">
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
