import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Target, Zap, Sparkles } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: "2025 - Agustus",
      title: "Mie Ayam Mas Hapis",
      description: "Dimulai sebagai kelompok kecil untuk proyek kuliah dengan semangat kebersamaan.",
      icon: <Users size={20} />
    },
    {
      year: "2025 - September",
      title: "Tim Dev",
      description: "Menambah anggota dan mulai aktif mengikuti kompetisi teknologi tingkat nasional.",
      icon: <Target size={20} />
    },
    {
      year: "2025 - Oktober",
      title: "Transformasi",
      description: "Evolusi menjadi tim profesional dengan fokus pada Web Development & UI/UX Design.",
      icon: <Zap size={20} />
    },
    {
      year: "2025 - November",
      title: "Devitra Lahir",
      description: "Resmi menjadi 'Devitra' - simbol kolaborasi antar Developer berprestasi.",
      icon: <Clock size={20} />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/80 backdrop-blur-sm rounded-full border border-blue-200/50 mb-6"
          >
            <Sparkles size={16} className="text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">Our Journey</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            <span className="relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500">
                Sejarah Kami
              </span>
              {/* Decorative underline */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
              />
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Perjalanan dedikasi kami dari sebuah kelompok belajar hingga menjadi tim pengembang solusi digital yang berprestasi.
          </p>
        </motion.div>

        {/* STORY SECTION */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-28"
        >
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100/60 rounded-full mb-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Our Story</span>
            </div>
            
            <h3 className="text-4xl font-black text-blue-900 leading-tight">
              Filosofi Nama<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">
                Devitra
              </span>
            </h3>
            
            <div className="space-y-5 text-slate-700 leading-relaxed text-lg">
              <p className="relative pl-6 border-l-4 border-blue-200">
                Awalnya kami dikenal dengan nama <span className="font-semibold text-blue-900">"Mie Ayam Mas Hapis"</span> — sebuah nama spontan yang lahir dari momen kebersamaan tim saat mengerjakan proyek pertama.
              </p>
              <p className="relative pl-6 border-l-4 border-blue-300">
                Namun seiring visi yang makin besar, kami bertransformasi menjadi{' '}
                <strong className="font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">Devitra</strong>. 
                Nama ini merupakan gabungan dari{' '}
                <span className="font-semibold italic text-blue-600">Developer</span> dan{' '}
                <span className="font-semibold italic text-blue-600">Intra (Kolaborasi)</span>.
              </p>
            </div>

            {/* Stats or highlight */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 p-5 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-2xl border border-blue-200/50 mt-8"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-300/50">
                <Sparkles className="text-white" size={24} />
              </div>
              <div>
                <p className="text-sm text-blue-600 font-semibold">Our Mission</p>
                <p className="text-blue-900 font-bold">Kolaborasi untuk Inovasi Digital</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="relative bg-gradient-to-br from-blue-50 to-blue-100/50 p-10 rounded-3xl border-2 border-blue-200/60 shadow-xl shadow-blue-100/50 backdrop-blur-sm"
          >
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/10 rounded-bl-full" />
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" />
                <h4 className="text-2xl font-black text-blue-900">Nilai Inti Kami</h4>
              </div>
              
              <div className="space-y-6">
                {[
                  { n: "1", t: "Kolaborasi", d: "Sinergi tim adalah kunci keberhasilan setiap proyek.", gradient: "from-blue-600 to-blue-700" },
                  { n: "2", t: "Inovasi", d: "Selalu mengeksplorasi teknologi terbaru untuk solusi terbaik.", gradient: "from-blue-700 to-blue-800" },
                  { n: "3", t: "Integritas", d: "Memberikan hasil yang konsisten dan berkualitas tinggi.", gradient: "from-blue-800 to-blue-900" }
                ].map((val, idx) => (
                  <motion.div 
                    key={val.n}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ x: 8 }}
                    className="flex gap-5 group"
                  >
                    <div className={`relative w-12 h-12 bg-gradient-to-br ${val.gradient} text-white rounded-2xl flex items-center justify-center font-bold shrink-0 shadow-lg shadow-blue-300/50 group-hover:shadow-xl group-hover:shadow-blue-400/50 transition-all duration-300`}>
                      {val.n}
                      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-2xl transition-all duration-300" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-blue-900 text-lg mb-1 group-hover:text-blue-700 transition-colors">{val.t}</h5>
                      <p className="text-sm text-slate-600 leading-relaxed">{val.d}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* RESPONSIVE TIMELINE SECTION */}
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100/60 rounded-full mb-4">
              <Clock size={16} className="text-blue-600" />
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Timeline</span>
            </div>
            <h3 className="text-4xl font-black text-blue-900 mb-4">Timeline Perjalanan</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Evolusi kami dari sebuah kelompok belajar menjadi tim developer profesional
            </p>
          </motion.div>
          
          {/* Garis Tengah (Hanya muncul di Desktop) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200 hidden lg:block rounded-full"></div>
          
          {/* Garis Samping (Hanya muncul di Mobile) */}
          <div className="absolute left-4 transform h-full w-1 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200 lg:hidden rounded-full"></div>

          <div className="space-y-16">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex items-center justify-between w-full ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } flex-row`}
              >
                {/* Spacer untuk Desktop agar zigzag */}
                <div className="hidden lg:block lg:w-[45%]"></div>

                {/* Dot Indikator - Enhanced */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                  className=""
                >
                  <div className="relative">
                    {/* Outer glow ring */}
                    <motion.div
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0.2, 0.5]
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 w-12 h-12 bg-blue-400/30 rounded-full blur-md"
                    />
                    
                    {/* Main dot */}
                    <div className="relative w-10 h-10 bg-white border-4 border-blue-700 rounded-full shadow-lg shadow-blue-300/50 flex items-center justify-center">
                      <div className="w-4 h-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full" />
                    </div>
                  </div>
                </motion.div>

                {/* Konten Card - Enhanced */}
                <motion.div 
                  whileHover={{ 
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)"
                  }}
                  className="w-full pl-16 lg:pl-0 lg:w-[45%]"
                >
                  <div className="group relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl border-2 border-blue-100/80 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                    
                    {/* Content */}
                    <div className="relative">
                      {/* Icon and Year */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl text-blue-700 border border-blue-200/50 group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                        <span className="text-sm font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/50">
                          {item.year}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h4 className="text-2xl font-black mb-3 text-blue-900 group-hover:text-blue-700 transition-colors">
                        {item.title}
                      </h4>
                      
                      {/* Description */}
                      <p className="text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom accent line */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
};

export default About;