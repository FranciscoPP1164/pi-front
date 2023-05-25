import {useEffect, useState} from "react";
import {getClients} from "../../services/clients";
import {Link} from "wouter";
import "./styles.css";

function Clientes() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getClients().then((client) => setClients([...client]));
  }, []);

  return (
    <div className="citas">
      <Link href="/cliente/create">
        <button>+</button>
      </Link>
      {clients.length >= 1 ? (
        clients.map((client) => (
          <Link key={client.cod_cliente} href={`/clientes/${client.documento_identidad}`} className="cita">
            <p>{client.cod_enfermero}</p>
            <p>
              {client.primer_nombre} {client.segundo_nombre ?? ""} {client.primer_apellido} {client.segundo_apellido}
            </p>
            <p>{client.documento_identidad}</p>
          </Link>
        ))
      ) : (
        <></>
      )}
    </div>
  );
}

export default Clientes;
