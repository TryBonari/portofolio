export function Projects() {
  return (
    <section id="project" className="py-24 bg-[#F7F2EE] border-t border-[#D8C7B5]/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-[#1a1a1a]/60 mb-3 flex items-center gap-4">
              
              Portfolio
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-[#1a1a1a]">Projects</h3>
          </div>
          <p className="text-[#555555] text-base mt-4 md:mt-0 max-w-sm font-sans">
            Beberapa karya yang sudah saya kerjakan dan kembangkan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Project 1 */}
          <div className="group bg-[#D8C7B5]/30 p-8 rounded-sm border border-[#C5B4A1]/40 hover:bg-[#D8C7B5]/50 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#1a1a1a]/60">Web Portal Sekolah</span>
                <span className="text-xs font-semibold tracking-wider px-3 py-1 bg-[#1a1a1a] text-[#F7F2EE] rounded-full">NEXT.JS</span>
              </div>
              <h4 className="text-2xl font-serif font-bold mb-3 text-[#1a1a1a] group-hover:underline">Dashboard admin dan user</h4>
              <p className="text-[#444444] text-sm leading-relaxed mb-8 font-sans">
                  Portal sekolah dua sisi dengan antarmuka yang bersih, cepat, dan intuitif, memudahkan admin mengelola data sekaligus pengguna mengakses informasi akademik.
              </p>
            </div>
            <a href="#kontak" className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase text-[#1a1a1a] pb-1 border-b-2 border-[#1a1a1a] w-max">
              <span>Lihat proyek</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* Project 2 */}
          <div className="group bg-[#D8C7B5]/30 p-8 rounded-sm border border-[#C5B4A1]/40 hover:bg-[#D8C7B5]/50 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#1a1a1a]/60">Undergraduate thesis</span>
                <span className="text-xs font-semibold tracking-wider px-3 py-1 bg-[#1a1a1a] text-[#F7F2EE] rounded-full">PYTHON</span>
              </div>
              <h4 className="text-2xl font-serif font-bold mb-3 text-[#1a1a1a] group-hover:underline">Analisis sentimen </h4>
              <p className="text-[#444444] text-sm leading-relaxed mb-8 font-sans">
                Analisis sentimen pengguna aplikasi FLOQ menggunakan algoritma Support Vectore Machine (SVM)
              </p>
            </div>
            <a href="#kontak" className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase text-[#1a1a1a] pb-1 border-b-2 border-[#1a1a1a] w-max">
              <span>Lihat skripsi</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
