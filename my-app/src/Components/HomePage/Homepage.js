import React, { useRef, useEffect } from 'react';
import imageSrc from './Image';
import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  ChevronDown, 
  Home, 
  Zap, 
  Shield, 
  MessageCircle, 
  LogIn,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Clock,
  Users,
  Award,
  Check,
  ArrowRight,
  UserCircle
} from 'lucide-react';

const Homepage = ({ isLoggedIn = false }) => {
  const brandRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const brandContainer = brandRef.current;
    if (brandContainer) {
      const brandsContent = brandContainer.innerHTML;
      brandContainer.innerHTML += brandsContent;
    }
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header Section */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto flex justify-between items-center py-3 px-6">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <ShieldCheck className="text-indigo-600" size={32} />
            <span className="text-2xl font-bold text-indigo-800">FortiSure</span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {/* Insurance Products Dropdown */}
            <div className="group relative">
              <button className="flex items-center text-gray-700 hover:text-indigo-600 transition">
                Insurance Products
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="hidden group-hover:block absolute bg-white shadow-lg rounded-lg mt-2 w-72 p-4 border">
                <Link to="/homeI" className="flex items-center space-x-3 hover:bg-indigo-50 p-3 rounded">
                  <Home className="text-indigo-500" size={24} />
                  <div>
                    <span className="font-medium">Home Insurance</span>
                    <p className="text-sm text-gray-500">Protect your property</p>
                  </div>
                </Link>
                <Link to="/motorI" className="flex items-center space-x-3 hover:bg-indigo-50 p-3 rounded">
                  <Zap className="text-indigo-500" size={24} />
                  <div>
                    <span className="font-medium">Motor Insurance</span>
                    <p className="text-sm text-gray-500">Vehicle protection plans</p>
                  </div>
                </Link>
                <Link to="/healthI" className="flex items-center space-x-3 hover:bg-indigo-50 p-3 rounded">
                  <Shield className="text-indigo-500" size={24} />
                  <div>
                    <span className="font-medium">Health Insurance</span>
                    <p className="text-sm text-gray-500">Medical coverage</p>
                  </div>
                </Link>
                <Link to="/travelI" className="flex items-center space-x-3 hover:bg-indigo-50 p-3 rounded">
                  <Shield className="text-indigo-500" size={24} />
                  <div>
                    <span className="font-medium">Travel Insurance</span>
                    <p className="text-sm text-gray-500">Travel protection</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Renew Policy Dropdown */}
            <div className="group relative">
              <button className="flex items-center text-gray-700 hover:text-indigo-600 transition">
                Renew Policy
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="hidden group-hover:block absolute bg-white shadow-lg rounded-lg mt-2 w-48 p-3 border">
                <a href="#" className="block py-2 hover:bg-indigo-50 rounded px-3">Policy Renewal</a>
                <a href="#" className="block py-2 hover:bg-indigo-50 rounded px-3">Track Status</a>
              </div>
            </div>

            <Link to="/Claim" className="text-gray-700 hover:text-indigo-600 transition">
              Claims
            </Link>
            
            <a href="#" className="flex items-center text-gray-700 hover:text-indigo-600 transition">
              <MessageCircle size={18} className="mr-1" /> Support
            </a>
          </nav>

          {/* CTA Section */}
          <div className="flex items-center space-x-4">
            <a href="tel:+1234567890" className="hidden md:flex items-center text-gray-700">
              <Phone size={18} className="mr-2 text-indigo-600" />
              <span>(91+) 123-4567</span>
            </a>
           {/* Profile Icon - Only shown when logged in */}
           {isLoggedIn ? (
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-indigo-600 transition">
                  <UserCircle size={24} className="text-indigo-600" />
                </button>
                <div className="hidden group-hover:block absolute right-0 bg-white shadow-lg rounded-lg mt-2 w-48 py-2 border">
                  <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50">My Profile</Link>
                  <Link to="/settings" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50">Settings</Link>
                  <hr className="my-2" />
                  <button onClick={() => {/* Add logout logic */}} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-indigo-50">
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login" className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition flex items-center">
                <LogIn size={18} className="mr-2" /> Login
              </Link>
            )}
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-50 to-purple-50 py-20">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Comprehensive Insurance Solutions for Your Peace of Mind
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Protect what matters most with our tailored insurance plans. Simple, secure, and always reliable.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-indigo-600 text-white px-8 py-4 rounded-full hover:bg-indigo-700 transition">
                  Get a Quote
                </button>
                <Link to="/InsuranceDetails" className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-full hover:bg-indigo-50 transition">
                  Learn More
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="text-3xl font-bold text-indigo-600">25+</h3>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="text-3xl font-bold text-indigo-600">95%</h3>
                  <p className="text-gray-600">Claims Approved</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="text-3xl font-bold text-indigo-600">50K+</h3>
                  <p className="text-gray-600">Happy Clients</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="text-3xl font-bold text-indigo-600">24/7</h3>
                  <p className="text-gray-600">Support</p>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <img 
                src="/api/placeholder/600/400"
                alt="Insurance Protection"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Choose FortiSure?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We provide professional insurance services with reliable coverage options
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Clock className="text-indigo-600" size={40} />,
                  title: "Fast Claims Processing",
                  description: "Get your claims processed quickly with our efficient system"
                },
                {
                  icon: <Users className="text-indigo-600" size={40} />,
                  title: "Expert Support Team",
                  description: "Our experienced agents are here to help you 24/7"
                },
                {
                  icon: <Award className="text-indigo-600" size={40} />,
                  title: "Best Coverage Plans",
                  description: "Flexible and comprehensive coverage options for every need"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Our Insurance Products</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {/* Product Cards */}
              {[
                {
                  title: "Home Insurance",
                  description: "Protect your most valuable asset",
                  link: "/homeI"
                },
                {
                  title: "Motor Insurance",
                  description: "Comprehensive vehicle coverage",
                  link: "/motorI"
                },
                {
                  title: "Health Insurance",
                  description: "Quality healthcare coverage",
                  link: "/healthI"
                },
                {
                  title: "Travel Insurance",
                  description: "Worldwide travel protection",
                  link: "/travelI"
                }
              ].map((product, index) => (
                <Link key={index} to={product.link}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                    <img 
                      src="/api/placeholder/300/200" 
                      alt={product.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <div className="flex items-center text-indigo-600 hover:text-indigo-700">
                        Learn More <ArrowRight size={16} className="ml-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((testimonial) => (
                <div key={testimonial} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center mb-4">
                    <img 
                      src="/api/placeholder/64/64" 
                      alt="Customer"
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">John Doe</h4>
                      <p className="text-gray-600">Verified Customer</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"Excellent service and quick claims processing. Highly recommended!"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scrolling Brands Section */}
        <section className="bg-gray-50 py-16 overflow-hidden">
        <div className="relative overflow-hidden w-full">
  <div className="flex animate-scroll" ref={brandRef}>
    {Object.keys(imageSrc).map((key, index) => (
      <img
        key={index}
        src={imageSrc[key]}
        alt={`Brand ${index + 1}`}
        className="h-20 w-auto object-contain"
      />
    ))}
    {Object.keys(imageSrc).map((key, index) => (
      <img
        key={`duplicate-${index}`}
        src={imageSrc[key]}
        alt={`Brand ${index + 1}`}
        className="h-20 w-auto object-contain"
      />
    ))}
  </div>
</div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-teal-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <ShieldCheck className="text-white" size={32} />
                <span className="text-2xl font-bold">FortiSure</span>
              </div>
              <p className="text-gray-300 mb-4">
                Providing comprehensive insurance solutions to protect what matters most.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-teal-300"><Facebook /></a>
                <a href="#" className="hover:text-teal-300"><Twitter /></a>
                <a href="#" className="hover:text-teal-300"><Instagram /></a>
                <a href="#" className="hover:text-teal-300"><Linkedin /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
              <Link to="/home" className="hover:text-teal-300">
             Home
             </Link>
                <li><a href="#" className="hover:text-teal-300">About Us</a></li>
                <li><a href="#" className="hover:text-teal-300">Products</a></li>
                <li><a href="#" className="hover:text-teal-300">Services</a></li>
              </ul>
            </div>

            {/* Insurance Products */}
            <div>
              <h4 className="font-bold mb-4">Insurance Products</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-teal-300">Home Insurance</a></li>
                <li><a href="#" className="hover:text-teal-300">Life Insurance</a></li>
                <li><a href="#" className="hover:text-teal-300">Health Insurance</a></li>
                <li><a href="#" className="hover:text-teal-300">Travel Insurance</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold mb-4">Contact Us</h4>
              <ul className="space-y-2">
                <li>123 Insurance Street</li>
                <li>City, State 12345</li>
                <li>Phone: (555) 123-4567</li>
                <li>Email: support@FortiSure.com</li>
              </ul>
            </div>
          </div>

          {/* Copyright and Legal */}
          <div className="border-t border-teal-700 mt-8 pt-6 text-center">
            <p className="text-gray-300">
              © {new Date().getFullYear()} FortiSure Insurance. All Rights Reserved.
            </p>
            <div className="mt-2 space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-white">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-white">Disclaimer</a>
            </div>
          </div>
        </div>
      </footer>

    {/* Custom CSS for Logo Animation */}
<style jsx global>{`
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-scroll {
  display: flex;
  animation: scroll 10s linear infinite;
}
`}</style>
</div>
  );
};



export default Homepage;
            
           