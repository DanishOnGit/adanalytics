import { useDispatch } from "react-redux";
import { labelClicked } from "./labelSlice";

export const Label = ({ label: { text, checked } }) => {
  const dispatch = useDispatch();

  const toggleLabel = (text) => {
    
    if (text !== "Day" && text !== "App") {
      console.log("inside if")
      dispatch(labelClicked(text));
    }
  };

  return (
    <label style={{ margin: "1rem", display: "inline-block" }}>
      <input
        type="checkbox"
        onChange={() => toggleLabel(text)}
        checked={text === "Day" || text === "App" || checked}
      />
      {text}
    </label>
  );
};
