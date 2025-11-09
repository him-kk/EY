import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Phone, Star, Wrench, Car, Settings } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1632823469883-10b47bc36fb8?w=1200&q=80",
    title: "Modern Service Center",
    category: "facility",
    location: "Mumbai - Bandra"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1200&q=80",
    title: "Advanced Diagnostics",
    category: "equipment",
    location: "Bangalore - Koramangala"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=1200&q=80",
    title: "Professional Workshop",
    category: "facility",
    location: "Delhi - Connaught Place"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=1200&q=80",
    title: "Certified Technicians",
    category: "team",
    location: "Pune - Hinjewadi"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&q=80",
    title: "Engine Service Bay",
    category: "facility",
    location: "Hyderabad - Gachibowli"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80",
    title: "Quality Inspection",
    category: "equipment",
    location: "Chennai - OMR"
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?w=1200&q=80",
    title: "Premium Waiting Lounge",
    category: "facility",
    location: "Mumbai - Andheri"
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?w=1200&q=80",
    title: "Brake Service Station",
    category: "equipment",
    location: "Bangalore - Whitefield"
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    title: "Tire Service Center",
    category: "facility",
    location: "Delhi - Vasant Kunj"
  }
];

const serviceCenters = [
  {
    city: "Mumbai",
    locations: ["Bandra", "Andheri", "Powai"],
    phone: "+91 88888 11111",
    rating: 4.9,
    services: 1250
  },
  {
    city: "Bangalore",
    locations: ["Koramangala", "Whitefield", "Indiranagar"],
    phone: "+91 88888 22222",
    rating: 4.8,
    services: 980
  },
  {
    city: "Delhi",
    locations: ["Connaught Place", "Vasant Kunj", "Saket"],
    phone: "+91 88888 33333",
    rating: 4.9,
    services: 1100
  },
  {
    city: "Pune",
    locations: ["Hinjewadi", "Koregaon Park", "Wakad"],
    phone: "+91 88888 44444",
    rating: 4.7,
    services: 750
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("all");

  const filteredItems = filter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

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
            <Car className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">Our Facilities</span>
          </div>
          
          <h1 className="font-serif font-medium text-[length:var(--font-h1)] text-gray-900 mb-6 leading-tight">
            Service Centers Gallery
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-[1.618]">
            State-of-the-art facilities and certified professionals across India
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {[
            { label: "All", value: "all", icon: Car },
            { label: "Facilities", value: "facility", icon: Settings },
            { label: "Equipment", value: "equipment", icon: Wrench },
            { label: "Our Team", value: "team", icon: Star }
          ].map((btn) => (
            <button
              key={btn.value}
              onClick={() => setFilter(btn.value)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                filter === btn.value
                  ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-blue-600"
              }`}
            >
              <btn.icon className="w-4 h-4" />
              {btn.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative h-80 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-serif text-2xl font-bold mb-2">{item.title}</h3>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Service Centers */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Service Centers
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCenters.map((center, index) => (
              <motion.div
                key={center.city}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-200"
              >
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">{center.city}</h3>
                
                <div className="space-y-3 mb-6">
                  {center.locations.map((loc) => (
                    <div key={loc} className="flex items-center gap-2 text-gray-700">
                      <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span className="text-sm">{loc}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      <span className="font-bold text-gray-900">{center.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">{center.services} services</span>
                  </div>
                  
                  <a
                    href={`tel:${center.phone}`}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm font-medium">{center.phone}</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6 text-gray-900" />
              </button>
              
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              
              <div className="mt-6 text-center text-white">
                <h3 className="font-serif text-3xl font-bold mb-2">{selectedImage.title}</h3>
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>{selectedImage.location}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}