/* eslint-disable react-hooks/exhaustive-deps */
import "./table.css";
import React, { useEffect, useState } from "react";

const Table = ({ list, fontColor }) => {
  const [trs, setTrs] = useState();

  const initList = () => {
    const newList = list.map((item) => (
      <tr>
        <td className="td">
          {new Date(item.updated_at).toLocaleTimeString("pt-br")}
        </td>
        <td>{item.carga}</td>
        <td>{item.velocidade}</td>
        <td>{item.temperatura1}</td>
        <td>{item.temperatura2}</td>
      </tr>
    ));

    setTrs(newList);
  };

  useEffect(() => {
    initList();
  }, [list]);

  return (
    <div className="table-pagination">
      <table>
        <thead>
          <tr>
            <th>HORARIO</th>
            <th>VELOCIDADE</th>
            <th>TEMPERATURA 1</th>
            <th>TEMPERATURA 2</th>
            <th>CARGA</th>
          </tr>
        </thead>
        <tbody>{trs}</tbody>
      </table>
    </div>
  );
};

export default Table;
