import React from "react";
import "./Table.css";

function Table({ countries }) {
  return (
    <div className="table">
      <table key="table" className="table__table">
        <tbody key="123" className="table__tbody">
          {countries.map(({ country, cases, index }) => (
            <tr key={index}>
              <td key={index}>{country}</td>
              <td key={index}>
                <strong>{cases}</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
