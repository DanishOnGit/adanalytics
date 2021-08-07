
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { LabelsList } from "./features/labels/LabelsList";
import { Table } from "./features/table/Table";
import { dateRangeSelected } from "./features/table/tableSlice";


function App() {
  const [dateRange, setDateRange] = useState({ date1: "", date2: "" });
  const dispatch=useDispatch();
  
  useEffect(() => {
   dispatch(dateRangeSelected(dateRange))
  }, [dispatch,dateRange]);

  
  return (
    <div className="App">
      <h1>Analytics</h1>
      <input
        type="date"
        max="2021-06-30"
        min="2021-06-01"
        onChange={(e) =>
          setDateRange(() => ({ ...dateRange, date1: e.target.value }))
        }
      />
      <input
        type="date"
        max="2021-06-30"
        min="2021-06-01"
        onChange={(e) =>
          setDateRange(() => ({ ...dateRange, date2: e.target.value }))
        }
      />
      <LabelsList/>
      <Table/>
    </div>
  );
}

export default App;
