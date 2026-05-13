"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Send, ArrowRight, CheckCircle, Loader2, Calendar, Globe } from "lucide-react";
import FadeIn from "@components/MotionWrapper";
import { motion, AnimatePresence } from "framer-motion";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [apptOn, setApptOn] = useState(false);
  const [selDate, setSelDate] = useState("");
  const [selTime, setSelTime] = useState("");
  const [timezone, setTimezone] = useState("Europe/London");
  const [status, setStatus] = useState("idle");

  const slots = ["09:00", "10:30", "12:00", "14:00", "15:30", "17:00"];

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const payload = {
      ...formData,
      appointment: apptOn ? { date: selDate, time: selTime, timezone } : null
    };

    try {
      // 1. Send to your Resend API
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        // 2. WhatsApp Trigger
        const waMsg = `*New Lead from Website*\n\n*Name:* ${payload.name}\n*Service:* ${payload.subject}${apptOn ? `\n*Meeting:* ${selDate} @ ${selTime}` : ''}`;
        window.open(`https://wa.me/923312814214?text=${encodeURIComponent(waMsg)}`, '_blank');
        
        setStatus("success");
      } else {
        throw new Error("Failed to send");
      }
    } catch (err) {
      alert("Something went wrong. Please try again.");
      setStatus("idle");
    }
  };

  return (
    <section className="w-full bg-[#fcfcfc] dark:bg-[#02040a] antialiased">
      {/* --- 1. HERO SECTION (Same as yours) --- */}
      <div className="relative h-[85vh] md:h-screen w-full flex items-center justify-center overflow-hidden bg-[#12066a]">
        <div className="absolute inset-0 z-0">
          <Image src="/contact-us-hero.jpg" alt="Bizgrow Contact" fill priority className="object-cover opacity-40 grayscale-[50%]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#12066a]/90 via-transparent to-[#997819]/60 dark:to-[#02040a]" />
        </div>
        <div className="relative z-10 max-w-5xl px-6 text-center">
          <FadeIn direction="up">
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[#997819] text-[#997819] text-[10px] font-black uppercase tracking-[0.4em] backdrop-blur-md">Get in Touch</span>
            <h1 className="text-white text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase">Let's Start a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#997819] via-[#d4af37] to-[#997819]">Conversation</span>
            </h1>
          </FadeIn>
        </div>
      </div>

      {/* --- 2. MAIN CONTENT --- */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT: Info Panel (Same as yours) */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-[#12066a] dark:text-white text-4xl font-black uppercase tracking-tighter">Ready to Scale <br />Your Business?</h2>
              <div className="w-20 h-1.5 bg-[#997819] mt-6 rounded-full" />
            </div>
            <div className="space-y-6">
              {[
                { icon: <Phone />, label: "Call Us", val: "+44 7903 332433" },
                { icon: <Mail />, label: "Email", val: "info@bizgrowstudios.co.uk" },
                { icon: <MapPin />, label: "Location", val: "London, RM13 8EU" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-6 rounded-[2rem] bg-white dark:bg-[#12066a]/10 border border-gray-100 dark:border-white/5 shadow-sm">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#12066a] text-[#997819]">{item.icon}</div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{item.label}</p>
                    <h4 className="text-lg font-bold text-[#12066a] dark:text-white">{item.val}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: The New Interactive Form */}
          <div className="lg:col-span-7 relative">
            <FadeIn direction="up">
              <div className="bg-white dark:bg-[#050814] rounded-[3.5rem] p-8 md:p-12 border border-gray-200 dark:border-white/10 shadow-2xl">
                
                {status === "success" ? (
                  <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="text-center py-20">
                    <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-black text-[#12066a] dark:text-white uppercase">Inquiry Received</h3>
                    <p className="text-gray-500 mt-4">Thank you! Hamari team jald rabta karegi.</p>
                    <button onClick={() => setStatus("idle")} className="mt-8 text-[#997819] font-black text-xs uppercase border-b-2 border-[#997819]">Send Another</button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-[#12066a] dark:text-gray-400 uppercase tracking-widest">Full Name</label>
                        <input name="name" required onChange={handleChange} className="w-full bg-gray-50 dark:bg-white/5 border-b-2 border-gray-200 dark:border-white/10 p-3 outline-none focus:border-[#997819] transition-all dark:text-white font-bold" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-[#12066a] dark:text-gray-400 uppercase tracking-widest">Email Address</label>
                        <input name="email" type="email" required onChange={handleChange} className="w-full bg-gray-50 dark:bg-white/5 border-b-2 border-gray-200 dark:border-white/10 p-3 outline-none focus:border-[#997819] transition-all dark:text-white font-bold" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-[#12066a] dark:text-gray-400 uppercase tracking-widest">Phone Number</label>
                        <input name="phone" required onChange={handleChange} className="w-full bg-gray-50 dark:bg-white/5 border-b-2 border-gray-200 dark:border-white/10 p-3 outline-none focus:border-[#997819] transition-all dark:text-white font-bold" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-[#12066a] dark:text-gray-400 uppercase tracking-widest">Service</label>
                        <select name="subject" required onChange={handleChange} className="w-full bg-gray-50 dark:bg-white/5 border-b-2 border-gray-200 dark:border-white/10 p-3 outline-none focus:border-[#997819] transition-all dark:text-white font-bold appearance-none">
                          <option value="">Select Service...</option>
                          <option value="Security Web">Security Solutions</option>
                          <option value="Authority Builder">Authority Builder</option>
                          <option value="Content Engine">Content Engine</option>
                        </select>
                      </div>
                    </div>

                    {/* Appointment Toggle */}
                    <div 
                      onClick={() => setApptOn(!apptOn)}
                      className={`flex items-center gap-4 p-5 rounded-2xl border-2 cursor-pointer transition-all ${apptOn ? 'border-[#997819] bg-[#997819]/5' : 'border-gray-100 dark:border-white/5'}`}
                    >
                      <div className={`w-5 h-5 rounded border flex items-center justify-center ${apptOn ? 'bg-[#997819] border-[#997819]' : 'border-gray-400'}`}>
                        {apptOn && <div className="w-2 h-2 bg-white rounded-full" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-black text-[#12066a] dark:text-white uppercase tracking-tighter">Book a Discovery Call</p>
                        <p className="text-[10px] text-gray-400">Select a date & time for a meeting</p>
                      </div>
                      <Calendar className={apptOn ? "text-[#997819]" : "text-gray-400"} size={20} />
                    </div>

                    {/* Calendar Section */}
                    <AnimatePresence>
                      {apptOn && (
                        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-6 p-6 bg-gray-50 dark:bg-white/5 rounded-[2rem] border border-dashed border-[#997819]/40">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <label className="text-[9px] font-bold uppercase text-gray-400">Timezone</label>
                              <select onChange={(e) => setTimezone(e.target.value)} className="w-full bg-transparent text-xs font-bold dark:text-white outline-none">
                                <option value="Europe/London">UK (GMT/BST)</option>
                                <option value="Asia/Karachi">Pakistan (PKT)</option>
                              </select>
                            </div>
                            <div className="space-y-1">
                              <label className="text-[9px] font-bold uppercase text-gray-400">Select Date</label>
                              <input type="date" required={apptOn} onChange={(e) => setSelDate(e.target.value)} className="w-full bg-transparent text-xs font-bold dark:text-white outline-none" />
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-3 gap-2">
                            {slots.map(slot => (
                              <button key={slot} type="button" onClick={() => setSelTime(slot)} className={`py-2 text-[10px] font-bold rounded-lg border transition-all ${selTime === slot ? 'bg-[#12066a] text-white border-[#12066a]' : 'bg-white dark:bg-transparent dark:text-white border-gray-200 dark:border-white/10'}`}>
                                {slot}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-[#12066a] dark:text-gray-400 uppercase tracking-widest">Brief Message</label>
                      <textarea name="message" rows={2} onChange={handleChange} className="w-full bg-gray-50 dark:bg-white/5 border-b-2 border-gray-200 dark:border-white/10 p-3 outline-none focus:border-[#997819] transition-all dark:text-white font-bold resize-none" />
                    </div>

                    <button disabled={status === "sending"} className="group relative w-full py-6 bg-[#12066a] text-white font-black rounded-2xl overflow-hidden transition-all shadow-xl active:scale-[0.98]">
                      <div className="relative z-10 flex items-center justify-center gap-4 uppercase tracking-[0.3em] text-[10px]">
                        {status === "sending" ? <Loader2 className="animate-spin w-4 h-4" /> : "Initiate Conversation"}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                      </div>
                      <div className="absolute inset-0 bg-[#997819] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* --- 3. MINIMAL MAP SECTION --- */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <FadeIn direction="up">
            <div className="relative rounded-[3.5rem] overflow-hidden h-[500px] border border-gray-200 dark:border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 group">
              {/* Overlay for a more professional look */}
              <div className="absolute inset-0 bg-[#12066a]/5 pointer-events-none group-hover:bg-transparent transition-all duration-1000 z-10" />
              
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.540423055107!2d0.18023637684638787!3d51.5216139718159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a594419967e5%3A0x6b772c91807d4b4!2sCEME%20Campus%2C%20Marsh%20Way%2C%20Rainham%20RM13%208EU%2C%20UK!5e0!3m2!1sen!2s!4v1715000000000!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Bizgrow Location"
                className="relative z-0"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </section>
  );
};

export default ContactPage;