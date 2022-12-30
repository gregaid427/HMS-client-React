import React, { useEffect, useState } from "react";
import Navbar from "../features/Navbar";

import { useSelector, useDispatch } from "react-redux";
import Heading from "../features/heading";
import ButtonFull from "../features/button-full";

import "react-toastify/dist/ReactToastify.css";
import SubHeading from "../features/subHeading";



function Lab() {
  

  return (
    <>
      <Navbar />
 
      <div className="px-[130px] my-auto ">
        <div className=" bg-white shadow-lg rounded-lg mx-auto p-3  flex-col flex mt-4 justify-center items-center ">
          <Heading title="Laboratory" />

        
        </div>
      </div>
    

    </>
  );
}

export default Lab;
