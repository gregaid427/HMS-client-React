import React, { useEffect, useState, useMemo } from "react";
import Navbar from "../features/Navbar";
// import Pagination from './table';

// import { useSelector, useDispatch } from "react-redux";

// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Store() {



  return (
    <>
      <Navbar />
      <div className="px-[150px] my-auto ">
        <div className=" bg-white shadow-lg rounded-lg mx-auto p-3 flex-col flex mt-4 justify-center items-center ">
          <div className="  mx-auto  p-auto flex justify-center items-center ">
            <h2 className="text-2xl my-5   uppercase"> Patient Records Management</h2>{" "}
          </div>

          <div>
          <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
          </tr>
        </thead>
        <tbody>
          {/* {data.map(item => { */}
            {/* return ( */}

              <tr>
              <td>item.id</td>
              <td>item.first_name</td>
              <td>item.last_name</td>
              <td>item.email</td>
              <td>item.phone</td>
            </tr>
            <tr>
              <td>item.id</td>
              <td>item.first_name</td>
              <td>item.last_name</td>
              <td>item.email</td>
              <td>item.phone</td>
            </tr>
            <tr>
              <td>item.id</td>
              <td>item.first_name</td>
              <td>item.last_name</td>
              <td>item.email</td>
              <td>item.phone</td>
            </tr>
            <tr>
              <td>item.id</td>
              <td>item.first_name</td>
              <td>item.last_name</td>
              <td>item.email</td>
              <td>item.phone</td>
            </tr>
            <tr>
              <td>item.id</td>
              <td>item.first_name</td>
              <td>item.last_name</td>
              <td>item.email</td>
              <td>item.phone</td>
            </tr>
            <tr>
              <td>item.id</td>
              <td>item.first_name</td>
              <td>item.last_name</td>
              <td>item.email</td>
              <td>item.phone</td>
            </tr>

            <tr>
              <td>item.id</td>
              <td>item.first_name</td>
              <td>item.last_name</td>
              <td>item.email</td>
              <td>item.phone</td>
            </tr>
              {/* // <tr>
              //   <td>{item.id}</td>
              //   <td>{item.first_name}</td>
              //   <td>{item.last_name}</td>
              //   <td>{item.email}</td>
              //   <td>{item.phone}</td>
              // </tr> */}
            {/* ); */}
          {/* })} */}
        </tbody>
      </table>
 

          </div>
     
        </div>
      </div>
    </>
  );
}

export default Store;
