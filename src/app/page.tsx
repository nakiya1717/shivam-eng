"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";
import Link from "next/link";
import { CheckCircle, Truck, Headphones, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";

// Import sections
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import InfrastructureSection from "@/components/sections/InfrastructureSection";
import GallerySection from "@/components/sections/GallerySection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        {/* Background Video/Image Wrapper */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-white/90 z-10" />
          <img 
            src="/work_photo3.png" 
            alt="CNC Machining Background" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-20">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20 text-primary font-bold tracking-wide uppercase text-sm mb-6"
            >
              Precision Engineering Experts
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-heading font-black text-navy mb-6 leading-[1.1] tracking-tight"
            >
              Turning Ideas Into <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Absolute Precision</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl leading-relaxed font-light"
            >
              We specialize in ALL TYPES OF CNC JOB WORK, providing world-class manufacturing solutions and unmatched quality control.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="#services">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg bg-primary hover:bg-accent hover:text-white transition-all shadow-lg">
                  Explore Services
                </Button>
              </Link>
              <Link href="#contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-lg border-navy text-navy hover:bg-navy hover:text-white transition-colors">
                  Contact Us Now
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-light py-12 relative z-30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-navy grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 relative overflow-hidden -mt-24 border border-gray-100">
            {/* Ambient glows inside stats */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl mix-blend-multiply" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl mix-blend-multiply" />
            
            {[
              { value: 5000, suffix: "+", label: "Projects Completed", icon: <CheckCircle className="text-primary mb-4 mx-auto" size={36} strokeWidth={1.5} /> },
              { value: 100, suffix: "%", label: "On-Time Delivery", icon: <Truck className="text-primary mb-4 mx-auto" size={36} strokeWidth={1.5} /> },
              { value: 100, suffix: "+", label: "Happy Clients", icon: <Users className="text-primary mb-4 mx-auto" size={36} strokeWidth={1.5} /> },
              { value: 24, suffix: "/7", label: "Customer Support", icon: <Headphones className="text-primary mb-4 mx-auto" size={36} strokeWidth={1.5} /> },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center relative z-10 p-4 rounded-2xl hover:bg-light transition-colors duration-300 group"
              >
                <div className="transform group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-heading font-black mb-2 text-navy tracking-tight flex items-center justify-center">
                  <AnimatedCounter value={stat.value} duration={3} />
                  <span className="text-primary ml-1">{stat.suffix}</span>
                </div>
                <div className="text-sm md:text-sm font-bold tracking-wider uppercase text-gray-500 group-hover:text-primary transition-colors duration-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AboutSection />
      <ServicesSection />
      <InfrastructureSection />
      <GallerySection />
      <ContactSection />
    </>
  );
}
