export function CV() {
  return (
    <section id="cv" className="py-24 bg-[#F7F2EE] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#1a1a1a] p-10 md:p-16 relative overflow-hidden rounded-sm flex flex-col md:flex-row items-center justify-between gap-10 text-[#F7F2EE]">
          {/* Decorative Circle */}
          <div className="absolute -right-20 -bottom-20 w-72 h-72 bg-[#FFD43B]/10 rounded-full filter blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-[#F7F2EE]/60 mb-4 flex items-center gap-4">
              <span className="w-8 h-px bg-[#F7F2EE]/60"></span>
              Curriculum Vitae
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4 leading-tight">
              Interested in my professional <br /> background?
            </h3>
            <p className="text-[#F7F2EE]/70 text-sm md:text-base max-w-xl leading-relaxed font-sans">
              Unduh CV lengkap saya untuk melihat detail pengalaman kerja, keahlian teknis, dan riwayat pendidikan secara menyeluruh.
            </p>
          </div>

          <div className="relative z-10">
            <a
              href="#"
              download
              className="inline-flex items-center px-8 py-4 bg-[#FFD43B] text-[#1a1a1a] font-semibold text-xs tracking-wider uppercase rounded-sm hover:bg-[#FFEB3B] transition-colors whitespace-nowrap"
            >
              Download CV (PDF) →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
