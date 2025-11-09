import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0F0F] mb-4">
            See How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch our 30-second explainer to understand how we keep your vehicle running smoothly
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            {!isPlaying ? (
              <>
                <img
                  src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80"
                  alt="Vehicle monitoring dashboard preview"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/50 to-transparent flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsPlaying(true)}
                    className="w-20 h-20 bg-gradient-to-r from-[#C8A882] to-[#D4B896] rounded-full flex items-center justify-center shadow-2xl"
                  >
                    <Play className="w-10 h-10 text-white ml-1" fill="white" />
                  </motion.button>
                </div>
              </>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <X className="w-6 h-6 text-gray-900" />
                </button>
                <div className="aspect-video bg-gray-900 flex items-center justify-center">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="How CarGuardian AI Works"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </div>

          {/* Quick Points */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { label: "Setup Time", value: "5 Minutes" },
              { label: "Early Detection", value: "2-4 Weeks" },
              { label: "Average Savings", value: "₹45,000/Year" }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-[#C8A882] mb-1">{item.value}</div>
                <div className="text-gray-600">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}