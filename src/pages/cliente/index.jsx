import "./styles.css";
import {useEffect, useState} from "react";
import {getClientById} from "../../services/clients";
import {deleteClient} from "../../services/clients";
import Input from "../../components/input";
import {navigate} from "wouter/use-location";

function Cliente({params}) {
  const [client, setClient] = useState({});

  useEffect(() => {
    const {client} = params;
    getClientById(client).then((client) => setClient(client));
  }, []);

  const handleClickDeleteButton = () => {
    deleteClient(client.documento_identidad).then(() => {
      navigate(history.back());
    });
  };

  return (
    <div className="nurse-">
      <button className="eliminar-button" onClick={handleClickDeleteButton}>
        eliminar
      </button>
      <Input label="codigo enfermero" text={client.cod_cliente} />
      <Input label="nombre" text={`${client.primer_nombre} ${client.segundo_nombre ?? ""} ${client.primer_apellido} ${client.segundo_apellido}`} />
      <Input label="documento identidad" text={client.documento_identidad} />
      <Input label="email" text={client.email} />
      <Input label="celular" text={client.celular} />
    </div>
  );
}

export default Cliente;
