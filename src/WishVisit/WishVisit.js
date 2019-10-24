import React, { Component } from 'react';
import Axios from 'axios';

import { SessionContext } from '../Login';
// import WishList from './WishList';
import WishListClasa from './WishListClasa';
import Footer from '../Footer/Footer';

// import './Visit.css';




class WishVisit extends Component {
    static contextType=SessionContext;

    state= {
        list: []
    }

    async getWishList() {
        if(!this.context.user) {
            // redirect to login
            return;
        }
        const res = await Axios('http://localhost:3004/wishList?iduser=' + this.context.user.id )
        const idsfromlist = res.data;
        
        // console.log(idsfromlist);
        const intermediar =  idsfromlist.map( obj => Axios('http://localhost:3004/churches/' + obj.idchurch));
        
        const churchesResponse = await Promise.all(intermediar)
        const churches = churchesResponse.map(res => res.data);
        this.setState({list: churches});
        
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.list === prevState.list) {
            this.getWishList();
        }
    }

    componentDidMount() {
        this.getWishList();
    }


    render() {
            
        return(
            <>
            <div className="container">
                <h2>Component WishVisit</h2>
                <div>
                {this.state.list.map(church => <WishListClasa key={ church.id } churchId={church.id} churchNameList={church.name} image1List={church.image1} location={church.location} />)}
                </div>
                <div>


                </div>
            </div>
            <Footer />
            </>
        );
    }
}

export default WishVisit;




