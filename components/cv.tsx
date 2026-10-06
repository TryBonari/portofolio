export function CV() {
  return (
    <section id="cv" className="max-w-6xl mx-auto px-6 py-20 border-t border-[#E5E5E7]">
      <div className="p-10 rounded-3xl bg-white border border-[#E5E5E7] flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#777777] block mb-2">Curriculum Vitae</span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#111111] mb-3">Interested in my professional background?</h2>
          <p className="text-[#666666] text-sm max-w-xl leading-relaxed">
            Unduh CV lengkap saya untuk melihat detail pengalaman kerja, keahlian teknis, dan riwayat pendidikan secara menyeluruh.
          </p>
        </div>
        <div>
          <a
            href="#"
            download
            className="inline-flex items-center px-6 py-3 rounded-xl bg-[#111111] text-[#F5F5F7] font-medium text-sm hover:bg-black transition-all shadow-md whitespace-nowrap"
          >
            Download CV (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
