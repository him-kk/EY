// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { MapPin, Calendar as CalendarIcon, Clock, Truck, CreditCard, CheckCircle, Car, Wrench, Shield, Star, Phone } from "lucide-react";
// import { Calendar } from "@/components/ui/calendar";
// import { Link } from "react-router-dom";
// import { createPageUrl } from "@/utils";

// export default function Booking() {
//   const [selectedCenter, setSelectedCenter] = useState(null);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedTime, setSelectedTime] = useState(null);
//   const [selectedService, setSelectedService] = useState(null);
//   const [pickupDrop, setPickupDrop] = useState(false);

//   const serviceCenters = [
//     {
//       id: 1,
//       name: "CarGuardian - Koramangala",
//       address: "123 Service Road, Koramangala, Bangalore 560034",
//       distance: "2.5 km",
//       rating: 4.8,
//       reviews: 342,
//       available: true,
//       image: "https://images.unsplash.com/photo-1632823469883-10b47bc36fb8?w=800&q=80"
//     },
//     {
//       id: 2,
//       name: "CarGuardian - Indiranagar",
//       address: "456 Main Street, Indiranagar, Bangalore 560038",
//       distance: "5.2 km",
//       rating: 4.9,
//       reviews: 428,
//       available: true,
//       image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80"
//     },
//     {
//       id: 3,
//       name: "CarGuardian - HSR Layout",
//       address: "789 Layout Avenue, HSR Layout, Bangalore 560102",
//       distance: "7.8 km",
//       rating: 4.7,
//       reviews: 298,
//       available: true,
//       image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80"
//     }
//   ];

//   const servicePackages = [
//     {
//       id: 1,
//       name: "Basic Service",
//       price: 2500,
//       duration: "60 mins",
//       includes: ["Oil change", "Air filter", "Basic inspection", "Fluid top-up"]
//     },
//     {
//       id: 2,
//       name: "Standard Service",
//       price: 4500,
//       duration: "90 mins",
//       includes: ["Oil change", "All filters", "Brake inspection", "Tire rotation", "AC check"],
//       recommended: true
//     },
//     {
//       id: 3,
//       name: "Premium Service",
//       price: 7500,
//       duration: "120 mins",
//       includes: ["Full service", "Deep cleaning", "Computer diagnostics", "Wheel alignment", "Polish & wax"]
//     }
//   ];

//   const timeSlots = [
//     "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
//     "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
//   ];

//   const handleConfirm = () => {
//     console.log("Booking confirmed", {
//       center: selectedCenter,
//       service: selectedService,
//       date: selectedDate,
//       time: selectedTime,
//       pickupDrop
//     });
//   };

//   const canConfirm = selectedCenter && selectedService && selectedDate && selectedTime;

//   return (
//     <div className="pt-24 pb-24 bg-gradient-to-b from-gray-50 to-white min-h-screen">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         {/* Page Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-12"
//         >
//           <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
//             <Car className="w-4 h-4 text-blue-600" />
//             <span className="text-sm font-medium text-blue-600">Book Your Service</span>
//           </div>
          
//           <h1 className="font-serif font-medium text-[length:var(--font-h1)] text-gray-900 mb-4">
//             Schedule Your Service
//           </h1>
          
//           <p className="text-xl text-gray-600">
//             Choose your service, location, and preferred time slot
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Main Booking Form */}
//           <div className="lg:col-span-2 space-y-8">
//             {/* Step 1: Service Package Selection */}
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 }}
//               className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200"
//             >
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
//                   <Wrench className="w-5 h-5 text-blue-600" />
//                 </div>
//                 <h2 className="font-serif text-2xl font-bold text-gray-900">Select Service Package</h2>
//               </div>

//               <div className="grid md:grid-cols-3 gap-4">
//                 {servicePackages.map((pkg) => (
//                   <div
//                     key={pkg.id}
//                     onClick={() => setSelectedService(pkg)}
//                     className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all ${
//                       selectedService?.id === pkg.id
//                         ? 'border-blue-600 bg-blue-50 shadow-lg'
//                         : 'border-gray-200 hover:border-blue-300'
//                     }`}
//                   >
//                     {pkg.recommended && (
//                       <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
//                         <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
//                           RECOMMENDED
//                         </span>
//                       </div>
//                     )}
                    
//                     <h3 className="font-bold text-lg text-gray-900 mb-2">{pkg.name}</h3>
//                     <div className="text-3xl font-bold text-blue-600 mb-1">₹{pkg.price.toLocaleString()}</div>
//                     <div className="text-sm text-gray-500 mb-4 flex items-center gap-1">
//                       <Clock className="w-4 h-4" />
//                       {pkg.duration}
//                     </div>
                    
//                     <ul className="space-y-2">
//                       {pkg.includes.map((item, idx) => (
//                         <li key={idx} className="flex items-start gap-2 text-sm">
//                           <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
//                           <span className="text-gray-700">{item}</span>
//                         </li>
//                       ))}
//                     </ul>

//                     {selectedService?.id === pkg.id && (
//                       <div className="absolute top-4 right-4">
//                         <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
//                           <CheckCircle className="w-4 h-4 text-white" />
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Step 2: Service Center Selection */}
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200"
//             >
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
//                   <MapPin className="w-5 h-5 text-blue-600" />
//                 </div>
//                 <h2 className="font-serif text-2xl font-bold text-gray-900">Choose Service Center</h2>
//               </div>

//               <div className="grid md:grid-cols-3 gap-4">
//                 {serviceCenters.map((center) => (
//                   <div
//                     key={center.id}
//                     onClick={() => setSelectedCenter(center)}
//                     className={`rounded-2xl border-2 cursor-pointer transition-all overflow-hidden ${
//                       selectedCenter?.id === center.id
//                         ? 'border-blue-600 shadow-lg'
//                         : 'border-gray-200 hover:border-blue-300'
//                     }`}
//                   >
//                     <div className="relative h-32">
//                       <img
//                         src={center.image}
//                         alt={center.name}
//                         className="w-full h-full object-cover"
//                       />
//                       <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-bold flex items-center gap-1">
//                         <Star className="w-3 h-3 text-yellow-500 fill-current" />
//                         {center.rating}
//                       </div>
//                       {selectedCenter?.id === center.id && (
//                         <div className="absolute inset-0 bg-blue-600/20 flex items-center justify-center">
//                           <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
//                             <CheckCircle className="w-6 h-6 text-white" />
//                           </div>
//                         </div>
//                       )}
//                     </div>
                    
//                     <div className="p-4">
//                       <h3 className="font-bold text-gray-900 mb-1 text-sm">{center.name}</h3>
//                       <p className="text-xs text-gray-600 mb-2">{center.address}</p>
//                       <div className="flex items-center justify-between text-xs">
//                         <span className="text-blue-600 font-medium">{center.distance} away</span>
//                         <span className="text-gray-500">{center.reviews} reviews</span>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Step 3: Date & Time Selection */}
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//               className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200"
//             >
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
//                   <CalendarIcon className="w-5 h-5 text-blue-600" />
//                 </div>
//                 <h2 className="font-serif text-2xl font-bold text-gray-900">Pick Date & Time</h2>
//               </div>

//               <div className="grid md:grid-cols-2 gap-8">
//                 <div>
//                   <h3 className="font-semibold text-gray-900 mb-4">Select Date</h3>
//                   <Calendar
//                     mode="single"
//                     selected={selectedDate}
//                     onSelect={setSelectedDate}
//                     disabled={(date) => date < new Date()}
//                     className="rounded-2xl border border-gray-200"
//                   />
//                 </div>

//                 <div>
//                   <h3 className="font-semibold text-gray-900 mb-4">Select Time Slot</h3>
//                   <div className="grid grid-cols-2 gap-3">
//                     {timeSlots.map((time) => (
//                       <button
//                         key={time}
//                         onClick={() => setSelectedTime(time)}
//                         className={`py-3 px-4 rounded-xl font-medium transition-all text-sm ${
//                           selectedTime === time
//                             ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg'
//                             : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:border-blue-300 border border-transparent'
//                         }`}
//                       >
//                         {time}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Step 4: Additional Services */}
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200"
//             >
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-4">
//                   <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
//                     <Truck className="w-5 h-5 text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-lg text-gray-900">Free Pick-up & Drop Service</h3>
//                     <p className="text-sm text-gray-600">We'll collect and deliver your vehicle at your doorstep</p>
//                   </div>
//                 </div>
//                 <label className="relative inline-flex items-center cursor-pointer">
//                   <input
//                     type="checkbox"
//                     checked={pickupDrop}
//                     onChange={(e) => setPickupDrop(e.target.checked)}
//                     className="sr-only peer"
//                   />
//                   <div className="w-14 h-8 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
//                 </label>
//               </div>
//             </motion.div>
//           </div>

//           {/* Sidebar - Booking Summary */}
//           <div className="space-y-6">
//             {/* Summary Card */}
//             <motion.div
//               initial={{ opacity: 0, x: 40 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.3 }}
//               className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200 sticky top-24"
//             >
//               <h3 className="font-serif text-xl font-bold text-gray-900 mb-6">Booking Summary</h3>

