import React from 'react'

const Imgportfolio = ({caption}) => {
  return (

    <div className={`relative w-11/12 my-3 h-5/6  rounded-3xl justify-center flex`}>
  

    <img className='rounded-3xl object-cover w-80 ' src={require("../resources/portim.jpg")} alt="" />

    <div className={`absolute bottom-6 left-36 px-3  text-white font-quicksand font-bold text-2xl`}>
{caption}
    </div>
    </div>    )
}

export default Imgportfolio