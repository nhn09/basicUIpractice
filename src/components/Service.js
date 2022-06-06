import React from "react";
import Box from "./Box";
import { FiSettings } from "react-icons/fi";
import { BsDisplay } from "react-icons/bs";
import { BiPen } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const Service = () => {
  const para =
    "We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business";
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center  m-5 my-12">
      <div>
        <div className="flex mt-12 md:mt-10 mx-5 text-sm font-quicksand md:justify-start justify-center font-semibold md:text-2xl text-button-blue ">
          Our Services
        </div>
        <div className="flex text-2xl mx-5 font-nunito md:justify-start justify-center  font-bold md:text-6xl my-9 ">
          {` Perfect and Fast
Movement`}
        </div>
        <p className="m-5 font-quicksand font-normal text-gray-600 text-sm md:text-xl leading-6 md:leading-8">
          {para}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-2  my-12">
        <div className="flex justify-center">
          {" "}
          <div className="m-4 p-3 pt-6 pb-12 rounded-3xl border-2 border-gray-200 flex w-8/12  md:w-10/12 h-72 justify-center flex-col items-center  shadow-md">
            <div
              className={`bg-button-blue flex justify-center items-center p-4 h-24 w-24  rounded-full`}
            >
              <BsDisplay className="text-8xl text-white" />
            </div>

            <p className="font-quicksand mt-5 font-bold">
              {`Social Media\n
Management`}
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          {" "}
          <div className="m-4 p-3 pt-6 pb-12 rounded-3xl border-2 border-gray-200 flex w-8/12  md:w-10/12 h-72 justify-center flex-col items-center  shadow-md">
            <div
              className={`bg-box-red flex justify-center items-center p-4 h-24 w-24  rounded-full`}
            >
              <FiSettings className="text-8xl text-white" />
            </div>

            <p className="font-quicksand mt-5 font-bold">
              {`Search Engine
Opimization`}
            </p>
          </div>
        </div>
        <div className="flex justify-center">
        <div className="m-4 p-3 pt-6 pb-12 rounded-3xl border-2 border-gray-200 flex w-8/12  md:w-10/12 h-72 justify-center flex-col items-center  shadow-md">
            <div
              className={`bg-box-green flex justify-center items-center p-4 h-24 w-24  rounded-full`}
            >
              <BiPen className="text-8xl rotate-90 font-light text-white" />
            </div>

            <p className="font-quicksand mt-5 font-bold">
              {`Design`}
            </p>
          </div>
        </div>
        <div className="flex justify-center">
        <div className="m-4 p-3 pt-6 pb-12 rounded-3xl border-2 border-gray-200 flex w-8/12  md:w-10/12 h-72 justify-center flex-col items-center  shadow-md">
            <div
              className={`bg-box-orange flex justify-center items-center p-4 h-24 w-24  rounded-full`}
            >
              <AiOutlineFundProjectionScreen className="text-8xl rotate-180 text-white" />
            </div>

            <p className="font-quicksand mt-5 font-bold">
              {`Ads`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
