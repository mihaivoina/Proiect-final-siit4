import React, { Component } from 'react';

class Visit extends Component {
    // async componentDidMount() {
    //     const data = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Brasov,ro&appid=c7da641777760054e5ca6164eb47580a')
    //     .then( res => res.json() );
    
    //     console.log(data.name)
    //     this.setState({ 
    //       temperature: (data.main.temp - 273.15).toFixed(1) 
    //     });
    // }

    render() {
        return(
            <h2>Visit Transylvania's fortified churches</h2>
        );
    }
}

export default Visit;