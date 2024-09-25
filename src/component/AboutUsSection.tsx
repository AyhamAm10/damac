import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import img1 from "../assets/section-2-image-1 (2).png";
import img2 from "../assets/section-2-image-2 (2).png"
import { hoverVariant } from '../variants/hoverVariant';

const AboutUsSection: React.FC = () => {
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="px-3">
      <motion.div
      initial="hidden"
      whileInView="visible"
      variants={hoverVariant}
      className="flex flex-col items-center text-center sm:mb-[70px]">
        <div>
          <p className="text-xl font-medium tracking-widest">
            ABOUT DAMAC SUN CITY
          </p>
          <h3 className="text-4xl tracking-tighter">
            Live on the Bright Side of Life
          </h3>
        </div>
        <p className="mt-8 max-w-[780px]">
          Discover Sun City by DAMAC Properties. Imagine a place bathed in golden natural light, where every day begins with the soft glow of dawn and ends with the warm hues of sunset. We've harnessed the power of the sun to create a community dedicated to wellness, that nurtures your well-being from the inside out. Choose from exquisitely designed 4 and 5-bedroom townhouses within our limited collection of residences.
        </p>
        <motion.button 
        initial={{
            opacity: 0 ,
            scale: 0
        }}
        whileInView={{
            opacity: 1,
            scale: 1
        }}
        transition={{duration: 0.5}}
        className="inline-flex uppercase items-center justify-center whitespace-nowrap rounded-full text-sm font-normal ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-primary dark:focus-visible:ring-red text-red border border-red hover:bg-red hover:text-white py-2 px-4 md:py-5 md:px-7 h-10 md:h-12 mt-10">
          get the brochure
        </motion.button>
      </motion.div>
      <div className="curved-container relative w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-[150vh]">
          <div className="relative">
            <motion.img
              className="curved-image absolute left-0 top-0 brightness-75 z-10 translate-y-[-250px]"
              src={img1}
              alt="Curved Image"
              animate={{ y: isInViewport ? -scrollY * 0.2 - 250 : -250 }}  // يتحرك فقط عندما يكون في القسم
              transition={{ type: "tween", duration: 0.5 }}
            />
            <div className="absolute left-0 top-0 h-full w-full flex items-center justify-center z-20">
              <h1 className="text-white text-2xl font-normal uppercase tracking-extraWide">
                spacious interior
              </h1>
            </div>
          </div>
          <div className="relative">
          <motion.img
              className="curved-image absolute left-0 top-0 brightness-75 z-10 translate-y-"
              src={img2}
              alt="Curved Image"
              animate={{ y: isInViewport ? -scrollY * 0.2 : 0 }}  // يتحرك فقط عندما يكون في القسم
              transition={{ type: "tween", duration: 0.5 }}
            />
            <div className="absolute left-0 top-0 h-full w-full flex items-center justify-center z-20">
              <h1 className="text-white text-2xl font-normal uppercase tracking-extraWide ">
                spacious interior
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <button className='px-7 py-5 text-xl  cursor-pointer font-normal text-white bg-red hover:bg-[#d98152e6] rounded-full tracking-widest '>
        Show Gallery
        </button>
      </div>
    </section>
  );
};

export default AboutUsSection;
