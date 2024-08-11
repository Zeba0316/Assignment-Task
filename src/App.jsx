import React from "react";
import "./App.css";
import Header from "./component/Header";
import Service from "./component/Service";

const App = () => {
  return (
    <div className="parent">
      <Header />
      <Service />
    </div>
  );
};

export default App;
