import useScrollReveal from "../lib/useScrollReveal";
import { cn } from "../lib/utils";

export default function Skills() {
  const skills = [
    "React",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "WordPress",
    "Elementor",
    "WooCommerce",
    "SEO Optimization",
    "UI/UX Design",
    "Responsive Design",
  ];

  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="px-6 py-16 text-center transition-theme">
      <div
        ref={ref as any}
        className={cn(
          "max-w-4xl mx-auto p-6",
          "transform transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        <h2 className="text-3xl font-bold text-[#111827] dark:text-[#E2E8F0] mb-6">Skills</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full bg-[#F3F4F6] dark:bg-[#333333ff] text-[#111827] dark:text-[#E2E8F0] text-sm shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}