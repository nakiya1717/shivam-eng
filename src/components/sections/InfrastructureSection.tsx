"use client";

import { motion } from "framer-motion";
import { 
  Cpu, 
  Crosshair, 
  Factory, 
  CheckCircle, 
  Clock, 
  Users, 
  Boxes, 
  Wrench, 
  PenTool, 
  Zap 
} from "lucide-react";

const highlightCards = [
  { title: "Advanced CNC Turning Machine", icon: Cpu },
  { title: "High Precision Machining", icon: Crosshair },
  { title: "Modern Manufacturing Facility", icon: Factory },
  { title: "Strict Quality Inspection", icon: CheckCircle },
  { title: "On-Time Delivery", icon: Clock },
  { title: "Skilled & Experienced Operators", icon: Users },
  { title: "Bulk Production Capability", icon: Boxes },
  { title: "Custom CNC Components", icon: Wrench },
  { title: "Engineering Drawing Support", icon: PenTool },
  { title: "Quick Turnaround Time", icon: Zap },
];

export default function InfrastructureSection() {
  return (
    <section id="infrastructure" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
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
            className="text-3xl md:text-5xl font-heading font-black text-navy leading-tight mb-6"
          >
            World-Class CNC Infrastructure
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg md:text-xl leading-relaxed"
          >
            At Shivam Engineering, we are equipped with modern CNC turning technology to deliver high-precision machining solutions. Our infrastructure is designed to ensure consistent quality, faster production, and reliable delivery for every project.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {highlightCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all duration-300 group flex flex-col items-center justify-center gap-4"
              >
                <div className="w-14 h-14 bg-white shadow-sm rounded-full flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon size={24} />
                </div>
                <h3 className="text-navy font-bold text-sm md:text-base leading-snug">{card.title}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
