// 'use client';
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { assets } from "@/assets/assets";
// import DetailProjects from "./Detailprojects";

// const Project = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   // Lock body scroll kalau modal open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//   }, [isOpen]);

//   return (
//     <section
//       id="project"
//       className="w-full h-screen flex flex-col justify-center px-6 md:px-[12%]"
//     >
//       <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
//         {/* Description */}
//         <div className="flex flex-col gap-6 text-left">
//           <h2 className="text-4xl sm:text-5xl font-poppins font-semibold">
//             My Projects
//           </h2>
//           <p className="text-base sm:text-lg font-inter leading-relaxed">
//             Showcasing the ideas I've built.
//           </p>
//           <div>
//             <button
//               onClick={() => setIsOpen(true)}
//               className="inline-block px-6 py-3 rounded-full bg-black text-white 
//               font-medium hover:bg-gray-800 transition font-poppins"
//             >
//               See More
//             </button>
//           </div>
//         </div>

//         {/* Project Preview */}
//         <div className="flex justify-center lg:justify-end">
//           <Image
//             src={assets.project}
//             alt="Projects"
//             className="rounded-xl w-160 sm:w-64 sm:w-160 object-cover shadow-lg"
//           />
//         </div>
//       </div>

//       {/* Overlay */}
//       <DetailProjects isOpen={isOpen} onClose={() => setIsOpen(false)} />
//     </section>
//   );
// };

// export default Project;

'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { projects } from "../data/projects"

const Project = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Lock body scroll kalau modal open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isOpen]);

    return (
        <section
            id="project"
            className="w-full h-screen flex flex-col justify-center px-6 md:px-[12%]"
        >
            <div className="px-6 py-12">
                <h3 className="text-3xl font-bold mb-8 font-poppins">My Projects</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-6">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
                        >
                            <Image
                                src={project.img}
                                alt={project.title}
                                className="w-full h-auto object-contain bg-white"
                            />

                            {/* Overlay */}
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
            </div>


        </section>
    );
};

export default Project;
