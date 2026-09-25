import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "AxiomVault transformed our audit process. We detected 15M in fraudulent payroll activities within the first month.",
    author: "Maria Hakeem",
    role: "Chief Internal Auditor",
    company: "Department of Finance",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "The AI-powered detection is incredibly accurate. It flags suspicious patterns that would take us weeks to identify manually.",
    author: "Carlos Jefferson",
    role: "Risk Management Director",
    company: "National Bank Authority",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "User-friendly interface designed for non-technical staff. Our entire audit team was trained and productive in just 2 days.",
    author: "Amaka Kachi",
    role: "Compliance Officer",
    company: "Government Service Insurance",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-display">
            Trusted by Enterprises & Financial Institutions
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            See what audit professionals say about AxiomVault
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-[3rem] border border-slate-200 bg-white hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300"
            >
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <blockquote className="text-slate-800 text-lg mb-8 leading-relaxed font-medium italic">
                "{item.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                {/* <img 
                  src={item.image} 
                  alt={item.author}
                  className="w-14 h-14 rounded-2xl object-cover"
                /> */}
                <div>
                  <div className="font-bold text-slate-900">{item.author}</div>
                  <div className="text-sm text-slate-500">{item.role}</div>
                  <div className="text-sm font-semibold text-brand-red">{item.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
