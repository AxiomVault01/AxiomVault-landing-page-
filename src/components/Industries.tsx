import { motion } from 'motion/react';
import { Building2, HeartPulse, Briefcase, Landmark, Lock, Users2 } from 'lucide-react';

const industries = [
  {
    icon: Building2,
    title: "For Enterprises",
    description:
      "Protect your organization from internal fraud with automated payroll monitoring.",
  },
  {
    icon: Lock,
    title: "For Financial Institutions",
    description:
      "Detect fraudulent accounts and suspicious banking activity patterns.",
  },
  {
    icon: Users2,
    title: "For Audit Firms",
    description:
      "Streamline client audits with powerful investigation and reporting tools.",
  },
];

export default function Industries() {
  return (
    <section id="solutions" className="">
      {/* Decorative effect */}
      {/* <div className="absolute top-0 right-0 w-full h-full bg-black/80  inset-0" /> */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
            Built for Your Industry
          </h2>
          <p className="text-white text-md max-w-2xl mx-auto">
            Tailored solutions for different organizational needs
          </p>
        </div>

        <div className="flex  gap-8">
          {industries.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#F9FAFB] backdrop-blur-sm p-8 rounded-3xl border border-white/10 flex-1 "
            >
              <div className="w-20 h-20 bg-[#364153] rounded-full flex items-center justify-center text-white mb-6 m-auto">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#101828]  mb-4 font-display text-center">
                {item.title}
              </h3>
              <p className=" text-sm leading-relaxed text-center ">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
