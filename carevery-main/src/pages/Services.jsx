import React from "react";
import { motion } from "framer-motion";
import { Wrench, Droplet, Wind, Battery, Car, Gauge, Shield, CheckCircle, Zap, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const services = [
  {
    icon: Wrench,
    name: "Engine Service",
    description: "Complete engine diagnostics, oil change, filter replacement, and performance optimization",
    features: ["Oil & filter change", "Engine diagnostics", "Performance check", "Fluid top-up"],
    price: "₹2,500",
    duration: "60 mins",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Shield,
    name: "Brake Service",
    description: "Comprehensive brake inspection, pad replacement, rotor resurfacing, and safety checks",
    features: ["Brake pad inspection", "Rotor check", "Fluid replacement", "Safety test"],
    price: "₹4,500",
    duration: "90 mins",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80",
    color: "from-red-500 to-red-600"
  },
  {
    icon: Wind,
    name: "AC Service",
    description: "Air conditioning gas refill, filter cleaning, cooling performance check, and sanitization",
    features: ["Gas refill", "Filter cleaning", "Cooling check", "Sanitization"],
    price: "₹3,500",
    duration: "75 mins",
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80",
    color: "from-cyan-500 to-cyan-600"
  },
  {
    icon: Battery,
    name: "Battery Check",
    description: "Battery health assessment, terminal cleaning, voltage testing, and replacement if needed",
    features: ["Health check", "Terminal cleaning", "Load test", "Replacement advice"],
    price: "₹800",
    duration: "30 mins",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Car,
    name: "Tire Service",
    description: "Tire rotation, alignment, pressure check, tread depth inspection, and balancing",
    features: ["Rotation", "Alignment", "Pressure check", "Balancing"],
    price: "₹2,000",
    duration: "45 mins",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Gauge,
    name: "Full Inspection",
    description: "Comprehensive 50-point vehicle inspection covering all major systems and components",
    features: ["50-point check", "Detailed report", "Priority recommendations", "Cost estimates"],
    price: "₹1,500",
    duration: "120 mins",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    color: "from-purple-500 to-purple-600"
  }
];

const additionalServices = [
  { name: "Detailing & Wash", icon: Droplet },
  { name: "Transmission Service", icon: Gauge },
  { name: "Suspension Check", icon: Car },
  { name: "Electrical Diagnostics", icon: Zap },
  { name: "Paint Protection", icon: Shield },
  { name: "Wheel Alignment", icon: Settings }
];

export default function Services() {
  return (
    <div className="pt-32 pb-24 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
            <Wrench className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">Professional Services</span>
          </div>
          
          <h1 className="font-serif font-medium text-[length:var(--font-h1)] text-gray-900 mb-6 leading-tight">
            Our Services
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-[1.618]">
            Expert vehicle maintenance and repair services delivered by certified technicians
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price & Duration */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                      <div className="text-xs text-gray-500">{service.duration}</div>
                    </div>
                    <Link
                      to={createPageUrl("Booking")}
                      className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all text-sm"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-serif text-3xl font-bold text-gray-900 text-center mb-8">
            Additional Services
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-200 text-center"
              >
                <service.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="font-medium text-sm text-gray-900">{service.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-3xl p-12 text-white">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Need a Custom Service Package?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              We offer customized maintenance plans tailored to your vehicle's specific needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={createPageUrl("Booking")}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all"
              >
                Book Service Now
              </Link>
              <Link
                to={createPageUrl("Contact")}
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}