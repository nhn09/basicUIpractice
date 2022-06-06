import React from "react";

const TestBox = () => {
  const text =
    "There are many variations passages of Lorem Ipsum majority some by words which don't look . ";
  return (
    <div className="my-4 p-12 pb-12 rounded-3xl flex w-8/12  md:w-10/12 h-96 items-start flex-col justify-center  shadow-md">
      <div className="flex justify-start p-4">
        <img
          src="https://i.imgur.com/8Km9tLL.jpg"
          class="rounded-full  -mt-3"
        />
        <div className="mx-4">
          <h1 className="font-quick font-semibold text-button-blue">
            Angel Rose
          </h1>
          <p className="font-quick font-normal text-xs text-gray-500">
            Creative Manager
          </p>
        </div>
      </div>

      <p className="font-quick mt-5 text-lg leading-7 font-normal">{text}</p>
    </div>
  );
};

export default TestBox;
