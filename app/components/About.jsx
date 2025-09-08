'use client';
import { assets } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';
import Spotify from './Spotify';
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <section
      id="aboutme"
      className="
        w-full 
        px-6 sm:px-8 md:px-[12%] 
        py-10 sm:py-14 md:py-20 
        flex flex-col justify-center
        min-h-screen
      "
    >
      <div className="text-center">
        <p className="mb-2 text-sm sm:text-base md:text-lg font-poppins text-gray-500 dark:text-gray-400">
          Introduction
        </p>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-poppins font-semibold">
          About Me
        </h2>
      </div>
      <div className="
        grid grid-cols-1 md:grid-cols-2 
        items-center 
        gap-8 sm:gap-10 md:gap-12 lg:gap-8 
        mt-8 sm:mt-12 md:mt-16
      ">
        <div className="flex justify-center self-center">
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            tiltReverse
            transitionSpeed={800}
            glareEnable
            glareMaxOpacity={0.3}
            className="rounded-3xl shadow-lg"
          >
            <Image
              src={assets.profile}
              alt="Portrait of Arya Putra Adyartama"
              width={400}
              height={500}
              className="
                rounded-3xl 
                object-contain 
                w-[220px] sm:w-[280px] md:w-[320px] lg:w-[360px]
                h-auto
              "
              priority
            />
          </Tilt>
        </div>
        <div className="
          flex flex-col 
          gap-4 sm:gap-4 lg:gap-4 
          text-center md:text-left 
          max-w-md mx-auto md:mx-0
          self-center
        ">
          <p className="text-sm sm:text-sm md:text-base lg:text-lg font-inter leading-relaxed text-left md:text-justify text-gray-700 dark:text-gray-200">
            Hi, I’m Arya Putra Adyartama, a Developer, Programmer, and Designer from Magetan, East Java, Indonesia. 
            As a fresh graduate in Information Systems from Telkom University, I’m passionate about combining web development 
            and design to create impactful solutions.
          </p>
          <p className="hidden sm:block text-sm sm:text-sm md:text-base lg:text-lg font-inter leading-relaxed text-left md:text-justify text-gray-700 dark:text-gray-200">
            With a mindset of being a lifelong learner and problem solver, I love exploring new challenges, 
            improving my skills, and turning ideas into meaningful digital experiences. 
            Let’s connect and collaborate to build something great together.
          </p>
          <Spotify />
        </div>
      </div>
    </section>
  );
};

export default About;