import "./styles.css";
import {Link} from "wouter";
import {useEffect, useState} from "react";
import {getNurses} from "../../services/nurses";

function Enfermeros() {
  const [nurses, setNurses] = useState([]);

  useEffect(() => {
    getNurses().then((nurse) => setNurses([...nurse]));
  }, []);

  return (
    <div className="citas">
      <Link href="/enfermero/create">
        <button>+</button>
      </Link>
      {nurses.length >= 1 ? (
        nurses.map((nurse) => (
          <Link key={nurse.cod_enfermero} href={`/enfermeros/${nurse.documento_identidad}`} className="cita">
            <p>{nurse.cod_enfermero}</p>
            <p>
              {nurse.primer_nombre} {nurse.segundo_nombre ?? ""} {nurse.primer_apellido} {nurse.segundo_apellido}
            </p>
            <p>{nurse.documento_identidad}</p>
          </Link>
        ))
      ) : (
        <></>
      )}
    </div>
  );
}

export default Enfermeros;
