"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Advanced CNC Machines",
    desc: "Our shop floor is equipped with the latest CNC turning centers capable of handling complex geometries with tight tolerances.",
    image: "/real_photo5.jpg"
  },
  {
    title: "Inspection Equipment",
    desc: "Quality is guaranteed through our advanced inspection lab featuring modern measurement instruments.",
    image: "/real_photo1.jpg"
  },
  {
    title: "Production Capacity",
    desc: "We are equipped to handle both small batch runs and large volume OEM production with consistent quality.",
    image: "/real_photo3.jpg"
  }
];

export default function InfrastructureSection() {
  return (
    <section id="infrastructure" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-widest uppercase mb-2 text-sm"
            >
              Our Facilities
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-heading font-black text-navy leading-tight"
            >
              World-Class Infrastructure
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="#contact" className="hidden md:flex items-center gap-2 text-navy font-bold hover:text-primary transition-colors pb-2 border-b-2 border-navy hover:border-primary">
              Schedule a Visit <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[400px] rounded-3xl overflow-hidden mb-6 shadow-lg">
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-heading font-bold text-navy mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
