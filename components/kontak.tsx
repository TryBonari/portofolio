export function Kontak() {
  return (
    <section id="kontak" className="py-24 bg-[#F7F2EE] border-t border-[#D8C7B5]/40">
      <div className="max-w-3xl mx-auto text-center px-6">
        <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-[#1a1a1a]/60 mb-6 flex items-center justify-center gap-4">
          <span className="w-8 h-px bg-[#1a1a1a]/60"></span>
          Get in Touch
          <span className="w-8 h-px bg-[#1a1a1a]/60"></span>
        </h2>
        <h3 className="text-4xl md:text-6xl font-serif font-bold text-[#1a1a1a] mb-6 leading-tight">
          Let's build something <br /> great together.
        </h3>
        <p className="text-[#555555] text-lg mb-10 leading-relaxed max-w-2xl mx-auto font-sans">
          Punya proyek baru, pertanyaan, atau ingin sekadar berdiskusi? Silakan hubungi saya melalui email atau WhatsApp di bawah ini.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="mailto:try.sutrisno@example.com"
            className="px-10 py-4 bg-[#1a1a1a] text-[#F7F2EE] font-semibold text-xs tracking-wider uppercase rounded-sm hover:bg-black transition-colors w-full sm:w-auto text-center"
          >
            Send Email
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-[#F7F2EE] border border-[#1a1a1a] text-[#1a1a1a] font-semibold text-xs tracking-wider uppercase rounded-sm hover:bg-[#D8C7B5]/30 transition-colors w-full sm:w-auto text-center"
          >
            WhatsApp Chat
          </a>
        </div>
      </div>
    </section>
  );
}
