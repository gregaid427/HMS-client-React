import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



axios.defaults.headers.common = {
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};
axios.defaults.baseURL = "http://localhost:4000/api";
axios.defaults.headers.common = {
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";



export const createVitalsAction = createAsyncThunk(
  "vitals/add",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.post(`/vitals/` ,
      payload);
      toast.success("Vitals Added Successfully")
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      toast.error("Unable to Add Vitals")
      return rejectWithValue("Error Fetching Data");
    }
  }
);

export const fetchSinglekey = createAsyncThunk(
  "single/key",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/keys/${payload}`
      );

      return data.data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);





const initialState = {
  cartItems: [],
  cartQuantity: 0,
  cartTotalAmount: 0,
  cartTotalQuantity: 0,
};
const storeSlices = createSlice({
  name: "patient/vitalsg",
  initialState: initialState,

  // reducers: {
  //   addToCart(state, action) {
  //     const itemIndex = state.cartItems.findIndex(
  //       (item) => item.p_id === action.payload.p_id
  //     );
  //     if (itemIndex >= 0) {
  //     } else {
  //       const tempProduct = { ...action.payload, cartQuantity: 1 };
  //       state.cartItems.push(tempProduct);
  //     }
  //   },


  // },

  extraReducers: (builder) => {
    builder.addCase(createVitalsAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createVitalsAction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = undefined;
      state.createVitals = action.payload;
     
    });
    builder.addCase(createVitalsAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

   
  },
});
// export const {
//   addToCart,

// } = storeSlices.actions;

export default storeSlices.reducer;
