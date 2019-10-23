import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';

import HomePage from './HomePage/HomePage';
import Visit from './Visit/Visit';
import VisitDetail from './Visit/VisitDetail';
import FortifiedChurches from './FortifiedChurches/FortifiedChurches';
import FortressChurches from './FortressChurches/FortressChurches';
import FortifiedWalls from './FortifiedWalls/FortifiedWalls';
import TipsTrips from './TipsTrips/TipsTrips';
import WishVisit from './WishVisit/WishVisit';
import About from './About/About';
import NavigationBar from './NavigationBar/NavigationBar';
import Register from './Login/Register';

import { SessionContext } from './Login';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



class App extends React.Component {
  state = {
    user: null
  };

  saveUser = (user) => {
    this.setState({user});
    localStorage.setItem('Visit-Transilvania-user', JSON.stringify(user));
  }

  componentDidMount() {
    const existingLogin = localStorage.getItem('Visit-Transilvania-user');
    if(existingLogin) {

      // console.log(existingLogin);
      
      this.setState({ user: JSON.parse(existingLogin)})
    }
  }

  render() {

    return (
    //   <div className="App">
    //     <header className="App-header"></header>
    //     <p>Afisare</p>
    //   </div>
  
    <Router>
      <SessionContext.Provider value={ {user: this.state.user, setUser: this.saveUser}}>
        <NavigationBar />
        <Route exact path="/" component={ HomePage } />
        <Route  exact path="/visit" component={ Visit } />
        <Route  path="/visit/details/:churchId" component={ VisitDetail } />
        <Route  path="/fortified_churches" component={ FortifiedChurches } />
        <Route  path="/churches_with_fortified_enclosure_walls" component={ FortifiedWalls } />
        <Route  path="/fortress_Churches" component={ FortressChurches } />
        <Route  path="/tips_for_trips" component={ TipsTrips } />
        <Route  path="/wish_to_visit" component={ WishVisit } />
        <Route  path="/about" component={ About } />
        <Route path="/register" component={ Register } />
      </SessionContext.Provider>
  
      </Router>
    );
  }
}

export default App;
