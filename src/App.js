import React from 'react';
// import logo from './logo.svg';
import About from './About/About';
import Visit from './Visit/Visit';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavigationBar from './NavigationBar/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './Login/Login';

function App() {
  return (
  //   <div className="App">
  //     <header className="App-header"></header>
  //     <p>Afisare</p>
  //   </div>

  <Router>
      <NavigationBar />
      <Login />
      <Route exact path="/" component={ () => <h2>Homepage</h2> } />
      <Route  path="/about" component={ About } />
      <Route  path="/visit" component={ Visit } />

    </Router>
  );
}

export default App;
