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
        list: [],
        user: ''
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

        //vine din WishListClasa
        // handleDelete = async (listID) => {
            // let reswish = {};

            // const getUser = async () => {

            //     try {
            //         reswish = await Axios.get('http://localhost:3004/wishList/');
            //     } catch (e) {
            //         if(e.reswish.status === 404) {
            //             console.log(404);
            //         }
            //         reswish.data = {}
            //     }
            //     console.log("datele", reswish.data)
                
            //     let checkW = reswish.data;
            //     for(let i=0; i<checkW.length; i++) {
            //         console.log("user:", checkW[i].id);
            //         if(checkW[i].iduser === this.context.user.id && checkW[i].idchurch === this.church.id) {
        
            //             console.log("user:", checkW[i].id);
                        
            //             this.setState({
            //                 user: checkW[i].id
            //             });
                        
            //         }
            //     }
            // }

            

            

            
            // getUser();
            
        //     await Axios.delete(`http://localhost:3004/wishList/${this.state.list.church.id}`)
        //     .then(res => console.log(res.data));
    
            
        // }
    

    componentDidUpdate(prevProps, prevState) {
        if(this.state.list === prevState.list) {
            this.getWishList();
        }
    }

    componentDidMount() {
        this.getWishList();
    }

    // handleDelete = (listID) => {
        // const readWish = async () => {
        //     let reswish = {};
    
        //     try {
        //         reswish = await Axios.get('http://localhost:3004/wishList/');
        //     } catch (e) {
        //         if(e.reswish.status === 404) {
        //             console.log(404);
        //         }
        //         reswish.data = {}
        //     }
        //     console.log("rasp de la wish", reswish.data.length);
    
        //     let checkW = reswish.data;
        //     for(let i=0; i<checkW.length; i++) {
        //         if(checkW[i].iduser === this.context.user.id && checkW[i].idchurch === this.state.church) {
    
        //             console.log("context user id:", context.user.id);
        //             console.log("context user id:", churchId);
                    
        //             console.log(checkW[i].id);
                    
        //             setUser(checkW[i].id);
        //             setWishListLength(reswish.data.length);
        //             console.log("state wishListLength:", wishListLength);
                    
        //         }
        //     }
        // }
    
        // readWish();

        // console.log("Event handler called", listID)
    // }

    render() {
            
        return(
            <>
            <div className="container">
                <h2>Component WishVisit</h2>
                <div>
                {this.state.list.map(church => <WishListClasa key={ church.id } churchId={church.id} churchNameList={church.name} image1List={church.image1} location={church.location}  />)}
                </div>
                <div>

                {/* {this.state.list.map(church => <WishListDelete key={ church.id } churchId={church.id} churchNameList={church.name} image1List={church.image1} location={church.location}/>)} */}

                </div>
            </div>
            <Footer />
            </>
        );
    }
}

export default WishVisit;




