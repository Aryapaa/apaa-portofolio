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
    const interval = setInterval(fetchData, 10000); // refresh tiap 10s
    return () => clearInterval(interval);
  }, []);

  if (!track) {
    return (
      <div className="p-3 rounded-sm shadow text-center border border-gray-300/30 bg-gray-100 dark:bg-zinc-900 flex items-center justify-center gap-2">
        <FaSpotify className="text-green-500 w-5 h-5" />
        <p className="text-gray-700 dark:text-gray-300 text-sm font-poppins">
          Currently Offline
        </p>
      </div>
    );
  }

  return (
    <motion.div
      className="mt-2 flex items-center gap-4 p-3 rounded-2xl shadow-md 
                 bg-gray-50 dark:bg-zinc-900 border border-gray-300/30"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <a
        href={track.songUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 w-full"
      >
        <motion.img
          src={track.albumImageUrl}
          alt={track.title}
          className="w-16 h-16 rounded-lg shadow-md"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />

        <div className="flex flex-col truncate">
          <p className="font-semibold text-base truncate font-poppins">{track.title}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 truncate font-poppins">
            {track.artist}
          </p>
          <span
            className={`mt-1 text-xs font-medium font-inter ${
              track.isPlaying ? "text-green-600" : "text-gray-500"
            }`}
          >
            {track.isPlaying ? "Currently Listening" : "Last Played"}
          </span>
        </div>
      </a>
    </motion.div>
  );
}
