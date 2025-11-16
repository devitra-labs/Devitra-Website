import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Target, Zap } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: "2025 - Agustus",
      title: "Mie Ayam Mas Hapis",
      description: "Dimulai sebagai kelompok kecil dengan nama unik 'Mie Ayam Mas Hapis' untuk sebuah proyek kuliah.",
      icon: <Users size={24} />
    },
    {
      year: "2025 - September",
      title: "Tim Dev",
      description: "Mulai menambah anggota baru dan mengikuti kompetisi tingkat universitas dan nasional.",
      icon: <Target size={24} />
    },
    {
      year: "2025 - Oktober",
      title: "Transformasi",
      description: "Evolusi menjadi tim yang lebih serius dengan fokus pada pengembangan Website dan pembuatan Design.",
      icon: <Zap size={24} />
    },
    {
      year: "2025 - November",
      title: "Devitra Lahir",
      description: "Resmi berubah nama menjadi 'Devitra' - singkatan dari Developer & Intra/Kolaborasi.",
      icon: <Clock size={24} />
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Sejarah Kami</span>
          </h2>
          <p className="text-xl text-primary max-w-3xl mx-auto">
            Perjalanan kami dari sebuah kelompok kecil hingga menjadi tim developer yang solid dan berprestasi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-primary">Dari Mie Ayam hingga Devitra</h3>
            <div className="space-y-4 text-primary">
              <p>
                Perjalanan kami dimulai dengan nama yang unik - "Mie Ayam Mas Hapis". Nama ini lahir dari 
                kebersamaan dan kekocakan saat kami mengerjakan proyek pertama kami bersama.
              </p>
              <p>
                Seiring berjalannya waktu dan bertambahnya anggota, kami merasa perlu untuk berevolusi. 
                Semangat kolaborasi dan passion dalam pengembangan software membawa kami pada transformasi.
              </p>
              <p>
                <strong>Devitra</strong> lahir sebagai representasi dari dua nilai utama kami: 
                <span className="text-blue-600 font-semibold"> Developer</span> dan 
                <span className="text-purple-600 font-semibold"> Intra/Kolaborasi</span>.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-secondary p-8 rounded-2xl border border-primary"
          >
            <h4 className="text-2xl font-bold mb-6">Nilai-Nilai Kami</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-secondary text-sm font-bold">1</span>
                </div>
                <div>
                  <h5 className="font-semibold mb-1 text-primary">Kolaborasi</h5>
                  <p className="text-primary">Bekerja sama untuk mencapai hasil yang lebih baik</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-secondary text-sm font-bold">2</span>
                </div>
                <div>
                  <h5 className="font-semibold mb-1 text-primary">Inovasi</h5>
                  <p className="text-primary">Selalu mencari solusi kreatif untuk setiap masalah</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-secondary text-sm font-bold">3</span>
                </div>
                <div>
                  <h5 className="font-semibold mb-1 text-primary">Konsistensi</h5>
                  <p className="text-primary">Terus belajar dan berkembang setiap hari</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-primary">Timeline Perjalanan</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                <div className="w-1/2"></div>
                <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-secondary border-4 border-primary rounded-full z-10"></div>
                <div className="w-1/2 px-4">
                  <div className="glass-card p-6 rounded-xl card-hover">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="text-primary">
                        {item.icon}
                      </div>
                      <span className="text-sm font-semibold text-primary">{item.year}</span>
                    </div>
                    <h4 className="text-xl font-bold mb-2 text-primary">{item.title}</h4>
                    <p className="text-primary">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;