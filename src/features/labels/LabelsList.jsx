import { Label } from "./Label";
import { labelsList } from "../database/labelsList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLabel } from "./labelSlice";



export const LabelsList = () => {
  const {labelsList} = useLabel()
// const dispatch = useDispatch();
//   useEffect(()=>{
//     dispatch(loadLabels())
//   })
  return (
    <div>
      <ul>
        {labelsList.map((label) => (
          <Label key={label.text} label={label} />
        ))}
      </ul>
    </div>
  );
};
