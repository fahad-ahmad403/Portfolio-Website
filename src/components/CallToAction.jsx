import { useEffect, useState } from "react";
import ArrowButton from "./ui/ArrowButton.jsx";
import GsapAnimation from "./ui/GsapAnimation.jsx";

function CallToAction() {
  const [btnHovered, setBtnHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth < 640);
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  return (
    <section
      className={`w-full h-[400px] bg-grid-pattern bg-[length:40px_40px] flex flex-col items-center justify-center duration-500 mb-[270px] ${
        btnHovered && !isMobile ? "bg-slate-500" : "bg-blue-600"
      }`}
    >
      <GsapAnimation>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-4xl text-center px-5 sm:text-5xl font-bold text-[#F2F2F2] -mb-4 Bricolage drop-shadow-[0_10px_35px_rgba(0,0,0,0.7)]">
            Have project in mind.
          </h3>
          <br />
          <h3 className="text-4xl sm:text-5xl font-bold text-[#F2F2F2] mb-10 Bricolage drop-shadow-[0_10px_35px_rgba(0,0,0,0.7)]">
            Let's talk?
          </h3>
        </div>
      </GsapAnimation>
      <div
        onMouseEnter={() => {
          if (!isMobile) setBtnHovered(true);
        }}
        onMouseLeave={() => {
          if (!isMobile) setBtnHovered(false);
        }}
      >
        <ArrowButton className="bg-white text-black shadow-[7px_10px_15px_rgba(0,0,0,0.7)]" />
      </div>
    </section>
  );
}

export default CallToAction;
