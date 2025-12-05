import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";
import useScrollReveal from "../lib/useScrollReveal";

export default function Projects() {
  const projects = [
    {
      title: "Dental Practice – Landing Page Development",
      desc: "High-converting landing page for a U.S. dental clinic, improving engagement and boosting online appointment requests.",
      link: "https://betterdentallife.com/",
      image: "/images/dental.webp",
    },
    {
      title: "Maya Printing Factory – Website Development",
      desc: "Responsive website for a Vancouver printing company, improving navigation, SEO, and client acquisition.",
      link: "https://mayaprintingfactory.com/",
      image: "/images/printing.webp",
    },
    {
      title: "Dumroo Media – Website Visual Enhancement",
      desc: "Refined visual elements and layout for a Canadian video-marketing agency, improving UI consistency and overall user experience.",
      link: "https://dumroomedia.ca/",
      image: "/images/video-agency.webp",
    },
  ];

  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="px-6 py-24">
      <div
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111827] dark:text-[#E2E8F0] text-center mb-8">
          Projects
        </h2>

        <div
          ref={ref as any}
          className={cn(
            "grid md:grid-cols-2 gap-6 items-stretch",
            "transform transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          {projects.map((p) => (
            <Card key={p.title} className="overflow-hidden flex flex-col">
              <div className="w-full h-56 flex items-center justify-center bg-[#F9FAFB] dark:bg-[#313131ff]">
                <img src={p.image} alt={p.title} className="max-h-full max-w-full object-contain" />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl md:text-2xl font-semibold text-[#111827] dark:text-[#E2E8F0]">
                  {p.title}
                </h3>

                <p className="text-[#6B7280] dark:text-[#9CA3AF] mt-2">{p.desc}</p>

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
      </div>
    </section>
  );
}