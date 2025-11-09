
import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, DollarSign, Clock, X, Check } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Unexpected Breakdowns",
    description: "Car stops working during important trips or daily commute"
  },
  {
    icon: DollarSign,
    title: "Expensive Emergency Repairs",
    description: "Small issues become major problems costing ₹50,000+"
  },
  {
    icon: Clock,
    title: "Wasted Time",
    description: "Hours spent at service centers without appointments"
  }
];

const solutions = [
  {
    icon: Check,
    title: "Early Warnings",
    description: "Know about problems 2-4 weeks before they happen"
  },
  {
    icon: Check,
    title: "70% Cost Savings",
    description: "Fix issues early when they're cheap and easy"
  },
  {
    icon: Check,
    title: "Convenient Scheduling",
    description: "Book service at your preferred time, free pick-up available"
  }
];

export default function ProblemSolution() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-red-100 rounded-full px-4 py-2 mb-6">
              <X className="w-4 h-4 text-red-600" />
              <span className="text-sm font-medium text-red-700">Common Problems</span>
            </div>

            <h2 className="font-serif text-[length:var(--font-h2)] font-bold text-[#0F0F0F] mb-6">
              Tired of Car Troubles Ruining Your Day?
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-[1.618]">
              Most car problems don't happen suddenly - they give warning signs weeks in advance. 
              The problem? You don't notice them until it's too late.
            </p>

            <div className="space-y-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={problem.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-6 bg-white rounded-3xl border border-red-200 hover:border-red-300 transition-colors shadow-lg"
                >
                  <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <problem.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0F0F0F] mb-1">{problem.title}</h3>
                    <p className="text-gray-600">{problem.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
              <Check className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">Our Solution</span>
            </div>

            <h2 className="font-serif text-[length:var(--font-h2)] font-bold text-[#0F0F0F] mb-6">
              We Catch Problems Before They Catch You
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-[1.618]">
              Our smart system continuously monitors your vehicle and predicts issues 
              before they become expensive emergencies.
            </p>

            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl border border-blue-200 hover:border-blue-300 transition-colors shadow-lg"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0F0F0F] mb-1">{solution.title}</h3>
                    <p className="text-gray-600">{solution.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.dispatchEvent(new CustomEvent('open-get-started-modal'))}
              className="mt-8 w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
            >
              Start Protecting Your Car Today
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
