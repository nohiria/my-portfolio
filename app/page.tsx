export default function Home() {
  return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white px-6">
          <div className="text-left">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                  Software Engineer & Problem Solver
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  I craft scalable solutions and intuitive user experiences. Passionate about coding, problem-solving, and turning ideas into reality.
              </p>
              <button className="mt-6 px-6 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-300 transition duration-300">
                  About me
              </button>
          </div>
      </div>
  );
}