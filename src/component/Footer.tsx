import { motion } from "framer-motion";
import { hoverVariant } from "../variants/hoverVariant";
const Footer = () => {
  return (
    <motion.footer
    variants={hoverVariant}
    initial="hidden"
    whileInView="visible"
      className="container  flex flex-col items-center justify-center py-[100px]"
    >
      <div className="max-w-[560px]">
        <p className="animate-text h4 items-center text-center font-display leading-relaxed">
          Our <span className="text-red">Experts</span> Will Help You Get the
          Best{" "}
          <span className="text-red underline decoration-4 underline-offset-4">
            ROI
          </span>{" "}
          and{" "}
          <span className="text-red underline decoration-4 underline-offset-4">
            Quality
          </span>
          in <span className="text-red">DAMAC Sun City</span>
        </p>
      </div>
      <button className="   px-7 py-5 text-sm font-normal bg:white border border-red hover:bg-red hover:text-white text-red cursor-pointer rounded-full transition-all duration-200 ">
      Get a free consultation
      </button>
    </motion.footer>
  );
};

export default Footer;
