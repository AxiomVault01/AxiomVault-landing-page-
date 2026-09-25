import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export default function WaitlistForm() {
  return (
    <section id="waitlist" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-[#f0f4ff] rounded-[3rem] p-8 md:p-16 border border-blue-100"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 font-display">
              Get Early Access
            </h2>
            <p className="text-slate-600 max-w-md mx-auto">
              Join the waitlist and be among the first to experience smarter cybersecurity protection.
            </p>
          </div>

          <form className="space-y-6 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2 text-left">
              <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
              <input 
                type="text" 
                placeholder="Enter your full name"
                className="w-full px-6 py-4 rounded-xl bg-white border border-slate-200 outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-slate-900"
              />
            </div>
            
            <div className="space-y-2 text-left">
              <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="w-full px-6 py-4 rounded-xl bg-white border border-slate-200 outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-slate-900"
              />
            </div>

            <div className="space-y-2 text-left">
              <label className="text-sm font-bold text-slate-700 ml-1">Company's Name</label>
              <input 
                type="text" 
                placeholder="Enter your email address"
                className="w-full px-6 py-4 rounded-xl bg-white border border-slate-200 outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-slate-900"
              />
            </div>

            <button className="w-full bg-[#0a1128] hover:bg-blue-950 text-white font-bold py-5 rounded-xl flex items-center justify-center gap-3 transition-all group shadow-xl">
              Join the Waitlist
              <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
