import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
export const dateRangeSelected = createAsyncThunk(
  "table/dateRangeSelected",
  async (dateRange) => {
    if (dateRange.date1 && dateRange.date2) {
      const {
        data: { data },
      } = await axios({
        method: "GET",
        url: `http://go-dev.greedygame.com/v3/dummy/report?startDate=${dateRange.date1}&endDate=${dateRange.date2}`,
      });

      console.log(data);
      return data;
    }
  }
);

export const tableSlice = createSlice({
  name: "table",
  initialState: {
    status: "idle",
    tableData: [],
  },
  reducers: {},
  extraReducers: {
    [dateRangeSelected.pending]: (state) => {
      state.status = "loading";
    },
    [dateRangeSelected.fulfilled]: (state, { payload }) => {
      state.status = "idle";
      state.tableData = payload;
    },
    [dateRangeSelected.rejected]: (state) => {
      state.status = "error";
    },
  },
});

export default tableSlice.reducer

export const useTable=()=>{
    return useSelector(state=>state.table)
}