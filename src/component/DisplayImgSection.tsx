import { motion } from "framer-motion"
import { hoverVariant } from "../variants/hoverVariant"
import img1 from "../assets/section-3-image-1.png"
import img2 from "../assets/section-3-image-2.png"
import { imgVariant } from "../variants/imgVariant"
import img3 from "../assets/gallery-5 (1).png"
const DisplayImgSection = () => {
  return (
    <section className="mt-[64px] gap-4 sm:gap-6 px-2 sm:px-4 grid grid-cols-3">
        <div className=" col-span-3 sm:col-span-2">
            <motion.h1 
            variants={hoverVariant}
            initial="hidden"
            whileInView="visible"
            className=" text-2xl sm:text-5xl tracking-tight mb-2.5 max-w-[440px] md:mb-[30px]">
                Townhouses and a Community to Live Better
            </motion.h1>
            <motion.img
            variants={imgVariant}
            initial="hidden"
            whileInView="visible"
            src={img1}
            className=""
            width="100%"  />
        </div>
        <div className="hidden sm:block sm:col-span-1">
        </div>
        <div className="hidden sm:block sm:col-span-2"></div>
        <div className=" col-span-3 sm:col-span-1">
            <motion.h1 
            variants={hoverVariant}
            initial="hidden"
            whileInView="visible"
            className=" text-2xl sm:text-5xl tracking-tight mb-2.5 max-w-[440px] md:mb-[30px]">
                With Your Private Wellness Retreat
            </motion.h1>
            <motion.img
            variants={imgVariant}
            initial="hidden"
            whileInView="visible"
            src={img2}
            className=""
            width="100%"  />
        </div>
        <div className=" col-span-3 sm:col-span-2 sm:translate-y-[-200px]">
            <motion.h1 
            variants={hoverVariant}
            initial="hidden"
            whileInView="visible"
            className=" text-2xl sm:text-5xl tracking-tight mb-2.5 max-w-[440px] md:mb-[30px]">
                To Connect and Rejuvenate Your Mind and Soul
            </motion.h1>
            <motion.img
            variants={imgVariant}
            initial="hidden"
            whileInView="visible"
            src={img3}
            className="w-full sm:w-5/6"
             />
        </div>
    </section>
  )
}

export default DisplayImgSection