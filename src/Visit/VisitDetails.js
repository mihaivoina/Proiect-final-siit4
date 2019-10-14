import React, { Component } from 'react';
import Axios from 'axios';

class VisitDetails extends Component {
    state = {
        church: []
    }

    async componentDidMount() {
        let res = {};
            res = await Axios('http://localhost:3004/churches/');
        this.setState({
            church: res.data
        });
        // console.log("render de churchNameList si image1List:", churchNameList, image1List );
        console.log("res.data:", res.data );
    }
    render() {
        return(
            <h2>Detalii</h2>
        );
    }

}

export default VisitDetails;