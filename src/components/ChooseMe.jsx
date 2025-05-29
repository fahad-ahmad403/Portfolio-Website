import { CodeXml, Handshake, Zap } from "lucide-react";
import GsapAnimation from "./ui/GsapAnimation.jsx";
import GradientCard from "./ui/GradientCard.jsx";

function ChooseMe() {
  const cardData = [
    {
      title: "Development Best Practices",
      description:
        "I enforce rigorous coding protocols and stay aligned with the latest methodologies to deliver maintainable, high-quality, and error-free code.",
      icon: CodeXml,
    },
    {
      title: "Expedited Delivery",
      description:
        "I streamline workflows and leverage proven processes to deliver your solution ahead of schedule without ever cutting corners.",
      icon: Zap,
    },
    {
      title: "Personalized Support",
      description:
        "I provide one-on-one guidance and bespoke assistance at every step, ensuring your vision is heard and your needs are met.",
      icon: Handshake,
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center w-full h-auto pb-16 bg-black">
      <GsapAnimation>
        <h2 className="text-blue-500 text-4xl md:text-5xl font-bold py-16 Bricolage text-center px-5">
          <span className="text-white Bricolage pr-2">Why</span>
          Choose Me?
        </h2>
      </GsapAnimation>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-screen-xl mx-auto px-4">
        {cardData.map((item, id) => {
          const wrapperClasses =
            id === 2
              ? "md:col-span-2 md:flex md:justify-center lg:col-span-1"
              : "";

          return (
            <div key={id} className={wrapperClasses}>
              <GradientCard
                colors={["rgba(59, 130, 246, 0.5)", "rgb(255, 255, 255)"]}
                className="p-1 rounded-xl overflow-hidden"
              >
                <div className="relative bg-white rounded-lg w-full h-full p-5 flex flex-col items-center text-center border-t-[5px] border-blue-500">
                  <span className="absolute w-14 h-14 top-3 rounded-full bg-blue-500/30" />
                  <item.icon className="text-blue-500 z-10" size={40} />
                  <h3 className="text-black duration-300 text-xl font-bold hoverable:group-hover:text-blue-600 py-5 Bricolage">
                    {item.title}
                  </h3>
                  <p className="text-gray-500">{item.description}</p>
                </div>
              </GradientCard>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ChooseMe;
