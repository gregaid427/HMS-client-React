import React, { useEffect, useState } from "react";
import Navbar1 from "./Navbar1";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
 
  verifyuser,
} from "../redux/slices/UsersSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import KoinoDynamicTable from "./table";
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
  Search,
} from "@mui/icons-material";


export const Store = () => {

  const tableData =[ 'car', 'boot', 'code','car', 'boot', 'code','car', 'boot', 'code','car', 'boot', 'code' ]
  let { email, token } = useParams();
  const dispatch = useDispatch();
 
  const [view, setview] = useState(false);

  const users = useSelector((state) => state?.myusers);
  const { verify } = users;
 

  const [info, setinfo] = useState("");
  useEffect(() => {
    function handleSubmit() {
      const data = {
        email: email,
        token: token,
      };
      dispatch(verifyuser(data));
    }
    handleSubmit();
    // verify?.success ?   setinfo("Account Verified Succesfully") : setinfo("Failed to Verify Account");
  }, []);
  


 
  // function caller(){
  //   if (verify?.success) {
  //     setview(true);
  //     setinfo("Mail Confirmed Succesfully");
  //   } 
  // else {
  //     setview(true);
  //     setinfo("Failed to Confirmed Mail");
  //   }
  // }
   
  // caller();
 
console.log(verify)
useEffect(() => {
  if (verify?.success == undefined) {
   
    setinfo("Loading");
  } 
    if (verify?.success == 1) {
    
      setTimeout(setinfo("Account Verified Succesfully"),1000) 
      ;
    } 
    if (verify?.success === 0) {
    
    setTimeout(setinfo("Failed to Verify Account"),5000) ;
    }

  // verify?.success ?   setinfo("Account Verified Succesfully") : setinfo("Failed to Verify Account");
}, [verify?.success]);

  return (
    <>
      <Navbar1 />
      <KoinoDynamicTable
          tableData={[{name:"kwame",Age:"26",dob:"nhnhjnn"},{name:"kwa",Age:"88",dob:"nhnhjnn"},{name:"zz",Age:"26",dob:"nhnhjnn"},{name:"kwame",Age:"26",dob:"nhnhjnn"}]}
          // customColComponents={[
          //   {
          //     columnName: "bill",
          //     component: (cellData) => {
          //       return (
          //         <div className="flex justify-start items-center">
          //           <div className="flex justify-center mr-[20px] items-center w-[50px] h-[50px] bg-blue-50 rounded-md">
          //             {/* <ArticleOutlined className="text-gray-500" /> */}
          //           </div>
          //           <div className="flex justify-center items-center flex-col">
          //             <div className="text-xs">{cellData.name}</div>
          //             <div className="text-xs text-dgray2">
          //               {cellData.jobTitle}
          //             </div>
          //           </div>
          //         </div>
          //       );
          //     },
          //   },
          //   {
          //     columnName: "date",
          //     component: (cellData) => {
          //       return <div className="text-xs">{cellData}</div>;
          //     },
          //   },
          //   {
          //     columnName: "total",
          //     component: (cellData) => {
          //       return <div className="text-xs">GHS {cellData}</div>;
          //     },
          //   },
          //   {
          //     columnName: "arrears",
          //     component: (cellData) => {
          //       return <div className="text-xs">GHS {cellData}</div>;
          //     },
          //   },
          //   {
          //     columnName: "status",
          //     component: (cellData) => {
          //       return (
          //         <div className="text-xs flex ">
          //           {" "}
          //           {cellData === "Unpaid" ? (
          //             <div className="flex w-[60px] h-[30px] rounded-md  justify-center items-center  bg-red-50 text-red-500">
          //               {cellData}
          //             </div>
          //           ) : (
          //             <div className="flex w-[80px] h-[30px] rounded-md  justify-center items-center  bg-blue-50 text-blue-500">
          //               {cellData}
          //             </div>
          //           )}
          //         </div>
          //       );
          //     },
          //   },
          // ]}
          rowStyles={{
            styles: { color: "" },
            classNames: "hover:bg-gray-50 mb-[20px] h-[70px]",
          }}
          headerStyles={[
            {
              column: "*",
              styles: { color: "" },
              classNames: "text-xs bg-gray-200 text-justify",
            },
          ]}
          hideActionBar={false}
          hidePagination={false}
        />
      <div className="mx-[50px]    p-30 ">
        <div className="flex flex-row">
          <div className=" flex-col w-[400px] mt-20 py-4 mx-auto    gap-3 rounded-md shadow-lg  border-b-2 border-t-2 border-t-sky-300 border-b-sky-300">
            <div className="flex flex-col items-center justify-center ">
              <h4 className="text-xl mb-2   ">Email Confirmation</h4>
              {/* <h4 className="text-sm mb-2   ">Enter your email</h4> */}
            </div>

            <div className=" px-5 ">
              <form >
                <div className=" flex flex-col   gap-2 ">
                  <h1
                    className={view ? " flex items-center mx-auto" : "hidden"}
                  >
                    dd
                  </h1>
                  <div className="flex justify-between items-center flex-col ">
                    <h1 className="text-2xl" >{info}</h1>
                  </div>

                  <div className="flex justify-between flex-col">
                    <label for="Label">
                      <Link to="/admin6">
                        {" "}
                        <span className="text-sm font-light text-blue-700 ">
                          Back to sign in
                        </span>
                      </Link>
                    </label>
                  </div>

                  {/* <input onClick={ (e)  => mailsent()  } 
                      className="text-xl mt-3 w-full py-1 bg-sky-400 hover:bg-sky-500 cursor-pointer rounded-sm text-white"
                      type="submit"
                      id=""
                      value="Submit"
                    /> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
