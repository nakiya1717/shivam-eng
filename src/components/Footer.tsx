import Link from "next/link";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 text-navy pt-16 pb-8 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -z-10 opacity-60" />
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-6">
              {/* Using default isDark=false so 'ENGINEERING' is black */}
              <Logo />
            </Link>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Turning Ideas Into Precision. We deliver precision CNC machining solutions with superior quality, advanced technology, competitive pricing, and on-time delivery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-navy">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Infrastructure', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    href={link === 'Home' ? '/#home' : `/#${link.toLowerCase()}`}
                    className="text-gray-600 hover:text-primary hover:translate-x-1 inline-block transition-all"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-navy">Our Services</h4>
            <ul className="space-y-3 text-gray-600">
              <li className="hover:text-primary transition-colors cursor-default">CNC Turning Job Work</li>
              <li className="hover:text-primary transition-colors cursor-default">Precision Component Mfg.</li>
              <li className="hover:text-primary transition-colors cursor-default">Custom CNC Components</li>
              <li className="hover:text-primary transition-colors cursor-default">Batch Production</li>
              <li className="hover:text-primary transition-colors cursor-default">OEM Machining</li>
              <li className="hover:text-primary transition-colors cursor-default">Prototype Development</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-navy">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-1" size={20} />
                <span className="text-gray-600 leading-relaxed">
                  Shed-38, Grand Vishala Industrial Estate, Nr Karnavati Ind Estate, Sp.Ring Road, Odhav, Ahmedabad 382415.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={20} />
                <div className="text-gray-600">
                  <p>Pradipbhai: +91 95108 64165</p>
                  <p>Rajubhai: +91 63529 18620</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={20} />
                <a href="mailto:hello.shivameng@gmail.com" className="text-gray-600 hover:text-primary transition-colors">
                  hello.shivameng@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-center items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Shivam Engineering. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
