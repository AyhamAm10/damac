import React from 'react'
import mapImg from "../assets/map (1).png"
import LocationSections from './customComponent/LocationSections'
import img1 from "../assets/location-3 (1).png"
import img2 from "../assets/location-1 (1).png"
import img3 from "../assets/location-2 (1).png"
import img4 from "../assets/location-4 (1).png"
const Location:React.FC = () => {
  return (
    <section className="container">
        <div>
            <p className="h2 text-center">LOCATION</p>
            <h3 className="h3 mb-5 text-center text-black">An Easily Accessible Retreat</h3>
            <img src={mapImg} alt="map img " className='w-full object-cover' />
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-36 '>
            {/* floot 1 */}
            <div className='hidden sm:block'></div>
            <div className='hidden md:block '></div>
            <div>
                <LocationSections  title='20 Minutes to Al Maktoum Airport' p='same distance to Dubai International Airport' img={img1}/>
            </div>
            {/* floot 2 */}
            <div className="md:translate-y-[-300px]">
                <LocationSections span='DAMAC Hills Mall' title='15 Minutes to Sports City, Motor City, and DAMAC Hills Mall'p='with countless stores and amenities' img={img2} />
            </div>
            <div className='hidden sm:block'></div>
            <div className='hidden md:block '></div>
            
            {/* floot 3 */}
            <div className='hidden sm:block'></div>
            <div className='md:translate-y-[-300px]'>
                <LocationSections span='Famous Expo 2020 Venue' title='20 Minutes from EXPO 2020 and Dubai Investment Park' p='both located just a 20-minute drive away' img={img3} />
            </div>
            <div className='hidden md:block '></div>
            
            {/* floot 1 */}
            <div className='hidden md:block'></div>
            <div className='hidden md:block '></div>
            <div className='md:translate-y-[-300px]'>
                <LocationSections span='Mall of Emirates' title='28 Minutes to Mall of Emirates and Burj Al Arab' p='where you can indulge in signature dishes from international cuisines from around the world. Enjoy the only indoor snow and ski in the world with friends and family. Go shopping, watch movies, indulge in activities and much more.' img={img4} />
            </div>
        </div>
    </section>
  )
}

export default Location