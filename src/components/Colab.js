import React from 'react'

const Colab = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 m-5 my-28'>


      <div className='order-2 md:order-1'>
     
        <div className="flex text-2xl mx-5 md:justify-start font-nunito justify-center  font-bold md:text-6xl my-12 ">
       {`Interesting Collaboration With Us?`}
        </div>
        <p className="m-5 my-8 md:justify-start font-quicksand font-normal text-gray-600 text-center md:text-left text-sm md:text-xl leading-6 md:leading-8">Help you to reach your business goal</p>
        <div className="flex justify-center md:justify-start">
        <button className="m-3 rounded-full mx-10 bg-button-blue font-quicksand font-bold md:w-3/12 text-white p-4 shadow-md">
          Get Started
        </button>
        </div>
      </div>


      <div className='0rder-1 md:order-2'>


        <div className='relative h-60 w-full my-24 md:my-12 '><img className='absolute top-0 right-36 rounded-xl md:top-5 md:right-6 h-60 w-72  md:h-72 md:w-96 object-fill' src={require("../resources/im01.jpg")} alt="" />
        <img src={require("../resources/im02.jpg")} className='absolute top-24 left-36 rounded-xl  h-60 w-72  md:h-72 md:w-96 md:left-10  object-fill'  />
        </div>


      </div>
    </div>
  )
}

export default Colab