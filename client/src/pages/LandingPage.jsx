import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Users, Calendar, DollarSign, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

import Navbar from '../components/common/Navbar.jsx';

const LandingPage = () => {
  const navigate = useNavigate();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const features = [
    {
      icon: <Users className="w-8 h-8 text-primary-500" />,
      title: "Employee Profiles",
      description: "Manage detailed employee information, job details, and professional growth in one secure place."
    },
    {
      icon: <Calendar className="w-8 h-8 text-primary-500" />,
      title: "Attendance Tracking",
      description: "Daily and weekly attendance views with seamless check-in/out functionality."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary-500" />,
      title: "Leave Management",
      description: "Apply for leaves, view holiday calendars, and manage approvals effortlessly."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary-500" />,
      title: "Payroll Visibility",
      description: "Transparent salary structures and payslip generation integrated with attendance."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary-500" />,
      title: "Role-based Security",
      description: "Enterprise-grade security with distinct Admin, HR, and Employee access levels."
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Shared Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6">
            Every workday, <br />
            <span className="text-gradient">perfectly aligned.</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Digitize and streamline your core HR operations. From employee onboarding and attendance tracking to seamless leave and payroll management.
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => navigate('/login')}
              className="px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl focus-ring text-lg"
            >
              Get Started
            </button>
            <button 
              onClick={() => document.getElementById('features').scrollIntoView()}
              className="px-8 py-4 bg-white/80 hover:bg-white text-gray-800 font-semibold rounded-xl transition-all duration-300 shadow-sm border border-gray-200 hover:border-gray-300 focus-ring text-lg backdrop-blur-sm"
            >
              Explore Features
            </button>
          </div>
        </motion.div>
      </main>

      {/* Features Grid */}
      <section id="features" className="relative z-10 bg-white/50 py-24 backdrop-blur-lg border-t border-white/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Comprehensive HR Solution</h2>
            <p className="mt-4 text-lg text-gray-600">Everything you need to manage your workforce efficiently.</p>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="relative z-10 border-t border-white/20 bg-gray-900 pt-16 pb-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white tracking-tight">KriyaHub<span className="text-primary-400">HR</span></span>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-sm">
                Digitize and streamline your core HR operations. From onboarding and attendance to seamless leave and payroll management.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Product</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Company</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© 2026 KriyaHub HRMS. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
