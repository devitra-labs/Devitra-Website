import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    // Hanya tampilkan alert saat submit ditekan
    alert("Maintenance: Fitur pengiriman pesan sedang tidak tersedia untuk sementara.");

    // Reset form setelah submit (opsional, boleh dihapus)
    reset();
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Hubungi Kami</span>
          </h2>
          <p className="text-xl text-primary max-w-3xl mx-auto">
            Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi tim Devitra.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Mari Berbicara</h3>
            <p className="text-primary mb-8">
              Kami selalu terbuka untuk diskusi tentang proyek baru, ide kreatif, atau peluang untuk menjadi bagian dari visi kami.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 border border-primary">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-primary">Email</h4>
                  <p className="text-primary">devitra.first@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 border border-primary">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-primary">Telepon</h4>
                  <p className="text-primary">62 817-7641-1207</p>
                  <p className="text-primary text-sm">Senin - Jumat, 09:00 - 18:00</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 border border-primary">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-primary">Lokasi</h4>
                  <p className="text-primary">Indonesia</p>
                  <p className="text-primary text-sm">Available for remote collaboration</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-secondary rounded-2xl border border-primary">
              <h4 className="text-xl font-bold mb-3 text-primary">Siap untuk Memulai Proyek?</h4>
              <p className="mb-4 text-primary">
                Mari wujudkan ide Anda menjadi kenyataan dengan tim yang berpengalaman dan passionate.
              </p>
              <a
                href="mailto:devitra.first@gmail.com"
                className="inline-flex items-center bg-primary text-secondary px-4 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                <Mail size={16} className="mr-2" />
                Email Langsung
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-secondary border border-primary rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-primary">Kirim Pesan</h3>

              {/* Tidak lagi menampilkan "Pesan Terkirim" */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    {...register('name', { required: 'Nama wajib diisi' })}
                    className="w-full px-4 py-3 bg-secondary border border-primary rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-primary placeholder-primary"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register('email', {
                      required: 'Email wajib diisi',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Format email tidak valid'
                      }
                    })}
                    className="w-full px-4 py-3 bg-secondary border border-primary rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-primary placeholder-primary"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Subjek
                  </label>
                  <input
                    type="text"
                    {...register('subject', { required: 'Subjek wajib diisi' })}
                    className="w-full px-4 py-3 bg-secondary border border-primary rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-primary placeholder-primary"
                    placeholder="Diskusi Proyek"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Pesan
                  </label>
                  <textarea
                    {...register('message', { required: 'Pesan wajib diisi' })}
                    rows={5}
                    className="w-full px-4 py-3 bg-secondary border border-primary rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none text-primary placeholder-primary"
                    placeholder="Ceritakan lebih lanjut tentang proyek atau pertanyaan Anda..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center"
                >
                  <Send size={20} className="mr-2" />
                  Kirim Pesan
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
