import "./historic.css";
import React, { useState } from "react";
import TablePagination from "./TablePagination";
import ChartPDF from "../../components/ChartPDF";
import app from "../../services/api";

const Historic = ({ setTitle }) => {
  setTitle && setTitle("Histórico");

  const [dateTimeStart, setDateTimeStart] = useState();
  const [dateTimeEnd, setDateTimeEnd] = useState();

  const [dataCarga, setDataCarga] = useState([]);

  const [dataVelocidade, setVelocidade] = useState([]);
  const [dataTemperatura1, setTemperatura1] = useState([]);
  const [dataTemperatura2, setTemperatura2] = useState([]);
  const [labels, setLabels] = useState([]);

  const [listToTable, setListToTable] = useState([]);

  async function setChartValue(value) {
    setListToTable(value.data);
    let carga = [];
    let velocidade = [];
    let temperatura1 = [];
    let temperatura2 = [];
    let lbls = [];

    await value.data.map((item) => {
      carga.push(item.carga);
      velocidade.push(item.velocidade);
      temperatura1.push(item.temperatura1);
      temperatura2.push(item.temperatura2);

      lbls.push(
        `${new Date(item.updated_at).getDate()}/${new Date(
          item.updated_at
        ).getMonth()}-${new Date(item.updated_at).getHours()}:${new Date(
          item.updated_at
        ).getMinutes()}`
      );
      return item;
    });

    setDataCarga(carga);
    setVelocidade(velocidade);
    setTemperatura1(temperatura1);
    setTemperatura2(temperatura2);
    setLabels(lbls);
  }

  const onSearch = () => {
    app
      .get(`historic/${dateTimeStart}/${dateTimeEnd}`)
      .then((res) => setChartValue(res))
      .catch((err) =>
        console.log(
          "ERRO na chamada a URL historic, PESQUISAR DADOS DO REGISTRO ENTRE DATAS ##",
          err
        )
      );
  };

  return (
    <>
      <div className="historic">
        <form>
          <div className="form-row">
            <div className="col-12 col-md-5">
              <input
                type="datetime-local"
                id="datetime-start"
                name="datetime-start"
                onChange={(e) => setDateTimeStart(e.target.value)}
              ></input>
            </div>

            <div className="ccol-12 col-md-5">
              <input
                type="datetime-local"
                id="datetime-end"
                name="datetime-end"
                onChange={(e) => setDateTimeEnd(e.target.value)}
              ></input>
            </div>

            <div className="col-12 col-md-2 text-center">
              <button
                type="button"
                onClick={onSearch}
                className="btn btn-secondary"
              >
                Buscar
              </button>
            </div>
          </div>
        </form>

        <div>
          <div className="chart-historic">
            <ChartPDF
              labels={labels}
              data={dataCarga}
              idChart="historic-ChartPDFCarga"
              title="Carga"
              color="#fa9b03"
            />
          </div>

          <div className="chart-historic">
            <ChartPDF
              labels={labels}
              data={dataVelocidade}
              idChart="historic-ChartPDFVelocity"
              title="Velocidade"
              color="#7b51c8"
            />
          </div>

          <div className="chart-historic">
            <ChartPDF
              labels={labels}
              data={dataTemperatura1}
              idChart="historic-ChartPDFTemperature1"
              title="Temperatura1"
              color="#0345fa"
            />
          </div>

          <div className="chart-historic">
            <ChartPDF
              labels={labels}
              data={dataTemperatura2}
              idChart="historic-ChartPDFTemperature2"
              title="Temperatura2"
              color="#7afa03"
            />
          </div>
        </div>

        <div className="col-12 m-5">
          <TablePagination
            list={listToTable}
            timeStart={dateTimeStart}
            timeEnd={dateTimeEnd}
          />
        </div>
      </div>
    </>
  );
};

export default Historic;
