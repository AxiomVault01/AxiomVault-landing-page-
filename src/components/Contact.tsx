import { Mail, MapIcon, Phone } from "lucide-react";
import { motion } from "motion/react";

const contactData = [
  {
    id: 1,
    icon: Mail,
    title: "Email Us",
    description: "We'll respond within 24 hours",
    details: "support@axiomvault.gov",
  },
  {
    id: 2,
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri from 8am to 5pm",
    details: "+234 813 203-568",
  },
  {
    id: 3,
    icon: MapIcon,
    title: "Visit Us",
    description: "Come say hello at our office",
    details: "Anambra State",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-slate-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-display">
            Get in Touch
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-10">
            Have questions? Our team is here to help you get started.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactData.map((data, index) => (
            <motion.div
              key={data.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-[1rem] shadow-md bg-white text-center`}
            >
              <div className="bg-[#0A1F44] text-white  rounded-md p-3 w-fit mx-auto">
                <data.icon size={27} />
              </div>
              <h1 className="text-[#101828] mt-3 font-bold text-[22.43px]">
                {data.title}
              </h1>
              <p className="text-[19.62px] mt-3 mb-2 text-[#4A5565]">
                {data.description}
              </p>
              <span className="text-[#101828] font-bold text-[22.43px]">
                {data.details}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
