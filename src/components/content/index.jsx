import "./styles.css";
import {Route} from "wouter";
import Inicio from "../../pages/inicio";
import Cita from "../../pages/cita";
import Citas from "../../pages/citas";
import CreateCita from "../createCita";
import Enfermeros from "../../pages/enfermeros";
import Enfermero from "../../pages/enfermero";
import CreateEnfermero from "../createEnfermero";
import Clientes from "../../pages/clientes";
import Cliente from "../../pages/cliente";
import CreateCliente from "../createCliente";
import Pacientes from "../../pages/pacientes";
import Paciente from "../../pages/paciente";
import CreatePaciente from "../createPaciente";

function Content() {
  return (
    <div className="content">
      <Route path="" component={Inicio} />
      <Route path="/citas" component={Citas} />
      <Route path="/citas/:apointment" component={Cita} />
      <Route path="/cita/create" component={CreateCita} />
      <Route path="/enfermeros" component={Enfermeros} />
      <Route path="/enfermeros/:nurse" component={Enfermero} />
      <Route path="/enfermero/create" component={CreateEnfermero} />
      <Route path="/clientes" component={Clientes} />
      <Route path="/clientes/:client" component={Cliente} />
      <Route path="/cliente/create" component={CreateCliente} />
      <Route path="/pacientes" component={Pacientes} />
      <Route path="/pacientes/:patient" component={Paciente} />
      <Route path="/paciente/create" component={CreatePaciente} />
    </div>
  );
}

export default Content;
