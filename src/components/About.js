import React from "react";
import {AiOutlinePlayCircle} from "react-icons/ai"

const About = () => {

  const para = ` We move with make a Creative Strategy for help your business
  goal, we help to improve your income by a services we have. make
  your content look interesting and make people look for your
  business`
  return (
    <div className="mx-5 my-12">
      <div className="flex mt-12 md:mt-28 text-sm font-quicksand font-semibold md:text-2xl text-button-blue justify-center">About Us</div>
      <div className="flex text-2xl font-nunito font-bold md:text-6xl my-9 justify-center">Our Teammate</div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 items-center  m-5 my-12">


        {/* image container */}
      <div className="relative basis-1/2 h-4/5 lg:order-1 order-last justify-center flex">
        <img
          class="  mx-12 p-2  object-cover rounded-3xl"
          src={require("../resources/landing.jpg")}
        />
        </div>
{/* text container */}

      <div className="md:basis-1/2 mx-12 lg:order-2 order-1 font-quicksand font-normal text-gray-600 text-sm md:text-xl leading-6 md:leading-8">
          <div>
            <div>
              <p className="m-5">
               {para}
              </p>
              <p className="m-5">
               {para}
              </p>
            </div>

            <div className="flex md:justify-start justify-around">
            <button className="m-3 rounded-full   bg-button-blue font-quicksand font-bold w-32    h-12  md:w-3/12 text-white  shadow-md">
              About Us
            </button>
   
           
            <button className="m-3 text-button-blue flex items-center justify-evenly text-base  rounded-full  font-quicksand font-bold w-36  md:w-3/12 h-12  shadow-md  border-2 border-button-blue">
            <AiOutlinePlayCircle className="text-2xl"></AiOutlinePlayCircle> Our story
            </button>
        
           
            </div>

         
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
