import { motion } from 'motion/react';
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id='hero' className="relative min-h-screen  bg-[url('/Hero.png')] bg-cover bg-center pt-40 pb-20 overflow-hidden bg-[#020617]">
      {/*  */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center my-39">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-5xl font-bold max-w-4xl mb-6 leading-[1.1] tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70"
        >
          Protect Your Organization from Payroll Fraud
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white text-sm md:text-xl max-w-3xl mb-12 leading-relaxed"
        >
          AxiomVault's Risk Command Center uses advanced AI to detect suspicious
          payroll activities, duplicate accounts, and fraud patterns—designed
          specifically for non-technical auditors in government and financial
          institutions.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center gap-6"
        >
          <a
            href="#waitlist"
            className="group relative flex items-center gap-2 bg-[#ffffff] text-[#0A1F44] font-semibold px-8 py-4 rounded-xl transition-all shadow-xl shadow-blue-900/20 text-[20.54px]"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
}
