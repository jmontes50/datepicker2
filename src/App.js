import "./styles.css";
import "rsuite/dist/rsuite.min.css";
import { useState, useEffect } from "react";
//date fns es un objeto
//new Date es otro objeto
//moment.js otro objeto
//Firebase.timestamp es otro objeto
//TIMESTAMP TODOS DEBERIAN MANEJAR TIMESTAMP en ms
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import { getTime } from "date-fns";

// -------
import { DateRangePicker } from "rsuite";

export default function App() {
  const [fecha, setFecha] = useState(new Date());
  const [value, setValue] = useState([
    new Date("2017-02-01"),
    new Date("2017-05-20")
  ]);

  useEffect(() => {
    console.log(value);
    const [inicio, fin] = value; //desestructurado el evalue
    let time_inicio = new Date(inicio).getTime();
    let time_fin = new Date(fin).getTime();

    console.log(time_inicio, time_fin);
  }, [value]);

  const manejarFecha = (nuevaFecha) => {
    console.log(nuevaFecha);
    console.log(getTime(nuevaFecha));
    setFecha(nuevaFecha);
  };

  const simularMockapi = () => {
    setTimeout(() => {
      setFecha(new Date(1640475509000));
    }, 5000);
  };

  useEffect(() => {
    simularMockapi();
  }, []);

  // console.log({ window });

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="dd/MM/yyyy"
          value={fecha}
          onChange={manejarFecha}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider> */}
      {/* ------------ */}
      <DateRangePicker value={value} onChange={setValue} />
    </div>
  );
}
