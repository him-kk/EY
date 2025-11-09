import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Sparkles } from "lucide-react";

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "How does the system work?",
        a: "Our AI-powered system continuously monitors your vehicle's data through existing telematics. It analyzes patterns and predicts potential issues 2-4 weeks before they occur, then alerts you with specific details and cost estimates."
      },
      {
        q: "Do I need to install any device in my car?",
        a: "No additional device is needed! Our system works with your vehicle's existing telematics and diagnostic systems. Simply sign up and we'll connect to your vehicle remotely."
      },
      {
        q: "Which vehicles are compatible?",
        a: "We support most cars manufactured after 2015 from major brands including Maruti, Hyundai, Honda, Toyota, Mahindra, Tata, and more. Contact us to confirm your specific model."
      },
      {
        q: "How much does it cost?",
        a: "Plans start at ₹999/month with a free 30-day trial. Given that our average customer saves ₹45,000 annually, the service pays for itself many times over."
      }
    ]
  },
  {
    category: "Features & Service",
    questions: [
      {
        q: "What problems can you predict?",
        a: "We can predict issues with brakes, battery, alternator, cooling system, transmission, engine components, and 50+ other critical systems. Our accuracy rate is over 90%."
      },
      {
        q: "How do you alert me about issues?",
        a: "You'll receive alerts via phone call, SMS, app notification, or email - based on your preference. We clearly explain the issue, urgency level, and estimated repair cost."
      },
      {
        q: "Can I choose my own mechanic?",
        a: "Yes! While we have a network of 500+ certified service centers, you're free to take your vehicle to any mechanic you trust. We'll provide them with the diagnostic report."
      },
      {
        q: "Do you offer pick-up and drop service?",
        a: "Yes, free pick-up and drop service is available within city limits. We also offer weekend and evening appointment slots for your convenience."
      }
    ]
  },
  {
    category: "Pricing & Warranty",
    questions: [
      {
        q: "Are there any hidden charges?",
        a: "Absolutely not. You'll receive exact cost estimates before any service. The subscription fee covers monitoring and alerts - repair costs are separate and always disclosed upfront."
      },
      {
        q: "What if a prediction is wrong?",
        a: "Our accuracy is over 90%, but if we miss something, we'll cover the cost difference between the preventive and emergency repair. We stand behind our technology."
      },
      {
        q: "Do repairs come with warranty?",
        a: "Yes! All repairs through our network come with a 1-year warranty on parts and labor. We only use genuine, manufacturer-approved parts."
      },
      {
        q: "Can I cancel anytime?",
        a: "Yes, you can cancel your subscription anytime with no penalties. We're confident you'll love the service and want to stay."
      }
    ]
  },
  {
    category: "Technical",
    questions: [
      {
        q: "Is my data safe?",
        a: "Yes! We use bank-level encryption and never share your personal or vehicle data with third parties. Your privacy and security are our top priorities."
      },
      {
        q: "Does this affect my car warranty?",
        a: "No, our system is completely non-invasive and only reads data - it doesn't modify anything. Your manufacturer warranty remains fully intact."
      },
      {
        q: "What if I'm traveling outside my city?",
        a: "Our service works nationwide! With 500+ certified centers across India, you'll have access to quality service wherever you travel."
      },
      {
        q: "How accurate are the predictions?",
        a: "Our AI has been trained on millions of data points and achieves over 90% accuracy. We're constantly improving the system with machine learning."
      }
    ]
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [openCategory, setOpenCategory] = useState(null);

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === key ? null : key);
    setOpenCategory(categoryIndex);
  };

  return (
    <div className="pt-32 pb-24 bg-gradient-to-b from-[#F8F2EC] to-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#C8A882]/10 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-[#C8A882]" />
            <span className="text-sm font-medium text-[#C8A882]">Got Questions?</span>
          </div>
          
          <h1 className="font-serif font-medium text-[length:var(--font-h1)] text-[#0F0F0F] mb-6 leading-tight">
            Frequently Asked Questions
          </h1>
          
          <p className="text-xl text-gray-600 leading-[1.618]">
            Everything you need to know about our predictive maintenance service
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-2xl font-bold text-[#0F0F0F] mb-6">
                {category.category}
              </h2>

              <div className="space-y-4">
                {category.questions.map((item, questionIndex) => {
                  const key = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openIndex === key;

                  return (
                    <div
                      key={questionIndex}
                      className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#C8A882]/20 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left"
                      >
                        <span className="font-semibold text-[#0F0F0F] pr-8">
                          {item.q}
                        </span>
                        <div className="flex-shrink-0 w-8 h-8 bg-[#C8A882]/10 rounded-full flex items-center justify-center">
                          {isOpen ? (
                            <Minus className="w-5 h-5 text-[#C8A882]" />
                          ) : (
                            <Plus className="w-5 h-5 text-[#C8A882]" />
                          )}
                        </div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-[#C8A882]/10">
                              <p className="pt-4">{item.a}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-[#C8A882] to-[#D4B896] rounded-3xl p-12 text-white text-center">
            <h2 className="font-serif text-3xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Our support team is here to help you 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('open-get-started-modal'))}
                className="bg-white text-[#C8A882] px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Get Started Free
              </button>
              <a
                href="tel:+918888888888"
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}