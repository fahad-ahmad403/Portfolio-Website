import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function GsapAnimation({
  children,
  duration = 2,
  ease = "power2.out",
  stagger = 0,
  startY = 50,
  triggerOnce = true,
  start = "top 80%",
  end = "bottom 60%",
  delay = 0,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const elems = containerRef.current.children;
    gsap.fromTo(
      elems,
      { y: startY, opacity: 0.1 },
      {
        y: 0,
        opacity: 1,
        duration,
        ease,
        stagger,
        delay,
        scrollTrigger: {
          trigger: containerRef.current,
          start,
          end,
          toggleActions: "play none none none",
          once: triggerOnce,
        },
      }
    );
  }, [duration, ease, stagger, startY, start, end, triggerOnce, delay]);

  return <div ref={containerRef}>{children}</div>;
}
