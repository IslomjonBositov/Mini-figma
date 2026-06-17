import "./Header.css";

function Header({logo, m1, m2, m3, m4, m5}) {
  return (
    <header id="head" className="header">
      <a href="../App.jsx">
        <img className="logo" src={logo} alt="logo" loading="lazy" />
      </a>
      <nav className="nav">
        <ul>
          <li>
            <a href="#home">{m1}</a>
          </li>
          <li>
            <a href="#about">{m2}</a>
          </li>
          <li>
            <a href="#offers">{m3}</a>
          </li>
          <li>
            <a href="#services">{m4}</a>
          </li>
          <a href="">{m5}</a>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
