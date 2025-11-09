
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, CheckCircle2, Car } from "lucide-react";
// // import { base44 } from "@/api/base44Client";

// export default function GetStartedModal({ isOpen, onClose }) {
//   const [formData, setFormData] = useState({
//     full_name: "",
//     email: "",
//     phone: "",
//     vehicle_make: "",
//     vehicle_model: "",
//     vehicle_year: "",
//     message: ""
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       await base44.entities.LeadSubmission.create(formData);
//       setIsSuccess(true);
      
//       setTimeout(() => {
//         onClose();
//         setIsSuccess(false);
//         setFormData({
//           full_name: "",
//           email: "",
//           phone: "",
//           vehicle_make: "",
//           vehicle_model: "",
//           vehicle_year: "",
//           message: ""
//         });
//       }, 2000);
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>
//           {/* Backdrop */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//             className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
//           />

//           {/* Modal */}
//           <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9, y: 20 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.9, y: 20 }}
//               className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
//             >
//               {/* Header */}
//               <div className="sticky top-0 bg-gradient-to-r from-[#C8A882] to-[#D4B896] text-white p-8 rounded-t-3xl">
//                 <button
//                   onClick={onClose}
//                   className="absolute top-6 right-6 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
//                 >
//                   <X className="w-5 h-5" />
//                 </button>
                
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
//                     <Car className="w-8 h-8" />
//                   </div>
//                   <div>
//                     <h2 className="text-3xl font-serif font-bold">Get Started Free</h2>
//                     <p className="text-white/90">Start protecting your vehicle today</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-8">
//                 {isSuccess ? (
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     className="text-center py-12"
//                   >
//                     <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                       <CheckCircle2 className="w-10 h-10 text-green-600" />
//                     </div>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
//                     <p className="text-gray-600">
//                       We'll contact you shortly to set up your account and start monitoring your vehicle.
//                     </p>
//                   </motion.div>
//                 ) : (
//                   <form onSubmit={handleSubmit} className="space-y-6">
//                     <div className="grid md:grid-cols-2 gap-6">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           Full Name *
//                         </label>
//                         <input
//                           type="text"
//                           required
//                           value={formData.full_name}
//                           onChange={(e) => setFormData({...formData, full_name: e.target.value})}
//                           className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C8A882] focus:border-transparent"
//                           placeholder="John Doe"
//                         />
//                       </div>

//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           Phone Number *
//                         </label>
//                         <input
//                           type="tel"
//                           required
//                           value={formData.phone}
//                           onChange={(e) => setFormData({...formData, phone: e.target.value})}
//                           className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C8A882] focus:border-transparent"
//                           placeholder="+91 98765 43210"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Email Address *
//                       </label>
//                       <input
//                         type="email"
//                         required
//                         value={formData.email}
//                         onChange={(e) => setFormData({...formData, email: e.target.value})}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C8A882] focus:border-transparent"
//                         placeholder="john@example.com"
//                       />
//                     </div>

//                     <div className="grid md:grid-cols-3 gap-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           Vehicle Make *
//                         </label>
//                         <input
//                           type="text"
//                           required
//                           value={formData.vehicle_make}
//                           onChange={(e) => setFormData({...formData, vehicle_make: e.target.value})}
//                           className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C8A882] focus:border-transparent"
//                           placeholder="Honda"
//                         />
//                       </div>

//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           Model *
//                         </label>
//                         <input
//                           type="text"
//                           required
//                           value={formData.vehicle_model}
//                           onChange={(e) => setFormData({...formData, vehicle_model: e.target.value})}
//                           className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C8A882] focus:border-transparent"
//                           placeholder="City"
//                         />
//                       </div>

//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           Year *
//                         </label>
//                         <input
//                           type="number"
//                           required
//                           value={formData.vehicle_year}
//                           onChange={(e) => setFormData({...formData, vehicle_year: e.target.value})}
//                           className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C8A882] focus:border-transparent"
//                           placeholder="2020"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Additional Information (Optional)
//                       </label>
//                       <textarea
//                         value={formData.message}
//                         onChange={(e) => setFormData({...formData, message: e.target.value})}
//                         rows={3}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C8A882] focus:border-transparent"
//                         placeholder="Any specific concerns about your vehicle?"
//                       />
//                     </div>

