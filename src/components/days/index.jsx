import "./styles.css";
import {Link} from "wouter";

function Day({day = 1, firstDay = null, apointments = []}) {
  return (
    <li key={day} style={{gridColumnStart: firstDay}}>
      <h5>{day}</h5>
      <div className="citas-date">
        {apointments.map(([hour, cod], index) => {
          return (
            <Link href={`/citas/${cod}`} key={index}>
              {hour}
            </Link>
          );
        })}
      </div>
    </li>
  );
}

export default Day;
