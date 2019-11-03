import React, { Component } from 'react';
import Axios from 'axios';

import { SessionContext } from '../Login';
// import WishList from './WishList';
import WishListClasa from './WishListClasa';
import Footer from '../Footer/Footer';

// import './Visit.css';




class WishVisit extends Component {
    static contextType=SessionContext;
constructor(props) {
    super(props);
   this.state= {
        list: [],
        comments:[]
    }
    this.getWishList = this.getWishList.bind(this);
}
    async getWishList() {
        if(!this.context.user) {
            // redirect to login
            return;
        }
        const res = await Axios('http://localhost:3004/wishList?iduser=' + this.context.user.id )
        const idsfromlist = res.data;
        
        console.log("idsfromlist - in wishVisit:",idsfromlist);
        
        const co = idsfromlist.map( obj => obj.comments);
        // console.log(this.state);
        
        // this.setState({
        //     comments: co
        // })
        // console.log("lista comment-uri:", co);
        // this.setState({
        //     comments: co
        // });
        console.log("comoments", co);
        
        const intermediar =  idsfromlist.map( (obj) => Axios('http://localhost:3004/churches/' + obj.idchurch ), this.comments );
        
        
        const churchesResponse = await Promise.all(intermediar)
        console.log("date aduse:", churchesResponse);
        const churches = churchesResponse.map(res => res.data);
        this.setState({list: churches});
        
        // console.log("date aduse - list:", this.state.list);
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




