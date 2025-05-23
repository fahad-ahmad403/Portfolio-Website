import About from "./About.jsx";
import CallToAction from "./CallToAction.jsx";
import ChooseMe from "./ChooseMe.jsx";
import FAQ from "./FAQ.jsx";
import Footer from "./Footer.jsx";
import MarqueeCarousel from "./MarqueeCarousel.jsx";
import Projects from "./Projects.jsx";
import GsapAnimation from "./ui/GsapAnimation.jsx";
import { SparklesCore } from "./ui/sparkles.jsx";

export function SparklesPreview() {
  return (
    <>
      <section
        id="heroSection"
        className="min-h-[620px] w-full bg-black overflow-hidden relative"
      >
        <div className="flex flex-col items-center pt-40 sm:pt-44">
          <span className="bg-[radial-gradient(closest-side,_rgba(59,131,246,0.7),_rgb(0,0,0))] w-[500px] h-[300px] top-[-150px] md:w-[700px] md:h-[500px] absolute md:top-[-250px]" />
          <h1>
            <GsapAnimation startY={100} delay={0.3}>
              <span className="flex flex-col sm:flex-row items-center justify-center gap-x-4 md:text-7xl text-5xl lg:text-8xl mx-[10%] sm:mx-[5%]">
                <span className="Bricolage bg-gradient-to-b from-white to-gray-700 text-transparent bg-clip-text z-20 font-bold">
                  I Build
                </span>
                <span className="Bricolage bg-gradient-to-b from-white to-gray-700 text-transparent bg-clip-text z-20 font-bold">
                  High-End
                </span>
              </span>
            </GsapAnimation>
            <GsapAnimation delay={0.3}>
              <span className="flex flex-col sm:flex-row items-center justify-center gap-x-4 md:text-7xl text-5xl lg:text-8xl mx-[15%] sm:mx-[5%]">
                <strong className="text-blue-600 Bricolage">Customized </strong>
                <strong className="text-blue-600 Bricolage">Websites</strong>
              </span>
            </GsapAnimation>
          </h1>
          <div className="w-[40rem] h-40 relative">
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />

            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
          <a
            href="https://www.upwork.com/freelancers/~0194f6a4d1b81491e0"
            target="_blank"
            className="flex justify-center items-center mt-[-100px] text-white text-sm font-semibold lg:text-base w-52 h-10 sm:w-56 sm:h-11 border border-blue-500 rounded-lg overflow-hidden relative z-10 navButton shadow-[0_0_10px_5px_rgba(53,117,221,0.8)] touch:active:border-1 touch:active:border-blue-600"
          >
            Message me on Upwork
          </a>
        </div>
      </section>
      <Projects />
      <MarqueeCarousel />
      <About />
      <ChooseMe />
      <FAQ />
      <CallToAction />
      <Footer />
    </>
  );
}
