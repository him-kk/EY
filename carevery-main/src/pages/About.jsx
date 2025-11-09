import React from "react";
import { motion } from "framer-motion";
import { Shield, Users, Award, TrendingUp, Sparkles, CheckCircle } from "lucide-react";

const stats = [
  { icon: Users, value: "50,000+", label: "Happy Customers" },
  { icon: Award, value: "500+", label: "Service Centers" },
  { icon: TrendingUp, value: "85%", label: "Breakdowns Prevented" },
  { icon: Shield, value: "4.9/5", label: "Customer Rating" }
];

const team = [
  {
    name: "Raj Sharma",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: "Former Tesla AI Engineer with 15 years in automotive tech"
  },
  {
    name: "Priya Mehta",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    bio: "PhD in Machine Learning from IIT Bombay"
  },
  {
    name: "Amit Kumar",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    bio: "20 years experience in automotive service industry"
  }
];

const press = [
  { outlet: "The Times of India", title: "Startup revolutionizing car maintenance" },
  { outlet: "Economic Times", title: "AI-powered solution saves drivers thousands" },
  { outlet: "YourStory", title: "CarGuardian AI raises Series A funding" },
  { outlet: "Auto India", title: "The future of predictive vehicle care" }
];

export default function About() {
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
            <span className="text-sm font-medium text-[#C8A882]">Our Story</span>
          </div>
          
          <h1 className="font-serif font-medium text-[length:var(--font-h1)] text-[#0F0F0F] mb-6 leading-tight">
            About CarGuardian AI
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-[1.618]">
            We're on a mission to eliminate unexpected vehicle breakdowns and save drivers thousands in repair costs
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0F0F] mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  CarGuardian AI was born from a personal experience. Our founder's mother was stranded on a highway when her car broke down during a family trip. The repair? ₹75,000 - and the mechanic said it could have been prevented with a simple ₹5,000 service two weeks earlier.
                </p>
                <p>
                  That moment sparked a question: Why can't cars tell us when they need help, before it's too late?
                </p>
                <p>
                  Today, we use advanced AI and machine learning to monitor vehicles 24/7, predicting issues weeks before they become expensive problems. We've helped over 50,000 drivers avoid breakdowns and save millions in repair costs.
                </p>
                <p>
                  Our vision is simple: No driver should ever face an unexpected breakdown or expensive surprise repair.
                </p>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="Team at work"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#C8A882] to-[#D4B896] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-[#0F0F0F] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0F0F] text-center mb-12">
            Meet Our Team
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-[#C8A882]/20 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
                />
                <h3 className="font-serif text-xl font-bold text-[#0F0F0F] mb-1">{member.name}</h3>
                <p className="text-[#C8A882] font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-12 shadow-lg border border-[#C8A882]/20 mb-24"
        >
          <h2 className="font-serif text-3xl font-bold text-[#0F0F0F] text-center mb-8">
            Why Customers Trust Us
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "ISO 9001:2015 Certified",
              "Data Security Compliant",
              "Partnership with Major Brands",
              "Award-Winning Technology"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-[#F8F2EC] rounded-xl">
                <CheckCircle className="w-6 h-6 text-[#C8A882] flex-shrink-0" />
                <span className="font-medium text-gray-900">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Press Mentions */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-serif text-3xl font-bold text-[#0F0F0F] text-center mb-12">
            Featured In
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {press.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-[#C8A882]/20"
              >
                <div className="font-bold text-[#C8A882] mb-2">{item.outlet}</div>
                <div className="text-gray-700">{item.title}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-[#C8A882] to-[#D4B896] rounded-3xl p-12 text-white">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Join Our Growing Community
            </h2>
            <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
              Be part of the revolution in vehicle maintenance
            </p>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-get-started-modal'))}
              className="bg-white text-[#C8A882] px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all hover:scale-105"
            >
              Get Started Free
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}