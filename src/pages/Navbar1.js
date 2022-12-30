import React, { useState } from "react";
import { useSelector } from "react-redux";


export const Logout = () => {
  const users = useSelector((state) => state?.myusers);
  const { loading, error, adloginUser } = users;
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  // const dispatch  = useDispatch();
  return (
   
      <>

<div className=" p-3 px-[300px] flex justify-center items-center text-white   bg-blue-400  ">

    <h3 className="items-center text-3xl text-center font-bold">Sresuo Clinic Management System</h3>
 
</div>
  </>
  );
};

export default Logout;
