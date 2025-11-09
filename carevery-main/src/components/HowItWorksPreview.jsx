
import React from "react";
import { motion } from "framer-motion";
import { Gauge, Lightbulb, Bell, Calendar, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const steps = [
  {
    icon: Gauge,
    number: "01",
    title: "Continuous Monitoring",
    description: "Your vehicle's 50+ parameters tracked 24/7",
    color: "from-blue-600 to-blue-500"
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Smart Predictions",
    description: "AI predicts issues 2-4 weeks before failure",
    color: "from-cyan-600 to-cyan-500"
  },
  {
    icon: Bell,
    number: "03",
    title: "Personal Alert",
    description: "Clear explanation of what's wrong and cost estimate",
    color: "from-orange-600 to-orange-500"
  },
  {
    icon: Calendar,
    number: "04",
    title: "Easy Scheduling",
    description: "Book service at your convenience with free pick-up",
    color: "from-green-600 to-green-500"
  }
];

export default function HowItWorksPreview() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">Simple Process</span>
          </div>
          
          <h2 className="font-serif text-[length:var(--font-h2)] font-bold text-[#0F0F0F] mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-[1.618]">
            Four simple steps to worry-free driving
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-white rounded-3xl p-8 border border-[#C8A882]/20 hover:border-[#C8A882]/50 transition-all duration-300 hover:shadow-xl h-full">
                <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-sm font-bold text-[#C8A882] mb-2">{step.number}</div>
                <h3 className="text-xl font-bold text-[#0F0F0F] mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#C8A882]/30 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to={createPageUrl("HowItWorks")}
            className="inline-flex items-center gap-2 text-[#C8A882] font-semibold hover:text-[#FF5C8D] transition-colors group"
          >
            See Detailed Process
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
