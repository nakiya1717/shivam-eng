"use client";

import { motion } from "framer-motion";
import { Cog, Factory, PenTool, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/Button";

const servicesList = [
  { title: "CNC Turning Job Work", icon: <Cog size={32} />, desc: "Dedicated high-precision turning job work for complex and standard components." },
  { title: "Batch Production", icon: <Factory size={32} />, desc: "Reliable mass manufacturing of parts with consistent tight tolerances." },
  { title: "Custom CNC Components", icon: <PenTool size={32} />, desc: "Machining specialized parts according to your exact drawing specifications." },
  { title: "OEM Machining", icon: <Cog size={32} />, desc: "Partnering with OEMs for consistent supply of precision machined parts." },
  { title: "Prototype Development", icon: <PenTool size={32} />, desc: "Rapid prototyping to help you bring your engineering concepts to life." },
  { title: "Industrial Parts Manufacturing", icon: <Factory size={32} />, desc: "Heavy duty industrial components manufactured with absolute precision." },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-light relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase mb-2 text-sm"
          >
            Our Capabilities
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-black text-navy mb-6 leading-tight"
          >
            Premium Manufacturing Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            We offer a wide range of precision CNC machining services for various industries, ensuring exact specifications and tight tolerances.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Decorative corner accent */}
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors" />
              
              <div className="w-16 h-16 rounded-2xl bg-light text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-navy mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">{service.desc}</p>
              <Link href="#contact" className="text-navy font-bold flex items-center group-hover:text-primary transition-colors">
                Inquire Now <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
