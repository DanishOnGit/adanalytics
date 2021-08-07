import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { labelsList } from "../database/labelsList";


export const labelSlice = createSlice({
  name: "label",
  initialState: {
    labelsList: labelsList,
  },
  reducers: {
    labelClicked: (state,{payload}) => {
      state.labelsList = state.labelsList.map(label=> {
          if(label.text===payload){
             return {...label,checked:!label.checked}
          }return label
      })
    },
  },
  extraReducers: {},
});

export const { labelClicked } = labelSlice.actions;
export default labelSlice.reducer;

export const useLabel = () => {
  return useSelector((state) => state.labels);
};
