
import React from "react";
import { motion } from "framer-motion";
import { Shield, Award, Lock, CheckCircle } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "ISO Certified",
    description: "Industry standard compliance"
  },
  {
    icon: Award,
    title: "5000+ Vehicles",
    description: "Successfully monitored"
  },
  {
    icon: Lock,
    title: "Data Secure",
    description: "Bank-level encryption"
  },
  {
    icon: CheckCircle,
    title: "Verified Parts",
    description: "Only genuine components"
  }
];

export default function TrustBadges() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">
            Trusted by Leading Brands
          </h3>
          <p className="text-gray-600">
            Partnering with India's top automotive manufacturers
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                <badge.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-1">{badge.title}</h4>
              <p className="text-sm text-gray-600">{badge.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Brand Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-12 border-t border-blue-200"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-40">
            <div className="text-2xl font-bold text-gray-500">MARUTI</div>
            <div className="text-2xl font-bold text-gray-500">HYUNDAI</div>
            <div className="text-2xl font-bold text-gray-500">HONDA</div>
            <div className="text-2xl font-bold text-gray-500">TATA</div>
            <div className="text-2xl font-bold text-gray-500">MAHINDRA</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
