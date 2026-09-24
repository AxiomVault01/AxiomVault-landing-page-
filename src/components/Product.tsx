import { motion } from 'motion/react';
import { Upload, Brain, Activity, AlertTriangle, FileText, Search, BarChart, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "AI-Powered Detection",
    description:
      "Machine learning algorithms that identify suspicious patterns and anomalies across your payroll data.",
  },
  {
    icon: BarChart,
    title: "Analytics Dashboard",
    description:
      "Visual insights designed for auditors to quickly understand risk levels and trends at a glance.",
  },
  {
    icon: Search,
    title: "Investigate",
    description:
      "Deep-dive tools to examine employee records, bank accounts, and flag duplicate or unusual activity.",
  }
];

export default function Product() {
  return (
    <section id="product" className="py-20 bg-slate-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-display">
            Product Features
          </h2>
          <p className="text-slate-500 text-md max-w-2xl mx-auto">
            Everything you need to detect, investigate, and prevent fraud in one
            platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[1rem] border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-6"
            >
              <div className="w-10 h-10  rounded-lg flex items-center justify-center  bg-[#0A1F44] text-white">
                <item.icon size={18} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">
                  {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
           <button className='flex gap-3 items-center cursor-pointer'>learn more <ArrowRight size={15}/></button>   
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
