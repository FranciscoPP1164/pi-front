import {useState} from "react";
import {Link} from "wouter";
import "./styles.css";

function Navigation() {
  const [routes, setRoutes] = useState([
    {title: "inicio", path: "/", active: true},
    {title: "enfermeros", path: "/enfermeros", active: false},
    {title: "clientes", path: "/clientes", active: false},
    {title: "pacientes", path: "/pacientes", active: false},
    {title: "citas", path: "/citas", active: false},
  ]);

  const handleButtonClick = (title) => {
    const newRoutes = routes.map((route) => {
      route.active = route.title === title;
      return route;
    });
    setRoutes(newRoutes);
  };

  return (
    <nav className="navigation-bar">
      <ul>
        {routes.map(({title, path, active}) => (
          <li key={title}>
            <Link
              href={path}
              onClick={() => {
                handleButtonClick(title);
              }}
            >
              <button className={active ? "active" : ""}>{title}</button>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
