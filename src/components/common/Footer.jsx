import React from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram, Mail, MapPin, Phone, Heart, ArrowUp, Sparkles } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: 'https://github.com/devitra-labs',
      label: 'GitHub',
      color: 'hover:bg-blue-600'
    },
    {
      icon: <Instagram size={20} />,
      href: 'https://instagram.com/devitra.first',
      label: 'Instagram',
      color: 'hover:bg-blue-600'
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:devitra.first@gmail.com',
      label: 'Email',
      color: 'hover:bg-blue-600'
    }
  ];

  const quickLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Tim', href: '#team' },
    { name: 'Hubungi Kami', href: '#contact' }
  ];

  const services = [
    'Web Development',
    'Mobile Development',
    'UI/UX Design',
    'Konsultasi IT'
  ];

  const contactInfo = [
    { icon: <Mail size={18} />, text: 'devitra.first@gmail.com' },
    { icon: <Phone size={18} />, text: '+62 817-7641-1207' },
    { icon: <MapPin size={18} />, text: 'Surabaya, Indonesia' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-blue-950 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      
      {/* Animated dots pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.a 
              href='#home' 
              className="flex items-center gap-3 mb-6 group"
              whileHover={{ scale: 1.05 }}
              onClick={scrollToTop}
            >
              <div className="relative">
                {/* Glow effect */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-blue-400/30 rounded-xl blur-md"
                />
                
                <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50 group-hover:shadow-xl group-hover:shadow-blue-400/50 transition-all duration-300">
                  <img 
                    className="w-full h-full object-cover rounded-xl" 
                    src="/devitra_icon.png" 
                    alt="devitra-logo" 
                  />
                </div>
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                Devitra
              </span>
            </motion.a>
            
            <p className="text-slate-300 mb-6 leading-relaxed">
              Developer & Kolaborasi - Tim yang berdedikasi untuk menciptakan solusi teknologi inovatif dan berkualitas tinggi.
            </p>
            
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 bg-slate-800/50 backdrop-blur-sm rounded-xl text-slate-400 hover:text-white ${social.color} transition-all duration-300 border border-slate-700/50 hover:border-blue-500/50`}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
              <h3 className="text-lg font-bold text-white">Quick Links</h3>
            </div>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a 
                    href={link.href} 
                    className="group flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-all duration-300"
                  >
                    <span className="w-0 h-0.5 bg-blue-500 group-hover:w-4 transition-all duration-300 rounded-full" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
              <h3 className="text-lg font-bold text-white">Layanan</h3>
            </div>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-2 text-slate-300"
                >
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
              <h3 className="text-lg font-bold text-white">Kontak</h3>
            </div>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="p-2 bg-slate-800/50 rounded-lg text-blue-400 group-hover:bg-blue-600/20 transition-colors">
                    {contact.icon}
                  </div>
                  <span className="text-slate-300 group-hover:text-blue-400 transition-colors leading-relaxed">
                    {contact.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Newsletter/CTA Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="mt-6 p-4 bg-gradient-to-br from-blue-600/20 to-blue-700/10 backdrop-blur-sm rounded-2xl border border-blue-500/20"
            >
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={16} className="text-blue-400" />
                <h4 className="text-sm font-bold text-blue-300">Ready to Start?</h4>
              </div>
              <p className="text-xs text-slate-400 mb-3">
                Mari wujudkan proyek impian Anda bersama kami.
              </p>
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                Hubungi Kami
                <ArrowUp size={12} className="rotate-45" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-slate-800/50 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © 2025 Devitra. All rights reserved.{' '}
              <span className="inline-flex items-center gap-1">
                Made by Devitra Team
              </span>
            </p>
            
            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="group flex items-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white rounded-xl border border-blue-500/30 hover:border-blue-500 transition-all duration-300"
            >
              <span className="text-sm font-semibold">Back to Top</span>
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;  