import Link from "next/link";
import { BsPersonCircle } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { LuGrid2X2, LuMail } from "react-icons/lu";
import NavLink from "./NavLink";

export default function Header() {
  return (
    <header className="fixed left-0 w-full z-20 h-[10%] min-h-[60px]
        backdrop-blur-xs md:backdrop-blur-xs 
        bg-gradient-to-t md:bg-gradient-to-b 
        from-black/90 via-black/50 via-black/30 via-transparent to-transparent
        bottom-0 md:top-0 md:bottom-auto pointer-events-none">
      <nav className="container mx-auto flex flex-col lg:flex-row lg:justify-between items-center py-3 px-6 pointer-events-auto">

        {/* Logo */}
        <Link href="/" className="hidden lg:block text-white text-xl font-bold">
          <img src="/logo.svg" alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Centered Menu */}
        <div className="bg-black/20 text-sm px-4 py-1 rounded-2xl flex gap-5 border border-white/25 shadow-xl">
          <NavLink href="/" icon={<GoHome />} label="" />
          <div className="w-[1px] bg-white/25 hidden sm:inline"></div>
          <NavLink href="/about" icon={<BsPersonCircle />} label="About" />
          <NavLink href="/portfolio" icon={<LuGrid2X2 />} label="Portfolio" />
          <NavLink href="/contact" icon={<LuMail />} label="Contact" />
        </div>

        {/* GitHub link */}
        <div className="lg:flex hidden">
          <a
            href="https://github.com/nohiria"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 text-3xl hover:text-pink-300 transition"
          >
            <FaGithub />
          </a>
        </div>

      </nav>
    </header>
  );
}