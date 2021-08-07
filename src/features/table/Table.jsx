import { useLabel } from "../labels/labelSlice";
import { useTable } from "./tableSlice";
import "./table.module.css";
import { RowComponent } from "./RowComponent";


export const Table = () => {
  const { labelsList } = useLabel();
  const { tableData } = useTable();

  const filteredTableColumns = labelsList.filter((label) => label.checked);

  return (
    <div>
      <table style={{ width: "100%", margin: "1rem" }}>
        <thead>
          <tr>
            {filteredTableColumns?.map((label) => (
              <th key={label.text}>{label.text}</th>
            ))}
          </tr>
        </thead>
        <thead>
          {tableData?.map((item) => (
            <RowComponent item={item} />
          ))}
        </thead>
      </table>
    </div>
  );
};
