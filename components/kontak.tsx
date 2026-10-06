export function Kontak() {
  return (
    <section id="kontak" className="max-w-6xl mx-auto px-6 py-20 border-t border-[#E5E5E7]">
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#777777] block mb-2">Get in Touch</span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111111] mb-4">Let's build something great together.</h2>
        <p className="text-[#666666] text-base mb-8 leading-relaxed">
          Punya proyek baru, pertanyaan, atau ingin sekadar berdiskusi? Silakan hubungi saya melalui email atau WhatsApp di bawah ini.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:try.sutrisno@example.com"
            className="px-6 py-3 rounded-xl bg-[#111111] text-[#F5F5F7] font-medium text-sm hover:bg-black transition-all shadow-md"
          >
            Send Email
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-white border border-[#E5E5E7] text-[#111111] font-medium text-sm hover:bg-[#F5F5F7] transition-all"
          >
            WhatsApp Chat
          </a>
        </div>
      </div>
    </section>
  );
}
