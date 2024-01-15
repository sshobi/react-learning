import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./src/components/Header";
import Main from "./src/components/Main";
import Footer from "./src/components/Footer";

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
