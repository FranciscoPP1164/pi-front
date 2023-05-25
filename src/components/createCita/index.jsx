import {useEffect, useRef, useState} from "react";
import {getClients} from "../../services/clients";
import {getNurses} from "../../services/nurses";
import {getPatients} from "../../services/patients";
import {createApointment} from "../../services/apointmets";
import "./styles.css";
import {navigate} from "wouter/use-location";

function CreateCita() {
  const [clients, setClients] = useState([]);
  const [nurses, setNurses] = useState([]);
  const [patients, setPatients] = useState([]);
  const [client, setClient] = useState(0);
  const [nurse, setNurse] = useState(0);
  const [patient, setPatient] = useState(0);

  useEffect(() => {
    getClients().then((clients) => setClients(clients));
    getNurses().then((nurses) => setNurses(nurses));
    getPatients().then((patient) => setPatients(patient));
  }, []);

  const dateRef = useRef();
  const timeRef = useRef("00:00:00");
  const reasonRef = useRef();
  const daysRef = useRef();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const newApointment = {cod_enfermero: nurses[nurse].cod_enfermero, cod_cliente: clients[client].cod_cliente, cod_paciente: patients[patient].cod_paciente, fecha: dateRef.current.value, hora: timeRef.current.value, razon_cita: reasonRef.current.value, dias: daysRef.current.value};

    createApointment(newApointment).then(() => {
      navigate(history.back());
    });
  };

  return (
    <form className="cita-form">
      <div className="cita-info">
        <label htmlFor="fecha" className="input-label">
          fecha
        </label>
        <input type="date" className="input-text" id="fecha" ref={dateRef} />
        <label htmlFor="hora" className="input-label">
          hora
        </label>
        <input type="text" className="input-text" id="hora" ref={timeRef} />
        <label htmlFor="razon" className="input-label">
          razon
        </label>
        <input type="text" className="input-text" id="razon" ref={reasonRef} />
        <label htmlFor="dias" className="input-label">
          dias
        </label>
        <input type="number" className="input-text" id="dias" ref={daysRef} />
      </div>
      <div className="persons">
        <div>
          <h3>seleccione un cliente</h3>
          <select
            name=""
            id=""
            className="input-text"
            onChange={(e) => {
              setClient(e.target.selectedIndex - 1);
            }}
          >
            <option value=""></option>
            {clients.map((client) => (
              <option key={client.cod_cliente}>{client.primer_nombre}</option>
            ))}
          </select>
        </div>
        <div>
          <h3>seleccione un paciente</h3>
          <select
            name=""
            id=""
            className="input-text"
            onChange={(e) => {
              setPatient(e.target.selectedIndex - 1);
            }}
          >
            <option value=""></option>
            {patients.map((patient) => (
              <option key={patient.cod_paciente}>{patient.primer_nombre}</option>
            ))}
          </select>
        </div>
        <div>
          <h3>seleccione un enfermero</h3>
          <select
            name=""
            id=""
            className="input-text"
            onChange={(e) => {
              setNurse(e.target.selectedIndex - 1);
            }}
          >
            <option value=""></option>
            {nurses.map((nurse) => (
              <option key={nurse.cod_enfermero}>{nurse.primer_nombre}</option>
            ))}
          </select>
        </div>
      </div>
      <button className="save-button" onClick={handleSubmitForm}>
        guardar
      </button>
    </form>
  );
}

export default CreateCita;
