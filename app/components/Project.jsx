'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { projects } from "../data/projects";

const Project = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <section
      id="project"
      className="w-full min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-[12%] py-12"
    >
      <h3 className="text-3xl font-semibold mb-8 font-poppins">My Projects</h3>
      <div
        className="
          flex overflow-x-auto snap-x snap-mandatory gap-4
          sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-8
          sm:overflow-visible
        "
      >
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              relative group overflow-hidden rounded-xl shadow-lg cursor-pointer
              flex-shrink-0 w-80 snap-center sm:w-auto
            "
          >
            <Image
              src={project.img}
              alt={project.title}
              className="w-full h-auto object-contain bg-white"
            />
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2">
              <h4 className="text-white text-lg font-semibold mb-4 font-poppins">
                {project.title}
              </h4>
              <div className="flex gap-2 flex-wrap justify-center">
                {project.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-4 py-1 text-xs bg-white/20 text-white rounded-full font-poppins"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Project;