import { Link } from "react-router-dom";
import "./style.scss"

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-container">
      <Link to="/" className="navbar-link">Home</Link>
      <Link to="/about" className="navbar-link">About</Link>
    </div>
  </nav>
);

export default Navbar;
