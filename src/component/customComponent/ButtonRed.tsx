import React from 'react'
type props ={
    value: string;
    style? : string
}
const Button:React.FC<props> = ({value , style}) => {
  return (
    <button className={`cursor-pointer rounded-full px-7 py-5 text-xl   font-normal text-white bg-red hover:bg-[#d98152e6]    ${style}`}>
       {value}
    </button>
  )
}

export default Button