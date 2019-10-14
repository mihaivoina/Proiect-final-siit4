import React, { Component } from 'react';
import Axios from 'axios';
import VisitCards from './VisitCards';
import './Visit.css';


class Visit extends Component {
    state = {
        churches: []
    }
    // async componentDidMount() {
    //     const data = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Brasov,ro&appid=c7da641777760054e5ca6164eb47580a')
    //     .then( res => res.json() );
    
    //     console.log(data.name)
    //     this.setState({ 
    //       temperature: (data.main.temp - 273.15).toFixed(1) 
    //     });
    // }

    async componentDidMount() {
        let res = {};
            res = await Axios('http://localhost:3004/churches/');
        this.setState({
            churches: res.data
        });
        // console.log("render de churchNameList si image1List:", churchNameList, image1List );
    }
    
    render() {
        return(
            <React.Fragment>
                <h2>Visit Transylvania's fortified churches</h2>
                <div className="container">
                    <div className="row" style={{ background: 'linear-gradient(to left, rgba(212,172,106,1) 0%, rgba(255,223,170,1) 100%)', paddingBottom: '30px', marginBottom: '20px' , borderRadius: '5px' }}>
                    {this.state.churches.map( church =><VisitCards key={ church.id } churchNameList={church.name} image1List={church.image1} location={church.location} />)}
                    </div>
                </div>
                
            </React.Fragment>
                
        );
    }

}

export default Visit;