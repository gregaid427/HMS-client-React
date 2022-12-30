import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import store from "./redux/store/store";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/AuthProvider";

import Error from "./pages/error";
import { Provider } from "react-redux";

import Search from "./pages/Search";
import Admin from "./pages/Admin";
import Admin2 from "./pages/admin2";
import Admin3 from "./pages/admin3";
import Admin4 from "./pages/admin4";
import Admin5 from "./pages/admin5";
import Login from "./pages/login";
import Admin7 from "./pages/admin7";
import Admin8 from "./pages/admin8";
import Admin9 from "./pages/admin9";
import Vitals from "./pages/vitals";
import Consult from "./pages/consult";
import Lab from "./pages/lab";
import Toast from "./pages/toast";
import Protected from "./pages/protected";
import Patient from "./pages/patient";
import Store from "./pages/store";
import RequireAuth from "./pages/RequireAuth";

//the best is that i grab the token from local storage and send to server to verify and bring back boolean
// const [user, setuser] = useState("");
const user = localStorage.getItem("client");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      theme="colored"
      draggable
    />
    <Provider store={store}>
      <AuthProvider>
        <Routes>
          {/* public routes */}
          <Route path="/" element={<Login />} />
          <Route path="/admin8/:email/verify/:token" element={<Admin8 />} />
          <Route path="/admin9/:email/verify/:token" element={<Admin9 />} />
          <Route path="/login" element={<Login />} />

          <Route path="/admin4" element={<Admin4 />} />
          <Route path="/admin5" element={<Admin5 />} />
          <Route path="/admin7" element={<Admin7 />} />
          <Route path="/admin9" element={<Admin9 />} />
          <Route path="/admin2" element={<Admin2 />} />
          <Route path="/admin3" element={<Admin3 />} />
          <Route path="/table" element={<Admin9 />} />
          <Route path="/Patient" element={<Patient />} />

          {/* we want to protect these routes */}

          <Route element={<RequireAuth allowedRoles={["1000","0100","1111","0010","0001"]} />}>
            <Route path="/search" element={<Search />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={["1000","1111"]} />}>
          <Route path="/vitals" element={<Vitals />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={["0100","1111"]} />}>
          <Route path="/Consult" element={<Consult />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={["1111","1111"]} />}>
          <Route path="/Admin" element={<Admin9 />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={["0010","1111"]} />}>
          <Route path="/store" element={<Store />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={["0001","1111"]} />}>
          <Route path="/lab" element={<Lab  />} />
          </Route>

    
      
         
     

          <Route path="*" element={<Error />} />
        </Routes>
      </AuthProvider>
    </Provider>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebSkills(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-Skills
