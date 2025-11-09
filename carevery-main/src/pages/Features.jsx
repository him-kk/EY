import React from "react";
import { motion } from "framer-motion";
import { Activity, Bell, Calendar, CreditCard, FileText, MapPin, Shield, Star, Users, Zap, Sparkles } from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "24/7 Vehicle Monitoring",
    description: "Continuous tracking of all critical systems including engine, brakes, battery, and 50+ other parameters",
    benefits: [
      "Real-time data analysis",
      "No additional device needed",
      "Works with existing systems",
      "Automatic updates"
    ],
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "Get notified only when something needs attention with clear priority levels and detailed explanations",
    benefits: [
      "Urgent, Important, or Routine flags",
      "Clear explanations in simple language",
      "Multiple notification channels",
      "Customizable alert preferences"
    ],
    color: "from-[#C8A882] to-[#D4B896]"
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Book appointments via app, call, or SMS with multiple service center options",
    benefits: [
      "Weekend and evening slots",
      "Pick-up and drop facility",
      "Instant confirmation",
      "Easy rescheduling"
    ],
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: CreditCard,
    title: "Cost Transparency",
    description: "Exact cost estimate before you commit with no hidden charges or surprises",
    benefits: [
      "Upfront pricing",
      "Cost comparison: preventive vs breakdown",
      "Special discounts for early booking",
      "Flexible payment options"
    ],
    color: "from-green-500 to-green-600"
  },
  {
    icon: Shield,
    title: "Genuine Parts & Warranty",
    description: "Only manufacturer-approved parts used by certified technicians with complete documentation",
    benefits: [
      "1-year warranty on all repairs",
      "OEM parts guaranteed",
      "Certified technician network",
      "Complete service records"
    ],
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: FileText,
    title: "Digital Service History",
    description: "Complete digital records of all maintenance and repairs accessible anytime",
    benefits: [
      "Cloud-based storage",
      "Easy access via app",
      "Increases resale value",
      "Never lose paperwork"
    ],
    color: "from-indigo-500 to-indigo-600"
  },
  {
    icon: MapPin,
    title: "Nationwide Network",
    description: "Access to certified service centers across India for consistent quality service",
    benefits: [
      "500+ service centers",
      "Same quality everywhere",
      "Coverage in all major cities",
      "Roadside assistance available"
    ],
    color: "from-red-500 to-red-600"
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Personal assistance from our expert team available 24/7 via phone, chat, or email",
    benefits: [
      "24/7 customer support",
      "Dedicated account manager",
      "Technical assistance",
      "Quick response time"
    ],
    color: "from-teal-500 to-teal-600"
  },
  {
    icon: Zap,
    title: "Instant Recommendations",
    description: "AI-powered suggestions for optimal vehicle maintenance based on your driving patterns",
    benefits: [
      "Personalized advice",
      "Driving pattern analysis",
      "Seasonal reminders",
      "Cost optimization tips"
    ],
    color: "from-yellow-500 to-yellow-600"
  },
  {
    icon: Star,
    title: "Premium Experience",
    description: "White-glove service with car wash, sanitization, and detailed inspection reports",
    benefits: [
      "Complimentary car wash",
      "Full sanitization",
      "Detailed inspection report",
      "Premium waiting lounge"
    ],
    color: "from-pink-500 to-pink-600"
  }
];

export default function Features() {
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
            <span className="text-sm font-medium text-[#C8A882]">Complete Solution</span>
          </div>
          
          <h1 className="font-serif font-medium text-[length:var(--font-h1)] text-[#0F0F0F] mb-6 leading-tight">
            Powerful Features
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-[1.618]">
            Everything you need for complete peace of mind and hassle-free vehicle maintenance
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#C8A882]/20 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl font-bold text-[#0F0F0F] mb-3 group-hover:text-[#C8A882] transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Benefits List */}
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <div className="w-5 h-5 bg-[#C8A882]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-[#C8A882] rounded-full" />
                      </div>
                      {benefit}
                    </li>
                  ))}
                </ul>
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
          className="text-center"
        >
          <div className="bg-white rounded-3xl p-12 shadow-lg border border-[#C8A882]/20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0F0F] mb-4">
              Experience All These Features
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-[1.618]">
              Get started today and discover why thousands of drivers trust CarGuardian AI
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