import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Car, Gauge, Battery, Wrench, AlertTriangle, CheckCircle, Calendar, Clock, Phone, MapPin, ArrowRight, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

// Static data
const vehicleData = {
  "vehicle": {
    "make": "Honda",
    "model": "City",
    "year": 2019,
    "registration": "MH 02 AB 1234",
    "mileage": 45000,
    "vin": "JHMGD38609S010473"
  },
  "health": {
    "overall_score": 85,
    "status": "good",
    "last_check": "2 hours ago",
    "systems": {
      "engine": {
        "status": "excellent",
        "score": 95,
        "details": "Running smoothly, no issues detected"
      },
      "brakes": {
        "status": "fair",
        "score": 72,
        "details": "Front brake pads at 30% wear, service recommended"
      },
      "battery": {
        "status": "good",
        "score": 88,
        "details": "Healthy charge, 2 years old"
      },
      "transmission": {
        "status": "excellent",
        "score": 92,
        "details": "Smooth operation, fluid levels good"
      },
      "suspension": {
        "status": "good",
        "score": 86,
        "details": "No issues detected"
      },
      "tires": {
        "status": "good",
        "score": 81,
        "details": "Tread depth adequate, pressure optimal"
      }
    }
  },
  "active_alerts": [
    {
      "id": 1,
      "severity": "medium",
      "title": "Brake Pad Wear Detected",
      "description": "Front brake pads showing 30% wear. Service recommended within 2 weeks to avoid damage to rotors.",
      "estimated_cost": 4500,
      "due_date": "2024-12-25",
      "priority": "medium",
      "predicted_failure": "2025-01-15"
    }
  ],
  "next_service": {
    "type": "Regular Maintenance",
    "date": "2025-01-15",
    "description": "Oil change, air filter replacement, brake inspection, general check-up",
    "estimated_cost": 3500,
    "estimated_duration": "90 minutes"
  },
  "service_history": [
    {
      "id": 1,
      "date": "2024-11-10",
      "service": "Brake System Inspection",
      "description": "Comprehensive brake system check, cleaned and adjusted",
      "cost": 3200,
      "mileage": 43500,
      "technician": "Amit Sharma",
      "service_center": "CarGuardian Service Center - Bandra",
      "status": "completed",
      "warranty": "6 months"
    },
    {
      "id": 2,
      "date": "2024-09-05",
      "service": "Engine Oil Change",
      "description": "Full synthetic oil change, oil filter replacement",
      "cost": 2800,
      "mileage": 41000,
      "technician": "Rajesh Kumar",
      "service_center": "CarGuardian Service Center - Andheri",
      "status": "completed",
      "warranty": "6 months"
    },
    {
      "id": 3,
      "date": "2024-07-20",
      "service": "AC Service & Cleaning",
      "description": "AC gas refill, filter cleaning, cooling check",
      "cost": 4500,
      "mileage": 38500,
      "technician": "Priya Patel",
      "service_center": "CarGuardian Service Center - Bandra",
      "status": "completed",
      "warranty": "3 months"
    },
    {
      "id": 4,
      "date": "2024-05-15",
      "service": "Tire Rotation & Alignment",
      "description": "All four tires rotated, wheel alignment performed",
      "cost": 2200,
      "mileage": 36000,
      "technician": "Vikram Singh",
      "service_center": "CarGuardian Service Center - Powai",
      "status": "completed",
      "warranty": "3 months"
    }
  ],
  "savings": {
    "total_saved": 45000,
    "breakdowns_prevented": 3,
    "average_per_year": 45000,
    "cost_breakdown": {
      "preventive_spent": 12500,
      "emergency_avoided": 57500
    }
  },
  "predictions": [
    {
      "component": "Battery",
      "predicted_replacement": "2025-06-01",
      "confidence": 87,
      "estimated_cost": 6500
    },
    {
      "component": "Front Tires",
      "predicted_replacement": "2025-08-15",
      "confidence": 82,
      "estimated_cost": 12000
    }
  ]
};

