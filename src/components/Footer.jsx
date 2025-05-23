import Logo from "../assets/logo.svg";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {

  function currentYear() {
    return new Date().getFullYear();
  }

  return (
    <footer className="bg-black w-full h-auto text-gray-300 fixed bottom-0 z-[-10]">
      <div className="border-b border-white pt-32" />
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col sm:flex-row justify-between items-center gap-6">
        <div>
          <div className="flex gap-x-2 pb-3">
            <img src={Logo} loading="lazy" alt="Logo of brand" className="w-8" />
            <div className="text-white text-xl font-bold Bricolage">
              Fahad Ahmad
            </div>
          </div>
          <div className="text-center sm:text-left text-sm">
            &copy; {currentYear()} Fahad Ahmad.
            <br />
            All rights reserved.
          </div>
        </div>
        <div>
          <nav className="flex justify-center lg:justify-start space-x-4">
            <a
              href="https://www.upwork.com/freelancers/~0194f6a4d1b81491e0"
              target="_blank"
              className="hover:text-blue-500"
            >
              Contact
            </a>
            <a href="#aboutSection" className="hover:text-blue-500">
              About
            </a>
          </nav>
          <div className="flex justify-center lg:justify-start space-x-4 py-1">
            <a
              href="https://github.com/fahad-ahmad403"
              target="_blank"
              className="hover:text-blue-500"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/fahad-ahmad-246477302/"
              target="_blank"
              className="hover:text-blue-500"
            >
              <Linkedin size={20} />
            </a>
          </div>
          <div
            onClick={() => window.scrollTo(0, 0)}
            className="text-base hover:text-blue-500 cursor-pointer"
          >
            fahadahmad48224@gmail.com
          </div>
        </div>
      </div>
    </footer>
  );
}
