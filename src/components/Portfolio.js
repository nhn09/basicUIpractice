import React from "react";
import Imgportfolio from "./Imgportfolio";

const Portfolio = () => {
  const para = `all projects that we have already done , proven can help to use more comfortable, then can used by client from our business`;
  return (
    <div>
      <div>
        <div className="flex mt-12 md:mt-10 mx-5 text-sm font-quicksand  justify-center font-semibold md:text-2xl text-button-blue ">
          Our Portfolio
        </div>
        <div className="flex text-2xl mx-5 font-nunito justify-center  font-bold md:text-6xl my-9 ">
          {` What do we do`}
        </div>
        <p className="m-5 font-quicksand font-normal text-gray-600 text-center text-sm md:text-xl leading-6 md:leading-8">
          {para}
        </p>
      </div>

      <div className="grid grid-cols-1 justify-center gap-3 md:grid-cols-3 items-center">
        <Imgportfolio caption={"Design Byte App"}></Imgportfolio>
        <div className="flex justify-center">
          <div className={`relative md:w-full md:h-96  w-10/12 my-3 h-5/6 rounded-3xl justify-center flex`}>
            <img
              className="rounded-3xl  object-cover w-4/5 "
              src={require("../resources/portim.jpg")}
              alt=""
            />

            <div
              className={`absolute bottom-6 left-40 px-3  text-white font-quicksand font-bold text-2xl`}
            >
              {`cloud app`}
            </div>
          </div>
        </div>
        <Imgportfolio caption={"Design Furniture App"}></Imgportfolio>
      </div>
      <div className="flex justify-center">
        <button className="m-3 text-base text-button-blue  rounded-full  font-quicksand font-bold w-36  md:w-3/12 h-12  shadow-md  border-2 border-button-blue">
          See All Portfolio
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
