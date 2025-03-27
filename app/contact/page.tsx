import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center text-white px-20 relative">
      <div className="w-full max-w-5xl text-left">
        <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
          Web Developer 
          <br />& Problem Solver
        </h1>
        <p className="text-xl text-gray-300 mt-4">
          I create functional and scalable web applications with Laravel & JavaScript. 
          <br /> Passionate about problem-solving and learning new technologies.
        </p>

        {/* Botón "About me" alineado correctamente */}
        <div className="mt-6">
          <Link
            href="/about"
            className="flex items-center gap-8 w-fit px-6 py-3 text-base font-medium text-white border-2 border-pink-500 rounded-full transition duration-300 ease-in-out bg-transparent hover:bg-pink-500 hover:border-pink-500 cursor-pointer relative z-10"
          >
            ABOUT ME
            <img src="/arrow1.svg"></img>
          </Link>
        </div>
      </div>
    </div>
  );
}