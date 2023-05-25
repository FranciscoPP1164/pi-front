import "./styles.css";
import {Link} from "wouter";
import {useEffect, useState} from "react";
import {getApointments} from "../../services/apointmets";

function Citas() {
  const [apointments, setApointments] = useState([]);

  useEffect(() => {
    getApointments().then((apointments) => setApointments([...apointments]));
  }, []);

  return (
    <div className="citas">
      <Link href="/cita/create">
        <button>+</button>
      </Link>
      {apointments.length >= 1 ? (
        apointments.map((apointment) => (
          <Link key={apointment.cod_cita} href={`/citas/${apointment.cod_cita}`} className="cita">
            <p>{apointment.cod_cita}</p>
            <p>{apointment.fecha.slice(0, -14)}</p>
            <p>{apointment.hora.slice(0, -3)}</p>
          </Link>
        ))
      ) : (
        <></>
      )}
    </div>
  );
}

export default Citas;
