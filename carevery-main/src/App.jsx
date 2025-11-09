// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Layout from './components/Layout'; // Adjust path if needed
// import './App.css';

// // ---------- PAGE IMPORTS ----------
// import Home from './pages/Home';
// import About from './pages/About';
// import AdminBooking from './pages/AdminBooking';
// import Benefits from './pages/Benefits';
// import Booking from './pages/Booking';
// import BookingNotification from './pages/BookingNotification';
// import Contact from './pages/Contact';
// import Dashboard from './pages/Dashboard';
// import FAQ from './pages/FAQ';
// import Features from './pages/Features';
// import Gallery from './pages/Gallery';
// import HowItWorks from './pages/HowItWorks';
// import Pricing from './pages/Pricing';
// import Services from './pages/Services';
// import Sitemap from './pages/Sitemap';
// import Team from './pages/Team';
// import Testimonials from './pages/Testimonials';
// import VHealth from './pages/VHealth'; // Add if you have this page

// // ---------- APP ----------
// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Home Route */}
//         <Route 
//           path="/" 
//           element={
//             <Layout currentPageName="Home">
//               <Home />
//             </Layout>
//           } 
//         />

//         {/* About Route */}
//         <Route 
//           path="/about" 
//           element={
//             <Layout currentPageName="About">
//               <About />
//             </Layout>
//           } 
//         />

//         {/* Services Route */}
//         <Route 
//           path="/services" 
//           element={
//             <Layout currentPageName="Services">
//               <Services />
//             </Layout>
//           } 
//         />

//         {/* Features Route */}
//         <Route 
//           path="/features" 
//           element={
//             <Layout currentPageName="Features">
//               <Features />
//             </Layout>
//           } 
//         />

//         {/* Benefits Route */}
//         <Route 
//           path="/benefits" 
//           element={
//             <Layout currentPageName="Benefits">
//               <Benefits />
//             </Layout>
//           } 
//         />

//         {/* Pricing Route */}
//         <Route 
//           path="/pricing" 
//           element={
//             <Layout currentPageName="Pricing">
//               <Pricing />
//             </Layout>
//           } 
//         />

//         {/* How It Works Route */}
//         <Route 
//           path="/how-it-works" 
//           element={
//             <Layout currentPageName="How It Works">
//               <HowItWorks />
//             </Layout>
//           } 
//         />

//         {/* Team Route */}
//         <Route 
//           path="/team" 
//           element={
//             <Layout currentPageName="Team">
//               <Team />
//             </Layout>
//           } 
//         />

//         {/* Testimonials Route */}
//         <Route 
//           path="/testimonials" 
//           element={
//             <Layout currentPageName="Testimonials">
//               <Testimonials />
//             </Layout>
//           } 
//         />

//         {/* Gallery Route */}
//         <Route 
//           path="/gallery" 
//           element={
//             <Layout currentPageName="Gallery">
//               <Gallery />
//             </Layout>
//           } 
//         />

//         {/* FAQ Route */}
//         <Route 
//           path="/faq" 
//           element={
//             <Layout currentPageName="FAQ">
//               <FAQ />
//             </Layout>
//           } 
//         />

//         {/* Contact Route */}
//         <Route 
//           path="/contact" 
//           element={
//             <Layout currentPageName="Contact">
//               <Contact />
//             </Layout>
//           } 
//         />

//         {/* Sitemap Route */}
//         <Route 
//           path="/sitemap" 
//           element={
//             <Layout currentPageName="Sitemap">
//               <Sitemap />
//             </Layout>
//           } 
//         />

//         {/* Booking Route */}
//         <Route 
//           path="/booking" 
//           element={
//             <Layout currentPageName="Booking">
//               <Booking />
//             </Layout>
//           } 
//         />

//         {/* Booking Notification Route */}
//         <Route 
//           path="/booking-notification" 
//           element={
//             <Layout currentPageName="Booking Notification">
//               <BookingNotification />
//             </Layout>
//           } 
//         />

//         {/* Dashboard Route */}
//         <Route 
//           path="/dashboard" 
//           element={
//             <Layout currentPageName="Dashboard">
//               <Dashboard />
//             </Layout>
//           } 
//         />

