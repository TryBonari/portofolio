export function Hero() {
  return (
    <section id="beranda" className="max-w-6xl mx-auto px-6 pt-24 pb-20 md:pt-36 md:pb-32 flex flex-col items-start justify-center">
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#E5E5E7]/60 text-xs font-medium mb-6 text-[#333333]">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>Available for new projects</span>
      </div>
      <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-[#111111] max-w-4xl">
        Crafting digital experiences with precision & minimalism.
      </h1>
      <p className="text-lg md:text-xl text-[#555555] max-w-2xl font-normal leading-relaxed mb-10">
        Halo, ini website portofolio saya. Saya seorang pengembang yang berfokus pada kesederhanaan fungsionalitas, performa tinggi, dan estetika modern.
      </p>
      <div className="flex flex-wrap items-center gap-4">
        <a href="#project" className="px-6 py-3 rounded-xl bg-[#111111] text-[#F5F5F7] font-medium text-sm hover:bg-black transition-all shadow-md hover:translate-y-[-1px]">
          Explore Projects
        </a>
        <a href="#kontak" className="px-6 py-3 rounded-xl bg-white border border-[#E5E5E7] text-[#111111] font-medium text-sm hover:bg-[#F5F5F7] transition-all">
          Get in Touch
        </a>
      </div>
    </section>
  );
}
