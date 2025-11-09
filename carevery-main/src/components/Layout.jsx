import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Car, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Menu, X } from "lucide-react";
import GetStartedModal from "@/components/GetStartedModal";
import ChatSupport from "@/components/ChatSupport";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const openModal = () => setIsModalOpen(true);
    window.addEventListener('open-get-started-modal', openModal);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('open-get-started-modal', openModal);
    };
  }, []);

  const navigationItems = [
    { name: "Home", url: "/" },
    { name: "How It Works", url: createPageUrl("HowItWorks") },
    { name: "Services", url: createPageUrl("Services") },
    { name: "Gallery", url: createPageUrl("Gallery") },
    { name: "Pricing", url: createPageUrl("Pricing") },
    { name: "About", url: createPageUrl("About") },
    { name: "Contact", url: createPageUrl("Contact") }
  ];

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        :root {
          --font-h1: clamp(2.5rem, 5vw, 4rem);
          --font-h2: clamp(2rem, 4vw, 3rem);
          --color-primary: #1E40AF;
          --color-primary-light: #3B82F6;
          --color-secondary: #0EA5E9;
          --color-accent: #F97316;
          --color-success: #10B981;
          --color-warning: #F59E0B;
          --color-danger: #EF4444;
        }
        .glass-nav {
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.95);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'glass-nav py-4' : 'bg-white/95 backdrop-blur-sm py-4 shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-lg text-gray-900">
                  CarGuardian AI
                </div>
                <div className="text-xs text-gray-600">
                  Predictive Maintenance
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.url}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === item.url 
                      ? 'text-blue-600' 
                      : 'text-gray-900 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* VHealth Link */}
              <Link
                to={createPageUrl("VHealth")}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === createPageUrl("VHealth")
                    ? 'text-blue-600' 
                    : 'text-gray-900 hover:text-blue-600'
                }`}
              >
                VHealth
              </Link>

              {/* Booking Link */}
              <Link
                to={createPageUrl("Booking")}
                className={`px-4 py-2 rounded-full border-2 transition-all font-medium text-sm ${
                  location.pathname === createPageUrl("Booking")
                    ? 'border-blue-600 bg-blue-600 text-white'
                    : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                }`}
              >
                Book Service
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Get Started Free
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center lg:hidden overflow-y-auto">
          <div className="flex flex-col items-center gap-6 py-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.url}
                onClick={() => setIsMenuOpen(false)}
                className={`text-2xl font-medium transition-colors ${
                  location.pathname === item.url ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile VHealth Link */}
            <Link
              to={createPageUrl("VHealth")}
              onClick={() => setIsMenuOpen(false)}
              className={`text-2xl font-medium transition-colors ${
                location.pathname === createPageUrl("VHealth") ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
              }`}
            >
              VHealth
            </Link>

            {/* Mobile Booking Link */}
            <Link
              to={createPageUrl("Booking")}
              onClick={() => setIsMenuOpen(false)}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-semibold text-lg"
            >
              Book Service
            </Link>

            <button
              onClick={() => {
                setIsMenuOpen(false);
                setIsModalOpen(true);
              }}
              className="mt-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg"
            >
              Get Started Free
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center">
                  <Car className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-lg">CarGuardian AI</div>
                  <div className="text-xs text-gray-400">Predictive Maintenance</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Smart technology that keeps your vehicle healthy and prevents unexpected breakdowns.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to={createPageUrl("HowItWorks")} className="text-gray-400 hover:text-white transition-colors">How It Works</Link></li>
                <li><Link to={createPageUrl("Services")} className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                <li><Link to={createPageUrl("Pricing")} className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
                <li><Link to={createPageUrl("About")} className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Our Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link to={createPageUrl("VHealth")} className="hover:text-white transition-colors">VHealth Monitoring</Link></li>
                <li><Link to={createPageUrl("Booking")} className="hover:text-white transition-colors">Book Service</Link></li>
                <li><Link to={createPageUrl("Gallery")} className="hover:text-white transition-colors">Service Centers</Link></li>
                <li><Link to={createPageUrl("Contact")} className="hover:text-white transition-colors">Support</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>123 Tech Park, Sector 5, Bangalore - 560001</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <a href="tel:+918888888888" className="hover:text-white transition-colors">+91 88888 88888</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <a href="mailto:support@carguardian.ai" className="hover:text-white transition-colors">support@carguardian.ai</a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 CarGuardian AI. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Components */}
      <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ChatSupport />
    </div>
  );
}