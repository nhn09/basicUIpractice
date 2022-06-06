import React from 'react'


const Navbar = () => {
  return (
    <nav>
    <div className="container items-center mt-12 flex justify-around">
      {/* logo and company name */}

      <div className="flex  items-center">
        <img
          class="object-scale-down  h-24 w-24"
          src={require("../resources/logo.png")}
        />
        <div className='font-nunito' >
          <h1 className="font-bold  justify-start">Agency</h1>
          <h2>Creative</h2>
        </div>
      </div>

      {/* subroutes */}

      <div>
        <ul className="hidden  md:justify-between  md:flex space-x-8  md:font-medium">
          <li className="my-5 block py-2 px-4 w-30 text-black hover:font-bold ">
            Home
          </li>
          <li className="my-5 mx-10 block py-2 px-4 w-30 text-black hover:font-bold ">
            About
          </li>
          <li className="m-5 block py-2 pr-4 pl-3 text-black hover:font-bold ">
            Services
          </li>
          <li className="m-5 block py-2 pr-4 pl-3 text-black hover:font-bold ">
            Projects
          </li>
        </ul>
      </div>
      {/* 
button */}

      <div className="hidden md:mx-5   md:flex  md:font-medium">
        <button className="rounded-full px-14 border-2 border-blue-600 py-4 ">
          Contact Us
        </button>
      </div>

      {/* Hamburger menu */}
      <div className="mx-4 md:hidden">
        <div className="bg-black h-1 rounded-md w-8"> </div>
        <div className="my-1 mx-1 bg-black h-1 rounded-md w-6"> </div>
        <div className="bg-black h-1 rounded-md w-8"> </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar