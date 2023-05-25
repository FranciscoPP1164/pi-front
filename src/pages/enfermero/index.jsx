import "./styles.css";
import {useEffect, useState} from "react";
import {getNurseById} from "../../services/nurses";
import {deleteNurse} from "../../services/nurses";
import {navigate} from "wouter/use-location";
import Input from "../../components/input";

function Enfermero({params}) {
  const [nurse, setNurse] = useState({});

  useEffect(() => {
    const {nurse} = params;
    getNurseById(nurse).then((nurse) => setNurse(nurse));
  }, []);

  const handleClickDeleteButton = () => {
    deleteNurse(nurse.documento_identidad).then(() => {
      navigate(history.back());
    });
  };

  return (
    <div className="nurse-">
      <button className="eliminar-button" onClick={handleClickDeleteButton}>
        eliminar
      </button>
      <Input label="codigo enfermero" text={nurse.cod_enfermero} />
      <Input label="nombre" text={`${nurse.primer_nombre} ${nurse.segundo_nombre ?? ""} ${nurse.primer_apellido} ${nurse.segundo_apellido}`} />
      <Input label="documento identidad" text={nurse.documento_identidad} />
      <Input label="especialidad" text={nurse.especialidad} />
      <Input label="titulo" text={nurse.titulo} />
      <Input label="email" text={nurse.email} />
      <Input label="celular" text={nurse.celular} />
    </div>
  );
}

export default Enfermero;
