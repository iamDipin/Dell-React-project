import React from 'react';
import logo from './logo.svg';
import Routes from "./router/RouteConfig"
import ButtonAppBar from "./components/NavBar"
import './App.css';

function App() {
  return (
    <div className="App">
      <ButtonAppBar/>
      <Routes/>
    </div>
  );
}

export default App;
