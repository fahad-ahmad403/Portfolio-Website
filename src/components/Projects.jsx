import TrendyCollection from "../assets/trendy-collection-project.webp";
import TechGear from "../assets/tech-gear-project.webp";
import WeatherApp from "../assets/weather-app.webp";
import TextStylizerApp from "../assets/text-stylizer-app.webp";
import GsapAnimation from "./ui/GsapAnimation.jsx";
import { MoveRight } from "lucide-react";

function Projects() {
  const projectsData = [
    {
      id: 1,
      image: TrendyCollection,
      alt: "Trendy Collection Project Thumbnail",
      title: "Trendy Collection",
      description: "Clothing Store",
      website:
        "https://fahad-ahmad403.github.io/Trendy-Collection--Clothing-Store/",
    },
    {
      id: 2,
      image: TechGear,
      alt: "TechGear Project Thumbnail",
      title: "TechGear Project",
      description: "Tech Store",
      website: "https://fahad-ahmad403.github.io/TechGear/",
    },
    {
      id: 3,
      image: WeatherApp,
      alt: "Weather App Project Thumbnail",
      title: "Weather App",
      description: "Weather App",
      website: "https://fahad-ahmad403.github.io/Weather-App/",
    },
    {
      id: 4,
      image: TextStylizerApp,
      alt: "Text Stylizer App Project Thumbnail",
      title: "Text Stylizer App",
      description: "Text Utils App",
      website: "https://fahad-ahmad403.github.io/Text-Stylizer-App/",
    },
  ];

  return (
    <section
      id="projectSection"
      className="w-full h-auto bg-white flex flex-col items-center relative"
    >
      <span className="bg-grid-pattern bg-[length:40px_40px] w-[90%] h-[25%] absolute top-0 opacity-50" />
      <GsapAnimation>
        <h2 className="Bricolage text-2xl hidden md:flex flex-col items-center md:text-4xl lg:text-5xl gap-y-3 font-extrabold tracking-tight mt-16 mb-3 z-10">
          Reveal the Journey Behind My
          <span className="text-blue-500 Bricolage">Top Web Projects</span>
        </h2>
      </GsapAnimation>
      <GsapAnimation>
        <h2 className="Bricolage text-4xl font-extrabold tracking-tight mt-16 mb-3 sm:flex md:hidden z-10 px-5 text-center">
          Discover My
          <span className="text-blue-500 Bricolage pl-2">Top Web Projects</span>
        </h2>
      </GsapAnimation>
      <GsapAnimation delay={0.3}>
        <p className="text-base text-gray-600 mb-12 text-center z-10 px-5">
          Explore the standout projects that showcase my expertise in action
        </p>
      </GsapAnimation>
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 justify-center p-5 w-full max-w-screen-xl">
        {projectsData.map((data) => (
          <a
            target="_blank"
            href={data.website}
            key={data.id}
            className="rounded-xl bg-gray-900 cursor-pointer text-white transition-all duration-300 group relative overflow-hidden"
          >
            <span className="absolute w-52 h-[90%] hoverable:group-hover:bg-blue-600 opacity-20 blur-xl bottom-[-120px] right-20 -rotate-45 duration-500 transition-all" />
            <div className="h-52 sm:h-96 w-full flex justify-center items-center">
              <div className="group h-[87%] w-[92%] overflow-hidden rounded-xl">
                <img
                  src={data.image}
                  alt={data.alt}
                  loading="lazy"
                  className="h-full w-full object-cover object-top size-full transition-transform duration-500 hoverable:group-hover:scale-105"
                />
              </div>
            </div>
            <div className="p-6">
              <h2 className="mb-3 text-3xl sm:text-4xl font-bold tracking-tight Bricolage">
                {data.title}
              </h2>
              <div className="flex flex-col justify-start items-start sm:flex-row sm:justify-between gap-y-5 sm:items-center">
                <p className="text-xl font-medium text-gray-300">
                  {data.description}
                </p>
                <button className="text-black bg-white font-semibold hoverable:group-hover:text-black rounded-lg py-3 px-6 hoverable:group-hover:scale-[0.95] duration-300 overflow-hidden touch:active:border-2 touch:active:border-black flex">
                  <MoveRight className="transform duration-500 translate-x-[-50px] hoverable:group-hover:translate-x-1" />
                  <span className="inline-block transition-transform duration-500 translate-x-[-10px] hoverable:group-hover:translate-x-6">
                    Visit Website
                  </span>
                  <MoveRight className="ml-3 transform duration-500 hoverable:group-hover:translate-x-12" />
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full opacity-0 transition-all duration-500 hoverable:group-hover:w-[220px] hoverable:group-hover:h-[220px] hoverable:group-hover:opacity-100 z-[-10]" />
                </button>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
