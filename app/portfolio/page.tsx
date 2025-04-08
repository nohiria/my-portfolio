"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "Project 1", category: "Java", image: "/project1.jpg" },
  { title: "Project 2", category: "PHP", image: "/project2.jpg" },
  { title: "Project 3", category: "Java", image: "/project3.jpg" },
  { title: "Project 4", category: "PHP", image: "/project4.jpg" }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter(p => p.category === selectedCategory);

  return (
    <section className="py-20 bg-dark text-white">
      <h2 className="text-4xl text-center font-bold mb-10">My Projects</h2>

      <div className="flex justify-center space-x-4 mb-10">
        {["All", "Java", "PHP"].map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full ${
              selectedCategory === category ? "bg-primary text-white" : "bg-gray-700 text-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-xl" />
            <div className="absolute bottom-0 bg-black/70 text-white p-4 rounded-b-xl">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm">{project.category}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}