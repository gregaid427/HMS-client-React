import React, { useEffect, useState } from "react";
import Navbar from "../features/Navbar";

import { useSelector, useDispatch } from "react-redux";

import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Heading from "../features/heading";
import ButtonFull from "../features/button-full";
import SubHeading from "../features/subHeading";
import {
 
  searchpbyidAction,
  searchpbyNameAction,
  setDataArray,
  setPatientInfo,

} from "../redux/slices/patientSlice";
import { useNavigate } from "react-router-dom";





function Store() {
  const users = useSelector((state) => state?.myusers);
const { loading, error, loginUser,roles } = users;

const [vitals, setVitals] = useState(false);
const [lab, setlab] = useState(false);
const [admin, setAdmin] = useState(false);
const [store, setstore] = useState(false);
const [consult, setConsult] = useState(false);




  const dispatch = useDispatch();
  const patientinfo = useSelector((state) => state?.patients);
  // const { patient_id, first_name, sex ,other_name, last_name} = patientinfo;
  const { DataArray } = patientinfo;

  const [id, setid] = useState("");
  const [idd, setidd] = useState("");
  const [first, setfirst] = useState("");
  const [other, setother] = useState("");
  const [Last, setLast] = useState("");
  const [sexx, setsexx] = useState("");
  const [actions, setactions] = useState("");
  const [select, setselect] = useState(true);
  const [modal, setmodal] = useState(true);
  const [mode, setmode] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    if (
      patientinfo?.loaded === true &&
      select === false && mode === false &&
      patientinfo?.searchpbyid.success === 1
    ) {
      const { searchpbyid } = patientinfo;
      const { data } = searchpbyid;
      setactions(true);
      dispatch(setDataArray(data));
  
      setidd("");
      setfirst("");
      setother("");
      setLast("");
      setsexx("");
      setmodal(false)
    }
    if (
      patientinfo?.loaded === true &&
      select === true && mode === false &&
      patientinfo?.searchpbyid.success === 1
    ) {
      const { searchpbyid } = patientinfo;
      const { data } = searchpbyid;
      setactions(true);
      dispatch(setPatientInfo(data));
     
      setidd("");
      setfirst("");
      setother("");
      setLast("");
      setsexx("");
   
    }
    if (
      patientinfo?.loaded === true &&
      mode === true &&
      patientinfo?.searchpbyid.success === 1
    ) {
      const { searchpbyid } = patientinfo;
      const { data } = searchpbyid;
      setactions(true);
      dispatch(setPatientInfo(data));
    
     setidd(patientinfo?.patient_id);
      setfirst(patientinfo?.first_name);
      setother(patientinfo?.other_name);
      setLast(patientinfo?.last_name);
      setsexx(patientinfo?.sex);
      setmode(false)
    }
    if (
      patientinfo?.loaded === true &&
      patientinfo?.searchpbyid.success === 0
    ) {
      toast.error("No Record Found");
      setactions(false);
      setidd("");
      setfirst("");
      setother("");
      setLast("");
      setsexx("");
    }
  }, [dispatch, patientinfo?.loaded]);

  useEffect(() => {
    if (
      patientinfo?.loaded === true &&
      patientinfo?.searchpbyid.success === 1
    ) {
      setidd(patientinfo?.patient_id);
      setfirst(patientinfo?.first_name);
      setother(patientinfo?.other_name);
      setLast(patientinfo?.last_name);
      setsexx(patientinfo?.sex);
    }


    roles?.includes("0100") ? setConsult(true) : setVitals(false)
    roles?.includes("0010") ? setstore(true) : setVitals(false)
    roles?.includes("0001") ? setlab(true) : setVitals(false)
    roles?.includes("1111") ? setAdmin(true) : setVitals(false)
    roles?.includes("1000") ? setVitals(true) : setVitals(false)
  }, [patientinfo]);


