import React, { useEffect, useState } from "react";
import Navbar from "../features/Navbar";

import { useSelector, useDispatch } from "react-redux";
import Heading from "../features/heading";
import ButtonFull from "../features/button-full";

import "react-toastify/dist/ReactToastify.css";
import SubHeading from "../features/subHeading";

// import toast, { Toaster } from "react-hot-toast";
import { addNewPatient, setPatientInfo } from "../redux/slices/patientSlice";
import {  useNavigate } from "react-router-dom";

function Store() {
  const dispatch = useDispatch();
  // const notify = () => toast("Here is your toast.");
  const [startDate, setStartDate] = useState(new Date());
  const [birthdate, setbirthdate] = useState("");
  const [fname, setfname] = useState("");
  const [lName, setlName] = useState("");
  const [oName, setoName] = useState("");
  const [Contact1, setContact1] = useState("");
  const [Contact2, setContact2] = useState("");
  const [rName, setrName] = useState("");
  const [rContact, setrContact] = useState("");
  const [address, setAddress] = useState("");
  const [sex, setSex] = useState("male");
  const [modal, setmodal] = useState(true);
  const [id, setid] = useState("");

  const data = {
    email: "",
    first_name: fname,
    last_name: lName,
    other_name: oName,
    contact1: Contact1,
    contact2: Contact2,
    address: address,
    sex: sex,
    birth_date: birthdate,
    relative_name: rName,
    relative_contact: rContact,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    dispatch(addNewPatient(data));
  };
  let navigate = useNavigate();
  const patient = useSelector((state) => state?.patients);
  const {newpatient} = patient;

  useEffect(() => {
if(newpatient){
 setid(newpatient.id)
 setfname(fname)
 setlName(oName)
 setlName(lName)
 setbirthdate(birthdate)
setmodal(false)
}
  }, [dispatch,newpatient]);

  return (
    <>
      <Navbar />
 
      <div className="px-[130px] my-auto ">
        <div className=" bg-white shadow-lg rounded-lg mx-auto p-3  flex-col flex mt-4 justify-center items-center ">
          <Heading title="Add New patient" />

          <div className="flex flex-wraps justify-center w-full ">
            <div className=" flex bg-slate-10   w-6/12 px-20 ">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6  rounded-lg bg-blueGray-100 ">
                <form onSubmit={(e) => handleSubmit(e)} className="mt-2  ">
                  <div className="flex  w-full flex-wrap py-1">
                    <label className=" items-center w-5/12 flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                      First Name required
                    </label>

                    <input
                      type="text"
                      className="border-2 px-3 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-md shadow focus:outline-none focus:ring w-7/12 ease-linear transition-all duration-150"
                      defaultValue=""
                      required
                      onChange={(e) => setfname(e.target.value)}
                    />
                  </div>
                  <div className="flex  w-full flex-wrap py-1">
                    <label className=" items-center w-5/12 flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                      Last Name
                    </label>

                    <input
                      type="text"
                      className="border-2 px-3 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-md shadow focus:outline-none focus:ring w-7/12 ease-linear transition-all duration-150"
                      defaultValue=""
                      onChange={(e) => setlName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex  w-full flex-wrap py-1">
                    <label className=" items-center w-5/12 flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                      Other Names
                    </label>

                    <input
                      type="text"
                      className="border-2 px-3 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-md shadow focus:outline-none focus:ring w-7/12 ease-linear transition-all duration-150"
                      defaultValue=""
                      onChange={(e) => setoName(e.target.value)}
                    />
                  </div>
                  <div className="flex  w-full flex-wrap py-1">
                    <label className=" items-center w-5/12 flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                      Sex
                    </label>

                    <select
                      onChange={(e) => setSex(e.target.value)}
                      className=" w-7/12 border-2 px-3 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-md shadow "
                    >
                      <option value="male">Male</option>

                      <option value="female">Female </option>
                    </select>
                  </div>
                  <div className="flex  w-full flex-wrap py-1">
                    <label className=" items-center w-5/12 flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                      Contact (1)
                    </label>

                    <input
                      type="text"
                      className="border-2 px-3 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-md shadow focus:outline-none focus:ring w-7/12 ease-linear transition-all duration-150"
                      defaultValue=""
                      onChange={(e) => setContact1(e.target.value)}
                    />
                  </div>
                  <div className="flex  w-full flex-wrap py-1">
                    <label className=" items-center w-5/12 flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                      Contact (2)
                    </label>

                    <input
                      type="text"
                      className="border-2 px-3 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-md shadow focus:outline-none focus:ring w-7/12 ease-linear transition-all duration-150"
                      defaultValue=""
                      onChange={(e) => setContact2(e.target.value)}
                    />
                  </div>
                  <div className="flex  w-full flex-wrap py-1">
                    <label className=" items-center w-5/12 flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                      Address
                    </label>

                    <textarea
                      type="text"
                      className="border-2 px-3 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-md shadow focus:outline-none focus:ring w-7/12 ease-linear transition-all duration-150"
                      defaultValue=""
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="flex  w-full flex-wrap py-1">
                    <label className=" items-center w-5/12 flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                      Relative Name
                    </label>

                    <input
                      type="text"
                      className="border-2 px-3 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-md shadow focus:outline-none focus:ring w-7/12 ease-linear transition-all duration-150"
                      defaultValue=""
                      onChange={(e) => setrName(e.target.value)}
                    />
                  </div>
                  <div className="flex  w-full flex-wrap py-1">
                    <label className=" items-center w-5/12 flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                      Relative Contact
                    </label>

                    <input
                      type="text"
                      className="border-2 px-3 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-md shadow focus:outline-none focus:ring w-7/12 ease-linear transition-all duration-150"
                      defaultValue=""
                      onChange={(e) => setrContact(e.target.value)}
                    />
                  </div>
                  <div className="flex  w-full flex-wrap py-1">
                    <label className=" items-center w-5/12 flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                      Birth Date
                    </label>
                    <input
                      type="date"
                      className="border-2 px-3 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-md shadow focus:outline-none focus:ring w-7/12 ease-linear transition-all duration-150"
                      defaultValue=""
                      min="1900-12-31"
                      max="2090-12-31"
                      onChange={(e) => setbirthdate(e.target.value)}
                    />
                  </div>
                  <ButtonFull title="submit" />
                </form>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
      <div
        className={
          modal
            ? "hidden"
            : "px-[50px] my-auto h-[400px] rounded-3xl absolute top-10 left-0 right-0  "
        }
      >
        <div className=" bg-white shadow-lg rounded-lg mx-auto p-3  w-6/12  flex-col flex mt-4 justify-center items-center ">
          <Heading title="Patient Information" />

          <div className="flex flex-wraps  w-[600px]  flex-col ">
            <div className="flex   w-12/12  flex-col ">
              <form className="flex  w-full flex-wrap flex-col">
                {/* <SubHeading title="Patient Examination Report" /> */}
              
                <div className=" flex bg-slate-10    px-10 ">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6  rounded-lg bg-blueGray-100 ">
                <form onSubmit={(e) => handleSubmit(e)} className="mt-2  ">
                <div className="flex  w-full flex-wrap py-1">
                    <label className=" items-center w-4/12 flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                    Patient ID
                    </label>

                    <input
                      type="text"
                      className="border-2 px-3 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-md shadow focus:outline-none focus:ring w-8/12 ease-linear transition-all duration-150"
                      Value={id}
                      required
                    
                    />
                  </div>
                  <div className="flex  w-full flex-wrap py-1">
                    <label className=" items-center w-4/12 flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                      First Name 
                    </label>

                    <input
                      type="text"
                      className="border-2 px-3 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-md shadow focus:outline-none focus:ring w-8/12 ease-linear transition-all duration-150"
                      Value={fname}
                      required
                  
                    />
                  </div>
                  <div className="flex  w-full flex-wrap py-1">
                    <label className=" items-center w-4/12 flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                      Last Name
                    </label>

                    <input
                      type="text"
                      className="border-2 px-3 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-md shadow focus:outline-none focus:ring w-8/12 ease-linear transition-all duration-150"
                      Value={lName}
                  
                      required
                    />
                  </div>
                  <div className="flex  w-full flex-wrap py-1">
                    <label className=" items-center w-4/12 flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                      Other Names
                    </label>

                    <input
                      type="text"
                      className="border-2 px-3 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-md shadow focus:outline-none focus:ring w-8/12 ease-linear transition-all duration-150"
                      Value={oName}
            
                    />
                  </div>
                  
         
                  <div className="flex  w-full flex-wrap py-1">
                    <label className=" items-center w-4/12 flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                      Birth Date
                    </label>
                    <input
                      type="text"
                      className="border-2 px-3 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-md shadow focus:outline-none focus:ring w-8/12 ease-linear transition-all duration-150"
                    Value={birthdate}
                
                     
                    />
                  </div>
          
                </form>
              </div>
              </div>
              
                <div className="w-full px-10  mx-auto flex">
                  
                <button
                    className="my-4 mr-1 bg-blue-500 text-white p-2 w-6/12 font-bold uppercase text-md shadow focus:outline-none focus:ring  rounded  hover:shadow-md "
                    onClick={(e) => {
                      e.preventDefault();
                
                      dispatch(setPatientInfo(data))
                      navigate("/vitals")
                      setmodal(true);
                    }}
                  >
                    Record Vitals
                  </button>

                  <button
                    className="my-4 bg-blue-900 text-white p-2 w-6/12 font-bold uppercase text-md shadow focus:outline-none focus:ring  rounded  hover:shadow-md "
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
