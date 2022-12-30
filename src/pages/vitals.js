import React, { useEffect, useState } from "react";
import Navbar from "../features/Navbar";

import { useSelector, useDispatch } from "react-redux";
import Heading from "../features/heading";
import ButtonFull from "../features/button-full";
import LabelInput from "../features/labelInput";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SubHeading from "../features/subHeading";
import { createVitalsAction } from "../redux/slices/vitalsSlice";

function Store() {
  const [temperature, settemperature] = useState("");
  const [pressure, setpressure] = useState("");
  const [height, setheight] = useState("");
  const [weight, setweight] = useState("");

  const [bmi, setbmi] = useState("");
  const [pulse, setpulse] = useState("");

  const dispatch = useDispatch();
  const patientinfo = useSelector((state) => state?.patients);
  const { searchpbyid } = patientinfo;
  const { data } = searchpbyid;

  const mydata = {
    "patient_id": data.patient_id,
    "user_id": "dasan-25",
    "visit_id": "zizu-21",
    "pressure": pressure,
    "weight": weight,
    "bmi": bmi, 
    "temperature": temperature,
    "height": height,
    "pulse_rate": pulse
  }
  const dispactch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
  
    dispactch(createVitalsAction(mydata))




    
  };

  return (
    <>
      <Navbar />
      {/* <ToastContainer
        position="bottom-right"
        autoClose={4000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
      <div className="px-[130px] my-auto ">
        <div className=" bg-white shadow-lg rounded-lg mx-auto p-3  flex-col flex mt-4 justify-center items-center ">
          <Heading title="Patient vitals" />

          <div className="flex flex-wraps w-full ">
            <div className="flex   w-7/12  flex-col  ">
              <SubHeading title="Vitals Details" />
              <div className="items-center gap-3  flex px-20 mt-10 justify-center flex-col ">
                <form
                  onSubmit={(e) => handleSubmit(e)}
                  className="flex  w-full flex-wrap "
                >
                  <div className="flex w-6/12  pr-2  flex-wrap ">
                    <div className="w-full flex  py-1">
                      <label className=" items-center w-7/12 flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                        Temperature (c)
                      </label>

                      <input
                        type="text"
                        className="border-2 px-3 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-md shadow focus:outline-none focus:ring w-5/12 ease-linear transition-all duration-150"
                        defaultValue=""
                        onChange={(e) => settemperature(e.target.value)}
                      />
                    </div>
                    <div className="w-full flex  py-1">
                      <label className=" items-center w-7/12 flex  uppercase text-blueGray-600 text-md font-bold mb-1 ">
                        weight (Kg)
                      </label>

                      <input
                        type="text"
                        className="border-2 px-3 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-md shadow focus:outline-none focus:ring w-5/12 ease-linear transition-all duration-150"
                        defaultValue=""
                        onChange={(e) => setweight(e.target.value)}
                      />
                    </div>
                    <div className="w-full flex  py-1">
                      <label className=" items-center w-7/12 flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                        height (Cm)
                      </label>

                      <input
                        type="text"
                        className="border-2 px-3 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-md shadow focus:outline-none focus:ring w-5/12 ease-linear transition-all duration-150"
                        defaultValue=""
                        onChange={(e) => setheight(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="flex pl-4 w-6/12 flex-wrap">
                    <div className="w-full flex  py-1">
                      <label className=" items-center w-7/12 flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                        pressure (mmHg)
                      </label>

                      <input
                        type="text"
                        className="border-2 px-3 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-md shadow focus:outline-none focus:ring w-5/12 ease-linear transition-all duration-150"
                        defaultValue=""
                        onChange={(e) => setpressure(e.target.value)}
                      />
                    </div>
                    <div className="w-full flex  py-1">
                      <label className=" items-center w-7/12 flex  uppercase text-blueGray-600 text-md font-bold mb-1 ">
                        Pulse Rate (c)
                      </label>

                      <input
                        type="text"
                        className="border-2 px-3 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-md shadow focus:outline-none focus:ring w-5/12 ease-linear transition-all duration-150"
                        defaultValue=""
                        onChange={(e) => setpulse(e.target.value)}
                      />
                    </div>
                    <div className="w-full flex  py-1">
                      <label className=" items-center w-7/12 flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                        Body Mass Index
                      </label>

                      <input
                        type="text"
                        className="border-2 px-3 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-md shadow focus:outline-none focus:ring w-5/12 ease-linear transition-all duration-150"
                        defaultValue=""
                        onChange={(e) => setbmi(e.target.value)}
                      />
                    </div>
                  </div>

                <ButtonFull title="submit" />
                </form>
              </div>
            </div>
            <div className=" flex bg-slate-10 border border-red-50  w-5/12 px-20 ">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6  rounded-lg bg-blueGray-100 ">
                <SubHeading title="Patient Information" />
                <form className="mt-2  ">
                  <div className="flex  w-full flex-wrap py-1">
                    <label className=" items-center w-3/12 flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                      Patient ID
                    </label>

                    <input
                      type="text"
                      className="border-2 px-3 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-md shadow focus:outline-none focus:ring w-9/12 ease-linear transition-all duration-150"
                      Value={data?.patient_id}
                    />
                  </div>
                  <div className="flex  w-full flex-wrap py-1">
                    <label className=" items-center w-3/12 flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                      Name
                    </label>

                    <input
                      type="text"
                      className="border-2 px-3 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-md shadow focus:outline-none focus:ring w-9/12 ease-linear transition-all duration-150"
                      Value={ data?.first_name+" "+ data?.other_name +" "+ data?.last_name}
                    />
                  </div>
                  <div className="flex  w-full flex-wrap py-1">
                    <label className=" items-center w-3/12 flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                      Sex
                    </label>

                    <input
                      type="text"
                      className="border-2 px-3 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-md shadow focus:outline-none focus:ring w-9/12 ease-linear transition-all duration-150"
                      Value={data?.sex}
                    />
                  </div>
                </form>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Store;
