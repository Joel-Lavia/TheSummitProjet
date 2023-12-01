import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header className="navigation">
      <ul>
        <button className="nav-link">
          <NavLink to="/TheLodge">THE LODGE</NavLink>
        </button>
        <button className="nav-link">
          <NavLink to="/SkiRun">OUR SKI RUNS</NavLink>
        </button>
        <button className="nav-link">
          <NavLink to="/Theummit">THE SUMMIT</NavLink>
        </button>
        <button className="nav-link">
          <NavLink to="/HowTo">HOW TO HERE</NavLink>
        </button>
        <button className="nav-link">
          <NavLink to="/Contact">CONTACT</NavLink>
        </button>
      </ul>
    </header>
  );
}
export default Header;
