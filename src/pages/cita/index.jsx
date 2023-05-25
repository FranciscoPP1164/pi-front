import "./styles.css";
import Input from "../../components/input";
import {navigate} from "wouter/use-location";
import {useEffect, useState} from "react";
import {getApointmentById, deleteApointment} from "../../services/apointmets";

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
  }, []);

  const handleClickDeleteButton = () => {
    deleteApointment(apointment.cod_cita).then(() => {
      navigate(history.back());
    });
  };

  return (
    <div className="apointment">
      <button className="eliminar-button" onClick={handleClickDeleteButton}>
        eliminar
      </button>
      <Input label="codigo cita" text={`${apointment.cod_cita}`} width="90%" />
      <div className="cita-row">
        <Input label="fecha" text={`${apointment.fecha.slice(0, -14)}`} width="30%" />
        <Input label="hora" text={`${apointment.hora.slice(0, -3)}`} width="30%" />
        <Input label="dias" text={`${apointment.dias}`} width="30%" />
      </div>
      <Input label="razon cita" text={`${apointment.razon_cita}`} width="90%" />
      <div className="persons">
        <div className="person client">
          <h3>cliente</h3>
          <Input label="nombre" text={`${apointment.cliente.primer_nombre} ${apointment.cliente.segundo_nombre ?? ""}`} font={0.8} />
          <div className="cita-row">
            <Input label="primer apellido " text={`${apointment.cliente.primer_apellido}`} font={0.8} />
            <Input label="segundo apellido" text={`${apointment.cliente.segundo_apellido}`} font={0.8} />
          </div>
          <Input label="documento de identidad" text={`${apointment.cliente.documento_identidad}`} font={0.8} />
          <Input label="celular" text={`${apointment.cliente.celular}`} font={0.8} />
          <Input label="email" text={`${apointment.cliente.email}`} font={0.8} />
        </div>
        <div className="person nurse">
          <h3>enfermero</h3>
          <Input label="nombre" text={`${apointment.enfermero.primer_nombre} ${apointment.enfermero.segundo_nombre ?? ""}`} font={0.8} />
          <div className="cita-row">
            <Input label="primer apellido " text={`${apointment.enfermero.primer_apellido}`} width="45%" font={0.8} />
            <Input label="segundo apellido" text={`${apointment.enfermero.segundo_apellido}`} width="45%" font={0.8} />
          </div>
          <Input label="documento de identidad" text={`${apointment.enfermero.documento_identidad}`} font={0.8} />
          <Input label="celular" text={`${apointment.enfermero.celular}`} font={0.8} />
          <Input label="email" text={`${apointment.enfermero.email}`} font={0.8} />
        </div>
        <div className="person patient">
          <h3>paciente</h3>
          <Input label="nombre" text={`${apointment.paciente.primer_nombre} ${apointment.paciente.segundo_nombre ?? ""}`} font={0.8} />
          <div className="cita-row">
            <Input label="primer apellido " text={`${apointment.paciente.primer_apellido}`} width="45%" font={0.8} />
            <Input label="segundo apellido" text={`${apointment.paciente.segundo_apellido}`} width="45%" font={0.8} />
          </div>
          <Input label="documento de identidad" text={`${apointment.paciente.documento_identidad}`} font={0.8} />
          <Input label="edad" text={`${apointment.paciente.edad}`} font={0.8} />
          <Input label="direccion" text={`${apointment.paciente.direccion}`} font={0.8} />
        </div>
      </div>
    </div>
  );
}

export default Cita;
