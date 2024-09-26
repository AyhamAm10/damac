import {motion} from "framer-motion"
import { hoverVariant } from "../variants/hoverVariant"
const WhiteList:React.FC = () => {
  return (
    <section className=" mt-20  sm:py-32 py-12 md:py-48 bg-red  ">
        <div className="flex items-center justify-center">
        <motion.div 
        variants={hoverVariant}
        initial="hidden"
        whileInView="visible"
        className="text-white heading tracking-tight text-2xl sm:text-5xl lg:text-[90px] mb-2.5 max-w-[800px] text-center md:mb-5 flex items-center justify-center flex-col">
            <h1>EOI's Have Started.</h1>
            <h1 className=" underline">Get On the Waitlist</h1>
            <h1 >for Early Premium Units.</h1>
            <p className=" text-lg  mb-[30px] max-w-[521px] tracking-normal text-wrap text-center text-white md:mb-[50px]">Book a call with our directors to have a full understanding and make an informed decision</p>
            <button className="text-[##fcede3e6] py-2 md:py-5 px-4 md:px-7 rounded-full font-normal text-sm uppercase cursor-pointer tracking-wider bg-yalwe hover:bg-ofYalwe text-black">GET AHEAD ON THE WAITLIST</button>
            <p className="text-lg tracking-normal  mt-10 max-w-[577px] text-center text-white/50">We value your privacy. Your contact information is never shared with any third party and will remain internal where you can opt out at any time.</p>
        </motion.div>
        </div>
    </section>
  )
}

export default WhiteList