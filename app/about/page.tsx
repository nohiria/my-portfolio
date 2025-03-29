"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sections } from "@/data";
import IntroCard from "../ui/components/About/IntroCard";
import { LiaMinusSolid } from "react-icons/lia";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);

  const setRef = (index: number) => (el: HTMLDivElement | null) => {
    sectionRefs.current[index] = el;
  };

  useEffect(() => {
    sectionRefs.current.forEach((section, index) => {
      if (section) {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 60%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) {
          ScrollTrigger.getById(section.id)?.kill();
        }
      });
    };
  }, []);

  return (
    <main className="min-h-screen bg-dark text-white flex flex-col items-center py-20 px-6">
      <div className="w-full max-w-2xl xl:max-w-3xl 2xl:max-w-4xl grid grid-cols-1 mx-auto">
        
        {/* Menú lateral */}
        <nav className="hidden xl:block fixed left-10 top-2/5">
          <ul className="space-y-4">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="flex items-center gap-2 text-gray-300 hover:text-primary transition duration-300"
                  aria-label={`Go to ${section.label}`}
                >
                  <LiaMinusSolid />{section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contenido */}
        <div className="w-full mx-auto">
          {sections.map((section, index) => (
            <section
              id={section.id}
              key={section.id}
              ref={setRef(index)}
              className="mb-16 w-full"
              tabIndex={0}
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
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}