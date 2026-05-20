import React from 'react';
import { motion } from 'framer-motion';
import { Users, Code, Trophy, Sparkles } from 'lucide-react';

const Hero = () => {
  // Varian untuk animasi stagger (muncul bergantian)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] // Ease-out curve yang lebih smooth
      } 
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-[100dvh] py-20 flex items-center justify-center relative overflow-hidden bg-white"
    >
      {/* ENHANCED ANIMATED BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100"></div>
      
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl"
      />
      
      {/* Dot pattern background */}
      <motion.div 
        animate={{ 
          scale: [1, 1.05, 1],
          rotate: [0, 2, 0] 
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-[0.15]" 
        style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.12'%3E%3Ccircle cx='30' cy='30' r='2.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}
      ></motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 relative z-10"
      >
        <div className="text-center">
          {/* Judul Utama dengan Enhanced Typography */}
          <motion.h1
            variants={itemVariants}
            className="text-7xl md:text-9xl font-black mb-6 tracking-tighter leading-none"
          >
            <span className="relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 drop-shadow-sm">
                Devitra
              </span>
              {/* Decorative underline */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="absolute -bottom-2 left-0 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
              />
            </span>
          </motion.h1>

          {/* Sub-deskripsi dengan Better Spacing */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Transformasi dari{' '}
            <span className="relative inline-block">
              <span className="italic font-medium text-slate-400 line-through decoration-slate-300">
                "Mie Ayam Mas Hapis"
              </span>
            </span>{' '}
            menjadi{' '}
            <motion.span 
              animate={{ 
                scale: [1, 1.02, 1],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative inline-block font-bold text-blue-700 bg-gradient-to-r from-blue-50 to-blue-100 px-4 py-1.5 rounded-xl border-2 border-blue-200/60 shadow-sm cursor-default mx-1"
            >
              Devitra
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-300"
              />
            </motion.span>
            <br className="hidden md:block" />
            <span className="text-slate-500">
              Tim pengembang yang berfokus pada inovasi dan kolaborasi digital.
            </span>
          </motion.p>

          {/* Enhanced CTA Button */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4 mb-20"
          >
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(29, 78, 216, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              href="#team" 
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-700 to-blue-600 text-white rounded-2xl font-bold overflow-hidden shadow-xl shadow-blue-200 flex items-center justify-center"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <Users size={22} className="mr-2.5 relative z-10" />
              <span className="relative z-10">Meet Our Team</span>
            </motion.a>
          </motion.div>

          {/* Enhanced Feature Cards Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {[
              { 
                icon: <Code size={36} />, 
                title: "Full Stack Development", 
                desc: "Membangun aplikasi web modern dari frontend hingga backend dengan teknologi terkini.",
                gradient: "from-blue-500 to-blue-600"
              },
              { 
                icon: <Users size={36} />, 
                title: "Team Collaboration", 
                desc: "Sinergi tim profesional untuk mencapai hasil terbaik dan solusi inovatif bagi klien.",
                gradient: "from-blue-600 to-blue-700"
              },
              { 
                icon: <Trophy size={36} />, 
                title: "Award Winning", 
                desc: "Aktif berkompetisi dan meraih prestasi di berbagai kompetisi tingkat nasional.",
                gradient: "from-blue-700 to-blue-800"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: i * 0.2 }}
                whileHover={{ 
                  y: -15,
                  boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)"
                }}
                className="group relative bg-white/95 backdrop-blur-md p-8 rounded-3xl border-2 border-blue-100/50 shadow-lg hover:shadow-2xl transition-all text-center overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                
                {/* Icon with gradient background */}
                <div className="relative mb-5 inline-flex">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-10 rounded-2xl blur-xl group-hover:opacity-20 transition-opacity`} />
                  <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-2xl text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                </div>
                
                <h3 className="relative text-xl font-bold mb-3 text-blue-900 group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>
                <p className="relative text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
                
                {/* Bottom accent line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${item.gradient} rounded-full`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>


    </section>
  );
};

export default Hero;