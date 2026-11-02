
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "School Portal",
    image: "/assets/project1.jpg",
  },
  {
    id: 2,
    title: "Data Analysis",
    image: "/assets/project2.jpg",
  },
  {
    id: 3,
    title: "Sentiment Analysis",
    image: "/assets/project3.jpg",
  },
  {
    id: 4,
    title: "Web Application",
    image: "/assets/project4.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#F5F0EB] px-6 py-20 md:px-12 lg:px-20">
      <section className="max-w-7xl mx-auto mb-14">
        <h1 className="text-5xl md:text-7xl font-bold font-serif text-[#171717]">
          Selected Projects.
        </h1>
      </section>

      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-[#E7DCCE] border border-[#D8C9B9] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#171717]">
                  {project.title}
                </h2>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
