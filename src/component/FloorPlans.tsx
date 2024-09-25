import { motion } from "framer-motion";
import { hoverVariant } from "../variants/hoverVariant";
import img from "../assets/floorplan-bed (2).png";
import { CiCircleChevRight } from "react-icons/ci";
import { CiCircleChevLeft } from "react-icons/ci";
import { AnimatePresence } from "framer-motion";
import img1 from "../assets/floorplan-placeholder-1 (1).png";
import img2 from "../assets/floorplan-placeholder-2 (2).png";
import { imgSliderType } from "../type/type";
import { useState } from "react";

const FloorPlans: React.FC = () => {

  const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // Direction: -1 for left, 1 for right

  const imgSlider: imgSliderType[] = [
    {
      id: 1,
      img: img1,
      active: true,
    },
    {
      id: 2,
      img: img2,
      active: false,
    },
  ];

  const handleNextItem = () => {
    setDirection(1); // اتجاه يمين
    setCurrentIndex((prevIndex) => (prevIndex === imgSlider.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePreviousItem = () => {
    setDirection(-1); // اتجاه يسار
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? imgSlider.length - 1 : prevIndex - 1));
  };

  // Animation Variants
  const slideVariants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 300 : -300, 
        opacity: 0,
      };
    },
    center: {
      x: 0, 
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        x: direction < 0 ? 300 : -300, 
        opacity: 0,
      };
    },
  };

  return (
    <section className="py-[200px]">
      <motion.div
        variants={hoverVariant}
        initial="hidden"
        whileInView="visible"
        className="relative mx-auto max-w-[1298px] text-center px-4"
      >
        <h1 className="text-2xl tracking-superWide uppercase font-medium md:mb-10">
          FLOOR PLANS
        </h1>
        <h2 className="md:text-[90px] text-4xl tracking-tight heading mb-20 text-center ">
          Sun City Floor Plans
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 px-6 sm:px-12 mb-12">
        <motion.div
          className="row-span-1"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src={img}
            alt="Floor plan img"
            height="100%"
            className="h-full object-cover"
          />
        </motion.div>
        <motion.div
          className="row-span-1"
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col gap-8 items-center px-6 sm:px-12 py-6 sm:py-12">
            <h1 className="text-3xl font-normal">4BR Townhouses</h1>
            <div className="flex flex-col items-center gap-4 w-full ">
              <button className="bg-red py-5 px-7 text-white font-normal text-sm rounded-full uppercase hover:bg-[#d98152e6] w-full text-center">
                Get All Floorplans
              </button>
              <button className="bg-red py-5 px-7 text-white font-normal text-sm rounded-full uppercase hover:bg-[#d98152e6] w-full text-center">
                Watch Virtual Tour
              </button>
              <button className="bg-red py-5 px-7 text-white font-normal text-sm rounded-full uppercase hover:bg-[#d98152e6] w-full text-center">
                Ask For Price
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      {/* slider */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-3 sm:px-6 md:px-9 gap-4  ">
        <div className="text-red flex items-center gap-5">
          {/* Previous Arrow */}
          <button
            onClick={handlePreviousItem}
            className="w-fit rounded-full hover:text-white hover:bg-red duration-300 transition-all p-0"
          >
            <CiCircleChevLeft className="text-4xl sm:text-6xl" />
          </button>
          {/* Next Arrow */}
          <button
            onClick={handleNextItem}
            className="w-fit rounded-full hover:text-white hover:bg-red duration-300 transition-all p-0"
          >
            <CiCircleChevRight className="text-4xl sm:text-6xl" />
          </button>
        </div>

        {/* Image Slider */}
        <div className="relative overflow-hidden h-full flex">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={imgSlider[currentIndex].id}
              src={imgSlider[currentIndex].img}
              className="w-full"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default FloorPlans;
