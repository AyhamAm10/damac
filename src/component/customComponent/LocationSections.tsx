type props = {
    title: string ,
    img: string,
    p: string ,
    span? : string
}

const LocationSections:React.FC<props> = ({ title ,img , p , span }) => {
  return (
    <div>
        <div className="w-full">
            <h4 className="h4 mb-2.5 text-black">{title}</h4>
            <p className="body-3 mb-4 text-black md:mb-[30px]">{p}</p>
            <img src={img} alt="15 Minutes to Sports City, Motor City, and DAMAC Hills Mall " className="mb-2.5" />
            <span className="body-3 block text-neutral-500">{span?? span }</span>
        </div>
    </div>
  )
}

export default LocationSections