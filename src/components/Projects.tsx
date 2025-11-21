import { Card } from "./ui/card";
import { Button } from "./ui/button";

export default function Projects() {
  const projects = [
    {
      title: "Dental Practice – Landing Page Development",
      desc: "High-converting landing page for a U.S. dental clinic, improving engagement and boosting online appointment requests.",
      link: "https://coral-hare-100844.hostingersite.com/venenatis-urna-cursus-eget-nunc-scelerisque/",
      image: "/images/dental.webp",
    },
    {
      title: "Maya Printing Factory – Website Development",
      desc: "Responsive website for a Vancouver printing company, improving navigation, SEO, and client acquisition.",
      link: "https://coral-hare-100844.hostingersite.com/massa-vitae-toutor-condimentum-lacinia-quis/",
      image: "/images/printing.webp",
    },
  ];

  return (
    <section id="projects" className="px-6 py-16">
      <h2 className="text-3xl font-bold text-neutral-900 dark:text-white text-center mb-6">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto items-stretch">
        {projects.map((p) => (
          <Card key={p.title} className="overflow-hidden flex flex-col">
            {/* contenedor para mantener imagen sin recortar y centrada */}
            <div className="w-full h-56 flex items-center justify-center bg-neutral-50 dark:bg-neutral-800">
              <img
                src={p.image}
                alt={p.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* contenido: usamos flex column y mt-auto en el botón para empujar abajo */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                {p.title}
              </h3>

              <p className="text-neutral-700 dark:text-neutral-300 mt-2">
                {p.desc}
              </p>

              <div className="mt-auto">
                <Button className="mt-4" variant="default">
                  <a href={p.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}