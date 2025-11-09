import React from "react";
import { motion } from "framer-motion";
import { DollarSign, Clock, Shield, TrendingUp, Heart, Zap, Award, Users, Sparkles } from "lucide-react";

const mainBenefits = [
  {
    icon: DollarSign,
    title: "Save Money",
    description: "Preventive maintenance costs 70% less than emergency repairs",
    details: [
      "Fix small issues for ₹3,000-5,000 before they become ₹50,000+ disasters",
      "No surprise bills - know costs upfront",
      "Avoid expensive towing charges",
      "Better fuel efficiency with maintained vehicles"
    ],
    stat: "₹45,000",
    statLabel: "Average Annual Savings",
    color: "from-green-500 to-green-600",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80"
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "No unexpected breakdowns disrupting your schedule",
    details: [
      "Pre-scheduled appointments mean no waiting",
      "Average service time reduced by 40%",
      "Pick-up and drop service available",
      "Weekend and evening slots"
    ],
    stat: "40%",
    statLabel: "Less Service Time",
    color: "from-blue-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&q=80"
  },
  {
    icon: Shield,
    title: "Peace of Mind",
    description: "Drive confidently knowing issues are caught early",
    details: [
      "Family safety assured with proactive care",
      "Never worry about highway breakdowns",
      "Transparent communication always",
      "24/7 monitoring gives complete confidence"
    ],
    stat: "24/7",
    statLabel: "Continuous Monitoring",
    color: "from-[#C8A882] to-[#D4B896]",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80"
  },
  {
    icon: TrendingUp,
    title: "Better Vehicle Health",
    description: "Your car lasts longer with timely maintenance",
    details: [
      "Optimal performance maintained",
      "Better resale value with service history",
      "Extended vehicle lifespan",
      "Improved fuel efficiency"
    ],
    stat: "85%",
    statLabel: "Breakdowns Prevented",
    color: "from-orange-500 to-orange-600",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80"
  }
];

const additionalBenefits = [
  {
    icon: Heart,
    title: "Family Safety",
    description: "Ensure your loved ones are always safe on the road"
  },
  {
    icon: Zap,
    title: "Instant Alerts",
    description: "Get notified immediately when attention is needed"
  },
  {
    icon: Award,
    title: "Quality Service",
    description: "Certified technicians and genuine parts guaranteed"
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Dedicated customer care team available 24/7"
  }
];

export default function Benefits() {
  return (
    <div className="pt-32 pb-24 bg-gradient-to-b from-[#F8F2EC] to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#C8A882]/10 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-[#C8A882]" />
            <span className="text-sm font-medium text-[#C8A882]">Why Choose Us</span>
          </div>
          
          <h1 className="font-serif font-medium text-[length:var(--font-h1)] text-[#0F0F0F] mb-6 leading-tight">
            Benefits That Matter
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-[1.618]">
            Real advantages that make a difference in your daily life and driving experience
          </p>
        </motion.div>

        {/* Main Benefits */}
        <div className="space-y-24 mb-24">
          {mainBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>

                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0F0F] mb-4">
                  {benefit.title}
                </h2>

                <p className="text-xl text-gray-600 mb-6 leading-[1.618]">
                  {benefit.description}
                </p>

                <div className="bg-[#F8F2EC] rounded-2xl p-6 mb-6">
                  <div className="text-4xl font-bold text-[#C8A882] mb-2">{benefit.stat}</div>
                  <div className="text-gray-600 font-medium">{benefit.statLabel}</div>
                </div>

                <ul className="space-y-3">
                  {benefit.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#C8A882]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-[#C8A882] rounded-full" />
                      </div>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/20 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0F0F] text-center mb-12">
            More Reasons to Choose Us
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-[#C8A882]/20"
              >
                <div className="w-12 h-12 bg-[#C8A882]/10 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-[#C8A882]" />
                </div>
                <h3 className="font-bold text-lg text-[#0F0F0F] mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-[#C8A882] to-[#D4B896] rounded-3xl p-12 text-white">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Experience These Benefits Today
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              Join thousands of satisfied customers who are saving money and driving with confidence
            </p>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-get-started-modal'))}
              className="bg-white text-[#C8A882] px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Start Your Free Trial
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}