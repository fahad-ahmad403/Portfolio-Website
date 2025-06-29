import { MoveRight } from "lucide-react";

export default function ArrowButton({ className = "", spanclassName = "", aclassName = "" }) {
  return (
    <a
      href="https://www.upwork.com/freelancers/~0194f6a4d1b81491e0"
      target="_blank"
      className={`${aclassName}`}
    >
      <button
        className={`flex rounded-lg py-3 px-6 hoverable:hover:scale-[0.95] duration-300 overflow-hidden group relative touch:active:border-2 touch:active:border-black ${className}`}
      >
        <span
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5  rounded-full opacity-0 transition-all duration-500 hoverable:group-hover:w-[300px] hoverable:group-hover:h-[300px] hoverable:group-hover:opacity-100 z-0 ${spanclassName}`}
        />
        <MoveRight className="transform duration-500 translate-x-[-50px] hoverable:group-hover:translate-x-1 z-20" />
        <span className="inline-block transition-transform duration-500 translate-x-[-10px] hoverable:group-hover:translate-x-6 z-20 text-[13px] pt-[2px] sm:text-base sm:pt-0 font-semibold">
          Message me on Upwork
        </span>
        <MoveRight className="ml-3 transform duration-500 hoverable:group-hover:translate-x-12 z-20" />
      </button>
    </a>
  );
}
