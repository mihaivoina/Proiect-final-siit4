import React, { Component } from 'react';
import Axios from 'axios';
import VisitCards from './VisitCards';
import SearchBox from './SearchBox';
import Footer from '../Footer/Footer';

import './Visit.css';


class Visit extends Component {
    
    state = {
        churches: [],
        searchfield: ''
    }
    // async componentDidMount() {
    //     const data = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Brasov,ro&appid=c7da641777760054e5ca6164eb47580a')
    //     .then( res => res.json() );
    
    //     console.log(data.name)
    //     this.setState({ 
    //       temperature: (data.main.temp - 273.15).toFixed(1) 
    //     });
    // }

    onSearchChange = (event) => {
        this.setState({
            searchfield: event.target.value
        })
        // console.log(filterChurches);
        
    }
    
    async componentDidMount() {
        let res = {};
        res = await Axios('http://localhost:3004/churches/');
        this.setState({
            churches: res.data
        });
    }
    
    render() {
        let filterChurches = this.state.churches.filter(church => {
        return church.location.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        
        return(
            <React.Fragment>
                <div className="container">
                    <h2>Visit Transylvania's fortified churches</h2>
                    <div className="container-search">
                    < SearchBox searchChange={this.onSearchChange} />
                    </div>
                    <div className="row" style={{ background: 'linear-gradient(to left, rgba(212,172,106,1) 0%, rgba(255,223,170,1) 100%)', paddingBottom: '30px', marginBottom: '20px' , borderRadius: '5px' }}>
                        {filterChurches.map( church =><VisitCards key={ church.id } churchId={church.id} churchNameList={church.name} image1List={church.image1} location={church.location} />)}
                    </div>
                </div>
                <div className="container-fluid">
                    <Footer />
                </div>

            </React.Fragment>
                
                );
    }

}

export default Visit;