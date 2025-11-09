import React from "react";
import { motion } from "framer-motion";
import { Shield, CheckCircle2, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 via-white to-blue-50">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80"
          alt="Modern car representing reliable vehicle maintenance"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-blue-200 shadow-lg"
          >
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">AI-Powered Protection</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-serif font-medium text-[length:var(--font-h1)] text-gray-900 mb-6 leading-tight drop-shadow-lg"
          >
            Never Face an Unexpected{" "}
            <span className="text-blue-600">Breakdown</span> Again
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto leading-[1.618] drop-shadow-md"
          >
            Smart technology monitors your vehicle 24/7 and alerts you{" "}
            <span className="font-semibold text-gray-900">weeks before</span> problems occur
          </motion.p>

          {/* Benefits List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10"
          >
            {[
              "Predict problems 2-4 weeks early",
              "Save 70% on repair costs",
              "Never miss important trips"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{benefit}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
          >
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-get-started-modal'))}
              className="group bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="bg-white border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 shadow-lg">
              Watch Demo
            </button>
          </motion.div>

          {/* Trust Indicator */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-gray-700 text-sm font-medium bg-white/70 backdrop-blur-sm inline-block px-6 py-2 rounded-full shadow-md"
          >
            ✓ No credit card required • ✓ Free for first month • ✓ Cancel anytime
          </motion.p>
        </div>
      </div>
    </section>
  );
}