import React from 'react';
import { Github, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-300 text-primary">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center neon-glow">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="text-xl font-bold text-primary">Devitra</span>
            </div>
            <p className="text-primary mb-4">
              Developer & Kolaborasi - Tim yang berdedikasi untuk menciptakan solusi teknologi inovatif.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/devitra-labs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://instagram.com/devitra.first"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:devitra.first@gmail.com"
                className="text-primary hover:text-primary transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-primary hover:text-primary transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary hover:text-primary transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#team" className="text-primary hover:text-primary transition-colors">
                  Tim
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Layanan</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-primary">Web Development</span>
              </li>
              <li>
                <span className="text-primary">Mobile Development</span>
              </li>
              <li>
                <span className="text-primary">UI/UX Design</span>
              </li>
              <li>
                <span className="text-primary">Konsultasi IT</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-primary" />
                <span className="text-primary">devitra.first@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-primary" />
                <span className="text-primary">+62 817-7641-1207</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-primary" />
                <span className="text-primary">Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-8 text-center">
          <p className="text-primary-400">
            © {currentYear} Devitra. All rights reserved. Made with ❤️ by Devitra Team.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;