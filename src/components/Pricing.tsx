import { useState } from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Free Access',
    price: '0',
    description: 'Limited features',
    cta: 'Join Free Access',
    features: [
      'Limited transaction monitoring up to 7 days',
      'Basic AI detection',
      'Limited Alerts',
      'A user account',
      'Basic dashboard access'
    ]
  },
  {
    name: 'Starter',
    price: '49,999',
    description: 'Limited features',
    cta: 'Start Free Trial',
    popular: false,
    features: [
      'Up to 5,000 employee records',
      'Basic AI detection',
      'Standard dashboard',
      '3 user accounts',
      'Email support'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Custom pricing',
    cta: 'Contact Sales',
    popular: true,
    features: [
      'Unlimited employee records',
      'Advanced AI with custom models',
      'Full analytics & reporting',
      'Unlimited user accounts',
      'Dedicated support team',
      'Custom integrations'
    ]
  }
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="pricing" className="py-32 bg-slate-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-display">
            Simple, Transparent Pricing
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-10">
            Start with a 30-day free trial
          </p>

          {/* Toggle */}
          <div className="inline-flex p-1 bg-slate-200 rounded-xl mb-12">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                billingCycle === 'monthly' ? 'bg-[#102a43] text-white shadow-lg' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                billingCycle === 'yearly' ? 'bg-[#102a43] text-white shadow-lg' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-[2.5rem] border ${
                tier.popular 
                  ? 'bg-[#102a43] text-white border-[#102a43] shadow-2xl shadow-blue-900/20' 
                  : 'bg-white text-slate-900 border-slate-200'
              }`}
            >
              {tier.popular && (
                <div className="absolute top-6 right-6 px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold mb-2 font-display">{tier.name}</h3>
              <p className={tier.popular ? 'text-slate-400' : 'text-slate-500'}>
                {tier.description}
              </p>
              
              <div className="my-8">
                <span className="text-4xl font-bold font-display">
                  {tier.price === 'Custom' ? 'Custom' : `N${tier.price}`}
                </span>
                {tier.price !== 'Custom' && (
                  <span className={`text-sm ${tier.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                    / month
                  </span>
                )}
              </div>

              <div className="space-y-4 mb-10">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex gap-3 text-sm">
                    <Check className={`w-5 h-5 flex-shrink-0 ${tier.popular ? 'text-blue-400' : 'text-blue-600'}`} />
                    <span className={tier.popular ? 'text-slate-300' : 'text-slate-600'}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                tier.popular 
                  ? 'bg-white text-[#102a43] hover:bg-slate-100' 
                  : 'bg-[#102a43] text-white hover:bg-blue-950 shadow-xl shadow-blue-950/10'
              }`}>
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