//         {/* VHealth Route */}
//         <Route 
//           path="/vhealth" 
//           element={
//             <Layout currentPageName="VHealth">
//               <VHealth />
//             </Layout>
//           } 
//         />

//         {/* Admin Booking Route */}
//         <Route 
//           path="/admin/bookings" 
//           element={
//             <Layout currentPageName="Admin Bookings">
//               <AdminBooking />
//             </Layout>
//           } 
//         />

//         {/* 404 Not Found Route */}
//         <Route 
//           path="*" 
//           element={
//             <Layout currentPageName="404">
//               <div className="min-h-screen flex items-center justify-center bg-gray-50">
//                 <div className="text-center px-6 py-16">
//                   <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
//                   <p className="text-xl text-gray-600 mb-8">Oops! That page doesn't exist.</p>
//                   <a 
//                     href="/" 
//                     className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
//                   >
//                     Go Back Home
//                   </a>
//                 </div>
//               </div>
//             </Layout>
//           } 
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';   // 1️⃣  import provider
import Layout from './components/Layout';
import './App.css';

// ---------- PAGE IMPORTS ----------
import Home from './pages/Home';
import About from './pages/About';
import AdminBooking from './pages/AdminBooking';
import Benefits from './pages/Benefits';
import Booking from './pages/Booking';
import BookingNotification from './pages/BookingNotification';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import FAQ from './pages/FAQ';
import Features from './pages/Features';
import Gallery from './pages/Gallery';
import HowItWorks from './pages/HowItWorks';
import Pricing from './pages/Pricing';
import Services from './pages/Services';
import Sitemap from './pages/Sitemap';
import Team from './pages/Team';
import Testimonials from './pages/Testimonials';
import VHealth from './pages/VHealth';

// ---------- APP ----------
function App() {
  return (
    <AuthProvider>      {/* 2️⃣  wrap everything once */}
      <Router>
        <Routes>
          <Route path="/" element={<Layout currentPageName="Home"><Home /></Layout>} />
          <Route path="/about" element={<Layout currentPageName="About"><About /></Layout>} />
          <Route path="/services" element={<Layout currentPageName="Services"><Services /></Layout>} />
          <Route path="/features" element={<Layout currentPageName="Features"><Features /></Layout>} />
          <Route path="/benefits" element={<Layout currentPageName="Benefits"><Benefits /></Layout>} />
          <Route path="/pricing" element={<Layout currentPageName="Pricing"><Pricing /></Layout>} />
          <Route path="/how-it-works" element={<Layout currentPageName="HowItWorks"><HowItWorks /></Layout>} />
          <Route path="/team" element={<Layout currentPageName="Team"><Team /></Layout>} />
          <Route path="/testimonials" element={<Layout currentPageName="Testimonials"><Testimonials /></Layout>} />
          <Route path="/gallery" element={<Layout currentPageName="Gallery"><Gallery /></Layout>} />
          <Route path="/faq" element={<Layout currentPageName="FAQ"><FAQ /></Layout>} />
          <Route path="/contact" element={<Layout currentPageName="Contact"><Contact /></Layout>} />
          <Route path="/sitemap" element={<Layout currentPageName="Sitemap"><Sitemap /></Layout>} />
          <Route path="/booking" element={<Layout currentPageName="Booking"><Booking /></Layout>} />
          <Route path="/booking-notification" element={<Layout currentPageName="Booking Notification"><BookingNotification /></Layout>} />
          <Route path="/dashboard" element={<Layout currentPageName="Dashboard"><Dashboard /></Layout>} />
          <Route path="/vhealth" element={<Layout currentPageName="VHealth"><VHealth /></Layout>} />
          <Route path="/admin/bookings" element={<Layout currentPageName="Admin Bookings"><AdminBooking /></Layout>} />
          <Route path="*" element={<Layout currentPageName="404"><div className="min-h-screen flex items-center justify-center bg-gray-50"><div className="text-center px-6 py-16"><h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1><p className="text-xl text-gray-600 mb-8">Oops! That page doesn't exist.</p><a href="/" className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">Go Back Home</a></div></div></Layout>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;