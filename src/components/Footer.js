import React from "react";
import {FiFacebook,FiInstagram,FiLinkedin,FiMail,FiTwitter} from "react-icons/fi"
<div><hr className="bg-white w-full" /></div>
const Footer = () => {
  return (
<div className="bg-neutral-800 pb-12">
  <div className=" p-24 ">

 
<div className="grid grid-cols-1 md:grid-cols-3 text-white">
      <div className="p-3 my-3 bg-white rounded-lg w-3/5 md:w-2/5 h-24 flex items-center justify-center ">
      <div className="flex  items-center">
        <img
          class="object-scale-down  h-24 w-24"
          src={require("../resources/logo.png")}
        />
        <div className="text-black" >
          <h1 className="font-bold  justify-start">Agency</h1>
          <h2>Creative</h2>
        </div>
      </div>
      </div>
      <div className=" text-left grid-cols-2 grid leading-6 font-quicksand">
        <div className="p-3 m-3">
          <ul>
            <li className=" font-bold text-2xl">{"Terms & policies"}</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="p-3 m-3">
          <ul>
          <li className=" font-bold text-2xl">Company</li>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="md:grid-cols-2 grid-cols-1 grid">
        <div className="p-3 m-3">
          <ul>
          <li className="font-quick font-bold text-2xl"> Contact</li>
            <li>(+62) 893912392190</li>
            <li>agecnycr@gmail.com</li>
          </ul>
        </div>
        <div className="p-3 m-3">
          <ul>
          <li className="font-quick font-bold text-2xl"> Location</li>
            <li>PT Osiris Real Estate Internasional</li>
            <li>Jl. KH. Wahid Hasyim Kel No.10D</li>
            <li>Jakarta, Indonesia</li>
            <li>team@OsirisRealEstate.com</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
   

    <div>
    <div className="flex justify-center">
   <div className="grid grid-cols-5 justify-around gap-4 md:w-1/2 mt-12 ">
      <div className="bg-white  w-16 h-16 p-4 rounded-full text-3xl"><FiFacebook/></div>
      <div className="bg-white  w-16 h-16 p-4 rounded-full text-3xl"><FiInstagram/></div>
      <div className="bg-white  w-16 h-16 p-4 rounded-full text-3xl"><FiLinkedin/></div>
      <div className="bg-white  w-16 h-16 p-4 rounded-full text-3xl"><FiMail/></div>
      <div className="bg-white  w-16 h-16 p-4 rounded-full text-3xl"><FiTwitter/></div>
      
    </div>
    
   </div>
   
   </div>
    <div className="flex  justify-center"><hr className="bg-white w-full md:w-1/2 mt-4" /></div>
    <div className="flex text-white p-4 justify-center m-3"><h1 className="mb-11 font-quicksand font-normal">Copyright @ 2022 Agency Creative. All Right Reserved</h1></div>

   
 
  


</div>
     
  
   
  );
};

export default Footer;