//                     <button
//                       type="submit"
//                       disabled={isSubmitting}
//                       className="w-full bg-gradient-to-r from-[#C8A882] to-[#D4B896] text-white py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
//                     >
//                       {isSubmitting ? "Submitting..." : "Start Free Trial"}
//                     </button>

//                     <p className="text-center text-sm text-gray-500">
//                       ✓ No credit card required • ✓ Free for first month • ✓ Cancel anytime
//                     </p>
//                   </form>
//                 )}
//               </div>
//             </motion.div>
//           </div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// }
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Car, Loader } from "lucide-react";
import { signUp, signInWithGoogle } from "@/firebase/auth";
import { addVehicle } from "@/firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function GetStartedModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const [mode, setMode] = useState('signup'); // 'signup' or 'login'
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Create user account
      const result = await signUp(
        formData.email,
        formData.password,
        formData.fullName,
        formData.phone
      );

      if (result.success) {
        // Add vehicle if provided
        if (formData.vehicleMake && formData.vehicleModel) {
          await addVehicle(result.user.uid, {
            make: formData.vehicleMake,
            model: formData.vehicleModel,
            year: parseInt(formData.vehicleYear) || new Date().getFullYear(),
            isPrimary: true,
            mileage: 0,
            registration: '',
            health: {
              overallScore: 100,
              status: 'excellent',
              lastCheck: new Date().toISOString()
            }
          });
        }

        setIsSuccess(true);
        
        setTimeout(() => {
          onClose();
          navigate('/dashboard');
        }, 2000);
      } else {
        setError(result.error);
      }
    } catch (error) {
      console.error("Error signing up:", error);
      setError(error.message || 'Failed to create account');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsSubmitting(true);
    setError('');
    
    const result = await signInWithGoogle();
    
    setIsSubmitting(false);
    
    if (result.success) {
      onClose();
      navigate('/dashboard');
    } else {
      setError(result.error);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      password: "",
      vehicleMake: "",
      vehicleModel: "",
      vehicleYear: ""
    });
    setError('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-[#C8A882] to-[#D4B896] text-white p-8 rounded-t-3xl">
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Car className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-serif font-bold">Get Started Free</h2>
                    <p className="text-white/90">Start protecting your vehicle today</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Error Message */}
                {error && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                    {error}
                  </div>
                )}

                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Welcome to CarGuardian!</h3>
                    <p className="text-gray-600">
                      Your account has been created. Redirecting to dashboard...
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSignUp} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C8A882] focus:border-transparent"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C8A882] focus:border-transparent"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C8A882] focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Password *
                      </label>
                      <input
                        type="password"
                        required
                        minLength={6}
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C8A882] focus:border-transparent"
                        placeholder="Minimum 6 characters"
                      />
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="font-semibold text-gray-900 mb-4">Vehicle Information (Optional)</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Vehicle Make
                          </label>
                          <input
                            type="text"
                            value={formData.vehicleMake}
                            onChange={(e) => setFormData({...formData, vehicleMake: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C8A882] focus:border-transparent"
                            placeholder="Honda"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Model
                          </label>
                          <input
                            type="text"
                            value={formData.vehicleModel}
                            onChange={(e) => setFormData({...formData, vehicleModel: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C8A882] focus:border-transparent"
                            placeholder="City"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Year
                          </label>
                          <input
                            type="number"
                            value={formData.vehicleYear}
                            onChange={(e) => setFormData({...formData, vehicleYear: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C8A882] focus:border-transparent"
                            placeholder="2020"
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#C8A882] to-[#D4B896] text-white py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader className="w-5 h-5 animate-spin" />
                          Creating Account...
                        </>
                      ) : (
                        'Create Free Account'
                      )}
                    </button>

                    {/* Divider */}
                    <div className="flex items-center gap-4">
                      <div className="flex-1 h-px bg-gray-300"></div>
                      <span className="text-sm text-gray-500">or</span>
                      <div className="flex-1 h-px bg-gray-300"></div>
                    </div>

                    {/* Google Sign In */}
                    <button
                      type="button"
                      onClick={handleGoogleSignIn}
                      disabled={isSubmitting}
                      className="w-full border-2 border-gray-300 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      <img 
                        src="https://www.google.com/favicon.ico" 
                        alt="Google" 
                        className="w-5 h-5" 
                      />
                      Continue with Google
                    </button>

                    <p className="text-center text-sm text-gray-500">
                      ✓ No credit card required • ✓ Free for first month • ✓ Cancel anytime
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
