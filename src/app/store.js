import { configureStore } from "@reduxjs/toolkit";
import labelSliceReducer from "../features/labels/labelSlice"
import tableSliceReducer from "../features/table/tableSlice";
export const store = configureStore({
  reducer: {
    labels:labelSliceReducer,
    table:tableSliceReducer
  },
});
