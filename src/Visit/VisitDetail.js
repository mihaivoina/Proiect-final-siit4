import React, { Component } from 'react';
import VisitDetails from './VisitDetails';
import VisitDetailsImg from './VisitDetailsImg';
import Axios from 'axios';

class VisitDetail extends Component {
    state={
        church: []
    }

    async componentDidMount() {
        let res = {};
        const churchId = this.props.match.params.churchId;
        try {
            res = await Axios(`http://localhost:3004/churches/${Number(churchId)}`);
        } catch (e) {
            if(e.response.status === 404) {
                console.warn(404);
            }
            res.data = {}
        }
        const newState = { church: res.data};
        this.setState(newState);
        // console.log("Props-urie importate in noua componenta: ", this.props);
        
        // console.log(this.state.church);
        // console.log("Id-ul bisericii: ", this.props.match.params.churchId);
    }
    //location={church.location}
    //key={ description.indexOf() }

    //style={{backgroundColor: '#f2f2f2', padding: '15px'}}
    render() {
        if(!this.state.church.name){
            return(
                <h2>Something did not work! Please try again later.</h2>
            );
        }
        return(
            <div className="container">
                <h2>{this.state.church.name}</h2>
                <h3>din: {this.state.church.location}</h3>
                <div className="row">
                    {this.state.church.description.map( description =><VisitDetails key={ this.state.church.description.indexOf(`${description}`) } description={description} />)}
                </div>
                <div className="row" >
                    {this.state.church.images.map( image =><VisitDetailsImg key={ this.state.church.images.indexOf(`${image}`) } image={image} />)}
                </div>
                


            </div>
        );
    }
} 

export default VisitDetail;