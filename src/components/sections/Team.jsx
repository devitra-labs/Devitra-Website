import React from 'react';
import { motion } from 'framer-motion';
import { teamData } from '../../data/teamData';
import {
  Github, Linkedin, Mail, Code, Palette, Sparkles, ArrowRight,
  Users, BarChart2, Megaphone
} from 'lucide-react';

// Konfigurasi divisi
const DIVISIONS = [
  {
    key: 'Engineering',
    label: 'Engineering Division',
    icon: Code,
    gradient: 'from-blue-600 to-blue-700',
    shadow: 'shadow-blue-200',
    badgeColor: 'text-blue-700',
    badgeBg: 'bg-blue-50',
    badgeBorder: 'border-blue-100',
  },
  {
    key: 'Design',
    label: 'Design & Creative',
    icon: Palette,
    gradient: 'from-blue-700 to-blue-800',
    shadow: 'shadow-blue-200',
    badgeColor: 'text-blue-700',
    badgeBg: 'bg-blue-50',
    badgeBorder: 'border-blue-100',
  },
  {
    key: 'Human Resource',
    label: 'Human Resource',
    icon: Users,
    gradient: 'from-violet-600 to-violet-700',
    shadow: 'shadow-violet-200',
    badgeColor: 'text-violet-700',
    badgeBg: 'bg-violet-50',
    badgeBorder: 'border-violet-100',
  },
  {
    key: 'Finance',
    label: 'Finance',
    icon: BarChart2,
    gradient: 'from-emerald-600 to-emerald-700',
    shadow: 'shadow-emerald-200',
    badgeColor: 'text-emerald-700',
    badgeBg: 'bg-emerald-50',
    badgeBorder: 'border-emerald-100',
  },
  {
    key: 'Marketing',
    label: 'Marketing',
    icon: Megaphone,
    gradient: 'from-orange-500 to-orange-600',
    shadow: 'shadow-orange-200',
    badgeColor: 'text-orange-700',
    badgeBg: 'bg-orange-50',
    badgeBorder: 'border-orange-100',
  },
];

const getDivisionConfig = (divisionKey) =>
  DIVISIONS.find((d) => d.key === divisionKey) || DIVISIONS[0];

