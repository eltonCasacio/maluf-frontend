import React, { useState } from "react";
import "./report.css";

import TableInfo from "../../components/TableInfo";
import ChartPDF from "../../components/ChartPDF";
import app from "../../services/api";

const Report = ({ setTitle }) => {
  setTitle && setTitle("Relatório");

  const [dateTimeStart, setDateTimeStart] = useState();
  const [dateTimeEnd, setDateTimeEnd] = useState();

  const [dataCarga, setDataCarga] = useState([]);
  const [dataVelocidade, setVelocidade] = useState([]);
  const [dataTemperatura1, setTemperatura1] = useState([]);
  const [dataTemperatura2, setTemperatura2] = useState([]);
  const [labels, setLabels] = useState([]);

  async function setChartValue(value) {
    let carga = [];
    let velocidade = [];
    let temperatura1 = [];
    let temperatura2 = [];
    let lbls = [];

    await value.data.map((item) => {
      console.log(item);
      carga.push(item.carga);
      velocidade.push(item.velocidade);
      temperatura1.push(item.temperatura1);
      temperatura2.push(item.temperatura2);

      lbls.push(new Date(item.updated_at).toLocaleString("pt-br"));
    });

    setDataCarga(carga);
    setVelocidade(velocidade);
    setTemperatura1(temperatura1);
    setTemperatura2(temperatura2);
    setLabels(lbls);
  }

  const onSearch = () => {
    app
      .get(`report/${dateTimeStart}/${dateTimeEnd}`)
      .then((res) => setChartValue(res))
      .catch((err) =>
        console.log(
          "ERRO na chamada a URL REPORT, PESQUISAR DADOS DO REGISTRO ENTRE DATAS ##",
          err
        )
      );
  };

  return (
    <>
      <div className="report">
        <form>
          <div class="form-row">
            <div class="col-12 col-md-5 text-center mb-2">
              <label for="datetime-start">De: </label>
              <input
                type="datetime-local"
                id="datetime-start"
                name="datetime-start"
                onChange={(e) => setDateTimeStart(e.target.value)}
              ></input>
            </div>

            <div class="ccol-12 col-md-5 text-center mb-2">
              <label for="datetime-end">Até: </label>
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
                class="btn btn-secondary"
              >
                Buscar
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="row">
        <div className="row">
          <div className="col-12">
            <div className="chart-report">
              <ChartPDF
                labels={labels}
                data={dataCarga}
                idChart="report-ChartPDFCarga"
                title="Carga"
                color="#fa9b03"
              />
            </div>

            <div className="chart-report">
              <ChartPDF
                labels={labels}
                data={dataVelocidade}
                idChart="report-ChartPDFVelocity"
                title="Velocidade"
                color="#7b51c8"
              />
            </div>
            <div className="chart-report">
              <ChartPDF
                labels={labels}
                data={dataTemperatura1}
                idChart="report-ChartPDFTemperature1"
                title="Temperatura1"
                color="#0345fa"
              />
            </div>
            <div className="chart-report">
              <ChartPDF
                labels={labels}
                data={dataTemperatura2}
                idChart="report-ChartPDFTemperature2"
                title="Temperatura2"
                color="#7afa03"
              />
            </div>
          </div>
        </div>

        <div className="row report-table-info">
          <div className="col-12 ">
            <TableInfo />
          </div>
        </div>
      </div>
    </>
  );
};

export default Report;
