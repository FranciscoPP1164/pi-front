import {useRef} from "react";
import {createPatient} from "../../services/patients";
import {navigate} from "wouter/use-location";

function CreatePaciente() {
  const direccionRef = useRef();
  const edadRef = useRef();
  const nombreRef = useRef();
  const primerApellidoRef = useRef();
  const segundoApellidoRef = useRef();
  const tipoRef = useRef();
  const documentoRef = useRef();
  const condicionesRef = useRef();

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const nombres = nombreRef.current.value.split(" ");

    const newPatient = {
      primer_nombre: nombres[0],
      primer_apellido: primerApellidoRef.current.value,
      segundo_apellido: segundoApellidoRef.current.value,
      tipo_documento: tipoRef.current.value,
      documento_identidad: documentoRef.current.value,
      edad: edadRef.current.value,
      direccion: direccionRef.current.value,
      condiciones_medicas: condicionesRef.current.value.split(", "),
    };

    if (nombres[1]) {
      newPatient.segundo_nombre = nombres[1];
    }

    createPatient(newPatient).then(() => {
      navigate(history.back());
    });
  };

  return (
    <form className="cita-form">
      <div className="cita-info">
        <label htmlFor="nombre" className="input-label">
          nombre
        </label>
        <input type="text" className="input-text" id="nombre" ref={nombreRef} />
        <label htmlFor="primer-apellido" className="input-label">
          primer apellido
        </label>
        <input type="text" className="input-text" id="primer-apellido" ref={primerApellidoRef} />
        <label htmlFor="segundo-apellido" className="input-label">
          segundo apellido
        </label>
        <input type="text" className="input-text" id="segundo-apellido" ref={segundoApellidoRef} />
        <label htmlFor="tipo" className="input-label">
          tipo de documento
        </label>
        <select name="" className="input-text" id="tipo" ref={tipoRef}>
          <option value="registro civil">registro civil</option>
          <option value="targeta de identidad">targeta de identidad</option>
          <option value="cedula de ciudadania">cedula de ciudadania</option>
          <option value="cedula de extranjeria">cedula de extranjeria</option>
        </select>
        <label htmlFor="documento" className="input-label">
          documento de identidad
        </label>
        <input type="text" className="input-text" id="documento" ref={documentoRef} />
        <label htmlFor="direccion" className="input-label">
          direccion
        </label>
        <input type="text" className="input-text" id="direccion" ref={direccionRef} />
        <label htmlFor="edad" className="input-label">
          edad
        </label>
        <input type="text" className="input-text" id="edad" ref={edadRef} />
        <label htmlFor="condiciones" className="input-label">
          condiciones medica
        </label>
        <input type="text" className="input-text" id="condiciones" ref={condicionesRef} />
      </div>
      <button className="save-button" onClick={handleSubmitForm}>
        guardar
      </button>
    </form>
  );
}

export default CreatePaciente;
