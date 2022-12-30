import React, { useEffect, useState } from "react";
import Navbar from "../features/Navbar";

import { useSelector, useDispatch } from "react-redux";
import Heading from "../features/heading";
import ButtonFull from "../features/button-full";
import LabelInput from "../features/labelInput";



import SubHeading from "../features/subHeading";

function Store() {
  const [modal, setmodal] = useState(true);

  const [Prognosis, setPrognosis] = useState("");
  const [Diagnosis, setDiagnosis] = useState("");
  const [Prescription, setPrescription] = useState("");
  const [Referrals, setReferrals] = useState("");
  const data = {
 
    "patient_id": "eeeeeedasan-25",
    "user_id": "dasan-25",
  
    "prognosis": Prognosis,
    "diagnosis": Diagnosis,
    "prescription": Prescription, 
    "referral": Referrals
   
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
 
  return (
    <>
      <Navbar />
      <div className="px-[30px] my-auto ">
        <div className=" bg-white shadow-lg rounded-lg mx-auto p-3  flex-col flex mt-4 justify-center items-center ">
          <Heading title="Consultation" />

          <div className="flex flex-wraps w-full ">
            <div className="flex   w-7/12  flex-col  ">
              <SubHeading title="Patient Examination" />
              <div className="items-center gap-3 flex px-10 mt-10 justify-center flex-col ">
                <form
                  onSubmit={(e) => handleSubmit(e)}
                  className="flex  w-full flex-wrap "
                >
                  <div className="flex pr-3 w-6/12 flex-wrap">
                    <div className="w-full mb-5 flex flex-col py-1">
                      <label className=" items-center w-full flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                        Diagnosis
                      </label>

                      <textarea
                        type="text"
                        rows={6}
                        className="border-2 px-1 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-md text-md shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue=""
                        onChange={(e) => setDiagnosis(e.target.value)}
                      />
                    </div>
                    <div className="w-full mb-5 flex flex-col py-1">
                      <label className=" items-center w-full flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                        Prescription
                      </label>

                      <textarea
                        type="text"
                        rows={6}
                        className="border-2  px-1 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-md text-md shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue=""
                        onChange={(e) => setPrescription(e.target.value)}
                      />
                    </div>
                    {/* <div className="w-full flex flex-col py-1">
                      <label className=" items-center w-full flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                        Prescription
                      </label>

                      <textarea
                        type="text" rows={6}
                        className="border-2 px-1 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-md text-md shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue=""
                        onChange={(e) => settemperature(e.target.value)}
                      />
                    </div> */}
                  </div>
                  {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}
                  <div className="flex pl-3  w-6/12 flex-wrap">
                    <div className="w-full mb-5 flex flex-col py-1">
                      <label className=" items-center w-full flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                        Prognosis
                      </label>

                      <textarea
                        type="text"
                        rows={6}
                        className="border-2 px-1 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-md text-md shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue=""
                        onChange={(e) => setPrognosis(e.target.value)}
                      />
                    </div>
                    <div className="w-full mb-5 flex flex-col py-1">
                      <label className=" items-center w-full flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                        Referrals
                      </label>

                      <textarea
                        type="text"
                        rows={6}
                        className="border-2 px-1 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-md text-md shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue=""
                        onChange={(e) => setReferrals(e.target.value)}
                      />
                    </div>
                    {/* <div className="w-full flex flex-col py-1">
                      <label className=" items-center w-full flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                        Temperature (c)
                      </label>

                      <textarea
                        type="text" rows={6}
                        className="border-2 px-1 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-md text-md shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue=""
                        onChange={(e) => settemperature(e.target.value)}
                      />
                    </div> */}
                  </div>
                  <div className="w-40 mx-auto">
                    <ButtonFull title="submit" />
                  </div>
                </form>
              </div>
            </div>
            <div className=" flex bg-slate-10 border border-red-50   w-5/12 px-10 ">
              <div className="relative  flex flex-col min-w-0 break-words w-full mb-6  rounded-lg bg-blueGray-100 ">
                <SubHeading title="Patient Information" />
                <form className="mt-2 mb-5 ">
                  <div className="flex  w-full flex-wrap py-1">
                    <label className=" items-center w-3/12 flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                      Patient ID
                    </label>

                    <input
                      type="text"
                      className="border-2 px-3 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-md shadow focus:outline-none focus:ring w-9/12 ease-linear transition-all duration-150"
                      defaultValue="lucky.jesse"
                    />
                  </div>
                  <div className="flex  w-full flex-wrap py-1">
                    <label className=" items-center w-3/12 flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                      Name
                    </label>

                    <input
                      type="text"
                      className="border-2 px-3 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-md shadow focus:outline-none focus:ring w-9/12 ease-linear transition-all duration-150"
                      defaultValue="lucky.jesse"
                    />
                  </div>
                  <div className="flex  w-full flex-wrap py-1">
                    <label className=" items-center w-3/12 flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                      Sex
                    </label>

                    <input
                      type="text"
                      className="border-2 px-3 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-md shadow focus:outline-none focus:ring w-9/12 ease-linear transition-all duration-150"
                      defaultValue="lucky.jesse"
                    />
                  </div>
                </form>
                <hr className="shadow-2xl my-3 "></hr>

                <SubHeading title="Patient vitals as @ 21/05/22022" />

                <form
                  onSubmit={(e) => handleSubmit(e)}
                  className="flex mt-3 w-full flex-wrap "
                >
                  <div className="flex w-6/12 flex-wrap">
                    <div className="w-full flex  py-1">
                      <label className=" items-center w-7/12 flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                        Temperature (c)
                      </label>

                      <input
                        type="text"
                        className="border-2 px-3 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-md shadow focus:outline-none focus:ring w-5/12 ease-linear transition-all duration-150"
                        defaultValue="87"
               
                      />
                    </div>
                    <div className="w-full flex  py-1">
                      <label className=" items-center w-7/12 flex  uppercase text-blueGray-600 text-md font-bold mb-1 ">
                        weight (Kg)
                      </label>

                      <input
                        type="text"
                        className="border-2 px-3 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-md shadow focus:outline-none focus:ring w-5/12 ease-linear transition-all duration-150"
                        defaultValue="78"
                      
                      />
                    </div>
                    <div className="w-full flex  py-1">
                      <label className=" items-center w-7/12 flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                        height (Cm)
                      </label>

                      <input
                        type="text"
                        className="border-2 px-3 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-md shadow focus:outline-none focus:ring w-5/12 ease-linear transition-all duration-150"
                        defaultValue="54"
                     
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
                        defaultValue="65/89"
               
                      />
                    </div>
                    <div className="w-full flex  py-1">
                      <label className=" items-center w-7/12 flex  uppercase text-blueGray-600 text-md font-bold mb-1 ">
                        Pulse Rate (c)
                      </label>

                      <input
                        type="text"
                        className="border-2 px-3 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-md shadow focus:outline-none focus:ring w-5/12 ease-linear transition-all duration-150"
                        defaultValue="84"
               
                      />
                    </div>
                    <div className="w-full flex  py-1">
                      <label className=" items-center w-7/12 flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                        Body Mass Index
                      </label>

                      <input
                        type="text"
                        className="border-2 px-3 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-md shadow focus:outline-none focus:ring w-5/12 ease-linear transition-all duration-150"
                        defaultValue="21"
                       
                      />
                    </div>
                  </div>

                  {/* <ButtonFull title="submit" /> */}
                </form>
                <hr className="shadow-2xl mt-5 my-3 "></hr>

                <SubHeading title="Patient visit History(limit to  last 3)" />

                <div>
                  <table class=" mx-auto  w-full items-center justify-center text-xl font-thin text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-sm  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" class="py-3 px-6">
                          Id
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Date
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {institutionkey?.map((keys) => ( */}
                      <tr
                        // key={keys.key_id}
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      >
                        <td class="py-2 px-6 ">#12445</td>
                        <td class="py-2 px-6 ">21/2/2022</td>
                        <td class="py-2 px-6">
                          {" "}
                          <button
                            className=" bg-blue-500 mr-1 text-white px-2 py-1 font-bold uppercase text-sm  rounded  hover:shadow-md "
                            type="button"
                          >
                            update Record
                          </button>
                          <button
                            className=" bg-blue-500 mr-1 text-white px-2 py-1 font-bold uppercase text-sm  rounded  hover:shadow-md "
                            type="button"
                            onClick={(e) => {
                              setmodal(false);
                            }}
                          >
                            view
                          </button>
                        </td>
                      </tr>

                      {/* ))} */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
      {/* ////////////////////////////////////////////////////////////// */}
      <div
        className={
          modal
            ? "hidden"
            : "px-[50px] my-auto rounded-3xl fixed top-10 left-0 right-0  "
        }
      >
        <div className=" bg-white shadow-lg rounded-lg mx-auto p-3  flex-col flex mt-4 justify-center items-center ">
          <Heading title="Patient Visit History" />

          <div className="flex flex-wraps w-full flex-col  ">
            <div className="flex   w-12/12  flex-col  ">
              <form className="flex  w-full flex-wrap flex-col">
                {/* <SubHeading title="Patient Examination Report" /> */}
                <div className=" flex bg-slate-10   w-5/12 px-10 ">
                  <div className="relative  flex flex-col min-w-0 break-words w-full mb-6  rounded-lg bg-blueGray-100 ">
                    <div className="flex  w-full flex-wrap py-1">
                      <label className=" items-center w-3/12 flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                        Date Visited
                      </label>

                      <input
                        type="text"
                        className="border-2 px-3 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-md shadow focus:outline-none focus:ring w-9/12 ease-linear transition-all duration-150"
                        defaultValue="lucky.jesse"
                      />
                    </div>
                    <div className="flex  w-full flex-wrap py-1">
                      <label className=" items-center w-3/12 flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                        Served By
                      </label>

                      <input
                        type="text"
                        className="border-2 px-3 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-md shadow focus:outline-none focus:ring w-9/12 ease-linear transition-all duration-150"
                        defaultValue="lucky.jesse"
                      />
                    </div>
                  </div>
                </div>{" "}
                <div className="items-center gap-3 flex px-10  justify-center flex-row ">
                  <div className="w-3/12 mb-5 flex flex-col py-1">
                    <label className=" items-center w-full flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                      Diagnosis
                    </label>

                    <textarea
                      type="text"
                      rows={9}
                      className="border-2 px-1 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-md text-md shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      defaultValue=""
                     
                    />
                  </div>
                  <div className="w-3/12 mb-5 flex flex-col py-1">
                    <label className=" items-center w-full flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                      Prescription
                    </label>

                    <textarea
                      type="text"
                      rows={9}
                      className="border-2  px-1 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-md text-md shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      defaultValue=""
                     
                    />
                  </div>

                  <div className="w-3/12 mb-5 flex flex-col py-1">
                    <label className=" items-center w-full flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                      Prognosis
                    </label>

                    <textarea
                      type="text"
                      rows={9}
                      className="border-2 px-1 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-md text-md shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      defaultValue=""
              
                    />
                  </div>
                  <div className="w-3/12 mb-5 flex flex-col py-1">
                    <label className=" items-center w-full flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                      Referrals
                    </label>

                    <textarea
                      type="text"
                      rows={9}
                      className="border-2 px-1 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-md text-md shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      defaultValue=""
             
                    />
                  </div>
                </div>
                <div className="w-40 mx-auto">
                  <button
                    className="my-4 bg-blue-500 text-white p-2 w-full font-bold uppercase text-md shadow focus:outline-none focus:ring  rounded  hover:shadow-md "
                    onClick={(e) => {
                      e.preventDefault();
                      setmodal(true);
                    }}
                  >
                    close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Store;
