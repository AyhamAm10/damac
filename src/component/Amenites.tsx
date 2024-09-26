import React from 'react'
import { motion } from 'framer-motion'
import { hoverVariant } from '../variants/hoverVariant'
import DisplayImgSection from './DisplayImgSection'
import AmenitiesList from './AmenitiesList'
import Button from "../component/customComponent/ButtonRed"
const Amenites:React.FC = () => {
  return (
    <section className='pt-[150px] md:pt-[200px] '>
        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={hoverVariant}
        className='text-center flex flex-col items-center gap-4 justify-center'
        >
            <p className='text-2xl font-medium tracking-superWide uppercase '>BENEFITS AND AMENITIES</p>
            <h2 className='max-w-[800px] sm:text-[90px] tracking-tight text-4xl' style={{lineHeight: '100px'}}>What Makes DAMAC Sun City Special</h2>
        </motion.div>
        <DisplayImgSection />
        <AmenitiesList />
        <Button value='sssss' />
    </section>
  )
}

export default Amenites