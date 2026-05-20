import React from 'react';
import { Menu, X, Github, Mail, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  // Detect scroll untuk blur effect
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang', href: '#about' },
    { name: 'Tim', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: 'https://github.com/devitra-labs',
      label: 'GitHub'
    },
    {
      icon: <Instagram size={20} />,
      href: 'https://instagram.com/devitra.first',
      label: 'Instagram'
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:devitra.first@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-xl border-b border-blue-200/60 shadow-lg shadow-blue-100/50' 
          : 'bg-white/95 backdrop-blur-md border-b border-blue-200/40'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Enhanced Animation */}
          <motion.a 
            href='#home' 
            className="flex items-center space-x-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              {/* Glow effect */}
              <motion.div
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-blue-400/30 rounded-xl blur-md"
              />
              
              <div className="relative w-11 h-11 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200 group-hover:shadow-xl group-hover:shadow-blue-300 transition-all duration-300">
                <img 
                  className="w-full h-full object-cover rounded-xl" 
                  src="/devitra_icon.png" 
                  alt="devitra-logo" 
                />
              </div>
            </div>
            
            {/* Logo text */}
            <span className="text-xl font-bold bg-gradient-to-r from-blue-700 to-blue-600 bg-clip-text text-transparent hidden sm:block">
              Devitra
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative px-4 py-2 text-blue-700 hover:text-blue-600 transition-colors duration-200 font-semibold group"
              >
                {item.name}
                {/* Hover underline effect */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-500 group-hover:w-full transition-all duration-300 rounded-full" />
              </motion.a>
            ))}
          </div>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-xl text-blue-600 hover:text-white hover:bg-blue-600 transition-all duration-300 border border-blue-200 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-200"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden relative p-2 text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="mt-4 pb-4 space-y-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="block px-4 py-3 text-blue-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-semibold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
                
                {/* Social Links - Mobile */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center justify-center space-x-3 mt-6 pt-6 border-t border-blue-200"
                >
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-xl text-blue-600 hover:text-white hover:bg-blue-600 transition-all duration-300 border border-blue-200 hover:border-blue-600"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;