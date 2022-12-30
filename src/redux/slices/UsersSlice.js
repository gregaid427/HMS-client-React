import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
// import { axios } from "./Axios"

const nn = "hhhhhhhhh";

axios.defaults.baseURL = "http://localhost:4000/api";
axios.defaults.headers.common = { Authorization: `Bearer ${nn}` };
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

export const CreateUserAction = createAsyncThunk(
  "new/user",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/users`, payload);

      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      toast.error("Error Creating User");
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUserAction = createAsyncThunk(
  "login/User",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.post(`/users/login`, payload);
      if (data.success === 0) {
        toast.error("Wrong Credentials");
      }
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      toast.error("Error Signing In");
      return rejectWithValue(error.response.data);
    }
  }
);

export const adloginUserAction = createAsyncThunk(
  "adlogin/User",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.post(`/admin/login `, payload);

      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);
export const passwordsendmail = createAsyncThunk(
  "password/reset",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.post(`/users/mailPasswordreset`, payload);

      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const passwordResetAction = createAsyncThunk(
  "password/Confirm",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.post(`/users/resetPassword`, payload);

      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const verifyuser = createAsyncThunk(
  "verfy/user",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.post(`/users/verify`, payload);

      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

// const patientSlices = createSlice({
//   name: "myUsers",
//   initialState: initialState,

//     getPatientInfo(state, action) {
//      const p_data = {
//      address:  state.address ,
//      sex: state.sex ,
//      email: state.email ,
//      patient_id: state.patient_id ,
//      first_name: state.first_name ,
//      last_name: state.last_name ,
//      contact1: state.contact1 ,
//      contact2: state.contact2 ,
//      birth_date :state.birth_date ,
//      relative_name: state.relative_name ,
//      relative_contact: state.relative_contact ,
//      }
//      return p_data;

//     },
//     setDataArray(state, action) {
//      state.DataArray = action.payload
//     },

//   },

const initialState = {
  email: "",
  user_id: "",
  name: "",
  token: "",
  roles: [],
  signedin: false,
};
const UsersSlices = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    setUserInfo(state, action) {
      state.email = action.payload.email;
      state.user_id = action.payload.user_id;
      state.name = action.payload.name;
      state.token = action.payload.token;
      state.roles.push(action.payload.vitals);
      state.roles.push(action.payload.consult);
      state.roles.push(action.payload.store);
      state.roles.push(action.payload.lab);
      state.roles.push(action.payload.admin);
    },
    logUserout(state, action) {
      state.email = "";
      state.user_id = "";
      state.name = "";
      state.token = "";
      state.roles = [];
      state.signedin = false;
      state.loginUser = "";

    },
//     setsignedIn(state, action){
// state.loggedIn =
//     }
  },

  extraReducers: (builder) => {
    builder.addCase(CreateUserAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(CreateUserAction.fulfilled, (state, action) => {
      state.CreateUser = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(CreateUserAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.CreateUser = undefined;
    });

    builder.addCase(loginUserAction.pending, (state, action) => {
      state.loading = true;
      state.loginUser = undefined;
      state.signedin = false;
    });
    builder.addCase(loginUserAction.fulfilled, (state, action) => {
      state.loginUser = action?.payload;
      state.loading = false;
      state.error = undefined;
      state.signedin = true;
    });
    builder.addCase(loginUserAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.loginUser = undefined;
    });

    builder.addCase(adloginUserAction.pending, (state, action) => {
      state.loading = true;
      state.adloginUser = undefined;
    });
    builder.addCase(adloginUserAction.fulfilled, (state, action) => {
      state.adloginUser = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(adloginUserAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.adloginUser = undefined;
    });

    builder.addCase(passwordResetAction.pending, (state, action) => {
      state.loading = true;
      state.passwordReset = undefined;
    });
    builder.addCase(passwordResetAction.fulfilled, (state, action) => {
      state.passwordReset = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(passwordResetAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.passwordReset = undefined;
    });

    builder.addCase(passwordsendmail.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(passwordsendmail.fulfilled, (state, action) => {
      state.passwordsend = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(passwordsendmail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.passwordsend = undefined;
    });

    builder.addCase(verifyuser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(verifyuser.fulfilled, (state, action) => {
      state.verify = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(verifyuser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.verify = undefined;
    });
  },
});

export const { setUserInfo,logUserout } = UsersSlices.actions;

export default UsersSlices.reducer;
