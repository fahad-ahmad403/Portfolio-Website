import { useState } from "react";
import Logo from "../assets/logo.svg";
import { Outlet } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const changeColorOnScroll = () => {
    if (window.scrollY >= 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener("scroll", changeColorOnScroll);

  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 z-50 transition-colors duration-200 ${
          isScrolled ? "bg-blue-950/90 backdrop-blur" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center p-4">
          <div
            onClick={() => window.scrollTo(0, 0)}
            className="cursor-pointer flex items-center gap-x-2"
          >
            <img
              className="w-8 h-8"
              src={Logo}
              loading="lazy"
              alt="Logo of brand"
            />
            <span className="text-white text-2xl Bricolage">fahad</span>
          </div>

          <nav className="hidden md:flex space-x-12 text-white text-md font-medium ml-6">
            <a
              href="#projectSection"
              className="hover:text-blue-300 transition"
            >
              Projects
            </a>
            <a href="#aboutSection" className="hover:text-blue-300 transition">
              About
            </a>
            <a
              href="#serviceSection"
              className="hover:text-blue-300 transition"
            >
              Services
            </a>
          </nav>
          <a
            href="https://www.upwork.com/freelancers/~0194f6a4d1b81491e0"
            target="_blank"
            className="text-white text-[15px] font-semibold py-[8px] px-5 xl:py-2 xl:px-6 border border-blue-500 rounded-lg relative overflow-hidden z-10 navButton shadow-[0_0_10px_5px_rgba(53,117,221,0.8)] touch:active:border-1 touch:active:border-blue-600"
          >
            Get in touch
          </a>
        </div>
      </header>
      <Outlet />
    </>
  );
}
