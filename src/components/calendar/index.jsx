import {useState, useEffect} from "react";
import Day from "../days";
import initCalendar from "../../utilities/initCalendar";
import {getApointments} from "../../services/apointmets";
import {Link} from "wouter";
import "./styles.css";

function Calendar() {
  const [days, setDays] = useState(initCalendar());

  useEffect(() => {
    getApointments().then((apointments) => {
      const newDays = [...days];

      apointments.forEach(({fecha, hora, cod_cita}) => {
        const apointmentDay = Number.parseInt(fecha.slice(8, -14));
        const apointmentMonth = Number.parseInt(fecha.slice(5, -17));
        const index = days.findIndex(({day}) => day == apointmentDay);
        if (new Date().getMonth() + 1 == apointmentMonth) {
          newDays[index].apointments.push([hora.slice(0, -3), cod_cita]);
        }
      });

      setDays(newDays);
    });
  }, []);

  return (
    <div className="calendar">
      <div className="header-calendar">
        <h1>Cronograma Enfercuidarte</h1>
        <Link href="/cita/create">
          <button>+</button>
        </Link>
      </div>
      <table className="days-calendar">
        <tbody>
          <tr>
            <td>Domingo</td>
            <td>Lunes</td>
            <td>Martes</td>
            <td>Miercoles</td>
            <td>Jueves</td>
            <td>Viernes</td>
            <td>Sabado</td>
          </tr>
        </tbody>
      </table>
      <ol>
        {days.map(({day, firstDay, apointments}) => (
          <Day day={day} key={day} firstDay={firstDay} apointments={apointments} />
        ))}
      </ol>
    </div>
  );
}

export default Calendar;
