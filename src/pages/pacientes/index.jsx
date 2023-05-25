import "./styles.css";
import {Link} from "wouter";
import {useEffect, useState} from "react";
import {getPatients} from "../../services/patients";

function Pacientes() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    getPatients().then((patients) => setPatients([...patients]));
  }, []);

  return (
    <div className="citas">
      <Link href="/paciente/create">
        <button>+</button>
      </Link>
      {patients.length >= 1 ? (
        patients.map((patient) => (
          <Link key={patient.cod_paciente} href={`/pacientes/${patient.documento_identidad}`} className="cita">
            <p>{patient.cod_paciente}</p>
            <p>
              {patient.primer_nombre} {patient.segundo_nombre ?? ""} {patient.primer_apellido} {patient.segundo_apellido}
            </p>
            <p>{patient.documento_identidad}</p>
          </Link>
        ))
      ) : (
        <></>
      )}
    </div>
  );
}

export default Pacientes;
