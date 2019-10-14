import React from 'react';
// import logo from './logo.svg';
import Visit from './Visit/Visit';
import FortifiedChurches from './FortifiedChurches/FortifiedChurches';
import FortressChurches from './FortressChurches/FortressChurches';
import FortifiedWalls from './FortifiedWalls/FortifiedWalls';
import TipsTrips from './TipsTrips/TipsTrips';
import WishVisit from './WishVisit/WishVisit';
import About from './About/About';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavigationBar from './NavigationBar/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  return (
  //   <div className="App">
  //     <header className="App-header"></header>
  //     <p>Afisare</p>
  //   </div>

  <Router>
      <NavigationBar />
      <Route exact path="/" component={ () => <h2>Transylvania's Treasures - The Fortified Churches</h2> } />
      <Route  path="/visit" component={ Visit } />
      <Route  path="/fortified_churches" component={ FortifiedChurches } />
      <Route  path="/churches_with_fortified_enclosure_walls" component={ FortifiedWalls } />
      <Route  path="/fortress_Churches" component={ FortressChurches } />
      <Route  path="/tips_for_trips" component={ TipsTrips } />
      <Route  path="/wish_to_visit" component={ WishVisit } />
      <Route  path="/about" component={ About } />

    </Router>
  );
}

export default App;
