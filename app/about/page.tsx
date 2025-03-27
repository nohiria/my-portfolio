"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  { year: "2015", title: "Inicio en Arquitectura", desc: "Descubrí mi pasión por el diseño estructural y los detalles." },
  { year: "2018", title: "Primeros Proyectos", desc: "Trabajé en mis primeros diseños de espacios urbanos." },
  { year: "2020", title: "Surfskate & Diseño", desc: "Exploré la fluidez del surf en la arquitectura y el movimiento." },
  { year: "2023", title: "Innovación Digital", desc: "Fusioné el 3D, la arquitectura y el código en mis proyectos." }
];

export default function About() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (timelineRef.current) {
      gsap.fromTo(
        timelineRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  return (
    <main className="min-h-screen bg-dark text-white flex flex-col items-center py-20">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl font-bold mb-10"
      >
        Mi Evolución 🚀
      </motion.h1>

      <div ref={timelineRef} className="w-3/4">
        {timelineData.map((item, index) => (
          <div key={index} className="mb-10 border-l-4 border-primary pl-6">
            <span className="text-xl text-primary">{item.year}</span>
            <h2 className="text-2xl font-semibold">{item.title}</h2>
            <p className="text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}