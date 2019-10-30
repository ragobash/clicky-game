import React from "react";
import Jumbotron from "./components/Jumbotron";
import MainGameContainer from "./components/MainGameComponents";
import "./App.css";


const App = () => (
  <div className="container-fluid mainContainer">
    <Jumbotron />
    <MainGameContainer /> 
  </div>
);

export default App;
