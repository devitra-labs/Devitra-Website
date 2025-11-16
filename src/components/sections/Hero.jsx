import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code, Users, Trophy, Sparkles, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen py-11 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100"></div>
      <div className="absolute inset-0 opacity-20" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">Devitra</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-primary mb-8 max-w-3xl mx-auto"
          >
            Dari "Mie Ayam Mas Hapis" hingga menjadi <span className="font-semibold text-primary neon-glow">Devitra</span> -
            tim developer yang siap berkolaborasi dan berinovasi dalam setiap kompetisi.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a
              href="#team"
              className="btn-primary"
            >
              <Users size={20} className="inline mr-2" />
              Meet Our Team
            </a>
            <a
              href="#achievements"
              className="btn-secondary"
            >
              <Trophy size={20} className="inline mr-2" />
              View Achievements
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <div className="glass-card p-6 rounded-xl card-hover">
              <Code className="text-primary mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2 text-primary">Full Stack Development</h3>
              <p className="text-primary">Membangun aplikasi web modern dari frontend hingga backend</p>
            </div>
            <div className="glass-card p-6 rounded-xl card-hover">
              <Users className="text-primary mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2 text-primary">Tim Kolaboratif</h3>
              <p className="text-primary">Bekerja sama dengan sinergi untuk mencapai hasil terbaik</p>
            </div>
            <div className="glass-card p-6 rounded-xl card-hover">
              <Trophy className="text-primary mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2 text-primary">Berprestasi</h3>
              <p className="text-primary">Aktif berpartisipasi dan menang dalam berbagai kompetisi</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a
          href="#about"
          className="text-primary hover:text-primary/80 transition-colors neon-glow"
        >
          <ArrowDown size={34} />
        </a>
      </div>
    </section>
  );
};

export default Hero;