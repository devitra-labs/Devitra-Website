import React from 'react';
import { motion } from 'framer-motion';
import { teamData } from '../../data/teamData';
import { Github, Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const [headerStyle, setHeaderStyle] = React.useState('solid');
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          {headerStyle === 'solid' ? (
            <div className="bg-blue-700 text-white rounded-xl p-6 inline-block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-0">Tim Kami</h2>
            </div>
          ) : (
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl p-6 inline-block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-0">Tim Kami</h2>
            </div>
          )}
          <p className="text-lg sm:text-xl text-[#1e40af] max-w-3xl mx-auto px-4 mt-2">
            Berkenalan dengan para developer hebat di balik kesuksesan Devitra.
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* First Row - 3 members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6">
            {teamData.slice(0, 3).map((member, index) => (
              <motion.article
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}

                className="bg-white border border-blue-100 rounded-xl p-5 w-full max-w-sm hover:shadow-2xl transition-shadow"
              >
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] flex items-center justify-center rounded-t-xl overflow-hidden">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-[#60a5fa] to-[#3b82f6] text-white flex items-center justify-center font-semibold text-xl border-2 border-white">
                      {member.name.split(' ').map(n => n[0]).join('').slice(0,2)}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="w-3 h-3 bg-green-400 rounded-full border-2 border-white shadow-lg inline-block"></span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#1e3a8a]">{member.name}</h3>
                  <p className="text-sm mb-4 font-medium text-[#1e3a8a]">{member.role}</p>
                  <p className="text-sm mb-6 text-gray-700 line-clamp-2">{member.bio}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-blue-100">
                    <div className="flex space-x-3">
                      {member.social.github && (
                        <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-[#1e3a8a] hover:text-[#1e3a8a]/80 transition-colors">
                          <Github size={18} />
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#1e3a8a] hover:text-[#1e3a8a]/80 transition-colors">
                          <Linkedin size={18} />
                        </a>
                      )}
                      {member.social.email && (
                        <a href={`mailto:${member.social.email}`} className="text-[#1e3a8a] hover:text-[#1e3a8a]/80 transition-colors">
                          <Mail size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Second Row - 3 members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 px-2 md:px-0">
            {teamData.slice(3, 6).map((member, index) => (
              <motion.article
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 3) * 0.05 }}

                className="bg-white border border-blue-100 rounded-xl p-5 w-full max-w-sm hover:shadow-2xl transition-shadow"
              >
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] flex items-center justify-center rounded-t-xl overflow-hidden">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-[#60a5fa] to-[#3b82f6] text-white flex items-center justify-center font-semibold text-xl border-2 border-white">
                      {member.name.split(' ').map(n => n[0]).join('').slice(0,2)}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="w-3 h-3 bg-green-400 rounded-full border-2 border-white shadow-lg inline-block"></span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#1e3a8a]">{member.name}</h3>
                  <p className="text-sm mb-4 font-medium text-[#1e3a8a]">{member.role}</p>
                  <p className="text-sm mb-6 text-gray-700 line-clamp-2">{member.bio}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-blue-100">
                    <div className="flex space-x-3">
                      {member.social.github && (
                        <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-[#1e3a8a] hover:text-[#1e3a8a]/80 transition-colors">
                          <Github size={18} />
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#1e3a8a] hover:text-[#1e3a8a]/80 transition-colors">
                          <Linkedin size={18} />
                        </a>
                      )}
                      {member.social.email && (
                        <a href={`mailto:${member.social.email}`} className="text-[#1e3a8a] hover:text-[#1e3a8a]/80 transition-colors">
                          <Mail size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center px-4"
        >
          <div className="bg-white border border-blue-100 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-[#1e3a8a]">Ingin Bergabung dengan Tim Kami?</h3>
            <p className="mb-6 text-[#1e3a8a]">
              Kami selalu mencari talenta berbakat yang passionate dengan teknologi dan inovasi.
            </p>
            <a
              href="#contact"
              className="inline-block bg-[#1e40af] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1e3aaf]/90 transition-colors"
            >
              Hubungi Kami
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