console.log(lab)



  const handleSubmit = (e) => {
    e.preventDefault();

    select ? dispatch(searchpbyidAction(id)) : setup();

    function setup() {
      dispatch(searchpbyNameAction(id));
  
    
    }
  };

  const handleradio = (val) => {
    setselect(val);
  };

  return (
    <>
      <Navbar />
      <div className="px-[150px] my-auto ">
        <div className=" bg-white shadow-lg rounded-lg mx-auto p-3  flex-col flex mt-4 justify-center items-center ">
          <Heading title="Patient Records" />

          <div className="flex flex-wraps w-full ">
            <div className="flex   w-5/12  flex-col  ">
              <SubHeading title="Search Patient" />
              <div className="items-center gap-3 flex px-20 mt-10 justify-center flex-col ">
                <form onSubmit={(e) => handleSubmit(e)}>
                  <input
                    className="p-1 w-full bg-slate-50 my-auto shadow-sm border border-black-200 "
                    required
                    placeholder=" "
                    onChange={(e) => setid(e.target.value)}
                  ></input>{" "}
                  <input
                    className="mr-1 mt-2"
                    type="radio"
                    value="true"
                    name="search"
                    checked={select === true}
                    onChange={() => {
                      handleradio(true);
                    }}
                  />
                  By ID
                  <input
                    className="mr-1 mt-2 ml-4"
                    type="radio"
                    value="false"
                    checked={select === false}
                    name="search"
                    onChange={() => {
                      handleradio(false);
                    }}
                  />
                  By Last Name
                  <ButtonFull title="SEARCH" />
                </form>
              </div>
            </div>
            <div className=" flex bg-slate-10 border border-red-50  w-7/12 px-20 ">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6  rounded-lg bg-blueGray-100 ">
                <SubHeading title="Patient Information" />
                <form>
                  <div className="flex   w-full flex-wrap py-1">
                    <label className=" items-center w-3/12 flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                      Patient ID
                    </label>

                    <input
                      type="text"
                      className="border-2 px-3 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-md shadow focus:outline-none focus:ring w-9/12 ease-linear transition-all duration-150"
                      value={idd}
                      readOnly
                    />
                  </div>
                  <div className="flex  w-full flex-wrap py-1">
                    <label className=" items-center w-3/12 flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                      Name
                    </label>

                    <input
                      type="text"
                      className="border-2 px-3 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-md shadow focus:outline-none focus:ring w-9/12 ease-linear transition-all duration-150"
                      value={first + " " + other + " " + Last}
                      readOnly
                    />
                  </div>

                  {/* <LabelInput inputval ="jjj" placeholder ="ddddd" label="fsfdf" /> */}

                  <div className="flex  w-full flex-wrap py-1">
                    <label className=" items-center w-3/12 flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                      Sex
                    </label>

                    <input
                      type="text"
                      className="border-2 px-3 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-md shadow focus:outline-none focus:ring w-9/12 ease-linear transition-all duration-150"
                      value={sexx}
                      readOnly
                    />
                  </div>

                  <div className="w-full my-5 flex flex-col">
                    <h1 className="text-left flex uppercase bold text-xl  ">
                      Actions
                    </h1>{" "}
                    <div
                      className={actions ? "w-full flex-wrap flex " : "hidden"}
                    >
                      <button
                        className={vitals ? " bg-blue-500 my-1 mr-1  text-white p-2 w-3/12 font-bold uppercase text-md  rounded  hover:shadow-md " : admin ? " bg-blue-500  text-white p-2 mr-1 w-3/12 font-bold uppercase text-md  rounded  hover:shadow-md ":  "hidden"}
                        type="button" onClick={() =>{navigate('/vitals')}}
                      >
                        Record Vitals
                      </button>
                      <button
                        className={consult ? " bg-blue-500 my-1 mr-1  text-white p-2 w-3/12 font-bold uppercase text-md  rounded  hover:shadow-md " : admin ? " bg-blue-500  text-white p-2 mr-1 w-3/12 font-bold uppercase text-md  rounded  hover:shadow-md ":  "hidden"}
                        type="button" onClick={() =>{navigate('/consult')}}
                      >
                        consultation
                      </button>
                      <button
                        className={lab ? " bg-blue-500 my-1 mr-1 text-white p-2 w-2/12 font-bold uppercase text-md  rounded  hover:shadow-md " :  admin ? " bg-blue-500  text-white p-2 mr-1 w-2/12 font-bold uppercase text-md  rounded  hover:shadow-md ": "hidden"}
                        type="button" onClick={() =>{navigate('/lab')}}
                      >
                        Lab
                      </button>
                      <button
                        className={store ? " bg-blue-500 my-1 mr-1 text-white p-2 w-3/12 font-bold uppercase text-md  rounded  hover:shadow-md " : admin ? " bg-blue-500  text-white p-2 mr-1 w-3/12 font-bold uppercase text-md  rounded  hover:shadow-md ": "hidden"}
                        type="button" onClick={() =>{navigate('/store')}}
                      >
                        store
                      </button>
                    </div>
                  </div>
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
            : "px-[50px] my-auto rounded-3xl absolute  top-10 left-0 right-0  "
        }
      >
        <div className=" bg-white shadow-lg rounded-lg mx-auto p-3  w-6/12  flex-col flex mt-4 justify-center items-center ">
          <Heading title="Search Results" />

          <div className="flex flex-wraps  w-12/12  flex-col ">
            <div className="flex   w-12/12  flex-col ">
              <form className="flex  w-full flex-wrap flex-col">
                {/* <SubHeading title="Patient Examination Report" /> */}
                <div className=" flex bg-slate-10   w-12/12  ">
                  <div className="relative  flex flex-col min-w-0 break-words w-full mb-6  rounded-lg bg-blueGray-100 ">
                    <div className="flex  w-full flex-wrap py-1">
                    <table class=" mx-auto  w-full items-center justify-center text-xl font-thin text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-sm  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" class="py-3 px-6">
                          Patient ID
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Name
                        </th>
                        <th scope="col" class="py-3 px-6">
                          sex
                        </th>
                        <th scope="col" class="py-3 px-6">
                          birth Date
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
             
                      {  
    
    DataArray?.map((info) => ( 
                      <tr
                        key={info.patient_id}
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      >
                        <td class="py-2 px-6 ">{info.patient_id}</td>
                        <td class="py-2 px-6 ">{info.first_name +" "+ info.other_name +" "+ info.last_name}</td>
                        <td class="py-2 px-6 ">{info.sex}</td>
                        <td class="py-2 px-6 ">{info.birth_date }</td>
                        <td class="py-2 px-6">
                          {" "}
                         
                          <button
                            className=" bg-blue-500 mr-1 text-white px-2 py-1 font-bold uppercase text-sm  rounded  hover:shadow-md "
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              setmode(true)
                              dispatch(searchpbyidAction(info.patient_id));
                              setmodal(true);
                            }}
                          >
                            select
                          </button>
                        </td>
                      </tr>

                        ))  }  
                    </tbody>
                  </table>
                    </div>
                  </div>
                </div>{" "}
                <div className="items-center gap-3 flex px-10  justify-center flex-row "></div>
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
