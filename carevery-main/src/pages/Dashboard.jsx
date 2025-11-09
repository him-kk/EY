import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { base44 } from "@/api/base44Client";
import { Shield, AlertTriangle, Calendar, Clock, CheckCircle, MapPin, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const currentUser = await base44.auth.me();
        setUser(currentUser);
      } catch (error) {
        // Redirect to login if not authenticated
        window.location.href = '/';
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F8F2EC] to-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#C8A882] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  // Mock data - in production, fetch from API
  const vehicleHealth = {
    status: "good", // good, warning, critical
    score: 92,
    lastCheck: "2 hours ago"
  };

  const activeAlerts = [
    {
      id: 1,
      severity: "medium",
      title: "Brake Pad Wear Detected",
      description: "Front brake pads showing 30% wear. Service recommended within 2 weeks.",
      estimatedCost: "₹4,500",
      dueDate: "Dec 25, 2024"
    }
  ];

  const nextService = {
    type: "Regular Maintenance",
    date: "Jan 15, 2025",
    description: "Oil change, filter replacement, general inspection"
  };

  const serviceHistory = [
    {
      id: 1,
      date: "Nov 10, 2024",
      service: "Brake System Check",
      cost: "₹3,200",
      status: "completed"
    },
    {
      id: 2,
      date: "Sep 5, 2024",
      service: "Engine Oil Change",
      cost: "₹2,800",
      status: "completed"
    },
    {
      id: 3,
      date: "Jul 20, 2024",
      service: "AC Service",
      cost: "₹4,500",
      status: "completed"
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-[#F8F2EC] to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#0F0F0F] mb-2">
            Welcome back, {user?.full_name || 'Driver'}!
          </h1>
          <p className="text-gray-600">Here's your vehicle health overview</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Vehicle Health Status - BIG AND CLEAR */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-[#C8A882]/20"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-2xl font-bold text-[#0F0F0F]">Vehicle Health</h2>
                <span className="text-sm text-gray-500">Updated {vehicleHealth.lastCheck}</span>
              </div>

              <div className="flex items-center gap-8">
                {/* Health Score Circle */}
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="#F8F2EC"
                      strokeWidth="12"
                      fill="none"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="url(#gradient)"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 56}`}
                      strokeDashoffset={`${2 * Math.PI * 56 * (1 - vehicleHealth.score / 100)}`}
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#C8A882" />
                        <stop offset="100%" stopColor="#D4B896" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-3xl font-bold text-[#C8A882]">{vehicleHealth.score}</span>
                    <span className="text-xs text-gray-500">Health Score</span>
                  </div>
                </div>

                {/* Status Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-7 h-7 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold text-xl text-green-600">Excellent Condition</div>
                      <div className="text-sm text-gray-600">Your vehicle is running smoothly</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                    {[
                      { label: "Engine", status: "Good", color: "text-green-600" },
                      { label: "Brakes", status: "Fair", color: "text-yellow-600" },
                      { label: "Battery", status: "Good", color: "text-green-600" }
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="text-xs text-gray-500">{item.label}</div>
                        <div className={`font-semibold ${item.color}`}>{item.status}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Active Alerts */}
            {activeAlerts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-yellow-200"
              >
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="w-6 h-6 text-yellow-600" />
                  <h2 className="font-serif text-2xl font-bold text-[#0F0F0F]">Active Alerts</h2>
                </div>

                {activeAlerts.map((alert) => (
                  <div key={alert.id} className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 mb-1">{alert.title}</h3>
                        <p className="text-gray-600">{alert.description}</p>
                      </div>
                      <span className="px-3 py-1 bg-yellow-200 text-yellow-800 rounded-full text-sm font-medium">
                        Medium Priority
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-yellow-200">
                      <div className="flex items-center gap-6">
                        <div>
                          <div className="text-sm text-gray-500">Estimated Cost</div>
                          <div className="font-bold text-gray-900">{alert.estimatedCost}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Service Due</div>
                          <div className="font-bold text-gray-900">{alert.dueDate}</div>
                        </div>
                      </div>
                      <Link
                        to={createPageUrl("Booking")}
                        className="bg-gradient-to-r from-[#C8A882] to-[#D4B896] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                      >
                        Book Service
                      </Link>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Service History */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-[#C8A882]/20"
            >
              <h2 className="font-serif text-2xl font-bold text-[#0F0F0F] mb-6">Service History</h2>

              <div className="space-y-4">
                {serviceHistory.map((service) => (
                  <div
                    key={service.id}
                    className="flex items-center justify-between p-4 bg-[#F8F2EC] rounded-xl hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{service.service}</div>
                        <div className="text-sm text-gray-500">{service.date}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">{service.cost}</div>
                      <div className="text-sm text-green-600">Completed</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Next Service Due */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-6 shadow-lg border border-[#C8A882]/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-[#C8A882]" />
                <h3 className="font-serif text-xl font-bold text-[#0F0F0F]">Next Service</h3>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="text-sm text-gray-500">Service Type</div>
                  <div className="font-semibold text-gray-900">{nextService.type}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Scheduled Date</div>
                  <div className="font-semibold text-gray-900">{nextService.date}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Includes</div>
                  <div className="text-sm text-gray-600">{nextService.description}</div>
                </div>
              </div>

              <Link
                to={createPageUrl("Booking")}
                className="mt-6 w-full bg-gradient-to-r from-[#C8A882] to-[#D4B896] text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                Reschedule
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Quick Book Service */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-[#C8A882] to-[#D4B896] rounded-3xl p-6 text-white shadow-lg"
            >
              <h3 className="font-serif text-xl font-bold mb-3">Need Service?</h3>
              <p className="text-white/90 mb-6 text-sm">
                Book an appointment at your convenience
              </p>

              <Link
                to={createPageUrl("Booking")}
                className="w-full bg-white text-[#C8A882] py-3 rounded-full font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                Book Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-3xl p-6 shadow-lg border border-[#C8A882]/20"
            >
              <h3 className="font-serif text-xl font-bold text-[#0F0F0F] mb-4">Need Help?</h3>

              <div className="space-y-3">
                <a
                  href="tel:+918888888888"
                  className="flex items-center gap-3 p-3 bg-[#F8F2EC] rounded-xl hover:bg-[#C8A882]/10 transition-all"
                >
                  <Phone className="w-5 h-5 text-[#C8A882]" />
                  <span className="font-medium text-gray-900">+91 88888 88888</span>
                </a>

                <Link
                  to={createPageUrl("Contact")}
                  className="flex items-center gap-3 p-3 bg-[#F8F2EC] rounded-xl hover:bg-[#C8A882]/10 transition-all"
                >
                  <MapPin className="w-5 h-5 text-[#C8A882]" />
                  <span className="font-medium text-gray-900">Find Service Center</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}