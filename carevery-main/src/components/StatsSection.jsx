
import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Shield, Users, Star } from "lucide-react";

const stats = [
  {
    icon: Shield,
    value: "85%",
    label: "Breakdowns Prevented",
    color: "from-blue-600 to-blue-500"
  },
  {
    icon: TrendingUp,
    value: "₹45K",
    label: "Average Savings/Year",
    color: "from-orange-600 to-orange-500"
  },
  {
    icon: Users,
    value: "50K+",
    label: "Happy Customers",
    color: "from-green-600 to-green-500"
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Customer Rating",
    color: "from-yellow-600 to-yellow-500"
  }
];

export default function StatsSection() {
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
          <h2 className="font-serif text-[length:var(--font-h2)] font-bold text-[#0F0F0F] mb-4">
            Trusted by Thousands of Drivers
          </h2>
          <p className="text-xl text-gray-600">
            Real results from real customers across India
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-white rounded-3xl p-8 border border-[#C8A882]/20 hover:border-[#C8A882]/50 transition-all duration-300 hover:shadow-xl">
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-[#0F0F0F] mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
