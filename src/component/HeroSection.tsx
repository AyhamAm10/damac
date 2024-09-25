import { useEffect } from "react";
import sectionImg from "../assets/section-image-1.png";
import logo from "../assets/logo.svg";
import heroSectionImg from "../assets/heroSectionImg.svg";
import { motion, useAnimation } from "framer-motion";
import { hoverVariant } from "../variants/hoverVariant";

const HeroSection: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const maxScroll = 700;
      const newWidthPercentage = 100 - (scrollPos / maxScroll) * 20;
      const width = Math.max(50, newWidthPercentage);
      controls.start({ width: `${width}%` });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <motion.section
      className="relative  overflow-hidden transition-all duration-2000 ease-linear"
      animate={controls}
      initial={{ width: "100%" }}
    >
      <div className="absolute top-0 left-0 w-full h-full z-10 overflow-hidden">
        <img
          src={sectionImg}
          alt="hero img"
          className="object-cover"
          style={{ width: "110vw", height: "100%" }}
        />
      </div>
      <div className=" absolute z-20 bg__hero_section left-0 top-0 h-[150vh]  w-full">
        <div className="py-8 px-18 sm:px-28 flex items-center justify-between">
          <div>
            <img src={logo} alt="logo" className="text-3xl" width={300} />
          </div>
          <button className="px-8 py-4 rounded-2xl text-2xl text-white border border-white hover:border-red hover:bg-red ">
            Get a free consultation
          </button>
        </div>
        <div className="py-8 sm:py-12 flex items-center justify-center">
          <img
            src={heroSectionImg}
            alt="hero section img"
            className="w-[340px] h-[110px]"
          />
        </div>
        <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={hoverVariant}
        className="text-7xl  text-white text-center flex flex-col items-center gap-2">
          <h1>Luxury Living</h1>
          <h1>
            Meets <span className=" underline">Holistic</span>
          </h1>
          <h1 className="underline">Wellness</h1>
          <div className="text-center mt-4 text-2xl tracking-extraWide">
            <h1>experience being anchored and</h1>
            <h1>nurtured in this opulent sanctuary</h1>
          </div>
        </motion.div>
        <div className=" flex items-center justify-center gap-6 sm:gap-12  mt-8 sm:mt-12">
            <button className="px-6 py-4 rounded-full bg-yalwe border-white hover:border-red hover:bg-ofYalwe tracking-widest text-xl ">Join the Waitlist</button>
            <button  className="px-6 py-4 rounded-full bg-green border-white  hover:border-red border hover:bg-ofgreen  tracking-widest text-white text-xl ">Download Brochure</button>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
