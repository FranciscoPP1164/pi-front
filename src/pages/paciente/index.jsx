import "./styles.css";
import {useEffect, useState} from "react";
import {getPatientById} from "../../services/patients";
import {deletePatients} from "../../services/patients";
import {navigate} from "wouter/use-location";
import Input from "../../components/input";

function Paciente({params}) {
  const [patient, setPatient] = useState({
    condiciones_medicas: [],
  });

  useEffect(() => {
    const {patient} = params;
    getPatientById(patient).then((patient) => setPatient(patient));
  }, []);

  const handleClickDeleteButton = () => {
    deletePatients(patient.documento_identidad).then(() => {
      navigate(history.back());
    });
  };

  return (
    <div className="nurse-">
      <button className="eliminar-button" onClick={handleClickDeleteButton}>
        eliminar
      </button>
      <Input label="codigo paciente" text={patient.cod_paciente} />
      <Input label="nombre" text={`${patient.primer_nombre} ${patient.segundo_nombre ?? ""} ${patient.primer_apellido} ${patient.segundo_apellido}`} />
      <Input label="documento identidad" text={patient.documento_identidad} />
      <Input label="edad" text={patient.edad} />
      <Input label="direccion" text={patient.direccion} />
      <Input label="condiciones medicas" text={patient.condiciones_medicas.join(", ")} />
    </div>
  );
}

export default Paciente;
