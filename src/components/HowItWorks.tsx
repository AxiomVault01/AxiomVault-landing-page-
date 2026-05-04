import { motion } from 'motion/react';

const steps = [
  {
    title: 'Data Ingestion',
    description: 'Collect data from multiple sources in real time',
    image: '/dataingestion.svg'
  },
  {
    title: 'AI Detection',
    description: 'AI analyzes patterns and detects anomalies',
    image: '/public/aidetection.svg'
  },
  {
    title: 'Alerts',
    description: 'Instant alerts on high-risk activities',
    image: '/alerts.svg'
  },
  {
    title: 'Investigation',
    description: 'Analyze and resolve fraud cases quickly',
    image: '/investigation.svg'
  }
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
            Understand how our AI-powered system detects and prevents fraud in real time
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 border border-slate-200">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">
                {step.title}
              </h3>
              <p className="text-slate-500 text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