const mockUser = {
  "id": "user_123",
  "full_name": "Rajesh Kumar",
  "email": "rajesh.kumar@example.com",
  "phone": "+91 98765 43210",
  "member_since": "2023-03-15",
  "membership_tier": "Premium",
  "vehicles": [
    {
      "id": "vehicle_1",
      "make": "Honda",
      "model": "City",
      "year": 2019,
      "registration": "MH 02 AB 1234",
      "is_primary": true
    }
  ],
  "preferences": {
    "notification_email": true,
    "notification_sms": true,
    "notification_app": true,
    "preferred_service_center": "CarGuardian Service Center - Bandra",
    "preferred_contact_time": "evening"
  },
  "stats": {
    "total_services": 4,
    "total_spent": 12700,
    "total_saved": 45000,
    "member_months": 21,
    "breakdowns_prevented": 3
  }
};

export default function VHealth() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 800);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading your vehicle health...</p>
        </div>
      </div>
    );
  }

  const { vehicle, health, active_alerts, next_service, service_history, savings } = vehicleData;
  const user = mockUser;

  const getHealthColor = (score) => {
    if (score >= 90) return { bg: "bg-green-100", text: "text-green-600", border: "border-green-200", gradient: "from-green-500 to-green-600" };
    if (score >= 70) return { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200", gradient: "from-blue-500 to-blue-600" };
    if (score >= 50) return { bg: "bg-yellow-100", text: "text-yellow-600", border: "border-yellow-200", gradient: "from-yellow-500 to-yellow-600" };
    return { bg: "bg-red-100", text: "text-red-600", border: "border-red-200", gradient: "from-red-500 to-red-600" };
  };

  const overallColor = getHealthColor(health.overall_score);

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Welcome back, {user.full_name}!
              </h1>
              <div className="flex items-center gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <Car className="w-5 h-5 text-blue-600" />
                  <span>{vehicle.make} {vehicle.model} {vehicle.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gauge className="w-5 h-5 text-blue-600" />
                  <span>{vehicle.mileage.toLocaleString()} km</span>
                </div>
              </div>
            </div>
            <Link
              to={createPageUrl("Booking")}
              className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all flex items-center gap-2"
            >
              Book Service
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Vehicle Health Status - BIG AND CLEAR */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={`bg-white rounded-3xl p-8 shadow-lg border ${overallColor.border}`}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-2xl font-bold text-gray-900">Vehicle Health</h2>
                <span className="text-sm text-gray-500">Updated {health.last_check}</span>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Health Score Circle */}
                <div className="flex items-center justify-center">
                  <div className="relative w-48 h-48">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="96"
                        cy="96"
                        r="88"
                        stroke="#E5E7EB"
                        strokeWidth="16"
                        fill="none"
                      />
                      <circle
                        cx="96"
                        cy="96"
                        r="88"
                        stroke="url(#healthGradient)"
                        strokeWidth="16"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 88}`}
                        strokeDashoffset={`${2 * Math.PI * 88 * (1 - health.overall_score / 100)}`}
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="healthGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor={health.overall_score >= 70 ? "#3B82F6" : "#F59E0B"} />
                          <stop offset="100%" stopColor={health.overall_score >= 70 ? "#2563EB" : "#F97316"} />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className={`text-5xl font-bold ${overallColor.text}`}>{health.overall_score}</span>
                      <span className="text-sm text-gray-500 mt-1">Health Score</span>
                      <span className={`text-xs font-semibold ${overallColor.text} mt-2 px-3 py-1 ${overallColor.bg} rounded-full`}>
                        {health.status.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* System Status Grid */}
                <div className="space-y-3">
                  {Object.entries(health.systems).map(([system, data]) => {
                    const systemColor = getHealthColor(data.score);
                    const icons = {
                      engine: Wrench,
                      brakes: Shield,
                      battery: Battery,
                      transmission: Gauge,
                      suspension: Car,
                      tires: Car
                    };
                    const Icon = icons[system] || Wrench;

                    return (
                      <div key={system} className={`p-4 rounded-xl border ${systemColor.border} ${systemColor.bg}`}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Icon className={`w-5 h-5 ${systemColor.text}`} />
                            <span className="font-semibold text-gray-900 capitalize">{system}</span>
                          </div>
                          <span className={`text-lg font-bold ${systemColor.text}`}>{data.score}%</span>
                        </div>
                        <p className="text-xs text-gray-600">{data.details}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Active Alerts */}
            {active_alerts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-yellow-200"
              >
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="w-6 h-6 text-yellow-600" />
                  <h2 className="font-serif text-2xl font-bold text-gray-900">Active Alerts</h2>
                </div>

                {active_alerts.map((alert) => (
                  <div key={alert.id} className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 mb-1">{alert.title}</h3>
                        <p className="text-gray-600">{alert.description}</p>
                      </div>
                      <span className="px-3 py-1 bg-yellow-200 text-yellow-800 rounded-full text-sm font-medium">
                        {alert.priority.toUpperCase()}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-yellow-200">
                      <div className="flex items-center gap-6">
                        <div>
                          <div className="text-sm text-gray-500">Estimated Cost</div>
                          <div className="font-bold text-gray-900">₹{alert.estimated_cost.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Service Due</div>
                          <div className="font-bold text-gray-900">{new Date(alert.due_date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}</div>
                        </div>
                      </div>
                      <Link
                        to={createPageUrl("Booking")}
                        className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
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
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200"
            >
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">Service History</h2>

              <div className="space-y-4">
                {service_history.map((service) => (
                  <div
                    key={service.id}
                    className="flex items-center justify-between p-4 bg-blue-50 rounded-xl hover:shadow-md transition-all border border-blue-100"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{service.service}</div>
                        <div className="text-sm text-gray-500">{new Date(service.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })} • {service.service_center}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">₹{service.cost.toLocaleString()}</div>
                      <div className="text-sm text-green-600">Completed</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Savings Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-6 text-white shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8" />
                <h3 className="font-serif text-xl font-bold">Total Savings</h3>
              </div>
              <div className="text-5xl font-bold mb-2">₹{savings.total_saved.toLocaleString()}</div>
              <p className="text-white/90 text-sm mb-6">
                You've saved ₹{savings.total_saved.toLocaleString()} by preventing {savings.breakdowns_prevented} breakdowns
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                <div>
                  <div className="text-white/80 text-xs">Preventive</div>
                  <div className="font-bold">₹{savings.cost_breakdown.preventive_spent.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-white/80 text-xs">Avoided</div>
                  <div className="font-bold">₹{savings.cost_breakdown.emergency_avoided.toLocaleString()}</div>
                </div>
              </div>
            </motion.div>

            {/* Next Service Due */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-blue-600" />
                <h3 className="font-serif text-xl font-bold text-gray-900">Next Service</h3>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="text-sm text-gray-500">Service Type</div>
                  <div className="font-semibold text-gray-900">{next_service.type}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Scheduled Date</div>
                  <div className="font-semibold text-gray-900">{new Date(next_service.date).toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Duration</div>
                  <div className="font-semibold text-gray-900">{next_service.estimated_duration}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Includes</div>
                  <div className="text-sm text-gray-600">{next_service.description}</div>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Est. Cost</span>
                    <span className="text-xl font-bold text-blue-600">₹{next_service.estimated_cost.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <Link
                to={createPageUrl("Booking")}
                className="mt-6 w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                Reschedule
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200"
            >
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Need Help?</h3>

              <div className="space-y-3">
                <a
                  href="tel:+918888888888"
                  className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-all"
                >
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-gray-900">+91 88888 88888</span>
                </a>

                <Link
                  to={createPageUrl("Contact")}
                  className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-all"
                >
                  <MapPin className="w-5 h-5 text-blue-600" />
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