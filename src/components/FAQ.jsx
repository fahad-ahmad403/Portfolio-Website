import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion.jsx";
import ArrowButton from "./ui/ArrowButton.jsx";
import GsapAnimation from "./ui/GsapAnimation.jsx";

function FAQ() {
  const accordionData = [
    {
      question: "What makes your service different from others?",
      answer:
        "I specialize in building React websites, which means I have in-depth knowledge of every step involved in the process. My customer-centric approach includes Personalized Support, Fast Delivery, Custom Designs, Proven Strategies, and Quality Code.",
      value: "accordion-1",
    },
    {
      question: "What is your development process?",
      answer:
        "My development process involves requirement analysis, planning, designing, coding, testing, deployment, and maintenance. I follow agile methodologies to ensure timely delivery and flexibility to adapt to changes.",
      value: "accordion-2",
    },
    {
      question: "How long does it take to build a React website?",
      answer:
        "The timeline depends on the complexity and scope of the project. Typically, a basic React website can take 4-6 weeks, while more complex projects may take several months.",
      value: "accordion-3",
    },
    {
      question: "Do you offer post-launch support and maintenance?",
      answer:
        "Yes, I provide continuous support and maintenance services post-launch to ensure your website remains up-to-date, secure, and performs optimally.",
      value: "accordion-4",
    },
    {
      question:
        "Do you provide custom solutions tailored to our business needs?",
      answer:
        "Yes, I specialize in creating custom solutions tailored to the unique requirements of your business, ensuring the final product aligns with your goals and objectives.",
      value: "accordion-5",
    },
    {
      question: "How do you ensure the quality of the code?",
      answer:
        "I ensure high code quality through thorough code reviews, automated testing, and adherence to industry best practices and standards throughout the development process.",
      value: "accordion-6",
    },
    {
      question: "What are your rates for React development services?",
      answer:
        "My rates vary depending on the project's complexity, scope, and specific requirements. Please contact me for a detailed quote tailored to your needs.",
      value: "accordion-7",
    },
  ];

  return (
    <section className="w-full h-auto bg-black py-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row md:flex-col text-center lg:text-start gap-12 px-6">
        <div className="flex-1">
          <GsapAnimation>
            <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 leading-tight">
              <span className="text-blue-500 Bricolage">FREQUENTLY</span>
              <span className="text-white pl-3 Bricolage">ASKED</span>
              <br />
              <span className="text-white Bricolage">QUESTIONS!</span>
            </h2>
          </GsapAnimation>
          <GsapAnimation>
            <p className="text-gray-400 mb-6 w-full lg:w-[85%]">
              Can't find the answer you're looking for? Reach out to me and I'll
              get back to you ASAP.
            </p>
          </GsapAnimation>
          <ArrowButton className="bg-white text-black" aclassName="flex justify-center lg:justify-start w-fit mx-auto lg:mx-0" />
        </div>
        <div className="flex-1">
          <Accordion
            type="single"
            defaultValue="accordion-1"
            className="text-gray-300"
            collapsible
          >
            {accordionData.map((item, id) => (
              <AccordionItem key={id} value={item.value}>
                <AccordionTrigger className="px-5 text-xl text-start">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-white pl-8 pr-2 text-base text-start">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
