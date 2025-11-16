import React from 'react';
import { motion } from 'framer-motion';
import { achievementsData } from '../../data/teamData';
import { Trophy, Calendar, Tag, ExternalLink } from 'lucide-react';

const Achievements = () => {
  const getCategoryColor = () => {
    return 'bg-secondary text-primary border border-primary';
  };

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Prestasi Kami</span>
          </h2>
          <p className="text-xl text-primary max-w-3xl mx-auto">
            Berbagai pencapaian yang telah kami raih dalam kompetisi dan pengembangan proyek.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card rounded-2xl overflow-hidden card-hover"
            >
              <div className="h-48 bg-primary flex items-center justify-center">
                <Trophy size={48} className="text-white" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                   <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor()}`}>
                    {achievement.category}
                  </span>
                  <div className="flex items-center text-primary text-sm">
                    <Calendar size={14} className="mr-1" />
                    {achievement.date}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-primary">{achievement.title}</h3>
                <p className="text-primary mb-4">{achievement.description}</p>

                <button className="flex items-center text-primary hover:text-primary/80 transition-colors font-medium">
                  <ExternalLink size={16} className="mr-2" />
                  Lihat Detail
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-secondary rounded-2xl p-8 border border-primary">
            <h3 className="text-2xl font-bold mb-6 text-center text-primary">
              Statistik Prestasi
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="neon-glow bg-white/10 p-4 rounded-xl border border-primary/30 text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-primary">Kompetisi Diikuti</div>
              </div>

              <div className="neon-glow bg-white/10 p-4 rounded-xl border border-primary/30 text-center">
                <div className="text-4xl font-bold text-primary mb-2">8</div>
                <div className="text-primary">Juara/Pemenang</div>
              </div>

              <div className="neon-glow bg-white/10 p-4 rounded-xl border border-primary/30 text-center">
                <div className="text-4xl font-bold text-primary mb-2">5</div>
                <div className="text-primary">Penghargaan Khusus</div>
              </div>

              <div className="neon-glow bg-white/10 p-4 rounded-xl border border-primary/30 text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-primary">Proyek Selesai</div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;