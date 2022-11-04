import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"

function Services() {
  return (
    <div className='services'>
      <Carousel infiniteLoop
        autoPlay showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={1000}

      >
        
        <div>
          <img src={img3} alt='iteam1' />
           <p className='legend'>  Full Stack</p>
        </div>

        <div>
          <img src={img4} alt='iteam1' />
           <p className='legend'>Full peer to peer support</p>
        </div>


      </Carousel>
    
    
     </div>
  )
}

export default Services