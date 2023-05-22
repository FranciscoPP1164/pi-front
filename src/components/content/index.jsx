import "./styles.css";
import {Route} from "wouter";
import Inicio from "../../pages/inicio";
import Cita from "../../pages/citas";

function Content() {
  return (
    <div className="content">
      <Route path="" component={Inicio} />
      <Route path="/citas/:apointment" component={Cita} />
    </div>
  );
}

export default Content;
