import { getDateAndMonth } from "../utils/getDateAndMonth";


export const RowComponent = ({
    item: { date, app_id, clicks, impressions, requests, responses, revenue },
  }) => {
    return (
      <tr>
        <td>{getDateAndMonth(date)}</td>
        <td style={{ margin: "0 1rem" }}>{app_id}</td>
        <td>{clicks} hello</td>
        <td>{requests}</td>
        <td>{responses}</td>
        <td>{impressions}</td>
        <td>{revenue}</td>
        <td>{((requests * 100) / responses).toFixed(2)} %</td>
        <td>{((clicks * 100) / impressions).toFixed(2)} %</td>
      </tr>
    );
  };