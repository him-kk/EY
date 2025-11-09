
import React from "react";
import { motion } from "framer-motion";
import { DollarSign, Clock, Shield, TrendingUp, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const benefits = [
  {
    icon: DollarSign,
    title: "Save Money",
    description: "Preventive maintenance costs 70% less than emergency repairs",
    stat: "₹45,000",
    statLabel: "Average Annual Savings",
    color: "from-green-600 to-green-500"
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "No unexpected breakdowns disrupting your schedule",
    stat: "40%",
    statLabel: "Less Service Time",
    color: "from-blue-600 to-blue-500"
  },
  {
    icon: Shield,
    title: "Peace of Mind",
    description: "Drive confidently knowing issues are caught early",
    stat: "24/7",
    statLabel: "Continuous Monitoring",
    color: "from-cyan-600 to-cyan-500"
  },
  {
    icon: TrendingUp,
    title: "Better Vehicle Health",
    description: "Your car lasts longer with timely maintenance",
    stat: "85%",
    statLabel: "Breakdowns Prevented",
    color: "from-orange-600 to-orange-500"
  }
];

export default function BenefitsPreview() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
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
            <span className="text-sm font-medium text-blue-600">Why Choose Us</span>
          </div>
          
          <h2 className="font-serif text-[length:var(--font-h2)] font-bold text-[#0F0F0F] mb-4">
            Benefits That Matter
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-[1.618]">
            Real advantages that make a difference in your daily life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-[#C8A882]/20"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-4`}>
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-[#0F0F0F] mb-3">{benefit.title}</h3>
              <p className="text-gray-600 mb-4">{benefit.description}</p>
              
              <div className="pt-4 border-t border-[#C8A882]/20">
                <div className="text-2xl font-bold text-[#C8A882] mb-1">{benefit.stat}</div>
                <div className="text-sm text-gray-500">{benefit.statLabel}</div>
              </div>
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
            to={createPageUrl("Benefits")}
            className="inline-flex items-center gap-2 text-[#C8A882] font-semibold hover:text-[#FF5C8D] transition-colors group"
          >
            Explore All Benefits
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
