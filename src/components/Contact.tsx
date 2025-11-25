import { cn } from "../lib/utils";
import useScrollReveal from "../lib/useScrollReveal";

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="px-6 py-24 text-center">
      <div
        ref={ref as any}
        className={cn(
          "mx-auto max-w-3xl p-8",
          "rounded-xl bg-white dark:bg-[#2c2c2cff] border border-gray-200 dark:border-neutral-800 shadow-md",
          "transform transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111827] dark:text-[#E2E8F0] mb-6">
          Contact Me
        </h2>

        <p className="text-[#374151] dark:text-[#CBD5E1] max-w-xl mx-auto mb-8">
          Have a project in mind or want to work together?  
          Feel free to reach out I respond within 24 hours.
        </p>

        <a
          href="mailto:diego_lpz29@hotmail.com"
          className="inline-block bg-[#139661ff] text-white px-6 py-3 rounded-lg font-medium hover:shadow-md transition"
        >
          Send Email
        </a>
      </div>
    </section>
  );
}