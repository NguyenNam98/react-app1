import React from 'react'
import './App.css';
import Navbar from './components/Navbarmain'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,

} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>

    </Router>
  );
}

export default App;
