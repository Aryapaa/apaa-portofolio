'use client';
import React from 'react'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope, FaDiscord } from "react-icons/fa";

const Contact = () => {
    const text = "Let's Connect";
    const [hovered, setHovered] = useState(false);

    return (
        <div id='contact' className="w-full max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4" >
            <h4
                className="text-3xl sm:text-6xl lg:text-[50px] font-poppins mt-4 flex flex-wrap select-none"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {text.split("").map((char, i) => {
                    const randomX = Math.floor(Math.random() * 300 - 150);
                    const randomY = Math.floor(Math.random() * 200 - 100);
                    const randomRotate = Math.floor(Math.random() * 180 - 90);

                    return (
                        <motion.span
                            key={i}
                            animate={{
                                x: hovered ? randomX : 0,
                                y: hovered ? randomY : 0,
                                rotate: hovered ? randomRotate : 0,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 15,
                                delay: i * 0.02,
                            }}
                            className="inline-block"
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    );
                })}
            </h4>
            <div className="flex gap-6 justify-center mt-6">
                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=aryaputraaaa13@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 dark:text-gray-200 hover:scale-110 transition"
                    aria-label="Send Email"
                    title="Send Email"
                >
                    <FaEnvelope size={28} />
                </a>
                <a
                    href="https://www.instagram.com/arya_paa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 dark:text-pink-400 hover:scale-110 transition"
                    aria-label="Instagram"
                    title="Instagram"
                >
                    <FaInstagram size={28} />
                </a>
                <a
                    href="https://github.com/Aryapaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 dark:text-gray-200 hover:scale-110 transition"
                    aria-label="GitHub"
                    title="GitHub"
                >
                    <FaGithub size={28} />
                </a>
                <a
                    href="https://www.linkedin.com/in/aryaputraa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:scale-110 transition"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                >
                    <FaLinkedin size={28} />
                </a>
                <a
                    href="https://discord.com/users/si_apa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 hover:scale-110 transition"
                    aria-label="Discord"
                    title="Discord"
                >
                    <FaDiscord size={28} />
                </a>
            </div>

        </div>
    )
}

export default Contact
