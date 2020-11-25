import React from "react";
import { Table } from "reactstrap";
import "./tableInfo.css";

let data = Array(4).fill({});

const TableInfo = ({ velocidade, temperature1, temperature2, carga }) => {
  const setTable = async () => {
    data[3] = await data[2];
    data[2] = await data[1];
    data[1] = await data[0];
    data[0] = { velocidade, temperature1, temperature2, carga };
  };
  setTable();

  let tds = data.map((item) => (
    <>
      <td>00:00:00</td>
      <td>{item.velocidade}</td>
      <td>{item.temperature1}</td>
      <td>{item.temperature2}</td>
      <td>{item.carga}</td>
    </>
  ));

  let trs = tds.map((item) => <tr>{item}</tr>);

  return (
    <div className="table-container">
      <Table>
        <thead>
          <tr>
            <th>TIME</th>
            <th>VELOCIDADE</th>
            <th>TEMPERATURA 1</th>
            <th>TEMPERATURA 2</th>
            <th>CARGA</th>
          </tr>
        </thead>
        <tbody>{trs}</tbody>
      </Table>
    </div>
  );
};

export default TableInfo;
