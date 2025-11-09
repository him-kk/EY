import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Sparkles, Shield, Zap } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "999",
    period: "month",
    description: "Perfect for newer vehicles (0-3 years old)",
    features: [
      "24/7 Vehicle monitoring",
      "AI predictions 2 weeks in advance",
      "SMS & Email alerts",
      "Basic service history",
      "Phone support"
    ],
    popular: false
  },
  {
    name: "Premium",
    price: "1,499",
    period: "month",
    description: "Best for vehicles 3-7 years old",
    features: [
      "Everything in Basic",
      "AI predictions 4 weeks in advance",
      "App with live dashboard",
      "Priority phone support",
      "Free pick-up & drop (2x/month)",
      "15% discount on repairs",
      "Detailed digital reports"
    ],
    popular: true
  },
  {
    name: "Elite",
    price: "2,499",
    period: "month",
    description: "For luxury & older vehicles",
    features: [
      "Everything in Premium",
      "Dedicated account manager",
      "Unlimited pick-up & drop",
      "25% discount on repairs",
      "Premium waiting lounge",
      "Complimentary car wash",
      "Emergency roadside assistance",
      "Annual comprehensive check"
    ],
    popular: false
  }
];

export default function Pricing() {
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
            <span className="text-sm font-medium text-[#C8A882]">Simple Pricing</span>
          </div>
          
          <h1 className="font-serif font-medium text-[length:var(--font-h1)] text-[#0F0F0F] mb-6 leading-tight">
            Choose Your Plan
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-[1.618] mb-4">
            All plans include our AI-powered predictive maintenance. Save thousands on repairs.
          </p>

          <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-4 py-2">
            <Shield className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-700">30-Day Free Trial • No Credit Card Required</span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 shadow-lg border-2 ${
                plan.popular
                  ? 'border-[#C8A882] bg-white'
                  : 'border-gray-200 bg-white'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#C8A882] to-[#D4B896] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-serif text-2xl font-bold text-[#0F0F0F] mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl font-bold text-[#C8A882]">₹{plan.price}</span>
                  <span className="text-gray-500">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C8A882] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => window.dispatchEvent(new CustomEvent('open-get-started-modal'))}
                className={`w-full py-4 rounded-full font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-[#C8A882] to-[#D4B896] text-white hover:shadow-xl hover:scale-105'
                    : 'bg-gray-100 text-gray-900 hover:bg-[#C8A882]/10'
                }`}
              >
                Start Free Trial
              </button>
            </motion.div>
          ))}
        </div>

        {/* Money-Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-12 shadow-lg border border-[#C8A882]/20 mb-16"
        >
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-[#0F0F0F] mb-4">
              100% Money-Back Guarantee
            </h2>
            <p className="text-xl text-gray-600 leading-[1.618] mb-6">
              If our system doesn't save you at least 3x your subscription cost in the first year, we'll refund 100% of your payments. No questions asked.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: "30-Day", value: "Free Trial" },
                { label: "Cancel", value: "Anytime" },
                { label: "Money-Back", value: "Guarantee" }
              ].map((item, index) => (
                <div key={index} className="p-4 bg-[#F8F2EC] rounded-xl">
                  <div className="text-2xl font-bold text-[#C8A882] mb-1">{item.value}</div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-serif text-3xl font-bold text-[#0F0F0F] mb-4">
            Have Questions About Pricing?
          </h2>
          <p className="text-gray-600 mb-8">
            Our team is here to help you choose the right plan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918888888888"
              className="bg-gradient-to-r from-[#C8A882] to-[#D4B896] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
            >
              Call Us Now
            </a>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-get-started-modal'))}
              className="bg-white border-2 border-[#C8A882] text-[#C8A882] px-8 py-4 rounded-full font-semibold hover:bg-[#C8A882]/5 transition-all"
            >
              Start Free Trial
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}