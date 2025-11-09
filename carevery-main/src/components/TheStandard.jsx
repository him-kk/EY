
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Gauge, ShieldCheck, UserCog, ClipboardList } from "lucide-react"; // Updated icons

const features = [
  {
    icon: Gauge, // Changed from Settings
    title: "Advanced Equipment & Technology",
    description: "State-of-the-art AI equipment for premium predictive maintenance in vehicles"
  },
  {
    icon: ShieldCheck, // Changed from Shield
    title: "100% Genuine & Certified Parts",
    description: "Certified genuine auto parts and products for safe, manufacturer-approved repairs"
  },
  {
    icon: UserCog, // Changed from Award
    title: "Expert Certified Technicians",
    description: "Highly trained and certified automotive professionals with years of experience"
  },
  {
    icon: ClipboardList, // Changed from HeartHandshake
    title: "Personalized Vehicle Care Solutions",
    description: "Customized maintenance plans tailored to your vehicle's specific needs"
  }
];

export default function TheStandard() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0F0F0F] mb-4">
            The <span className="italic">CarGuardian AI</span> Standard
          </h2>
          <h3 className="font-serif text-3xl md:text-4xl text-blue-600 mb-8"> {/* Color changed */}
            Excellence in Every Detail
          </h3>
          <p className="text-gray-600 max-w-4xl mx-auto leading-[1.618] text-lg">
            Welcome to CarGuardian AI, India's premier predictive vehicle maintenance platform. We blend the expertise of certified technicians with advanced AI technology and genuine parts. This is more than a service; it's a meticulously crafted experience designed to deliver lasting results and protect your ultimate investment - your vehicle.
          </p>
        </motion.div>

        {/* Features Grid with Side Images */}
        <div className="relative">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-3 hidden lg:block"
            >
              <div className="relative">
                <div className="aspect-square rounded-[50%] overflow-hidden border-8 border-blue-200"> {/* Color changed */}
                  <img
                    src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&q=80"
                    alt="Professional vehicle diagnostic equipment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Features Grid */}
            <div className="lg:col-span-6">
              <div className="grid md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="bg-blue-50 rounded-3xl p-6 h-full hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-200"> {/* Colors changed */}
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"> {/* Colors changed */}
                        <feature.icon className="w-7 h-7 text-white" />
                      </div>
                      <h4 className="font-serif text-xl font-bold text-[#0F0F0F] mb-3">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-3 hidden lg:block"
            >
              <div className="relative">
                <div className="aspect-square rounded-[50%] overflow-hidden border-8 border-blue-200"> {/* Color changed */}
                  <img
                    src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&q=80"
                    alt="Modern vehicle service center"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
