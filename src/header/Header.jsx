import "./Header.css";
import logo from "../assets/apple-logo.png";

function Header() {
  return (
    <header id='head' className="header">
      <a href="../App.jsx"><img className='logo' src={logo} alt="logo" loading="lazy" /></a>
      <nav className="nav">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#offers">Offers</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <a href="+998907535500">How can we help you?</a>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
