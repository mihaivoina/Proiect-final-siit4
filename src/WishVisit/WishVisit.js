import React, { Component } from 'react';
import Axios from 'axios';

import { SessionContext } from '../Login';
import WishListClasa from './WishListClasa';
import Footer from '../Footer/Footer';


class WishVisit extends Component {
    static contextType=SessionContext;

    state= {
        list: [],
        comments: []
    }

    async getWishList() {
        if(!this.context.user) {
            // redirect to login
            return;
        }
        const res = await Axios('http://localhost:3004/wishList?iduser=' + this.context.user.id )
        const idsfromlist = res.data;
        
        // console.log("raspuns idsfromlist:", idsfromlist);
        const intermediar =  idsfromlist.map( obj => Axios('http://localhost:3004/churches/' + obj.idchurch));
        
        const churchesResponse = await Promise.all(intermediar)
        const churches = churchesResponse.map(res => res.data);
        const co = idsfromlist.map( obj => obj.comments);
        // console.log("churches: ", churches);
        // console.log("co: ", co);
        for(let i=0; i<churches.length;i++) {
            churches[i]["comments"]=co[i]
        }
        // console.log("newChurches:", churches);
        
        

        this.setState({list: churches});

        // console.log("this.state.list:", this.state.list);
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.list === prevState.list && this.state.comments === prevState.comments) {
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
                {this.state.list.map(church => <WishListClasa key={ church.id } churchId={church.id} churchNameList={church.name} image1List={church.image1} location={church.location} comments={church.comments} />)}
                </div>
            </div>
            <Footer />
            </>
        );
    }
}

export default WishVisit;

