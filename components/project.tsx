export function Projects() {
  return (
    <section id="project" className="max-w-6xl mx-auto px-6 py-20 border-t border-[#E5E5E7]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#777777] block mb-2">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111111]">Featured Projects</h2>
        </div>
        <p className="text-[#666666] text-sm mt-2 md:mt-0 max-w-sm">
          Beberapa karya pilihan yang telah saya kembangkan dengan pendekatan minimalis dan performa optimal.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group p-8 rounded-2xl bg-white border border-[#E5E5E7] hover:border-[#111111]/30 transition-all shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-[#777777]">01 / Web App</span>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#F5F5F7] text-[#333333]">Next.js</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#111111] group-hover:underline">Minimalist Dashboard</h3>
            <p className="text-[#666666] text-sm leading-relaxed mb-6">
              Dashboard analitik dengan antarmuka yang bersih, cepat, dan berfokus pada pengalaman pengguna yang intuitif.
            </p>
          </div>
          <div className="flex items-center text-sm font-medium text-[#111111]">
            <span>View Case Study</span>
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
        <div className="group p-8 rounded-2xl bg-white border border-[#E5E5E7] hover:border-[#111111]/30 transition-all shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-[#777777]">02 / E-Commerce</span>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#F5F5F7] text-[#333333]">React / Tailwind</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#111111] group-hover:underline">Curated Storefront</h3>
            <p className="text-[#666666] text-sm leading-relaxed mb-6">
              Platform e-commerce modern dengan navigasi mulus dan fokus visual pada produk berkualitas tinggi.
            </p>
          </div>
          <div className="flex items-center text-sm font-medium text-[#111111]">
            <span>View Case Study</span>
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </div>
    </section>
  );
}
