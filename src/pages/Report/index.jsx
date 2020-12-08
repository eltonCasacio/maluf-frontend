/* eslint-disable react-hooks/exhaustive-deps */
import "./report.css";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import app from "../../services/api";

import Table from "./table";
import ChartPDF from "../../components/ChartPDF";

import Printer from "../../components/ComponentToPrint/Printer";

const Report = ({ setTitle }) => {
  setTitle && setTitle("Relatório");

  const [print, setPrint] = useState(false);

  const { timeStart, timeEnd } = useParams();

  const [dataCarga, setDataCarga] = useState([]);
  const [imageCarga, setImageCarga] = useState([]);

  const [dataVelocidade, setVelocidade] = useState([]);
  const [imageVelocidade, setImageVelocidade] = useState([]);

  const [dataTemperatura1, setTemperatura1] = useState([]);
  const [imageTemperatura1, setImageTemperatura1] = useState([]);

  const [dataTemperatura2, setTemperatura2] = useState([]);
  const [imageTemperatura2, setImageTemperatura2] = useState([]);

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

    setPrint(true);
  }

  const onSearch = () => {
    app
      .get(`historic/${timeStart}/${timeEnd}`)
      .then((res) => setChartValue(res))
      .catch((err) =>
        console.log(
          "ERRO na chamada a URL historic, PESQUISAR DADOS DO REGISTRO ENTRE DATAS ##",
          err
        )
      );
  };

  const onCreatePDF = () => {
    app
      .post("report/pdf", {
        dateTimeStart: timeStart,
        dateTimeEnd: timeEnd,
        imageCarga: imageCarga,
        imageVelocidade: imageVelocidade,
        imageTemperatura1: imageTemperatura1,
        imageTemperatura2: imageTemperatura2,
        table: listToTable,
      })
      .then()
      .catch((err) => console.log("Erro ao tentar criar PDF", err));
  };

  useEffect(() => {
    onSearch();
  }, []);

  return (
    <>
      {print ? (
        <Printer
          dados={{
            dateTimeStart: timeStart,
            dateTimeEnd: timeEnd,
            imageCarga: imageCarga,
            imageVelocidade: imageVelocidade,
            imageTemperatura1: imageTemperatura1,
            imageTemperatura2: imageTemperatura2,
            table: listToTable,
          }}
        />
      ) : (
        <div className="report">
          <div className="report-buttons">
            <button
              type="button"
              onClick={onCreatePDF}
              className="badge badge-danger button-report"
            >
              GERAR PDF
            </button>
          </div>

          <div className="report-timers">
            <div className="col-12 col-md-6">
              <label>{timeStart}</label>
            </div>

            <div className="col-12 col-md-6">
              <label>{timeEnd}</label>
            </div>
          </div>

          <div>
            <div className="chart-report">
              <ChartPDF
                labels={labels}
                data={dataCarga}
                idChart="report-ChartPDFCarga"
                title="Carga"
                color="#fa9b03"
                setImage={setImageCarga}
              />
            </div>

            <div className="chart-report">
              <ChartPDF
                labels={labels}
                data={dataVelocidade}
                idChart="report-ChartPDFVelocity"
                title="Velocidade"
                color="#7b51c8"
                setImage={setImageVelocidade}
              />
            </div>

            <div className="chart-report">
              <ChartPDF
                labels={labels}
                data={dataTemperatura1}
                idChart="report-ChartPDFTemperature1"
                title="Temperatura1"
                color="#0345fa"
                setImage={setImageTemperatura1}
              />
            </div>

            <div className="chart-report">
              <ChartPDF
                labels={labels}
                data={dataTemperatura2}
                idChart="report-ChartPDFTemperature2"
                title="Temperatura2"
                color="#7afa03"
                setImage={setImageTemperatura2}
              />
            </div>
          </div>

          <div className="col-12 m-5">
            <Table list={listToTable} />
          </div>
        </div>
      )}
    </>
  );
};

export default Report;
