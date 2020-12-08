/* eslint-disable react-hooks/exhaustive-deps */
import "./tablePagination.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TablePagination = ({ list, timeStart, timeEnd }) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(4);
  const [table, setTable] = useState([]);

  async function paginar(value) {
    if (value.length) setTable(value.slice(start, end));
  }

  const setNextPositionPagination = () => {
    if (end + 4 > list.length) {
      setStart(list.length - 4);
      setEnd(list.length);
    } else {
      setStart(start + 4);
      setEnd(end + 4);
    }
  };

  const setBackPositionPagination = () => {
    if (start - 4 < 0) {
      console.log("IF - setBackPositionPagination");
      setStart(0);
      setEnd(4);
    } else {
      console.log("ELSE - setBackPositionPagination");
      setStart(start - 4);
      setEnd(end - 4);
    }
  };

  const trs = table.map((item, indice) => (
    <tr key={indice}>
      <td className="td">
        {new Date(item.updated_at).toLocaleTimeString("pt-br")}
      </td>
      <td>{item.carga}</td>
      <td>{item.velocidade}</td>
      <td>{item.temperatura1}</td>
      <td>{item.temperatura2}</td>
    </tr>
  ));

  useEffect(() => {
    paginar(list);
  }, [list, start]);

  return (
    <div className="table-pagination">
      {/* <div className="table-pagination-charts">
        <div className="table-pagination-chart">
          <ChartPDF
            labels={labels}
            data={dataCarga}
            idChart="pagination-carga"
            title="Carga"
            color="#fa9b03"
          />
        </div>
      </div> */}
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
      <div className="table-pagination-buttons">
        {start > 0 && (
          <button onClick={setBackPositionPagination}>anterior</button>
        )}
        <button onClick={setNextPositionPagination}>proximo</button>
      </div>

      <div className="button-report">
        <Link
          to={`/report/${timeStart}/${timeEnd}`}
          className="badge badge-warning button-report"
        >
          GERAR RELATÓRIO
        </Link>
      </div>
    </div>
  );
};

export default TablePagination;
