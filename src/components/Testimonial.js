import React from 'react'
import TestBox from './TestBox'

const Testimonial = () => {
  return (
   <div>
       <div className="flex mt-12 md:mt-24 mx-5 text-sm font-quicksand justify-center font-semibold md:text-2xl text-button-blue ">
          Our Services
        </div>
        <div className="flex text-2xl mx-5 font-nunito  justify-center  font-bold md:text-6xl my-9 ">
       {` Perfect and Fast
Movement`}
        </div>


        <div className='grid grid-cols-1 md:grid-cols-3 items-center justify-center md:justify-around  gap-4'>
        <div className="flex justify-center"> 
           <TestBox></TestBox>
         </div>
        <div className="flex justify-center"> 
           <TestBox></TestBox>
         </div>
        <div className="flex justify-center"> 
           <TestBox></TestBox>
         </div>
        </div>
   </div>
  )
}

export default Testimonial