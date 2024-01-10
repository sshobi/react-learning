import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <header className="header-container">
      <img
        className="logo"
        width="150px"
        height="100px"
        src="https://play-lh.googleusercontent.com/ebAZ9dy07ZQ5-ahLTQtEPpvWJ5L1hwZGQo7S1qCJNNzXQ9esyqAJIoFbUQcgRgfzTA"
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

const Rescard = () => {
  return (
    <div className="res-card">
      <img
        width="250px"
        height="300px"
        alt="res-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bb7ae131544c7d37e10fc5faf76f09d6"
      />
      <h3>Res Name</h3>
      <h3 className="cusine">Cusine</h3>
      <h4 className="rating">4.3 Stars</h4>
      <h4 className="eta">30 mins</h4>
    </div>
  );
};
const Search = () => {
  return <div>Search</div>;
};

const Main = () => {
  return (
    <main className="main-container">
      <Search></Search>
      <div className="res-container">
        <Rescard></Rescard>
        <Rescard></Rescard>
        <Rescard></Rescard>
        <Rescard></Rescard>
        <Rescard></Rescard>
        <Rescard></Rescard>
        <Rescard></Rescard>
        <Rescard></Rescard>
      </div>
    </main>
  );
};
const Footer = () => {
  return <footer>Footer</footer>;
};

const App = () => {
  return (
    <div id="food-app" className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
