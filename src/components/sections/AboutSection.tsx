"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase mb-2 text-sm"
          >
            About Us
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-black text-navy mb-6 leading-tight tracking-tight"
          >
            Experts in CNC Job Work
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Located in Ahmedabad, India, Shivam Engineering specializes heavily in CNC Job Work and mass component manufacturing. With extensive experience in turning operations and batch production, we provide unmatched accuracy for every job.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Our state-of-the-art facility is equipped with modern CNC turning centers and inspection equipment, allowing us to maintain the highest standards of quality and accuracy in every component we produce.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {["100% On-Time Delivery Guarantee", "Specialists in CNC Turning Job Work", "High-Volume Batch Production", "Strict Quality Inspection"].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-navy font-semibold">
                  <CheckCircle className="text-primary mt-1 shrink-0" size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl overflow-hidden shadow-2xl h-[500px] border-8 border-light/50"
          >
            <img 
              src="/work_photo2.png" 
              alt="Factory Interior" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
