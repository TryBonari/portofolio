export function Hero() {
  return (
    <section id="beranda" className="relative w-full min-h-[85vh] bg-[#F7F2EE] flex items-center overflow-hidden py-16">
      {/* Background Decorative Blob / Shape (Bottom Left) */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#FFB6A3]/60 rounded-full filter blur-3xl pointer-events-none -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Heading & Highlight */}
        <div className="lg:col-span-6 flex flex-col justify-center pt-8">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#1a1a1a] leading-[1.15] mb-6">
            Web, Database <br />
            dan sedikit <br />
            <span className="relative inline-block">
              {/* Highlight background yellow mark */}
              <span className="absolute inset-0 bg-[#FFD43B] -rotate-1 transform -z-10 translate-y-2"></span>
              Machine Learning.
            </span>
          </h1>

          {/* Floating Card */}
          <div className="mt-8 bg-[#D8C7B5]/90 backdrop-blur-sm p-6 md:p-8 rounded-sm shadow-xl max-w-lg border border-[#C5B4A1]">
            <h3 className="font-serif text-xl md:text-2xl font-bold text-[#1a1a1a] mb-3">
              <span className="underline decoration-1 underline-offset-4">Halo!</span>
            </h3>
            <p className="text-sm md:text-base text-[#333333] leading-relaxed mb-6 font-sans">
              Saya Try Bonari Hutabarat, lulusan Teknik Informatika dengan ketertarikan pada pengembangan web, data, dan machine learning. Saya senang mempelajari hal baru melalui project dan mencoba menerapkan apa yang saya pelajari ke dalam sesuatu yang bisa digunakan.
            </p>
            <a 
              href="#project" 
              className="inline-flex items-center space-x-3 text-xs md:text-sm font-semibold tracking-wider uppercase text-[#1a1a1a] pb-1 border-b-2 border-[#1a1a1a] hover:opacity-70 transition-opacity"
            >
            </a>
          </div>
        </div>

        {/* Right Column: Featured Image */}
        <div className="lg:col-span-6 relative flex justify-end">
          <div className="w-full max-w-lg aspect-[4/5] relative overflow-hidden rounded-sm shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800" 
              alt="Hero Portrait" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
