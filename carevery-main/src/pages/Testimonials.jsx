import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, Sparkles } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Mumbai",
    vehicle: "Honda City 2019",
    rating: 5,
    text: "Got an alert about my brake system. Fixed it for ₹4,000. Service advisor said if I'd waited, it would've been ₹25,000 in damages. This system literally paid for itself!",
    savings: "₹21,000",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
  },
  {
    name: "Priya Sharma",
    location: "Bangalore",
    vehicle: "Maruti Swift 2020",
    rating: 5,
    text: "Was planning a family trip to Goa. Got alerted 3 days before about potential battery failure. Got it fixed, trip was perfect. Can't imagine breaking down with kids in the car.",
    savings: "Peace of Mind",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
  },
  {
    name: "Amit Patel",
    location: "Delhi",
    vehicle: "Hyundai Creta 2021",
    rating: 5,
    text: "They called me, explained the issue clearly, picked up my car, fixed it, and delivered it back. I didn't even have to take time off work. Outstanding service!",
    savings: "Hassle-Free",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80"
  },
  {
    name: "Sneha Reddy",
    location: "Hyderabad",
    vehicle: "Toyota Innova 2018",
    rating: 5,
    text: "Avoided a major engine problem. The alert came 3 weeks before it would have failed. Fixed for ₹8,000 instead of ₹80,000. Best investment ever!",
    savings: "₹72,000",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80"
  },
  {
    name: "Vikram Singh",
    location: "Pune",
    vehicle: "Mahindra XUV500 2019",
    rating: 5,
    text: "As someone who travels a lot for work, this service is a lifesaver. No more worrying about car troubles during client meetings. Highly recommended!",
    savings: "Confidence",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80"
  },
  {
    name: "Meera Krishnan",
    location: "Chennai",
    vehicle: "Volkswagen Polo 2017",
    rating: 5,
    text: "The transparency in pricing and quality of service is unmatched. They genuinely care about your vehicle and your safety. Worth every rupee!",
    savings: "Trust",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80"
  }
];

export default function Testimonials() {
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
            <span className="text-sm font-medium text-[#C8A882]">Customer Success Stories</span>
          </div>
          
          <h1 className="font-serif font-medium text-[length:var(--font-h1)] text-[#0F0F0F] mb-6 leading-tight">
            Real Stories, Real Savings
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-[1.618]">
            Hear from drivers who avoided breakdowns and saved thousands with our predictive maintenance
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#C8A882]/20 h-full flex flex-col">
                <Quote className="w-10 h-10 text-[#C8A882] mb-4 opacity-50" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#C8A882] fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed flex-grow">"{testimonial.text}"</p>
                
                <div className="border-t border-[#C8A882]/20 pt-6">
                  <div className="flex items-center gap-4 mb-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-bold text-[#0F0F0F]">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.location}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">{testimonial.vehicle}</div>
                    <div className="text-right">
                      <div className="text-[#C8A882] font-bold text-lg">{testimonial.savings}</div>
                      <div className="text-xs text-gray-500">Saved</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#C8A882] to-[#D4B896] rounded-3xl p-12 text-white text-center mb-16"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-5xl font-bold mb-2">50,000+</div>
              <div className="text-white/90">Happy Customers</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">4.9/5</div>
              <div className="text-white/90">Average Rating</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">₹45K</div>
              <div className="text-white/90">Average Savings</div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-3xl p-12 shadow-lg border border-[#C8A882]/20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0F0F] mb-4">
              Join Our Happy Customers
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-[1.618]">
              Start your journey to worry-free driving and significant cost savings today
            </p>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-get-started-modal'))}
              className="bg-gradient-to-r from-[#C8A882] to-[#D4B896] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get Started Free
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}