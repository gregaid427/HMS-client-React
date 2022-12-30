import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import {  logUserout } from "../redux/slices/UsersSlice";
import { clearstorestate } from "../redux/slices/storeSlice";
import { clearpatientstate } from "../redux/slices/patientSlice";


export const Logout = () => {
 
  const { setAuth } = useContext(AuthContext);
  const dispatch = useDispatch();
  const [user, setuser] = useState("");
  const [institution, setinstitution] = useState("");

  const users = useSelector((state) => state?.myusers);
  const { loading, error, loginUser,roles ,signedin } = users;
  const patientinfo = useSelector((state) => state?.patients);

  console.log(roles)
  

const [vitals, setVitals] = useState(false);
const [lab, setlab] = useState(false);
const [admin, setAdmin] = useState(false);
const [store, setstore] = useState(false);
const [consult, setConsult] = useState(false);

  useEffect(() => {
    // if( (localStorage.getItem('email')) || loginUser?.user === undefined ) {
    //   navigate('/admin6')
    // }


roles?.includes("0100") ? setConsult(true) : setVitals(false)
roles?.includes("0010") ? setstore(true) : setVitals(false)
roles?.includes("0001") ? setlab(true) : setVitals(false)
roles?.includes("1111") ? setAdmin(true) : setVitals(false)
roles?.includes("1000") ? setVitals(true) : setVitals(false)


    // if (localStorage.getItem("email")) {
    //   setuser(localStorage.getItem("email"));
    //   setinstitution(localStorage.getItem("institution"));
    // }
  }, []);


  const [nav, setNav] = useState(false);
  const [info, setinfo] = useState("");
  const handleClick = () => {
    setNav(!nav);
  };
  let navigate = useNavigate();
  const loggout = () => {
    // localStorage.removeItem("token");
    // // localStorage.removeItem("email");
    // // localStorage.removeItem("institution");
    // // localStorage.removeItem("admin");
    // // localStorage.removeItem("client");
    setAuth({});
    dispatch(clearstorestate())
    dispatch(logUserout())
    dispatch(clearpatientstate())
    navigate("/");
    
  };

  useEffect(() => {
    if (signedin) {
      setinfo(loginUser?.user);
    }
  }, [loginUser]);

//  const navigation = [
//     { link: "/search", title: "Search Patient" },
//     { link: "/store", title: "Store" },
//     { link: "/vitals", title: "Vitals" },
//   ];









  return (
    <>
      <div className=" p-3 px-[150px] flex justify-between items-center text-white  bg-blue-400  ">
        <h3 className="items-center text-2xl font-bold">
          Sresuo Clinic Management System
        </h3>
        <div className="flex items-center ">
          <div className=" flex  text-xl mr-2    ">User Email: </div>
          <div className=" flex text-xl mr-20 font-semibold "> {loginUser?.user_data.email} </div>

         {/* <Link to="/vitals" >  */}
         <div
            onClick={loggout}
            className="rounded-md px-3 py-1 text-xl bg-blue-600  flex  cursor-pointer hover:bg-blue-700 "
          >
            logout
          </div> 
          {/* </Link> */}
        </div>
      </div>

      <div className="flex items-center  p-2  bg-blue-200">
        <div className="flex  px-[280px] items-center justify-center mx-auto px-auto text-black">
          <ul className="flex items-center justify-center mx-auto px-auto ">
           
      
                <Link to="/search">
                  {" "}
                  <li className="text-xl   mx-1 font-semi-bold rounded-3xl py-1 border-4 text-white bg-blue-400  ">
                  Search Patient
                  </li>{" "}
                </Link>
                <Link to="/search">
                  {" "}
                  <li className= {vitals ? "text-xl   mx-1 font-semi-bold rounded-3xl py-1 border-4 text-white bg-blue-400  " : admin ? "text-xl   mx-1 font-semi-bold rounded-3xl py-1 border-4 text-white bg-blue-400  "  : "hidden" } >
                  Vitals
                  </li>{" "}
                </Link>
                <Link to="/lab">
                  {" "}
                  <li className= {lab ? "text-xl   mx-1 font-semi-bold rounded-3xl py-1 border-4 text-white bg-blue-400  " : admin ? "text-xl   mx-1 font-semi-bold rounded-3xl py-1 border-4 text-white bg-blue-400  "  : "hidden" } >
                  Laboratory
                  </li>{" "}
                </Link>
               
                <Link to="/consult">
                  {" "}
                  <li className= {consult ? "text-xl   mx-1 font-semi-bold rounded-3xl py-1 border-4 text-white bg-blue-400  " : admin ? "text-xl   mx-1 font-semi-bold rounded-3xl py-1 border-4 text-white bg-blue-400  "  : "hidden" } >
                  Consultation
                  </li>{" "}
                </Link>
                <Link to="/store">
                  {" "}
                  <li className= {store ? "text-xl   mx-1 font-semi-bold rounded-3xl py-1 border-4 text-white bg-blue-400  " : admin ? "text-xl   mx-1 font-semi-bold rounded-3xl py-1 border-4 text-white bg-blue-400  "  : "hidden" } >
                  Store
                  </li>{" "}
                </Link>
                <Link to="/admin">
                  {" "}
                  <li className= { admin ? "text-xl   mx-1 font-semi-bold rounded-3xl py-1 border-4 text-white bg-blue-400  "  : "hidden" } >
                  Admin Panel
                  </li>{" "}
                </Link>
           
  
          </ul>
        </div>
      </div>
    </>
  );
};

export default Logout;
