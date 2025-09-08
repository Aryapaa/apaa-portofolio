// "use client";
// import { motion, AnimatePresence } from "framer-motion";
// import React from "react";
// import Navbar from "./Navbar";
// import Marquee from "react-fast-marquee";
// import Image from "next/image";
// import { assets } from "@/assets/assets";
// import { projects } from "../data/projects";

// const DetailProjects = ({ isOpen, onClose }) => {
//   const images = [
//     assets.project1,
//     assets.project2,
//     assets.project3,
//     assets.project4,
//     assets.project5,
//     assets.project6,
//   ];

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           key="overlay"
//           className="fixed inset-0 z-50 bg-white dark:bg-black text-black dark:text-white 
//           flex flex-col overflow-y-auto"
//           initial={{ y: "100%" }}
//           animate={{ y: 0 }}
//           exit={{ y: "100%" }}
//           transition={{ duration: 0.4, ease: "easeInOut" }}
//         >
//           <Navbar />

//           {/* Content */}
//           <div className="w-full text-center mx-auto flex flex-col gap-8 bg-gray-50 dark:bg-zinc-900">
//             {/* Marquee */}
//             <div className="w-full pt-16 mt-10 py-4">
//               <Marquee gradient={false} speed={100}>
//                 {images.map((src, i) => (
//                   <div key={i} className="mx-6">
//                     <Image
//                       src={src}
//                       alt=""
//                       width={300}
//                       className="object-cover block rounded-xl shadow"
//                     />
//                   </div>
//                 ))}
//               </Marquee>
//             </div>

//             {/* Projects Grid */}
//             <div className="px-6 py-12">
//               <h3 className="text-3xl font-bold mb-8">My Projects</h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {projects.map((project, index) => (
//                   <div
//                     key={index}
//                     className="relative group overflow-hidden rounded-xl shadow-lg"
//                   >
//                     <Image
//                       src={project.img}
//                       alt={project.title}
//                       className="w-full h-60 object-cover"
//                     />
//                     {/* Overlay */}
//                     <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       <h4 className="text-white text-lg font-semibold mb-2">{project.title}</h4>
//                       <div className="flex gap-2 flex-wrap justify-center">
//                         {project.tools.map((tool, i) => (
//                           <span
//                             key={i}
//                             className="px-3 py-1 text-xs bg-white/20 text-white rounded-full"
//                           >
//                             {tool}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default DetailProjects;