
import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Mumbai",
    vehicle: "Honda City 2019",
    rating: 5,
    text: "Got an alert about my brake system. Fixed it for ₹4,000. Service advisor said if I'd waited, it would've been ₹25,000 in damages. This system literally paid for itself!",
    savings: "₹21,000"
  },
  {
    name: "Priya Sharma",
    location: "Bangalore",
    vehicle: "Maruti Swift 2020",
    rating: 5,
    text: "Was planning a family trip to Goa. Got alerted 3 days before about potential battery failure. Got it fixed, trip was perfect. Can't imagine breaking down with kids in the car.",
    savings: "Peace of Mind"
  },
  {
    name: "Amit Patel",
    location: "Delhi",
    vehicle: "Hyundai Creta 2021",
    rating: 5,
    text: "They called me, explained the issue clearly, picked up my car, fixed it, and delivered it back. I didn't even have to take time off work. Outstanding service!",
    savings: "Hassle-Free"
  }
];

export default function TestimonialsPreview() {
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
            <span className="text-sm font-medium text-blue-600">Customer Success Stories</span>
          </div>
          
          <h2 className="font-serif text-[length:var(--font-h2)] font-bold text-[#0F0F0F] mb-4">
            Real Stories, Real Savings
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-[1.618]">
            Hear from drivers who avoided breakdowns and saved thousands
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-6 border border-blue-200 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Quote className="w-10 h-10 text-blue-600 mb-4 opacity-50" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-blue-600 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{testimonial.text}</p>
              
              <div className="pt-6 border-t border-blue-200">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="font-semibold text-[#0F0F0F]">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-blue-600 font-bold text-lg">{testimonial.savings}</div>
                    <div className="text-xs text-gray-500">Saved</div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-2">{testimonial.vehicle}</div>
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
            to={createPageUrl("Testimonials")}
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-[#FF5C8D] transition-colors group"
          >
            Read More Success Stories
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
