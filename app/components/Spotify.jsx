"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaSpotify } from "react-icons/fa";

export default function Spotify() {
  const [track, setTrack] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/now-playing");
        const data = await res.json();
        setTrack(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, []);

  if (!track) return null;

  return (
    <motion.div
      className="flex items-center gap-3 sm:gap-4 
             p-3 sm:p-4 rounded-2xl shadow-md bg-gray-50 dark:bg-zinc-900 
             border border-gray-300/30 w-full"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <a
        href={track.songUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 sm:gap-4 w-full"
      >
        <motion.img
          src={track.albumImageUrl}
          alt={track.title}
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg shadow-md flex-shrink-0"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
        <div className="flex flex-col truncate min-w-0 text-left">
          <p className="font-semibold text-sm sm:text-base truncate font-poppins">
            {track.title}
          </p>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 truncate font-poppins">
            {track.artist}
          </p>
          <span
            className={`mt-1 text-xs sm:text-sm font-medium font-inter ${track.isPlaying ? "text-green-600" : "text-gray-500"
              }`}
          >
            {track.isPlaying ? "Currently Listening" : "Last Played"}
          </span>
        </div>
        <FaSpotify className="text-green-500 w-5 h-5 sm:w-6 sm:h-6 ml-auto flex-shrink-0" />
      </a>
    </motion.div>
  );
}