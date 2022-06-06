import React from 'react'
import {BsDisplay} from "react-icons/bs"
const Box = ({color, name}) => {

// const lenCounter =(str)=>{
//     return str.split(' ').length;
// }
  return (
   <div className='m-4 p-3 pt-6 pb-12 rounded-3xl border-2 border-gray-200 flex w-8/12  md:w-10/12 h-72 justify-center flex-col items-center  shadow-md'> 
<div className= {`bg-${color} flex justify-center items-center p-4 h-20 w-20  rounded-full`} >
<BsDisplay className='text-8xl text-white'/>

</div>

<p className='font-quick mt-5 font-bold'>
{name}
</p>
   </div>
  )
}

export default Box