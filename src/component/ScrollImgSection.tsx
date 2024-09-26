import React, { useEffect, useState, useRef } from "react";
import img1 from "../assets/section-2-image-1 (2).png";
import img2 from "../assets/section-2-image-2 (2).png";
import { motion } from "framer-motion";

const ScrollImgSection: React.FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [isInViewport, setIsInViewport] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const checkIfInViewport = () => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;
      setIsInViewport(isInView);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      checkIfInViewport();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden" ref={sectionRef}>
      <div className="h-[1400px]">
        {/* top clip path */}
        <svg
          className="absolute z-20"
          viewBox="0 0 1270 388"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="rgba(255, 255, 255, 1)"
            d="M 0 161 C 158 161 158 244 316 244 L 316 244 L 316 0 L 0 0 Z"
            strokeWidth="0"
          ></path>
          <path
            fill="rgba(255, 255, 255, 1)"
            d="M 315 244 C 792.5 244 792.5 41 1270 41 L 1270 41 L 1270 0 L 315 0 Z"
            strokeWidth="0"
          ></path>
        </svg>

        {/* content div */}
        <div className="h-[1800px]  grid grid-cols-1 sm:grid-cols-2 grid-rows-2 sm:grid-rows-1 translate-y-[240px]">
          <div className="relative h-full">
            <motion.img
              className="curved-image absolute left-0 top-0 brightness-75 z-10  h-[150%] lg:h-[160%]"
              src={img1}
              alt="Curved Image 1"
              // تحريك الصورة بناءً على قيمة التمرير
              animate={{ y: isInViewport ? -scrollY * 0.2 - 250 : -250 }}
              transition={{ type: "tween", duration: 0.5 }}
            />
            <div className="absolute left-0 top-[-400px] h-full w-full flex items-center justify-center z-20">
              <h1 className="text-white text-2xl font-normal uppercase tracking-extraWide">
                Spacious Interior
              </h1>
            </div>
          </div>

          <div className="relative h-full">
            <motion.img
              className="curved-image absolute left-0 top-0 brightness-75 z-10 h-[150%] lg:h-[160%]"
              src={img2}
              alt="Curved Image 2"
              // تحريك الصورة بناءً على قيمة التمرير
              animate={{ y: isInViewport ? -scrollY * 0.2 : 0 }}
              transition={{ type: "tween", duration: 0.5 }}
            />
            <div className="absolute left-0 top-[-400px] h-full w-full flex items-center justify-center z-20">
              <h1 className="text-white text-2xl font-normal uppercase tracking-extraWide">
                Spacious Interior
              </h1>
            </div>
          </div>
        </div>

        {/* end content div */}
      </div>

      {/* bottom clip path */}
      <svg
        viewBox="0 0 1270 388"
        xmlns="http://www.w3.org/2000/svg"
        className="rotate-180 z-20 absolute bottom-[-1px] w-[110%]"
      >
        <path
          fill="rgba(255, 255, 255, 1)"
          d="M 0 328 C 316.5 328 316.5 214 633 214 L 633 214 L 633 0 L 0 0 Z"
          strokeWidth="0"
        ></path>
        <path
          fill="rgba(255, 255, 255, 1)"
          d="M 632 214 C 951 214 951 73 1270 73 L 1270 73 L 1270 0 L 632 0 Z"
          strokeWidth="0"
        ></path>
      </svg>
    </section>
  );
};

export default ScrollImgSection;
