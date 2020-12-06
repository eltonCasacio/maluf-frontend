import "./tablePagination.css";
import React, { useEffect, useState } from "react";

import ChartPDF from "../../../components/ChartPDF";
import { Link } from "react-router-dom";

const TablePagination = ({ list }) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(4);

  const [dataCarga, setCarga] = useState([]);
  const [dataVelocidade, setVelocidade] = useState([]);
  const [dataTemperatura1, setTemperatura1] = useState([]);
  const [dataTemperatura2, setTemperatura2] = useState([]);
  const [labels, setLabels] = useState([]);

  const [table, setTable] = useState([]);

  async function paginar(value) {
    if (value.length) {
      let newList = value.slice(start, end);

      let carga = [];
      let velocidade = [];
      let temperatura1 = [];
      let temperatura2 = [];
      let lbls = [];

      await newList.map((item) => {
        carga.push(item.carga);
        velocidade.push(item.velocidade);
        temperatura1.push(item.temperatura1);
        temperatura2.push(item.temperatura2);
        lbls.push(new Date(item.updated_at).toLocaleTimeString("pt-br"));
        return false;
      });

      setCarga(carga);
      setVelocidade(velocidade);
      setTemperatura1(temperatura1);
      setTemperatura2(temperatura2);
      setLabels(lbls);

      setTable(newList);
    }
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

  const trs = table.map((item) => (
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

  useEffect(() => {
    paginar(list);
  }, [list, start]);

  return (
    <div className="table-pagination">
      <div>
        <ChartPDF
          labels={labels}
          data={dataVelocidade}
          idChart="pagination"
          title="Velocidade"
          color="#fa9b03"
        />
      </div>
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
        <Link to="/report" className="badge badge-warning button-report">
          GERAR RELATÓRIO
        </Link>
      </div>
    </div>
  );
};

export default TablePagination;
