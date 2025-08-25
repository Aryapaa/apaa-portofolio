'use client';
import Image from "next/image";
import { assets } from "@/assets/assets";
import React from 'react'
import { Typewriter } from "react-simple-typewriter";

const Header = () => {
  return (
    <div id="home" className="w-full max-w-5xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-6 px-4">
      
      {/* Profile Image */}
      <div>
        <Image 
          className="rounded-full w-40 sm:w-40 md:w-48 lg:w-56 shadow-lg"
          src={assets.profile_rounded} 
          alt="Profile" 
        />
      </div>

      {/* Title */}
      <h4 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-poppins mt-4 leading-tight">
        Hi, I'm <span className="underline decoration-gray-300">Arya</span> –{" "}
        <Typewriter
          words={["Developer", "Programmer", "Designer"]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h4>

      {/* Description */}
      <p className="max-w-2xl mx-auto font-inter text-gray-700 dark:text-gray-300 px-2 sm:px-4 text-sm sm:text-base md:text-lg">
        A junior developer passionate about turning ideas into functional web experiences. 
        I focus on back-end logic while exploring intuitive front-end design. 
        Always growing through code, creativity, and curiosity.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
        {/* Contact Me */}
        <a
          href="#contact"
          className="px-10 py-3 border border-white dark:border-gray-700 rounded-full 
               bg-black text-white dark:bg-white dark:text-black 
               flex items-center justify-center gap-2 shadow-md transition 
               hover:scale-105 hover:shadow-lg font-poppins w-full sm:w-auto"
        >
          Contact Me
        </a>

        {/* Resume */}
        <a
          href="/CV_Arya Putra Adyartama.pdf"
          download
          className="px-10 py-3 border border-gray-500 dark:border-gray-400 rounded-full 
               flex items-center justify-center gap-2 text-gray-800 dark:text-gray-200 
               hover:bg-gray-100 dark:hover:bg-gray-800 shadow-md transition 
               hover:scale-105 hover:shadow-lg font-poppins w-full sm:w-auto"
        >
          My Resume
        </a>
      </div>
    </div>
  )
}

export default Header
