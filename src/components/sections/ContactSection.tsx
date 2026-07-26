"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/Button";

export default function ContactSection() {
  const { register, handleSubmit, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      formData.append("Name", data.name);
      formData.append("Company", data.company || "N/A");
      formData.append("Phone", data.phone);
      formData.append("Email", data.email);
      formData.append("Material", data.material || "N/A");
      formData.append("Quantity", data.quantity || "N/A");
      formData.append("Service", data.service || "N/A");
      formData.append("Message", data.message);
      
      // FormSubmit config
      formData.append("_subject", "New Inquiry from Shivam Engineering Website!");
      formData.append("_captcha", "false"); // Disable captcha for AJAX
      formData.append("_template", "table"); // Nice email template

      const response = await fetch("https://formsubmit.co/ajax/hello.shivameng@gmail.com", {
        method: "POST",
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      if (response.ok) {
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 8000);
      } else {
        alert("Failed to send message. Please try again or email us directly.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while sending. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase mb-2 text-sm"
          >
            Get In Touch
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-black text-navy mb-6 leading-tight"
          >
            Request a Free Quote
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            Have a project in mind? Contact us today to discuss your machining requirements.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex gap-4 items-start group">
              <div className="w-14 h-14 rounded-2xl bg-light text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg text-navy mb-1">Our Location</h4>
                <p className="text-gray-600 leading-relaxed">Shed-38, Grand Vishala Industrial Estate,<br/>Nr Karnavati Ind Estate, Sp.Ring Road,<br/>Odhav, Ahmedabad 382415.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start group">
              <div className="w-14 h-14 rounded-2xl bg-light text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg text-navy mb-1">Phone Numbers</h4>
                <p className="text-gray-600">Pradipbhai: +91 95108 64165</p>
                <p className="text-gray-600">Rajubhai: +91 63529 18620</p>
              </div>
            </div>

            <div className="flex gap-4 items-start group">
              <div className="w-14 h-14 rounded-2xl bg-light text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg text-navy mb-1">Email Address</h4>
                <a href="mailto:hello.shivameng@gmail.com" className="text-primary font-medium hover:underline transition-colors">hello.shivameng@gmail.com</a>
              </div>
            </div>
            
            {/* Map */}
            <div className="mt-8 rounded-3xl overflow-hidden shadow-lg h-[300px] border border-gray-100">
              <iframe 
                src="https://maps.google.com/maps?q=Shed%2038,%20Shivam%20Engineering,%20Grand%20Vishal%20Industrial%20Estate,%20Sardar%20Patel%20Ring%20Rd,%20nr.%20Karnavati%20Ind%20Estate,%20Gokul%20Nagar,%20Odhav%20Industrial%20Estate,%20Odhav,%20Ahmedabad,%20Gujarat%20382418&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-10 rounded-3xl shadow-xl relative overflow-hidden border border-gray-100"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
            
            <h3 className="text-3xl font-heading font-black text-navy mb-8">Send an Inquiry</h3>
            {submitted ? (
              <div className="bg-green-50 text-green-700 p-6 rounded-2xl text-center font-bold border border-green-200">
                Thank you for your message! We will get back to you shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Name *</label>
                    <input {...register("name", { required: true })} className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl text-navy placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Rahul Sharma" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Company</label>
                    <input {...register("company")} className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl text-navy placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Shreeji Industries" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone *</label>
                    <input {...register("phone", { required: true })} className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl text-navy placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                    <input type="email" {...register("email", { required: true })} className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl text-navy placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="rahul@example.com" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Material Type</label>
                    <input {...register("material")} className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl text-navy placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="e.g. Brass, SS, Aluminum" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Estimated Quantity</label>
                    <input {...register("quantity")} className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl text-navy placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="e.g. 5000 pcs" />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Service Required</label>
                    <select {...register("service")} className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl text-navy focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none cursor-pointer">
                      <option value="">Select Service...</option>
                      <option value="CNC Job Work">CNC Job Work</option>
                      <option value="Custom Component">Custom Component</option>
                      <option value="Batch Production">Batch Production</option>
                      <option value="OEM Machining">OEM Machining</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message / Specifications *</label>
                  <textarea {...register("message", { required: true })} rows={4} className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl text-navy placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none" placeholder="Describe your requirement in detail..."></textarea>
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-accent text-white border-none mt-4 shadow-md" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "GET A FREE QUOTE"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
