import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header>
      <ul>
        <li>
          <NavLink to="/TheLodge">THE LODGE</NavLink>
        </li>
        <li>
          <NavLink to="/SkiRun">OUR SKI RUNS</NavLink>
        </li>
        <li>
          <NavLink to="/Theummit">THE SUMMIT</NavLink>
        </li>
        <li>
          <NavLink to="/HowTo">HOW TO HERE</NavLink>
        </li>
        <li>
          <NavLink to="/Contact">CONTACT</NavLink>
        </li>
      </ul>
    </header>
  );
}
export default Header;
