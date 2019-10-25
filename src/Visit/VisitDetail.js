import React, { Component } from 'react';
import VisitDetails from './VisitDetails';
import VisitDetailsImg from './VisitDetailsImg';
import Footer from '../Footer/Footer';

import { SessionContext } from '../Login';

import Axios from 'axios';

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Visit.css';



class VisitDetail extends Component {

    static contextType = SessionContext;

    state={
        church: [],
        listed: ''
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

        let reswish = {};

        try {
            reswish = await Axios('http://localhost:3004/wishList/');
        } catch (e) {
            if(e.reswish.status === 404) {
                console.log(404);
            }
            reswish.data = {}
        }
        
        let checkW = reswish.data;
        for(let i=0; i<checkW.length; i++) {
            if(this.context.user && checkW[i].iduser === this.context.user.id && checkW[i].idchurch === this.state.church.id) {

                const newListed = 'Adaugat in Wish to Visit.';

            this.setState({
                listed: newListed
            })
            }
        }
    }

    onAddList = async () => {
        if(this.context.user === null || this.state.listed !== '') {
            return;
        } else {

            let iduser = this.context.user.id;
            let idchurch = this.state.church.id;

            const data = {iduser, idchurch}
            await Axios.post('http://localhost:3004/wishList/', data);

            const newListed = 'Adaugat in Wish to Visit.';

            this.setState({
                listed: newListed
            })
        }
    }

    render() {
        if(!this.state.church.name){
            return(
                <h2>Something did not work! Please try again later.</h2>
            );
        }
        return(
            <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>{this.state.church.name}</h2>
                        <h3>din: {this.state.church.location}</h3>
                    </div>
                    <div className="col-sm-6">
                        <Button type="btn" className="btn float-right container-button-wish clearfix" variant="primary " onClick={this.onAddList}  >Wish to visit</Button>
                    </div>
                </div>
                <Row className="justify-content-md-center">
                    <Col xs="auto">
                        {this.state.listed !== '' ? <p className="msg-list">{this.state.listed}</p> : ''}
                    </Col>
                </Row>
                <div className="row">
                    {this.state.church.description.map( description =><VisitDetails key={ this.state.church.description.indexOf(`${description}`) } description={description} />)}
                </div>
                <div className="row" >
                    {this.state.church.images.map( image =><VisitDetailsImg key={ this.state.church.images.indexOf(`${image}`) } image={image} />)}
                </div>
                


            </div>
            <div className="container-fluid">
                <Footer />
            </div>
            </>
        );
    }
} 

export default VisitDetail;