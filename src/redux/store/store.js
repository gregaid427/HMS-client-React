import { configureStore } from "@reduxjs/toolkit";
import stores from "../slices/storeSlice";
import myusers from "../slices/UsersSlice";
import mypatients from "../slices/patientSlice";
const store = configureStore({
  reducer: {
    stores: stores,
    myusers: myusers,
    patients: mypatients,

  },
});

export default store;
