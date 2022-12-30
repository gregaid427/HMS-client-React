import React, { useEffect, useState } from "react";
import Navbar from "../features/Navbar";

import { useSelector, useDispatch } from "react-redux";
import Heading from "../features/heading";

import "react-toastify/dist/ReactToastify.css";
import SubHeading from "../features/subHeading";


import {
  addToCart,
  clearCart,
  decreaseQty,
  getTotals,
  increaseQty,
  removeFromCart,
} from "../redux/slices/storeSlice";
import toast, { Toaster } from "react-hot-toast";

function Store() {

  const [birthdate, setbirthdate] = useState("");
  const [pname, setPname] = useState("");
  const [lName, setlName] = useState("");
  const [oName, setoName] = useState("");
  const [Contact1, setContact1] = useState("");
  const [Contact2, setContact2] = useState("");
  const [rName, setrName] = useState("");
  const [rContact, setrContact] = useState("");
  const [address, setAddress] = useState("");
  const [sex, setSex] = useState("male");

  const data = {
    email: "",

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

  const [query, setquery] = useState("");
  const [modal, setmodal] = useState(true);
  const [confirmModal, setconfirmModal] = useState(true);

  const product = [
    { p_id: 12, qty: 50, price: 200.25, name: "Milk Thistle Haff size " },
    { p_id: 16, qty: 1150, price: 200.30, name: "beat" },
    { p_id: 11, qty: 25450, price: 200.55, name: "man" },
    { p_id: 1, qty: 50, price: 200, name: "car" },
    { p_id: 22, qty: 2, price: 200, name: "milk" },
    // more data here
  ];

  const [state, setstate] = useState({
    query: "",
    list: [],
  });
  console.log(state.list);
  const handleChange = (e) => {
    e.preventDefault();
    const results = product.filter((post) => {
      if (e.target.value === "") return product;
      return post.name.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setstate({
      query: e.target.value,
      list: results,
    });
  };

  const dispatch = useDispatch();
  function update(e, prod) {
    e.preventDefault();

    dispatch(addToCart(prod));
  }
  const cart = useSelector((state) => state?.stores);
  const { cartItems, cartTotalAmount } = cart;
  const [cartstate, setCartState] = useState(cartItems);

  console.log(cartItems);

  useEffect(() => {
    setCartState(cartItems);
    dispatch(getTotals());
  }, [dispatch, cartItems, cart, cartstate]);

  console.log(modal);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  console.log(cartstate);

  return (
    <>
      <Navbar />

    

      <div className="px-[10px] my-auto ">
        <div className=" bg-white shadow-lg rounded-lg mx-auto p-3  flex-col flex  justify-center items-center ">
          <Heading title="Product Sales" />

          <div className="flex flex-wraps justify-center w-full ">
            <div className=" flex bg-slate-10   w-3/12 px-2 ">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6  rounded-lg bg-blueGray-100 ">
                <form onSubmit={(e) => handleSubmit(e)} className="mt-2  ">
                  <SubHeading title="" />
                  <div className="flex  bg-slate-100 px-3 w-full flex-wrap py-1">
                    <label className=" items-center w-9/12 flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                      Search Product
                    </label>
                   
                  </div>
                  <div className="flex  w-full flex-wrap py-1">
                    <input
                      type="text"
                      className="border-2 px-3 flex py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-md shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      onChange={handleChange} placeholder="Enter Product Name"
                    />
                  </div>

                  {/* <ButtonFull title="search product" /> */}
                </form>
              </div>
            </div>{" "}
            <div className=" flex bg-slate-10   w-5/12 px-2 ">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6  rounded-lg bg-blueGray-100 ">
                <div className="mt-2  ">
                  <SubHeading title="" />

                  <div className="flex  bg-slate-100 px-3 w-full flex-wrap py-1">
                    <label className=" items-center w-7/12 flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                      Products
                    </label>
                    <div className="w-2/12  mx-auto    flex items-center uppercase text-blueGray-600 text-md font-bold ">
                      <h1>PRICE</h1>
                    </div>
                    <div className="w-2/12 mx-auto  flex  uppercase text-blueGray-600 text-md font-bold  items-center ">
                      <h1>QTY</h1>
                    </div>
                    <div className="w-1/12 mx-auto pl-4 text-center flex  uppercase text-blueGray-600 text-md font-bold  items-center ">
                      <h1>ADD</h1>
                    </div>
                  </div>
                  <ul className="p-0 m-0">
                    {state.query === ""
                      ? ""
                      : state.list.map((prod) => {
                          return (
                            <li className="p-0 m-0" key={prod.name}>
                              <div className="flex  w-full flex-wrap py-[2px]">
                                <label className="pl-1 items-center w-7/12 flex   text-blueGray-600 text-md  mb-1">
                                  <h1>{prod.name}</h1>
                                </label>
                                <div className="w-2/12  flex  text-left items-center ">
                                  <h1>
                                     {prod.price}
                                  </h1>
                                </div>
                                <div className="w-2/12 flex  text-left font-bold items-center ">
                                  <h1>{prod.qty}</h1>
                                </div>
                                <div className="w-1/12 flex items-center ">
                                  {" "}
                                  <button
                                    onClick={(e) => {
                                      update(e, prod);
                                    }}
                                    className="  bg-blue-500 text-white  p-auto w-full font-bold  text-md shadow   rounded  hover:shadow-md "
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </li>
                          );
                        })}
                  </ul>
                </div>
              </div>
            </div>{" "}
            <div className=" flex bg-slate-10   w-6/12 px-2 ">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6  rounded-lg bg-blueGray-100 ">
                <form className="mt-2  ">
                <SubHeading title="" />
                  <div className="flex  bg-slate-100 px-3 w-full flex-wrap py-1">
                    <label className=" items-center w-10/12 flex  uppercase text-blueGray-600 text-md font-bold mb-1">
                      Cart
                    </label>
                    <div className="w-2/12 mx-auto justify-center   flex items-center uppercase text-blueGray-600 text-md font-bold ">
                      <h1>Actions</h1>
                    </div>
                  </div>
                  <ul className="p-0 m-0">
                    {cartstate?.map((carts) => {
                      return (
                        <li className="p-0 m-0" key={carts?.name}>
                          <div className="flex  w-full flex-wrap py-[2px]">
                            <label className="pl-1 items-center w-9/12 flex   text-blueGray-600 text-md  ">
                              <h1>{carts?.name}</h1>
                            </label>
                            <label className=" w-1/12 text-right px-2 flex   text-blueGray-600 text-md  ">
                              <h1>{carts?.cartQuantity}</h1>
                            </label>
                            <div className="w-2/12 flex">
                              <div className=" w-4/12 pl-1 ">
                                {" "}
                                <button
                                  onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(increaseQty(carts?.p_id));
                                  }}
                                  className="hover:bg-blue-500  hover:text-white  bg-blue-1 text-black  p-auto w-full font-extrabold  text-md shadow   rounded  hover:shadow-md "
                                >
                                  +
                                </button>
                              </div>
                              <div className="w-4/12 pl-1">
                                {" "}
                                <button
                                  onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(decreaseQty(carts?.p_id));
                                  }}
                                  className="hover:bg-blue-500 hover:text-white  bg-blue-1 text-black p-auto w-full font-extrabold    text-md shadow   rounded  hover:shadow-md "
                                >
                                  -
                                </button>
                              </div>
                              <div className="w-4/12 pl-1">
                                {" "}
                                <button
                                  onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(removeFromCart(carts?.p_id));
                                  }}
                                  className=" hover:bg-red-600  bg-red-300 text-white p-auto w-full font-bold  text-md shadow   rounded  hover:shadow-md "
                                >
                                  X
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>

                  <div
                    className={
                      cartItems[0]
                        ? "border-t-2 mt-1 border-blue-500"
                        : "hidden"
                    }
                  >
                    <div className="flex justify-between center w-full ">
                      <label className="pl-1 items-center  flex w-8/12  uppercase text-blueGray-600 text-md font-bold ">
                        <h1>Total</h1>
                      </label>
                      <label className="pl-10 items-center  flex w-4/12 text-xl  uppercase text-blueGray-600 text-md   ">
                        <h1>
                          <span>&#8373;</span> {cartTotalAmount.toFixed(2)}
                        </h1>
                      </label>
                    </div>
                    <div className="flex gap-2">
                    <button
                      className="my-4 bg-blue-500 text-white p-2 w-full flex-1 font-bold uppercase text-md shadow focus:outline-none focus:ring  rounded  hover:shadow-md "
                      type="Submit"
                      onClick={(e) => {
                        e.preventDefault();
                        setconfirmModal(false);
                      }}
                    >
                      Proceed
                    </button>
                    <button
                      className="my-4 bg-blue-400 text-white p-2 w-full flex-1 font-bold uppercase text-md shadow focus:outline-none focus:ring  rounded  hover:shadow-md "
                      type="Submit"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(clearCart())
                      }}
                    >
                      Clear Cart
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
          confirmModal
            ? "hidden"
            : "m-auto max-w-[500px] py-[50px] bg-slate-50 absolute flex-col top-[85px] left-0 right-0  "
        }
      >
        {" "}
        <h1 className="items-center flex border-b-2 text-black mb-2 border-blue-500  text-xl justify-center ">
          Confirm Payment
        </h1>
        <div
          className={
            "flex w-[250px] bg-white border mb-5  center m-auto p-3  justify-center text-center "
          }
        >
                <div className="flex my-2 justify-center ">
          <button
            className=" mx-4 bg-blue-500 text-white py-2 px-3  font-bold uppercase text-md shadow focus:outline-none focus:ring  rounded  hover:shadow-md "
            onClick={(e) => {
              e.preventDefault();
              setmodal(false);
              setconfirmModal(true);
            }}
          >
            Yes
          </button>

          <button
            className="mx-4  bg-blue-300 text-white py-2 px-3  font-bold uppercase text-md shadow focus:outline-none focus:ring  rounded  hover:shadow-md "
            onClick={(e) => {
              e.preventDefault();
              setconfirmModal(true);
            }}
          >
            No
          </button>
        </div>
        
        </div>
  
      </div>




      <div
        className={
          modal
            ? "hidden"
            : "m-auto max-w-[500px] py-[50px] bg-slate-50 absolute flex-col top-[85px] left-0 right-0  "
        }
      >
        {" "}
        <h1 className="items-center flex border-b-2 text-black mb-2 border-blue-500  text-xl justify-center ">
          Receipt
        </h1>
        <div
          className={
            "flex w-[400px] bg-white border mb-5  center m-auto p-3  justify-center text-center "
          }
        >
          <div className="w-full">
            <h1>Sresuo Natural Health Care Clinic</h1>
            <h1 className="border-b-2 border-gray-700  ">
              Tel: 024424424424/02145151
            </h1>
            <div className="flex   w-full flex-wrap py-1 justify-between ">
              <label className=" items-center pl-2 w-8/12 flex   text-blueGray-600 text-sm font-bold mb-1">
                Item(s)
              </label>

              <div className="w-2/12 mx-auto  flex text-center  text-blueGray-600 text-md font-bold  items-center ">
                <h1>QTY</h1>
              </div>
              <div className="w-2/12 mx-auto   flex items-center  text-blueGray-600 text-md font-bold ">
                <h1>Amt</h1>
              </div>
            </div>
            <ul className="p-0 m-0">
              {cartItems?.map((carts) => {
                return (
                  <li className="p-0 m-0" key={carts?.name}>
                    <div className="flex  w-full flex-wrap ">
                      <label className="pl-2 items-center w-8/12 flex   text-blueGray-600 text-sm  mb-1">
                        <h1>{carts?.name}</h1>
                      </label>

                      <div className="w-2/12 text-left">
                        {" "}
                        <h1>{carts?.cartQuantity}</h1>
                      </div>
                      <div className="w-2/12  text-left">
                        {" "}
                        <h1>{(carts?.price * carts?.cartQuantity).toFixed(2)}</h1>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="flex border-b-2 border-gray-700 border-t-2   w-full flex-wrap  justify-between ">
              <label className=" items-center pl-2 w-8/12 flex   text-blueGray-600 text-sm font-bold ">
                Total
              </label>
              <div className="w-2/12 text-right">
                {" "}
                <h1> <span>&#8373;</span></h1>
              </div>
              <div className="w-2/12  text-left">
                {" "}
                <h1>
                  {cartTotalAmount.toFixed(2)}
                </h1>
              </div>
              {/* <h1 className="w-2/12   flex   text-blueGray-600 text-md font-bold  ">
              1736.00
            </h1> */}
            </div>
            <h1>thank you and God bless you</h1>
          </div>
          <hr></hr>
        </div>
        <div className="flex my-2 justify-center ">
          <button
            className=" mx-4 bg-blue-500 text-white py-2 px-1  font-bold uppercase text-md shadow focus:outline-none focus:ring  rounded  hover:shadow-md "
            onClick={(e) => {
              e.preventDefault();
              setmodal(true);
            }}
          >
            Print
          </button>

          <button
            className="mx-4  bg-blue-500 text-white py-2 px-1  font-bold uppercase text-md shadow focus:outline-none focus:ring  rounded  hover:shadow-md "
            onClick={(e) => {
              e.preventDefault();
              setmodal(true);
            }}
          >
            close
          </button>
        </div>
      </div>
    </>
  );
}

export default Store;
