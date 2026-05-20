import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, CheckCircle, XCircle, Sparkles, ArrowRight, Clock } from 'lucide-react';
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';

// Kredensial EmailJS Anda
const SERVICE_ID = 'service_lv0krj3'; 
const TEMPLATE_ID = 'template_6mepn3e'; 
const PUBLIC_KEY = 'nWbmPAZzAyYtx2Kkd'; 

const successToastStyle = {
  background: '#ecfdf5',
  color: '#059669',
  border: '1px solid #34d399',
  padding: '16px',
  borderRadius: '12px',
  fontWeight: '600',
  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    const loadingToastId = toast.loading('Memproses pengiriman pesan...');

    try {
      const templateParams = {
        name: data.name,
        title: data.subject,
        email: data.email,
        message: data.message,
      };

      const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      toast.dismiss(loadingToastId);

      if (res.status === 200) {
        toast.custom((t) => (
          <div
            className={`${t.visible ? 'animate-enter' : 'animate-leave'} max-w-md w-full relative`}
            style={successToastStyle}
          >
            <div className="flex items-center">
              <CheckCircle size={24} className="mr-3 flex-shrink-0" color="#059669" />
              <div>
                <p className="text-base">Pesan Anda sudah diteruskan ke admin.</p>
                <p className="text-sm font-normal opacity-90 mt-0.5">Kami akan segera menghubungi Anda kembali!</p>
              </div>
            </div>
            <button onClick={() => toast.dismiss(t.id)} className="absolute top-2 right-2 text-green-700 hover:text-green-900">
                <XCircle size={18} />
            </button>
          </div>
        ), { duration: 5000 });
        reset();
      } else {
        toast.error("Gagal mengirim pesan. Silakan coba lagi nanti.");
      }
    } catch (err) {
      toast.dismiss(loadingToastId);
      console.error("Terjadi kesalahan:", err);
      toast.error("Terjadi kesalahan koneksi atau konfigurasi.");
    }
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail size={22} />,
      title: "Email",
      content: "devitra.first@gmail.com",
      subtitle: "Kami siap menjawab pertanyaan Anda",
      gradient: "from-blue-600 to-blue-700"
    },
    {
      icon: <Phone size={22} />,
      title: "Telepon",
      content: "+62 817-7641-1207",
      subtitle: "Senin - Jumat, 09:00 - 18:00",
      gradient: "from-blue-700 to-blue-800"
    },
    {
      icon: <MapPin size={22} />,
      title: "Lokasi",
      content: "Surabaya, Indonesia",
      subtitle: "Available for remote collaboration",
      gradient: "from-blue-800 to-blue-900"
    }
  ];

  return (
    <motion.section 
      id="contact" 
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden relative"
    >
      {/* Decorative background */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
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
            <span className="text-sm font-semibold text-blue-700">Get In Touch</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            <span className="relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500">
                Hubungi Kami
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
            Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi tim{' '}
            <span className="font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">Devitra</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100/60 rounded-full mb-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Contact Information</span>
              </div>
              <h3 className="text-3xl font-black mb-4 text-blue-900">Mari Berbicara</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Kami selalu terbuka untuk diskusi tentang proyek baru, ide kreatif, atau peluang untuk menjadi bagian dari visi kami.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-5">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="group flex items-start gap-5 p-5 bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-blue-100/80 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300"
                >
                  <div className={`relative w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-300/50 group-hover:shadow-xl group-hover:shadow-blue-400/50 transition-all duration-300`}>
                    {item.icon}
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-2xl transition-all duration-300" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-blue-900 text-lg mb-1 group-hover:text-blue-700 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-blue-600 font-semibold mb-1">{item.content}</p>
                    <p className="text-slate-500 text-sm">{item.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="relative mt-8 p-8 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 rounded-3xl text-white shadow-2xl shadow-blue-300/50 overflow-hidden"
            >
              {/* Decorative elements */}
              <motion.div 
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 blur-2xl"
              />

              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <Clock size={20} className="text-blue-200" />
                  <span className="text-sm font-semibold text-blue-100">Quick Response</span>
                </div>
                <h4 className="text-2xl font-black mb-3 leading-tight">Siap untuk Memulai Proyek?</h4>
                <p className="mb-6 text-blue-100 leading-relaxed">
                  Mari wujudkan ide Anda menjadi kenyataan dengan tim yang berpengalaman dan passionate.
                </p>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:devitra.first@gmail.com"
                  className="group inline-flex items-center gap-3 bg-white text-blue-700 px-6 py-3 rounded-2xl font-bold hover:bg-blue-50 transition-all shadow-lg"
                >
                  <Mail size={20} />
                  <span>Email Langsung</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={18} />
                  </motion.div>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/90 backdrop-blur-sm border-2 border-blue-100/80 rounded-3xl p-8 md:p-10 shadow-2xl shadow-blue-100/50">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" />
                <h3 className="text-3xl font-black text-blue-900">Kirim Pesan</h3>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-blue-900 mb-2 flex items-center gap-2">
                    Nama Lengkap
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register('name', { required: 'Nama wajib diisi' })}
                    className="w-full px-5 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-xl text-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none hover:border-blue-300"
                    placeholder="Budi Santoso"
                  />
                  {errors.name && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-2 flex items-center gap-1"
                    >
                      <XCircle size={14} />
                      {errors.name.message}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-bold text-blue-900 mb-2 flex items-center gap-2">
                    Email
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    {...register('email', {
                      required: 'Email wajib diisi',
                      pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Format email tidak valid' }
                    })}
                    className="w-full px-5 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-xl text-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none hover:border-blue-300"
                    placeholder="budi.s@example.com"
                  />
                  {errors.email && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-2 flex items-center gap-1"
                    >
                      <XCircle size={14} />
                      {errors.email.message}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-bold text-blue-900 mb-2 flex items-center gap-2">
                    Subjek
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register('subject', { required: 'Subjek wajib diisi' })}
                    className="w-full px-5 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-xl text-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none hover:border-blue-300"
                    placeholder="Pertanyaan Umum / Konsultasi Proyek"
                  />
                  {errors.subject && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-2 flex items-center gap-1"
                    >
                      <XCircle size={14} />
                      {errors.subject.message}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-bold text-blue-900 mb-2 flex items-center gap-2">
                    Pesan
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    {...register('message', { required: 'Pesan wajib diisi' })}
                    rows={5}
                    className="w-full px-5 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-xl text-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none resize-none hover:border-blue-300"
                    placeholder="Ceritakan tentang proyek atau pertanyaan Anda secara detail..."
                  />
                  {errors.message && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-2 flex items-center gap-1"
                    >
                      <XCircle size={14} />
                      {errors.message.message}
                    </motion.p>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(29, 78, 216, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full py-4 bg-gradient-to-r from-blue-700 to-blue-600 text-white rounded-2xl font-bold flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-blue-200 hover:from-blue-600 hover:to-blue-500 transition-all relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <Send size={20} className="relative z-10" />
                  <span className="relative z-10">{isSubmitting ? "Mengirim..." : "Kirim Pesan"}</span>
                  {!isSubmitting && (
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="relative z-10"
                    >
                      <ArrowRight size={18} />
                    </motion.div>
                  )}
                </motion.button>
              </form>

              {/* Privacy Note */}
              <p className="mt-6 text-xs text-slate-500 text-center leading-relaxed">
                Dengan mengirim formulir ini, Anda menyetujui bahwa data Anda akan diproses sesuai dengan kebijakan privasi kami.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;