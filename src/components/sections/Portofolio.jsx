import React, { useState } from 'react';
import { portoData, categoryList, statsData } from '../../data/Porto';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const statusStyle = {
  Live: 'bg-blue-50 text-blue-700 border border-blue-200',
  Completed: 'bg-slate-50 text-slate-600 border border-slate-200',
  'Open Source': 'bg-sky-50 text-sky-700 border border-sky-200',
};

const Portofolio = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filtered =
      activeCategory === 'Semua'
          ? portoData
          : portoData.filter((p) => p.category === activeCategory);

  const featured = portoData.filter((p) => p.featured);

  return (
      <section
          id="portofolio"
          aria-label="Portofolio Tim Devitra"
          className="py-24 bg-white"
      >
        <div className="container mx-auto px-6 max-w-6xl">

          {/* ── Header: teks kiri + stats kanan ── */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-blue-100 pb-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-3 py-1 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block"></span>
                <span className="text-xs font-semibold text-blue-700 tracking-widest uppercase">Tim Devitra</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-3">
                Portofolio Proyek
              </h1>
              <p className="text-base text-slate-500 max-w-md leading-relaxed">
                Karya nyata yang kami bangun sejak Agustus 2025 — dari aplikasi web, sistem IoT, hingga solusi open source.
              </p>
            </div>

            {/* Stats strip di kanan */}
            <div className="flex flex-row md:flex-col gap-6 md:gap-3 shrink-0">
              {statsData.map((s) => (
                  <div key={s.label} className="md:text-right">
                    <div className="text-2xl font-bold text-blue-600">{s.value}</div>
                    <div className="text-xs text-slate-400">{s.label}</div>
                  </div>
              ))}
            </div>
          </div>

          {/* ── Featured: 1 besar (col-3) + 2 kecil stacked (col-2) ── */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-4 h-px bg-blue-400"></span>
              <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">Proyek Unggulan</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
              {/* Card besar */}
              {featured[0] && (
                  <article
                      className="md:col-span-3 rounded-2xl overflow-hidden border border-blue-100 bg-white hover:border-blue-300 transition-colors duration-200 flex flex-col"
                      itemScope
                      itemType="https://schema.org/SoftwareApplication"
                  >
                    <div className="h-64 bg-blue-50 relative overflow-hidden">
                      {featured[0].image ? (
                          <img
                              src={featured[0].image}
                              alt={`Screenshot proyek ${featured[0].title}`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                              width="800"
                              height="400"
                              itemProp="image"
                          />
                      ) : (
                          <div className="w-full h-full flex items-center justify-center text-blue-200 text-6xl font-bold select-none">
                            {featured[0].title.slice(0, 2)}
                          </div>
                      )}
                      <span className={`absolute top-4 left-4 text-xs font-medium px-2.5 py-1 rounded-full ${statusStyle[featured[0].status] ?? 'bg-slate-100 text-slate-600 border border-slate-200'}`}>
                    {featured[0].status}
                  </span>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-lg font-bold text-slate-900" itemProp="name">{featured[0].title}</h3>
                        <span className="text-xs text-slate-400 shrink-0 mt-1">{featured[0].year}</span>
                      </div>
                      <p className="text-sm text-slate-500 mb-4 leading-relaxed flex-1" itemProp="description">
                        {featured[0].description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {featured[0].tags.map((tag) => (
                            <span key={tag} className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded border border-blue-100">
                        {tag}
                      </span>
                        ))}
                      </div>
                      <a
                          href={featured[0].url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                          aria-label={`Lihat proyek ${featured[0].title}`}
                          itemProp="url"
                      >
                        Lihat Proyek <ArrowUpRight size={15} />
                      </a>
                    </div>
                  </article>
              )}

              {/* Dua card kecil stacked */}
              <div className="md:col-span-2 flex flex-col gap-5">
                {featured.slice(1, 3).map((project) => (
                    <article
                        key={project.id}
                        className="rounded-2xl overflow-hidden border border-blue-100 bg-white hover:border-blue-300 transition-colors duration-200 flex flex-col flex-1"
                        itemScope
                        itemType="https://schema.org/SoftwareApplication"
                    >
                      <div className="h-32 bg-blue-50 relative overflow-hidden">
                        {project.image ? (
                            <img
                                src={project.image}
                                alt={`Screenshot proyek ${project.title}`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                                width="600"
                                height="300"
                                itemProp="image"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-blue-200 text-4xl font-bold select-none">
                              {project.title.slice(0, 2)}
                            </div>
                        )}
                        <span className={`absolute top-3 left-3 text-xs font-medium px-2 py-0.5 rounded-full ${statusStyle[project.status] ?? 'bg-slate-100 text-slate-600 border border-slate-200'}`}>
                      {project.status}
                    </span>
                      </div>
                      <div className="p-4 flex flex-col flex-1">
                        <div className="flex items-start justify-between gap-2 mb-1.5">
                          <h3 className="text-sm font-bold text-slate-900" itemProp="name">{project.title}</h3>
                          <span className="text-xs text-slate-400 shrink-0">{project.year}</span>
                        </div>
                        <p className="text-xs text-slate-500 mb-3 leading-relaxed flex-1" itemProp="description">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {project.tags.slice(0, 3).map((tag) => (
                              <span key={tag} className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded border border-blue-100">
                          {tag}
                        </span>
                          ))}
                        </div>
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                            aria-label={`Lihat proyek ${project.title}`}
                            itemProp="url"
                        >
                          Lihat Proyek <ArrowUpRight size={13} />
                        </a>
                      </div>
                    </article>
                ))}
              </div>
            </div>
          </div>

          {/* ── Semua Proyek ── */}
          <div>
            <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="w-4 h-px bg-blue-400"></span>
                <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">Semua Proyek</h2>
              </div>

              <nav className="flex flex-wrap gap-2" aria-label="Filter kategori proyek">
                {categoryList.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`text-xs font-medium px-3.5 py-1.5 rounded-full border transition-colors duration-150 ${
                            activeCategory === cat
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600'
                        }`}
                        aria-pressed={activeCategory === cat}
                    >
                      {cat}
                    </button>
                ))}
              </nav>
            </div>

            {/* Grid 4 kolom di desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {filtered.map((project) => (
                  <article
                      key={project.id}
                      className="rounded-xl border border-blue-100 bg-white hover:border-blue-300 hover:shadow-sm transition-all duration-200 flex flex-col overflow-hidden"
                      itemScope
                      itemType="https://schema.org/SoftwareApplication"
                  >
                    <div className="h-28 bg-blue-50 relative overflow-hidden">
                      {project.image ? (
                          <img
                              src={project.image}
                              alt={`Tampilan proyek ${project.title}`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                              width="400"
                              height="200"
                              itemProp="image"
                          />
                      ) : (
                          <div className="w-full h-full flex items-center justify-center text-blue-200 text-3xl font-bold select-none">
                            {project.title.slice(0, 2)}
                          </div>
                      )}
                    </div>

                    <div className="p-3.5 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-blue-400 font-medium">{project.category}</span>
                        <span className="text-xs text-slate-400">{project.year}</span>
                      </div>

                      <h3 className="text-sm font-bold text-slate-900 mb-1.5 leading-snug" itemProp="name">
                        {project.title}
                      </h3>

                      <p className="text-xs text-slate-500 leading-relaxed mb-3 flex-1 line-clamp-3" itemProp="description">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="text-xs bg-blue-50 text-blue-500 px-1.5 py-0.5 rounded border border-blue-100">
                        {tag}
                      </span>
                        ))}
                        {project.tags.length > 2 && (
                            <span className="text-xs text-slate-400">+{project.tags.length - 2}</span>
                        )}
                      </div>

                      <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                          aria-label={`Lihat proyek ${project.title}`}
                          itemProp="url"
                      >
                        <ExternalLink size={11} />
                        Lihat Proyek
                      </a>
                    </div>
                  </article>
              ))}
            </div>

            {filtered.length === 0 && (
                <p className="text-center text-slate-400 py-16 text-sm">
                  Tidak ada proyek dalam kategori ini.
                </p>
            )}
          </div>
        </div>
      </section>
  );
};

export default Portofolio;