import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <nav className="navbar">
        <h1 className="logo">VALCA</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/producto">Producto</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

export default App;