//               <div className="space-y-4 mb-6">
//                 {/* Service */}
//                 <div className="p-4 bg-gray-50 rounded-xl">
//                   <div className="text-xs text-gray-500 mb-1">Service Package</div>
//                   {selectedService ? (
//                     <>
//                       <div className="font-bold text-gray-900">{selectedService.name}</div>
//                       <div className="text-sm text-gray-600">{selectedService.duration}</div>
//                     </>
//                   ) : (
//                     <div className="text-gray-400">Not selected</div>
//                   )}
//                 </div>

//                 {/* Center */}
//                 <div className="p-4 bg-gray-50 rounded-xl">
//                   <div className="text-xs text-gray-500 mb-1">Service Center</div>
//                   {selectedCenter ? (
//                     <>
//                       <div className="font-bold text-gray-900 text-sm">{selectedCenter.name}</div>
//                       <div className="text-xs text-gray-600 flex items-center gap-1 mt-1">
//                         <MapPin className="w-3 h-3" />
//                         {selectedCenter.distance} away
//                       </div>
//                     </>
//                   ) : (
//                     <div className="text-gray-400">Not selected</div>
//                   )}
//                 </div>

//                 {/* Date & Time */}
//                 <div className="p-4 bg-gray-50 rounded-xl">
//                   <div className="text-xs text-gray-500 mb-1">Date & Time</div>
//                   {selectedDate && selectedTime ? (
//                     <>
//                       <div className="font-bold text-gray-900">{selectedDate.toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
//                       <div className="text-sm text-gray-600">{selectedTime}</div>
//                     </>
//                   ) : (
//                     <div className="text-gray-400">Not selected</div>
//                   )}
//                 </div>

//                 {/* Pickup */}
//                 <div className="p-4 bg-gray-50 rounded-xl">
//                   <div className="text-xs text-gray-500 mb-1">Pick-up & Drop</div>
//                   <div className="font-bold text-gray-900">{pickupDrop ? 'Yes (Free)' : 'No'}</div>
//                 </div>
//               </div>

//               {/* Cost */}
//               <div className="border-t border-gray-200 pt-4 mb-6">
//                 <div className="flex items-center justify-between mb-2">
//                   <span className="text-gray-600">Service Cost</span>
//                   <span className="font-semibold">{selectedService ? `₹${selectedService.price.toLocaleString()}` : '-'}</span>
//                 </div>
//                 <div className="flex items-center justify-between mb-2">
//                   <span className="text-gray-600">Pick-up & Drop</span>
//                   <span className="font-semibold text-green-600">Free</span>
//                 </div>
//                 <div className="flex items-center justify-between pt-3 border-t border-gray-200">
//                   <span className="font-bold text-lg">Total Amount</span>
//                   <span className="text-2xl font-bold text-blue-600">
//                     {selectedService ? `₹${selectedService.price.toLocaleString()}` : '-'}
//                   </span>
//                 </div>
//               </div>

//               {/* Confirm Button */}
//               <button
//                 onClick={handleConfirm}
//                 disabled={!canConfirm}
//                 className={`w-full py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 ${
//                   canConfirm
//                     ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:shadow-xl hover:scale-105'
//                     : 'bg-gray-200 text-gray-400 cursor-not-allowed'
//                 }`}
//               >
//                 <CreditCard className="w-5 h-5" />
//                 Confirm Booking
//               </button>

//               <p className="text-xs text-gray-500 text-center mt-4">
//                 ✓ No payment required now • ✓ Pay after service
//               </p>

//               {/* Help */}
//               <div className="mt-6 pt-6 border-t border-gray-200">
//                 <div className="text-sm font-semibold text-gray-900 mb-3">Need Help?</div>
//                 <a
//                   href="tel:+918888888888"
//                   className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
//                 >
//                   <Phone className="w-4 h-4" />
//                   <span className="text-sm">+91 88888 88888</span>
//                 </a>
//               </div>
//             </motion.div>

