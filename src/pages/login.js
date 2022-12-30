import React, { useEffect, useState } from "react";
import Navbar1 from "./Navbar1";
import { Link, useNavigate } from "react-router-dom";

import { loginUserAction, setUserInfo } from "../redux/slices/UsersSlice";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../hooks/useAuth";

export const Store = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state?.myusers);
  const { loading, error, loginUser ,signedin } = users;
  const [user, setuser] = useState("");
  const [password, setpassword] = useState("");
  let navigate = useNavigate();
  const { setAuth } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: user,
      password: password,
    };
    dispatch(loginUserAction(data));
  };

  useEffect(() => {
    // if (loginUser?.success === undefined) {
    // }

    if (signedin) {
      const roles = "admin";
      // const accessToken = response?.data?.accessToken;
      const accessToken = loginUser?.token;
      setuser("");
      setpassword("");

      console.log(loginUser);




      
      const { user_id, email, name, vitals, consult, store, lab, admin } = loginUser?.user_data;
       
      setAuth({ user, password, roles, accessToken });
      const user_data = {
        email: email,
        user_id: user_id,
        name: name,

        token: loginUser?.token,
        vitals: vitals,
        consult: consult,
        store: store,
        lab: lab,
        admin: admin,
      };
      dispatch(setUserInfo(user_data));
      localStorage.setItem("token", loginUser?.token);
      // localStorage.setItem("email", loginUser?.user);
      // localStorage.setItem("institution", loginUser?.institution);
      // localStorage.setItem("admin", loginUser?.admin);
      // localStorage.setItem("client", loginUser?.client);

      navigate("/search");
    }
  }, [loginUser?.success, dispatch]);

  console.log(loginUser);
  return (
    <>
      <Navbar1 />

      <div className="mx-[50px]    p-30 ">
        <div className="flex flex-row">
          <div className=" flex-col w-[400px] mt-20 py-4 mx-auto    gap-3 rounded-md shadow-lg  border-b-2 border-t-2 border-t-sky-300 border-b-sky-300">
            <div className="flex flex-col items-center justify-center ">
              <h4 className="text-xl mb-2   ">Sign In</h4>
              <h4 className="text-sm mb-2   ">
                Enter your credentials to login
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
                      type="email"
                      required
                      onChange={(e) => setuser(e.target.value)}
                      className="border w-full "
                      name=""
                    />
                  </div>
                  <div className="flex justify-between flex-col">
                    <label for="Label">
                      <span className="text-xl font-light ">Password</span>
                    </label>
                    <input
                      type="password"
                      required
                      onChange={(e) => setpassword(e.target.value)}
                      className="border w-full "
                      name=""
                    />
                  </div>
                  <div className="flex justify-between flex-col">
                    <label for="Label">
                      <span className="text-sm font-light mr-2 ">
                        Forgot Password ?
                      </span>
                      <Link to="/admin7">
                        {" "}
                        <span className="text-sm font-light text-blue-700 ">
                          Click here to reset password{" "}
                        </span>
                      </Link>
                    </label>
                  </div>
                  <div className="flex justify-between flex-col">
                    <label for="Label"></label>
                  </div>
                  <label for="Label" className=" flex justify-between ">
                    {/* <Link to="/admin5" > <span className="text-sm font-light text-blue-700 ">Sign Up </span></Link> */}
                    {/* <Link to="/admin" > <span className="text-sm font-light text-blue-700 ">log In as Admin </span></Link> */}
                  </label>

                  <input
                    className="text-xl mt-3 w-full py-1 bg-sky-400 hover:bg-sky-500 cursor-pointer rounded-sm text-white"
                    type="submit"
                    id=""
                    value="Login"
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
