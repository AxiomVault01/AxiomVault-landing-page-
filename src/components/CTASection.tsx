import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 bg-[#0a1128] text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            Start Detecting Fraud Before It Happens
          </h2>
          <p className="text-slate-400 text-lg mb-10">
            Join 250+ enterprises using AxiomVault to detect and prevent payroll fraud
          </p>
          <a href='#waitlist'
           className="bg-white text-brand-dark font-bold px-8 py-4 rounded-xl flex items-center gap-2 mx-auto hover:bg-slate-100 transition-all group shadow-2xl  shadow-white/10 justify-center w-xs">
            Get Started Now
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