//             {/* Trust Badge */}
//             <motion.div
//               initial={{ opacity: 0, x: 40 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.4 }}
//               className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-3xl p-6 text-white"
//             >
//               <div className="flex items-center gap-3 mb-3">
//                 <Shield className="w-8 h-8" />
//                 <div>
//                   <div className="font-bold">100% Safe & Secure</div>
//                   <div className="text-sm text-blue-100">Certified technicians</div>
//                 </div>
//               </div>
//               <p className="text-sm text-blue-100">
//                 All our service centers are ISO certified with trained professionals and genuine parts.
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// Example: Updated Booking.jsx with Firebase Integration
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar as CalendarIcon, Clock, Truck, CreditCard, CheckCircle, Car, Wrench, Shield, Star, Phone, Loader } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { useAuth } from "@/contexts/AuthContext";
import { createBooking } from "@/firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Booking() {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [selectedCenter, setSelectedCenter] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [pickupDrop, setPickupDrop] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [guestData, setGuestData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const serviceCenters = [
    {
      id: 1,
      name: "CarGuardian - Koramangala",
      address: "123 Service Road, Koramangala, Bangalore 560034",
      distance: "2.5 km",
      rating: 4.8,
      reviews: 342,
      available: true,
      image: "https://images.unsplash.com/photo-1632823469883-10b47bc36fb8?w=800&q=80"
    },
    {
      id: 2,
      name: "CarGuardian - Indiranagar",
      address: "456 Main Street, Indiranagar, Bangalore 560038",
      distance: "5.2 km",
      rating: 4.9,
      reviews: 428,
      available: true,
      image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80"
    },
    {
      id: 3,
      name: "CarGuardian - HSR Layout",
      address: "789 Layout Avenue, HSR Layout, Bangalore 560102",
      distance: "7.8 km",
      rating: 4.7,
      reviews: 298,
      available: true,
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80"
    }
  ];

  const servicePackages = [
    {
      id: 1,
      name: "Basic Service",
      price: 2500,
      duration: "60 mins",
      includes: ["Oil change", "Air filter", "Basic inspection", "Fluid top-up"]
    },
    {
      id: 2,
      name: "Standard Service",
      price: 4500,
      duration: "90 mins",
      includes: ["Oil change", "All filters", "Brake inspection", "Tire rotation", "AC check"],
      recommended: true
    },
    {
      id: 3,
      name: "Premium Service",
      price: 7500,
      duration: "120 mins",
      includes: ["Full service", "Deep cleaning", "Computer diagnostics", "Wheel alignment", "Polish & wax"]
    }
  ];

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  const handleConfirm = async () => {
    if (!selectedService || !selectedCenter || !selectedDate || !selectedTime) {
      setError("Please complete all required fields");
      return;
    }

    if (!isAuthenticated) {
      if (!guestData.name || !guestData.email || !guestData.phone) {
        setError("Please provide your contact information");
        return;
      }
    }

    setLoading(true);
    setError("");

    const bookingData = {
      userId: user?.uid || null,
      clientName: isAuthenticated ? user.displayName : guestData.name,
      email: isAuthenticated ? user.email : guestData.email,
      phone: isAuthenticated ? user.phoneNumber : guestData.phone,
      service: selectedService.name,
      servicePrice: selectedService.price,
      serviceDuration: selectedService.duration,
      preferredDate: selectedDate.toISOString().split('T')[0],
      preferredTime: selectedTime,
      serviceCenter: {
        id: selectedCenter.id,
        name: selectedCenter.name,
        location: selectedCenter.address
      },
      pickupDrop
    };

    try {
      const result = await createBooking(bookingData);
      if (result.success) {
        alert("Booking created successfully! We will contact you shortly.");
        navigate(isAuthenticated ? "/dashboard" : "/booking-confirmation");
      } else {
        setError(result.error || "Failed to create booking");
      }
    } catch (err) {
      console.error("Booking error:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const canConfirm = selectedCenter && selectedService && selectedDate && selectedTime;

  return (
    <div className="pt-24 pb-24 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
            <Car className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">Book Your Service</span>
          </div>
          <h1 className="font-serif font-medium text-[length:var(--font-h1)] text-gray-900 mb-4">
            Schedule Your Service
          </h1>
          <p className="text-xl text-gray-600">
            Choose your service, location, and preferred time slot
          </p>
        </motion.div>

        {error && (
          <div className="max-w-2xl mx-auto mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600">
            {error}
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Service Package Selection */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-gray-900">Select Service Package</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {servicePackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    onClick={() => setSelectedService(pkg)}
                    className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                      selectedService?.id === pkg.id
                        ? 'border-blue-600 bg-blue-50 shadow-lg'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    {pkg.recommended && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          RECOMMENDED
                        </span>
                      </div>
                    )}
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold text-blue-600 mb-1">₹{pkg.price.toLocaleString()}</div>
                    <div className="text-sm text-gray-500 mb-4 flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {pkg.duration}
                    </div>
                    <ul className="space-y-2">
                      {pkg.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    {selectedService?.id === pkg.id && (
                      <div className="absolute top-4 right-4">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Service Center Selection */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-gray-900">Choose Service Center</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {serviceCenters.map((center) => (
                  <div
                    key={center.id}
                    onClick={() => setSelectedCenter(center)}
                    className={`rounded-2xl border-2 cursor-pointer transition-all overflow-hidden ${
                      selectedCenter?.id === center.id
                        ? 'border-blue-600 shadow-lg'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="relative h-32">
                      <img src={center.image} alt={center.name} className="w-full h-full object-cover" />
                      <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-bold flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-500 fill-current" />
                        {center.rating}
                      </div>
                      {selectedCenter?.id === center.id && (
                        <div className="absolute inset-0 bg-blue-600/20 flex items-center justify-center">
                          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 mb-1 text-sm">{center.name}</h3>
                      <p className="text-xs text-gray-600 mb-2">{center.address}</p>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-blue-600 font-medium">{center.distance} away</span>
                        <span className="text-gray-500">{center.reviews} reviews</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Date & Time Selection */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <CalendarIcon className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-gray-900">Pick Date & Time</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Select Date</h3>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => date < new Date()}
                    className="rounded-2xl border border-gray-200"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Select Time Slot</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-3 px-4 rounded-xl font-medium transition-all text-sm ${
                          selectedTime === time
                            ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg'
                            : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:border-blue-300 border border-transparent'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Guest Info */}
            {!isAuthenticated && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200"
              >
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">Your Information</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={guestData.name}
                    onChange={(e) => setGuestData({ ...guestData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={guestData.email}
                    onChange={(e) => setGuestData({ ...guestData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={guestData.phone}
                    onChange={(e) => setGuestData({ ...guestData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </motion.div>
            )}

            {/* Pickup & Drop */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Truck className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Free Pick-up & Drop Service</h3>
                    <p className="text-sm text-gray-600">We'll collect and deliver your vehicle at your doorstep</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={pickupDrop}
                    onChange={(e) => setPickupDrop(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-14 h-8 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200 sticky top-24"
            >
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-6">Booking Summary</h3>

              <div className="space-y-4 mb-6">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-xs text-gray-500 mb-1">Service Package</div>
                  {selectedService ? (
                    <>
                      <div className="font-bold text-gray-900">{selectedService.name}</div>
                      <div className="text-sm text-gray-600">{selectedService.duration}</div>
                    </>
                  ) : (
                    <div className="text-gray-400">Not selected</div>
                  )}
                </div>

                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-xs text-gray-500 mb-1">Service Center</div>
                  {selectedCenter ? (
                    <>
                      <div className="font-bold text-gray-900 text-sm">{selectedCenter.name}</div>
                      <div className="text-xs text-gray-600 flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" />
                        {selectedCenter.distance} away
                      </div>
                    </>
                  ) : (
                    <div className="text-gray-400">Not selected</div>
                  )}
                </div>

                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-xs text-gray-500 mb-1">Date & Time</div>
                  {selectedDate && selectedTime ? (
                    <>
                      <div className="font-bold text-gray-900">
                        {selectedDate.toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                      <div className="text-sm text-gray-600">{selectedTime}</div>
                    </>
                  ) : (
                    <div className="text-gray-400">Not selected</div>
                  )}
                </div>

                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-xs text-gray-500 mb-1">Pick-up & Drop</div>
                  <div className="font-bold text-gray-900">{pickupDrop ? 'Yes (Free)' : 'No'}</div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Service Cost</span>
                  <span className="font-semibold">{selectedService ? `₹${selectedService.price.toLocaleString()}` : '-'}</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Pick-up & Drop</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <span className="font-bold text-lg">Total Amount</span>
                  <span className="text-2xl font-bold text-blue-600">
                    {selectedService ? `₹${selectedService.price.toLocaleString()}` : '-'}
                  </span>
                </div>
              </div>

              <button
                onClick={handleConfirm}
                disabled={!canConfirm || loading}
                className={`w-full py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 ${
                  canConfirm && !loading
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:shadow-xl hover:scale-105'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                {loading ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <CreditCard className="w-5 h-5" />
                    Confirm Booking
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                ✓ No payment required now • ✓ Pay after service
              </p>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-sm font-semibold text-gray-900 mb-3">Need Help?</div>
                <a href="tel:+918888888888" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+91 88888 88888</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-3xl p-6 text-white"
            >
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-8 h-8" />
                <div>
                  <div className="font-bold">100% Safe & Secure</div>
                  <div className="text-sm text-blue-100">Certified technicians</div>
                </div>
              </div>
              <p className="text-sm text-blue-100">
                All our service centers are ISO certified with trained professionals and genuine parts.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}