import { useEffect, useRef, useState } from "react";

export function useScrollReveal(threshold = 0.08, rootMargin = "0px") {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // set visibility based on intersection; do NOT unobserve so animation can replay
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [ref, threshold, rootMargin]);

  return { ref, isVisible } as const;
}

export default useScrollReveal;
