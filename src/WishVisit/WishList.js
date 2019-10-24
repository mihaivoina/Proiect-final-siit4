import React, {useContext, useState} from 'react';
import Axios from 'axios';
import {SessionContext} from '../Login';


import './WishVisit.css';

const WishList = ({churchId, churchNameList, image1List, location }) => {

    const context = useContext(SessionContext)

    const [user, setUser] = useState('');
    const [wishListLength, setWishListLength] = useState('');

    // console.log(context.user);

    
    const readWish = async () => {
        let reswish = {};

        try {
            reswish = await Axios.get('http://localhost:3004/wishList/');
        } catch (e) {
            if(e.reswish.status === 404) {
                console.log(404);
            }
            reswish.data = {}
        }
        console.log("rasp de la wish", reswish.data.length);

        let checkW = reswish.data;
        for(let i=0; i<checkW.length; i++) {
            if(checkW[i].iduser === context.user.id && checkW[i].idchurch === churchId) {

                console.log("context user id:", context.user.id);
                console.log("context user id:", churchId);
                
                console.log(checkW[i].id);
                
                setUser(checkW[i].id);
                setWishListLength(reswish.data.length);
                console.log("state wishListLength:", wishListLength);
                
            }
        }
    }

        readWish();


    const handleClick = () => {
         console.log(churchId);
         Axios.delete(`http://localhost:3004/wishList/${user}`)
         .then(res => console.log(res.data));

        setUser({});
        console.log("state dupa stergere:", user);
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if(this.state.user === prevState.list) {
    //         this.handleClick();
    //     }
    // }

    // componentDidMount() {
    //     this.handleClick();
    // }

    return(
        <>
        <div style={{marginTop: "20px"}}> 
            <div className="container-list">
                <h5>{ churchNameList }</h5>
                <p>{location}</p>
                <img  src={image1List} alt="" width="100px" />
            </div>
        </div>
        <button onClick={handleClick}>Delete</button> 
        </>
            
        
    );
    
    
}

export default WishList;


