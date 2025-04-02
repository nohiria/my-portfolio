"use client";

import { sections } from "@/data";
import IntroCard from "../ui/components/About/IntroCard";
import { LiaMinusSolid } from "react-icons/lia";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <main className="bg-dark text-white flex min-h-screen">
        {/* Fixed sidebar navigation */}
        <nav className="hidden xl:flex flex-col fixed left-10 top-1/3 space-y-4">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="flex items-center gap-2 text-gray-300 hover:text-primary transition duration-300"
              aria-label={`Go to ${section.label}`}
            >
              <LiaMinusSolid /> {section.label}
            </a>
          ))}
        </nav>

        {/* Main content */}
        <div className="w-full max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto px-6 py-20">
          {sections.map((section) => (
            <motion.section
              id={section.id}
              key={section.id}
              className="mb-16 scroll-mt-20"
              tabIndex={0}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {section.id === "intro" ? (
                <IntroCard />
              ) : (
                <>
                  <h2 className="text-3xl font-bold text-primary mb-4">
                    {section.label}
                  </h2>
                  <p className="text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel tortor nec justo commodo dapibus.
                  </p>
                </>
              )}
            </motion.section>
          ))}
        </div>
      </main>
    </>
  );
}