import React from 'react';
import Routes from "./router/RouteConfig"
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes/>
    </div>
  );
}

export default App;
