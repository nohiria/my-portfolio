"use client";

import { motion } from "framer-motion";
import { CgArrowLongRight } from "react-icons/cg";
import { roboto_mono } from "./fonts";

export default function Home() {
  return (
    <div className="relative flex flex-col lg:flex-row h-screen overflow-hidden">

      {/* Overlay Image */}
      <motion.img
        src="/profile.png"
        alt="Nohiria Velazquez"
        className="
          absolute bottom-0 
          left-1/2 -translate-x-1/2  
          md:left-1/2 md:-translate-x-1/2 
          lg:left-auto lg:right-0 lg:translate-x-0  
          h-[55vh] sm:h-[60vh] md:h-[70vh] lg:h-[90vh] 
          lg:max-w-[100vw] max-w-none object-contain -z-20 
          [@media_(min-aspect-ratio:1/1)]:left-auto 
          [@media_(min-aspect-ratio:1/1)]:right-0 
          [@media_(min-aspect-ratio:1/1)]:translate-x-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between px-8 md:px-16 py-10 relative h-[30vh]">
        <div className="text-center lg:text-left pl-0 xl:pl-30 pt-0 xl:pt-20">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="
            font-bold text-teal-200 text-center xl:whitespace-nowrap
            text-3xl md:text-[clamp(2.5rem,4vw,5rem)] 
            [@media_(min-aspect-ratio:1/1)]:text-left 
            [@media_(min-aspect-ratio:3/2)]:text-[clamp(2.5rem,4vw,5rem)]
          "
        >
          Hello There! <br />
          <p>I&apos;m</p> <span className="text-white">Nohiria Velazquez</span>
        </motion.h1>

          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={`
              mt-4 text-lg md:text-xl text-gray-300 text-center
              [@media_(min-aspect-ratio:1/1)]:text-left 
              [@media_(min-aspect-ratio:1/1)]:text-xl 
              [@media_(min-aspect-ratio:3/2)]:text-2xl 
              ${roboto_mono.className}
            `}
          >
            Web Developer
          </motion.p>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-6"
          >
            <a
              href="/about"
              className="
                relative flex items-center gap-4 px-6 py-4 
                text-white border-2 border-pink-600 rounded-full 
                bg-transparent hover:bg-pink-500 hover:border-pink-500 
                transition duration-300 
                w-auto
                [@media_(min-aspect-ratio:1/1)]:w-60
              "
            >
              SEE PORTFOLIO
              <CgArrowLongRight size={24} />
            </a>
          </motion.div>

        </div>
      </div>
    </div>
  );
}