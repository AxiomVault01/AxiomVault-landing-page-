import { motion } from 'motion/react';
import { Upload, Brain, Activity, AlertTriangle, FileText, Search } from 'lucide-react';

const capabilities = [
  {
    icon: Upload,
    title: 'Upload Financial Data',
    description: 'Securely upload payroll, vendor, and payment data in CSV or Excel formats.'
  },
  {
    icon: Brain,
    title: 'AI Anomaly Detection',
    description: 'Automatically detect suspicious patterns, duplicate payments, and outliers.'
  },
  {
    icon: Activity,
    title: 'Real-Time Monitoring',
    description: 'Track transactions, alerts, and risk activity live across systems.'
  },
  {
    icon: AlertTriangle,
    title: 'Risk Scoring & Alerts',
    description: 'Each anomaly is assigned a risk level (Low / Medium / High) with explanations.'
  },
  {
    icon: FileText,
    title: 'Evidence & Audit Reports',
    description: 'Generate tamper-proof reports for audits and compliance.'
  },
  {
    icon: Search,
    title: 'Case Investigation Workflow',
    description: 'Track, assign, and resolve fraud cases efficiently.'
  }
];

export default function Capabilities() {
  return (
    <section id="features" className="py-20 bg-slate-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-display">
            Core Product Capabilities
          </h2>
          <p className="text-slate-500 text-md max-w-2xl mx-auto">
            Everything you need to detect, investigate, and prevent fraud in one platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-6"
            >
              <div className="w-10 h-10  rounded-lg flex items-center justify-center border-2 border-gray-300">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
