import React from "react";
import { motion } from "framer-motion";
import { Activity, Brain, Bell, Calendar, CheckCircle2, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Activity,
    number: "01",
    title: "Continuous Monitoring",
    description: "Your vehicle's data is monitored in real-time - engine temperature, battery health, brake performance, and 50+ other parameters",
    details: [
      "24/7 automatic tracking",
      "No additional device needed",
      "Works with existing vehicle systems",
      "Real-time data analysis"
    ],
    color: "from-[#C8A882] to-[#D4B896]",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80"
  },
  {
    icon: Brain,
    number: "02",
    title: "Smart Predictions",
    description: "Our AI analyzes patterns and predicts issues 2-4 weeks before they become problems",
    details: [
      "Advanced machine learning algorithms",
      "Predictive maintenance alerts",
      "Early problem detection",
      "Accuracy rate over 90%"
    ],
    color: "from-[#C8A882] to-[#D4B896]",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  {
    icon: Bell,
    number: "03",
    title: "Personal Alert",
    description: "We contact you with specific details - what's the issue, how urgent is it, and exact cost estimate",
    details: [
      "Clear, jargon-free explanations",
      "Exact cost estimates upfront",
      "Priority level indicators",
      "Multiple notification channels"
    ],
    color: "from-[#C8A882] to-[#D4B896]",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
  },
  {
    icon: Calendar,
    number: "04",
    title: "Convenient Scheduling",
    description: "Book service at your preferred time and location with free pick-up and drop available",
    details: [
      "Flexible appointment times",
      "Weekend slots available",
      "Free pick-up & drop service",
      "Service at your doorstep"
    ],
    color: "from-[#C8A882] to-[#D4B896]",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&q=80"
  }
];

export default function HowItWorks() {
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
            <span className="text-sm font-medium text-[#C8A882]">Simple Process</span>
          </div>
          
          <h1 className="font-serif font-medium text-[length:var(--font-h1)] text-[#0F0F0F] mb-6 leading-tight">
            How It Works
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-[1.618]">
            Four simple steps to worry-free driving and complete peace of mind
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
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
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-5xl font-bold text-[#C8A882]/20">{step.number}</span>
                </div>

                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0F0F] mb-4">
                  {step.title}
                </h2>

                <p className="text-xl text-gray-600 mb-6 leading-[1.618]">
                  {step.description}
                </p>

                <div className="space-y-3">
                  {step.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#C8A882] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/20 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <div className="bg-white rounded-3xl p-12 shadow-lg border border-[#C8A882]/20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0F0F] mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-[1.618]">
              Join thousands of drivers who never worry about unexpected breakdowns
            </p>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-get-started-modal'))}
              className="bg-gradient-to-r from-[#C8A882] to-[#D4B896] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Start Free Trial
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}