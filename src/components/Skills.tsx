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

  return (
    <section id="skills" className="px-6 py-16 text-center">
      <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white text-sm shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}