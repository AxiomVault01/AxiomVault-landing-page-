import { motion } from 'motion/react';

const stats = [
  { label: 'Enterprises', value: '150+' },
  { label: 'Fraud Detected', value: '2.5B' },
  { label: 'Cases Analyzed', value: '500K+' },
  { label: 'Client Satisfaction', value: '98%' },
];

export default function Stats() {
  return (
    <section className="bg-gray-100 py-10 border-b border-slate-100 relative z-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col gap-2 "
            >
              <div className="text-xl md:text-3xl font-bold font-display text-brand tracking-tight">
                {stat.value}
              </div>
              <div className="text-slate-500 font-medium text-xs md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
