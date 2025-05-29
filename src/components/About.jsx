import Image from "../assets/AboutImage.jpg";
import ArrowButton from "./ui/ArrowButton.jsx";
import GsapAnimation from "./ui/GsapAnimation.jsx";
import { Github, Linkedin } from "lucide-react";

function About() {
  return (
    <section
      id="aboutSection"
      className="w-full h-auto bg-white px-5 sm:px-20 relative pb-16"
    >
      <span className="bg-dot-pattern bg-[length:40px_40px] w-full sm:w-[60%] h-[25%] absolute top-0 left-[50%] translate-x-[-50%]" />
      <GsapAnimation>
      <h2 className="font-extrabold text-4xl flex justify-center gap-x-3 pt-16">
        <span className="text-blue-500 Bricolage z-10">Who</span>
        <span className="text-black Bricolage z-10">am I?</span>
      </h2>
      </GsapAnimation>
      <div className="lg:flex lg:flex-row justify-center items-center flex flex-col-reverse gap-x-20 mt-12">
        <div className="md:w-[50%] w-full lg:text-start text-center">
          <GsapAnimation>
          <h3 className="text-3xl font-bold Bricolage mt-5 lg:mt-0">
            Hi 👋, I am
            <span className="text-blue-500 font-bold Bricolage pl-2">
              Fahad Ahmad
            </span>
          </h3>
          </GsapAnimation>
          <GsapAnimation>
          <h4 className="font-extrabold text-lg Bricolage text-gray-600 pt-4 pb-1">
            React Developer
          </h4>
          <p className="text-gray-600">
            I create intuitive and engaging digital experiences that solve real
            problems. With over 2 years of experience in front-end development,
            I specialize in crafting user-centered interfaces that are both
            beautiful and functional.
          </p>
          </GsapAnimation>
          <div className="flex justify-center lg:justify-start gap-x-5 mt-5">
            <a target="_blank" href="https://github.com/fahad-ahmad403">
              <Github className="text-blue-500 text-xl hoverable:hover:text-blue-600 transition duration-300" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/fahad-ahmad-246477302/">
              <Linkedin className="text-blue-500 text-xl hoverable:hover:text-blue-600 transition duration-300" />
            </a>
          </div>
          <ArrowButton className="text-blue-500 bg-black hoverable:hover:text-black" spanclassName="bg-blue-600" aclassName="flex justify-center lg:justify-start" />
        </div>
        <img className="w-[300px] z-10" loading="lazy" src={Image} alt="Profile picture." />
      </div>
    </section>
  );
}

export default About;
