import { motion } from "framer-motion";
import { hoverVariant } from "../variants/hoverVariant";
import ScrollImgSection from "./ScrollImgSection";

const AboutUsSection: React.FC = () => {





  return (
    <section className="">
      

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={hoverVariant}
        className="flex flex-col items-center text-center sm:mb-[70px]"
      >
        <div>
          <p className="text-xl font-medium tracking-widest">
            ABOUT DAMAC SUN CITY
          </p>
          <h3 className="text-4xl tracking-tighter">
            Live on the Bright Side of Life
          </h3>
        </div>
        <p className="mt-8 max-w-[780px]">
          Discover Sun City by DAMAC Properties. Imagine a place bathed in
          golden natural light, where every day begins with the soft glow of
          dawn and ends with the warm hues of sunset. We've harnessed the power
          of the sun to create a community dedicated to wellness, that nurtures
          your well-being from the inside out. Choose from exquisitely designed
          4 and 5-bedroom townhouses within our limited collection of
          residences.
        </p>
        <motion.button
          initial={{
            opacity: 0,
            scale: 0,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 0.5 }}
          className="inline-flex uppercase items-center justify-center whitespace-nowrap rounded-full text-sm font-normal ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-primary dark:focus-visible:ring-red text-red border border-red hover:bg-red hover:text-white py-2 px-4 md:py-5 md:px-7 h-10 md:h-12 mt-10"
        >
          get the brochure
        </motion.button>
      </motion.div>
      <ScrollImgSection />
      <div className="flex justify-center">
        <button className="px-7 py-5 text-xl  cursor-pointer font-normal text-white bg-red hover:bg-[#d98152e6] rounded-full tracking-widest ">
          Show Gallery
        </button>
      </div>
    </section>
  );
};

export default AboutUsSection;
