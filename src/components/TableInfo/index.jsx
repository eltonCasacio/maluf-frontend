import React from "react";
import { Table } from "reactstrap";
import "./tableInfo.css";

const TableInfo = () => {
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
        <tbody>
          <tr>
            <td>00:00:00</td>
            <td>60</td>
            <td>34</td>
            <td>31</td>
            <td>78</td>
          </tr>
          <tr>
            <td>00:00:00</td>
            <td>60</td>
            <td>34</td>
            <td>31</td>
            <td>78</td>
          </tr>
          <tr>
            <td>00:00:00</td>
            <td>60</td>
            <td>34</td>
            <td>31</td>
            <td>78</td>
          </tr>
          <tr>
            <td>00:00:00</td>
            <td>60</td>
            <td>34</td>
            <td>31</td>
            <td>78</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TableInfo;
