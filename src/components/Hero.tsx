import { Button } from "./ui/button";
import useScrollReveal from "../lib/useScrollReveal";
import { cn } from "../lib/utils";

export default function Hero() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="px-6 py-20 text-center transition-theme">
      <div
        ref={ref as any}
        className={cn(
          "mx-auto max-w-3xl p-6",
          "transform transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#111827] dark:text-[#E2E8F0]">
          Front-End Developer
        </h2>

        <p className="mt-4 text-neutral-700 dark:text-neutral-300 max-w-xl mx-auto">
          Front-End Developer specializing in React, WordPress, and high-converting websites
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a href="#projects">
            <Button variant="default">View Projects</Button>
          </a>

          <a href="/cv.pdf" download>
            <Button variant="default">Download CV</Button>
          </a>
        </div>
      </div>
    </section>
  );
}