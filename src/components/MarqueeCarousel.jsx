import Marquee from "react-fast-marquee";
import ReactLogo from "../assets/ReactLogo.svg";
import TailwindLogo from "../assets/TailwindLogo.svg";
import VercelLogo from "../assets/VercelLogo.svg";
import GitLogo from "../assets/GitLogo.svg";
import FigmaLogo from "../assets/FigmaLogo.svg";
import ViteLogo from "../assets/ViteLogo.svg";
import GSAPLogo from "../assets/GSAPLogo.svg";

function MarqueeCarousel() {

  const logos = [
    { src: ReactLogo, alt: "React logo", className: "w-28 sm:w-44 lg:w-40" },
    { src: TailwindLogo, alt: "Tailwind logo", className: "w-32 sm:w-52 lg:w-60" },
    { src: VercelLogo, alt: "Vercel logo", className: "w-24 sm:w-40 lg:w-44" },
    { src: GitLogo, alt: "Git logo", className: "w-20 sm:w-36 lg:w-36" },
    { src: FigmaLogo, alt: "Figma logo", className: "w-20 sm:w-32 lg:w-32" },
    { src: ViteLogo, alt: "Vite logo", className: "w-20 sm:w-32 lg:w-32" },
    { src: GSAPLogo, alt: "GSAP logo", className: "w-16 sm:w-36 lg:w-28" },
  ];
  
  return (
    <section id="serviceSection" >
      <div className="w-full h-16 bg-white" />
    <Marquee className="bg-black overflow-hidden h-24 sm:h-32 lg:h-32" autoFill pauseOnHover speed={50}>
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo.src}
          alt={logo.alt}
          loading="lazy"
          className={`mx-4 sm:mx-7 lg:mx-10 ${logo.className}`}
        />
      ))}
    </Marquee>
    </section>
  );
}

export default MarqueeCarousel
