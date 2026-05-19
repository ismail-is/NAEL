"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Check, 
  MessageSquare,
  Building,
  User,
  AlertCircle
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Container Trading",
    message: ""
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate premium submit delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "Container Trading",
        message: ""
      });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const handleWhatsAppQuote = () => {
    const text = `Hello NAEL, I would like to get a quote.
Name: ${formData.name || "Customer"}
Phone: ${formData.phone || "N/A"}
Email: ${formData.email || "N/A"}
Service: ${formData.service}
Message: ${formData.message || "N/A"}`;
    
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/966510969975?text=${encoded}`, "_blank");
  };

  return (
    <section 
      id="contact" 
      className="bg-gradient-to-b from-brand-black to-[#060606] py-24 px-4 sm:px-8 text-white relative overflow-hidden"
    >
      {/* Background industrial grid */}
      <div className="absolute inset-0 industrial-grid opacity-[0.06] pointer-events-none" />
      
      {/* Decorative light beams */}
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary-green/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center gap-2 mb-16">
          <span className="text-xs uppercase tracking-[0.35em] text-primary-yellow font-extrabold bg-primary-green/20 px-3 py-1.5 rounded-sm w-fit border border-primary-green/30">
            CONNECT WITH US
          </span>
          <h2 className="text-4xl sm:text-5xl font-bebas font-extrabold text-white tracking-wider leading-none">
            GET A <span className="text-primary-yellow">FREE QUOTE</span>
          </h2>
          <div className="w-16 h-[3px] bg-primary-yellow mt-1" />
          <p className="text-white/60 text-xs sm:text-sm font-light mt-2 max-w-lg">
            Have a project in mind? Submit details online or launch a direct WhatsApp discussion for instant responses from our estimating engineers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Office Contacts & Info (Col 5) */}
          <motion.div 
            className="lg:col-span-5 flex flex-col justify-between gap-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col gap-6">
              <h3 className="font-bebas text-2xl tracking-wider text-primary-yellow border-b border-white/10 pb-3 leading-none font-bold">
                AL JUBAIL HEAD OFFICE
              </h3>
              
              <div className="flex flex-col gap-6">
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-primary-green/20 flex items-center justify-center text-primary-yellow border border-primary-green/20 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">Office Location</h4>
                    <p className="text-white/60 text-xs sm:text-sm font-light mt-1">
                      Al Jubail, Al Safat District, Makkah Al Mukarama St., Kingdom of Saudi Arabia.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-primary-green/20 flex items-center justify-center text-primary-yellow border border-primary-green/20 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">Hotline Support</h4>
                    <p className="text-white/60 text-xs sm:text-sm font-light mt-1 flex flex-col">
                      <a href="tel:+966510969975" className="hover:text-primary-yellow transition-colors">+966 51 096 9975</a>
                      <a href="tel:+966547133946" className="hover:text-primary-yellow transition-colors mt-0.5">+966 54 713 3946</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-primary-green/20 flex items-center justify-center text-primary-yellow border border-primary-green/20 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">Inquiries Desk</h4>
                    <p className="text-white/60 text-xs sm:text-sm font-light mt-1">
                      <a href="mailto:info@naelksa.com" className="hover:text-primary-yellow transition-colors">info@naelksa.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-primary-green/20 flex items-center justify-center text-primary-yellow border border-primary-green/20 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">Operating Hours</h4>
                    <p className="text-white/60 text-xs sm:text-sm font-light mt-1">
                      Sunday to Thursday: 8:00 AM – 6:00 PM <br />
                      Friday & Saturday: Closed
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick WhatsApp CTA Board */}
            <div className="bg-[#02534D]/15 border border-[#02534D]/30 p-5 rounded-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] shrink-0 border border-[#25D366]/20">
                <MessageSquare className="w-6 h-6 animate-pulse" />
              </div>
              <div className="flex-grow">
                <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">Fast Estimator WhatsApp Desk</h4>
                <p className="text-white/50 text-[10px] sm:text-xs font-light mt-0.5">Skip manual forms and connect to discuss on mobile immediately.</p>
                <button 
                  onClick={handleWhatsAppQuote}
                  className="text-primary-yellow hover:text-white text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 transition-colors mt-2 cursor-pointer"
                >
                  Message Estimator Now
                  <Check className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Dynamic Form Desk (Col 7) */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-panel border border-white/10 p-6 sm:p-8 rounded-sm shadow-2xl flex flex-col gap-5">
              
              <h3 className="font-bebas text-2xl text-white tracking-wider font-bold mb-2">
                SUBMIT QUOTE REQUEST
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[10px] sm:text-xs uppercase tracking-widest text-white/50 font-semibold flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-primary-yellow" /> Full Name *
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full h-11 bg-brand-light-grey border border-white/10 px-4 text-xs text-white placeholder-white/30 rounded-sm focus:outline-none focus:border-primary-yellow transition-colors"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-[10px] sm:text-xs uppercase tracking-widest text-white/50 font-semibold flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-primary-yellow" /> Phone Number *
                  </label>
                  <input 
                    type="tel" 
                    id="phone"
                    required
                    placeholder="e.g. +966 54..."
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full h-11 bg-brand-light-grey border border-white/10 px-4 text-xs text-white placeholder-white/30 rounded-sm focus:outline-none focus:border-primary-yellow transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[10px] sm:text-xs uppercase tracking-widest text-white/50 font-semibold flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-primary-yellow" /> Email Address *
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    placeholder="e.g. name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full h-11 bg-brand-light-grey border border-white/10 px-4 text-xs text-white placeholder-white/30 rounded-sm focus:outline-none focus:border-primary-yellow transition-colors"
                  />
                </div>

                {/* Service Type Selection */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="service" className="text-[10px] sm:text-xs uppercase tracking-widest text-white/50 font-semibold flex items-center gap-1">
                    <Building className="w-3.5 h-3.5 text-primary-yellow" /> Selected Service
                  </label>
                  <select 
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full h-11 bg-brand-light-grey border border-white/10 px-4 text-xs text-white rounded-sm focus:outline-none focus:border-primary-yellow transition-colors"
                  >
                    <option value="Container Trading">1. Specialized Container Trading</option>
                    <option value="Sweet Water Delivery">2. Sweet Water Delivery</option>
                    <option value="Sewage Cleaning Services">3. Sewage Vacuum Suction</option>
                    <option value="Scaffolding Services">4. Scaffolding Services</option>
                    <option value="Equipment & Machinery Rental">5. Heavy Machinery Rental</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-[10px] sm:text-xs uppercase tracking-widest text-white/50 font-semibold">
                  Project Message & Specifications
                </label>
                <textarea 
                  id="message"
                  rows={4}
                  placeholder="Provide scope, location, sizing, or quantity requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-brand-light-grey border border-white/10 p-4 text-xs text-white placeholder-white/30 rounded-sm focus:outline-none focus:border-primary-yellow transition-colors resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <button 
                  type="submit" 
                  disabled={loading}
                  className="flex-grow py-3.5 bg-primary-green hover:bg-brand-light-green text-white text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer glow-green disabled:opacity-50 border border-primary-green"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : submitted ? (
                    <>
                      <Check className="w-4 h-4 text-primary-yellow" /> Submitted successfully!
                    </>
                  ) : (
                    <>
                      Submit Request <Send className="w-4 h-4 text-primary-yellow" />
                    </>
                  )}
                </button>

                <button 
                  type="button"
                  onClick={handleWhatsAppQuote}
                  className="py-3.5 px-6 bg-brand-black border border-white/10 hover:border-[#25D366] text-white text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
                  Submit on WhatsApp
                </button>
              </div>

              <span className="text-[10px] text-white/30 flex items-center gap-1.5 mt-2">
                <AlertCircle className="w-3.5 h-3.5 text-primary-yellow shrink-0" />
                By submitting this form, you agree to receive follow-up contact calls or email estimates.
              </span>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