const Team = ({ onShowContact }) => {
  const TeamMemberCard = ({ member, indexOffset = 0 }) => {
    const divConfig = getDivisionConfig(member.division);
    const DivIcon = divConfig.icon;

    return (
      <motion.article
        key={member.id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: indexOffset * 0.1 }}
        whileHover={{ y: -12 }}
        className="h-full flex flex-col group bg-white border-2 border-blue-100/80 rounded-3xl overflow-hidden w-full max-w-sm hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-300"
      >
        {/* Header Card with Image */}
        <div className={`relative h-56 bg-gradient-to-br ${divConfig.gradient} overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"
          />

          {/* Division Badge */}
          <div className="absolute top-4 left-4 z-10">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg border border-white/50"
              style={{ color: 'inherit' }}
            >
              <DivIcon size={14} className={divConfig.badgeColor} />
              <span className={divConfig.badgeColor}>{member.division}</span>
            </motion.span>
          </div>

          {/* Online Status */}
          <div className="absolute top-4 right-4 z-10">
            <div className="relative">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 w-4 h-4 bg-green-400 rounded-full opacity-50 blur-sm"
              />
              <span className="relative block w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-lg" />
            </div>
          </div>

          {/* Profile Image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="w-32 h-32 rounded-full border-4 border-white/40 overflow-hidden relative bg-white/20 backdrop-blur-md shadow-2xl"
            >
              {member.image ? (
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              ) : (
                <div className={`w-full h-full flex items-center justify-center text-white font-bold text-3xl bg-gradient-to-br ${divConfig.gradient}`}>
                  {member.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </div>
        </div>

        {/* Card Content */}
        <div className="flex-1 flex flex-col p-6 relative">
          <div className="mb-4 text-center">
            <h3 className="text-2xl font-black mb-2 text-blue-900 group-hover:text-blue-700 transition-colors">
              {member.name}
            </h3>
            <p className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-block border ${divConfig.badgeColor} ${divConfig.badgeBg} ${divConfig.badgeBorder}`}>
              {member.role}
            </p>
          </div>

          <p className="text-sm mb-5 text-slate-600 line-clamp-3 leading-relaxed text-center">
            {member.bio}
          </p>

          <div className="flex flex-wrap gap-2 mb-6 justify-center">
            {member.skills.map((skill, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className={`text-xs px-3 py-1 rounded-full border font-semibold cursor-default transition-all ${divConfig.badgeBg} ${divConfig.badgeColor} ${divConfig.badgeBorder} hover:opacity-80`}
              >
                {skill}
              </motion.span>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 pt-5 border-t-2 border-slate-100">
            {member.social?.github && (
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href={member.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-blue-600 transition-all duration-300 border border-slate-200 hover:border-blue-600"
              >
                <Github size={18} />
              </motion.a>
            )}
            {member.social?.linkedin && (
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-blue-600 transition-all duration-300 border border-slate-200 hover:border-blue-600"
              >
                <Linkedin size={18} />
              </motion.a>
            )}
            {member.social?.email && (
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href={`mailto:${member.social.email}`}
                className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-blue-600 transition-all duration-300 border border-slate-200 hover:border-blue-600"
              >
                <Mail size={18} />
              </motion.a>
            )}
          </div>
        </div>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: indexOffset * 0.1 + 0.3 }}
          className={`h-1 bg-gradient-to-r ${divConfig.gradient}`}
        />
      </motion.article>
    );
  };

  return (
    <section id="team" className="py-24 bg-gradient-to-b from-slate-50 via-blue-50/30 to-white overflow-hidden relative">
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/80 backdrop-blur-sm rounded-full border border-blue-200/50 mb-6"
          >
            <Sparkles size={16} className="text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">Our Team</span>
          </motion.div>

          <div className="relative inline-block bg-gradient-to-r from-blue-700 to-blue-600 text-white rounded-3xl px-10 py-5 mb-8 shadow-2xl shadow-blue-300/50 overflow-hidden">
            <motion.div
              animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 bg-white/10"
            />
            <h2 className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-center">
              Meet Our Experts
            </h2>
          </div>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Berkenalan dengan tim profesional di balik
            <motion.span
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mx-2 inline-block font-black text-blue-700 bg-gradient-to-r from-blue-50 to-blue-100 px-4 py-1.5 rounded-xl border-2 border-blue-200/60 shadow-sm cursor-default"
            >
              Devitra
            </motion.span>
            yang siap membantu transformasi digital bisnis Anda.
          </p>
        </motion.div>

        {/* Render semua divisi secara dinamis */}
        {DIVISIONS.map((div) => {
          const members = teamData.filter((m) => m.division === div.key);
          if (members.length === 0) return null;
          const DivIcon = div.icon;

          return (
            <div key={div.key} className="mb-24">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-12 overflow-hidden"
              >
                <div className={`flex items-center gap-3 bg-gradient-to-r ${div.gradient} text-white px-6 py-3 rounded-2xl shadow-lg ${div.shadow}`}>
                  <DivIcon size={24} />
                  <h3 className="text-2xl font-black whitespace-nowrap">{div.label}</h3>
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-blue-300 to-transparent rounded-full" />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {members.map((member, index) => (
                  <TeamMemberCard member={member} indexOffset={index} key={member.id} />
                ))}
              </div>
            </div>
          );
        })}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-28"
        >
          <div id="contact" className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 rounded-3xl p-12 md:p-16 text-white shadow-2xl shadow-blue-300/50 overflow-hidden">
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"
            />
            <motion.div
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/10 rounded-full -ml-32 -mb-32 blur-3xl"
            />

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6"
              >
                <Sparkles size={16} className="text-blue-100" />
                <span className="text-sm font-semibold text-blue-100">Let's Work Together</span>
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
                Butuh Solusi Digital Berkualitas?
              </h3>
              <p className="mb-10 text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
                Tim kami siap berkolaborasi untuk mewujudkan ide Anda menjadi aplikasi web yang aman, cepat, dan berkelas dunia.
              </p>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 255, 255, 0.2)' }}
                whileTap={{ scale: 0.98 }}
                onClick={onShowContact}
                className="group inline-flex items-center gap-3 bg-white text-blue-700 px-10 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-all shadow-2xl"
              >
                <a href="https://wa.me/+6281776411207">
                  <span>Mulai Proyek Bersama</span>
                </a>
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <ArrowRight size={20} />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;