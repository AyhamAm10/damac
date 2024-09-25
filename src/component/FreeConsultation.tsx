import cardImg from '../assets/manager.png'
import { hoverVariant } from '../variants/hoverVariant';
import ButtonRed from "./customComponent/ButtonRed"
import {motion} from 'framer-motion'
const FreeConsultation: React.FC = () => {
  return (
    <motion.section
    variants={hoverVariant}
    initial="hidden"
    whileInView="visible"
    className="bg-[#fff9f6] py-20 px-3">
        <h3 className="text-5xl tracking-tight  mb-2.5 text-center text-black">
          Get a Free Consultation
        </h3>
        <p className=" text-xl  mb-[30px] text-center text-black md:mb-[70px]">
          where you’ll be helped to choose the option what fits you the best
        </p>
      <div className="text-center flex flex-col items-center justify-center gap-2.5">
        
        <p className="text-lg  max-w-[420px] text-center text-black">
          Our consultant will call you back within 5 minutes. Feel free to
          contact us at any time, we’re online 24/7
        </p>
        <div className='w-full flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8 mt-10 sm:mt-0 max-w-[1000px]'>
            <div className='relative h-[140px] w-[140px] shrink-0 overflow-hidden rounded-full md:h-[174px] md:w-[174px]'>
                <img src={cardImg} alt="cart img" className='w-full absolute h-full  ' />
            </div>
            <div className='w-full'>
                <span className='text-lg text-start font-semibold mb-2.5 block text-black'>Marina Gulei</span>
                <span className='text-lg text-start block'>Real estate consultant and expert with 12 years of experience (7 of them in Dubai)</span>
            </div>
        </div>
        <ButtonRed value='Book free 30 min consultation' style='tracking-tight px-[16px] py-[8px] mb-5' />
        <p className='text-lg  max-w-[577px] text-center text-[#7C7C7C]'>We value your privacy. Your contact information is never shared with any third party and will remain internal where you can opt out at any time.</p>
      </div>
    </motion.section>
  );
};

export default FreeConsultation;
