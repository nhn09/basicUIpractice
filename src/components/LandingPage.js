import React from "react";
import { AiFillStar } from "react-icons/ai";
import TestBox from "./TestBox";

const LandingPage = () => {
  return (
    <div>
      <div class=" justify-center flex">
        <div className=" font-nunito font-bold text-3xl md:text-6xl flex-col text-center leading-snug justify-center">
          <div>Make your dream</div>
          <div>business goal come true</div>
        </div>
      </div>
      <div class="  my-10 md:mx-3 mx-6 flex flex-col">
        <div className="text-gray-500 text-center font-nunito font-normal flex-col  my-12 text-xl">
          <div>when you need us for improve your business,</div>
          <div>
            then come with us to help your business have reach it, you just sit
            and feel that goal.
          </div>
        </div>
        <div className="flex justify-center">
          <button className="m-3 my-11 rounded-full mx-10 bg-button-blue font-quicksand font-bold w-36 md:w-2/12 text-white p-4 shadow-md">
            Start Projects
          </button>
        </div>
      </div>

      <div class="justify-center flex">
        <div className="relative w-8/12 md:h-8/12 md:w-6/12 justify-center flex">
          <img
            class="    object-cover  rounded-md md:rounded-3xl"
            src={require("../resources/landing.jpg")}
          />
          <div className=" absolute p-2 md:p-3 bg-slate-100 rounded-2xl shadow-md w-28 md:w-40 h-16 md:h-24 -left-8 top-4 text-2xl">
            <div className="flex items-center">
              <AiFillStar className="text-box-orange text-sm md:text-base"></AiFillStar>
              <h1 className="font-quicksand font-normal md:mx-3 md:text-sm text-xs text-gray-500">
                Great Project
              </h1>
            </div>

            <h1 className="text-xs md:text-base font-bold my-2 font-quicksand">
              800+ <span className="font-normal">Done</span>
            </h1>
          </div>

          <div className="absolute bg-slate-100 md:p-1  p-2 rounded-2xl shadow-md w-44 h-40 -right-16 -bottom-1 ">

            {/* profile card */}
            <div className=" rounded-3xl flex    md:h-44  md:w-11/12 h-40 items-start flex-col justify-center  ">
              <div className="flex justify-start items-center">
                <img
                  src="https://i.imgur.com/8Km9tLL.jpg"
                  class="rounded-full w-12 h-12 "
                />
                <div className="mx-2">
                  <h1 className="font-quick text-xs font-semibold text-button-blue">
                    Bill Adams
                  </h1>
                  <p className="font-quick font-normal text-xs text-gray-500">
                    CEO,uptech
                  </p>
                </div>
              </div>

              <p className="font-quicksand m-2 md:text-sm text-xs  font-normal">
                {'The team is best I dont regret working with them.I will come back again.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
