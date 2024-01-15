import { LOGO_IMG_URL } from "../utils/config";

const Header = () => {
  return (
    <header className="header-container">
      <img
        className="logo"
        width="150px"
        height="80px"
        src={LOGO_IMG_URL}
        alt="logo"
      />
      <nav className="nav-container">
        <ul className="nav-items">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contact Us</li>
          <li className="nav-item">Cart</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
