import "./Header.css";
import logo from "../assets/apple-logo.png";

function Header() {
  return (
    <header className="header">
      <a href="../App.jsx"><img className='logo' src={logo} alt="logo" /></a>
      <nav className="nav">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Offers</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <a href="">How can we help you?</a>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
