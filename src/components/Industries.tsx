import { motion } from 'motion/react';
import { Building2, HeartPulse, Briefcase, Landmark } from 'lucide-react';

const industries = [
  {
    icon: Building2,
    title: 'Banking & Fintech',
    description: 'Detect fraudulent transactions, monitor account activity, and prevent financial losses in real time.'
  },
  {
    icon: HeartPulse,
    title: 'Healthcare',
    description: 'Protect sensitive patient data and detect unusual access or billing fraud.'
  },
  {
    icon: Briefcase,
    title: 'Enterprise',
    description: 'Monitor internal systems, detect anomalies, and safeguard business operations.'
  },
  {
    icon: Landmark,
    title: 'Government',
    description: 'Ensure transparency by detecting irregular transactions and preventing financial misuse.'
  }
];

export default function Industries() {
  return (
    <section id="solutions" className="py-32 bg-[url('/bg.gif')] bg-cover bg-center h-[50%] lg:h-screen relative">
      {/* Decorative effect */}
      <div className="absolute top-0 right-0 w-full h-full bg-black/80  inset-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
            Solutions for Every Industry
          </h2>
          <p className="text-white text-md max-w-2xl mx-auto">
            AxiomVault adapts to different sectors to detect and prevent fraud in real time.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/5 transition-colors  hover:text-white "
            >
              <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center text-white mb-6">
                <item.icon size={18} />
              </div>
              <h3 className="text-xl font-bold text-brand  mb-4 font-display">
                {item.title}
              </h3>
              <p className=" text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
