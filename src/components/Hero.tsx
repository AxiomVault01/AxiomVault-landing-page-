import { motion } from 'motion/react';
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen  bg-[url('/hero.gif')] bg-cover bg-center pt-40 pb-20 overflow-hidden bg-[#020617]">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-600/20 blur-[120px] rounded-full opacity-50" />
        <div className="absolute top-40 left-1/4 w-[400px] h-[400px] bg-blue-600/20 blur-[100px] rounded-full opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8"
        >
         <span className='bg-white rounded-full w-2 h-2'></span>
          AI-Powered Financial Fraud Detection
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-5xl font-bold max-w-4xl mb-6 leading-[1.1] tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70"
        >
          Detect Fraud Before It Happens
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white text-sm md:text-xl max-w-2xl mb-12 leading-relaxed"
        >
          AxiomVault's Risk Command Center uses advanced AI to detect suspicious payroll activities, duplicate accounts, and fraud patterns—designed specifically for non-technical auditors in government and financial institutions.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center gap-6"
        >
          <button className="group relative flex items-center gap-2 bg-[#102a43] hover:bg-blue-900 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-xl shadow-blue-900/20">
            Join the Waitlist
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <p className="text-white text-sm tracking-wide">
            Trusted by Tier-1 banks • Enterprise • Government
          </p>
        </motion.div>

        {/* Laptop/Product Visual */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 relative px-4 md:px-0 w-full"
        >
          {/* Dashboard Frame */}
          <div className="relative aspect-[16/10]  rounded-2xl shadow-2xl overflow-hidden group h-[50%] w-full">
            
            {/* Placeholder Image (represents the dashboard) */}
            <img 
              src="/public/laptop.svg" 
              alt="Dashboard"
              className="w-full object-cover rounded-xl brightness-90 contrast-125"
            />
            
            {/* Glowing UI elements (simulating the alerts in the screenshot) */}
            <motion.div 
              animate={{ x: [0, 10, 0], y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute top-1/4 left-10 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-xl"
            >
              {/* <div className="w-32 h-2 bg-red-500/30 rounded mb-2" />
              <div className="w-20 h-2 bg-white/20 rounded" /> */}
            </motion.div>

            {/* <motion.div 
              animate={{ x: [0, -10, 0], y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 5, delay: 1 }}
              className="absolute bottom-1/4 right-10 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-xl"
            >
              <div className="text-[10px] text-blue-400 font-bold mb-1 uppercase tracking-wider">Alert Level: High</div>
              <div className="w-40 h-3 bg-blue-500/40 rounded" />
            </motion.div> */}
          </div>

          {/* Slider Controls (decorative) */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
            <button className="text-brand transition-colors p-1 cursor-pointer">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="text-brand  transition-colors p-1 cursor-pointer">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
