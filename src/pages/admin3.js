import React, { useEffect, useState } from "react";
import Navbar from "../features/Navbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { createnewkey} from "../redux/slices/storeSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Store = () => {
  const dispatch = useDispatch();
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const [expire_at, setexpire_at] = useState(new Date());

  var newdate = expire_at;
  const datenew = `${newdate.getDate()}/${
    newdate.getMonth() + 1
  }/${newdate.getFullYear()}`;

  const [user, setuser] = useState("");
  const [institution, setinstitution] = useState("");
  const [inst, setinst] = useState("");

  const keys = useSelector((state) => state?.mykeys);
  const { error, newkey } = keys;

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      user: user,
      institution: institution,
      created_at: date,
      expire_at: datenew,
      procure_at: date,
    };
    dispatch(createnewkey(data));
  };

  useEffect(() => {
    if (newkey?.success === undefined) {
    }
    if (newkey?.success === "no") {
      toast("Active Key exists", { className: "toast-message" });
      
    }
    if (newkey?.success === 1) {
      toast("Key Created Successfully", { className: "toast-message1" });
     
    }
    if (newkey?.success === 0) {
      toast("Failed to Create New Key", { className: "toast-message" });
   
    }

  }, [newkey?.success]);
  
console.log(newkey?.success )
  return (
    <>
      <Navbar />

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="mx-[50px]    p-30 ">
        <div className="flex justify-center m-5 ">
          {/* <h3 className=" text-xl ">Create New Key</h3> */}
        </div>

        <div className="flex flex-row">
          <div className=" flex-col w-[400px]  py-4 mx-auto    gap-3 rounded-md shadow-lg  border-b-8 border-t-8 border-t-sky-300 border-b-sky-300">
            <div className="flex flex-col items-center justify-center ">
              <h4 className="text-xl mb-2 font-semibold  ">Create New Key </h4>
              <h4 className="text-sm mb-2   ">
                Fill out forms to create a new key
              </h4>
            </div>

            <div className=" px-5 ">
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className=" flex flex-col   gap-2 ">
                  <div className="flex justify-between flex-col ">
                    <label for="Label">
                      <span className="text-xl font-thin ">Email </span>
                    </label>
                    <input
                      required
                      onChange={(e) => setuser(e.target.value)}
                      type="text"
                      className="border w-full "
                      name=""
                    />
                  </div>
                  <div className="flex justify-between flex-col">
                    <label for="Label">
                      <span className="text-xl font-light ">institution </span>
                    </label>
                    <input
                      required
                      onChange={(e) => setinstitution(e.target.value)}
                      type="text"
                      className="border w-full "
                      name=""
                    />
                  </div>

                  <div className="flex justify-between flex-col ">
                    <label for="Label">
                      <span className="text-xl font-thin ">Expire Date </span>
                    </label>
                    <DatePicker
                      selected={expire_at}
                      onChange={(date) => setexpire_at(date)}
                    />
                  </div>

                  <input
                    // onClick={() => showToast()}
                    className="text-xl mt-3 w-full py-1 bg-sky-400 hover:bg-sky-500 cursor-pointer rounded-sm text-white"
                    type="submit"
                    id=""
                    value="Create Key"
                  />
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
