import "./styles.css";
import Input from "../../components/input";
import {useEffect, useState} from "react";
import {getApointmentById} from "../../services/apointmets";

function Cita({params}) {
  const [apointment, setApointment] = useState({
    cod_cita: "",
    fecha: "",
    hora: "",
    razon_cita: "",
    dias: 0,
    enfermero: {},
    cliente: {},
    paciente: {},
  });

  useEffect(() => {
    const {apointment} = params;
    getApointmentById(apointment).then((apointment) => setApointment(apointment));
  });

  return (
    <div className="cita">
      <div className="cita-fecha">
        <Input label="fecha" text={`${apointment.fecha.slice(0, -14)}`} width="40%" />
        <Input label="hora" text={`${apointment.hora.slice(0, -3)}`} width="40%" />
      </div>
    </div>
  );
}

export default Cita;
