'use client';
import { assets } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';
import Spotify from './Spotify';
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <section id="aboutme" className="w-full min-h-screen flex flex-col justify-center px-6 md:px-[12%]">

      {/* Section Titles */}
      <div className="mt-16 text-center">
        <h4 className="mb-2 text-lg font-poppins">Introduction</h4>
        <h2 className="text-4xl sm:text-5xl font-poppins font-semibold">About Me</h2>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 mt-20">

        {/* Profile Image */}
        <div className="flex justify-center">
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            tiltReverse={true}
            transitionSpeed={800}
            glareEnable={true}
            glareMaxOpacity={0.3}
            className="rounded-3xl"
          >
            <Image
              src={assets.profile}
              alt="Arya"
              className="rounded-3xl w-48 sm:w-64 lg:w-80 object-cover shadow-lg"
            />
          </Tilt>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-4 text-center lg:text-left max-w-lg mx-auto lg:mx-0">
          <p className="text-base sm:text-lg font-inter leading-relaxed text-justify">
            Hi, I’m Arya Putra Adyartama, a Developer, Programmer, and Designer from Magetan, East Java, Indonesia.
            As a fresh graduate in Information Systems from Telkom University, I’m passionate about combining web development
            and design to create impactful solutions. With a mindset of being a lifelong learner and problem solver,
            I love exploring new challenges, improving my skills, and turning ideas into meaningful digital experiences.
            Let’s connect and collaborate to build something great together.
          </p>
          <Spotify />
        </div>
      </div>
    </section >
  );
};

export default About;
