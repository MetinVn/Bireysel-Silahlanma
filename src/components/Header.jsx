import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import photo from "../icons/photo.jpg";

const LazyIcon = React.lazy(() =>
  import("react-icons/fa6").then((module) => ({
    default: module.FaArrowRightLong,
  })),
);

const Header = React.memo(() => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = useCallback(() => {
    setShowButton(window.scrollY > 100);
  }, []);

  useEffect(() => {
    const debouncedHandleScroll = debounce(handleScroll, 100);

    window.addEventListener("scroll", debouncedHandleScroll);
    return () => window.removeEventListener("scroll", debouncedHandleScroll);
  }, [handleScroll]);

  return (
    <div className="fixed top-0 flex items-center h-[50px] z-[14] w-full bg-white shadow-lg shadow-black/20">
      <div className="flex flex-col justify-end items-center overflow-hidden m-auto bg-white shadow-lg rounded-full shadow-black/40 mt-[-80px] w-[180px] h-[190px]">
        <img
          src={photo}
          className="w-[140px] h-[110px] object-cover rounded-full"
          alt="photo"
        />
      </div>

      <AnimatePresence mode="wait">
        {showButton && (
          <motion.button
            className="fixed top-2 right-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <React.Suspense fallback={<div>Loading...</div>}>
              <Link
                to="/Bireysel-Silahlanma/details"
                className="flex flex-row h-full border border-black items-center text-center gap-2 bg-black text-white text-sm px-2 py-2 hover:bg-white hover:text-black duration-300 group"
              >
                Detaylar{" "}
                <LazyIcon className="fill-white p-0 group-hover:fill-black duration-300 group-hover:translate-x-1" />
              </Link>
            </React.Suspense>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
});

const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

export default Header;
