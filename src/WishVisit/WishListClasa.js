import React, { Component } from 'react';
import Axios from 'axios';
import {SessionContext} from '../Login';

class WishListClasa extends Component {

    static contextType=SessionContext;

    state = {
        user:'',
        deleted: false
    }

    // async componentDidMount() {
    //     let reswish = {};

    //     try {
    //         reswish = await Axios.get('http://localhost:3004/wishList/');
    //     } catch (e) {
    //         if(e.reswish.status === 404) {
    //             console.log(404);
    //         }
    //         reswish.data = {}
    //     }

    //     let checkW = reswish.data;
    //     for(let i=0; i<checkW.length; i++) {
    //         if(checkW[i].iduser === this.context.user.id && checkW[i].idchurch === this.props.churchId) {

                
    //             this.setState({
    //                 user: checkW[i].id
    //             });
                
    //         }
    //     }
    // }

    handleDelete = async () => {
        const res = await Axios(`http://localhost:3004/wishList?iduser=${this.context.user.id}&idchurch=${this.props.churchId}`);

        const churchId = res.data[0].id;
        console.log(res);
        
        await Axios.delete(`http://localhost:3004/wishList/${churchId}`)
        this.setState({
            deleted: true
        })
    }

    
    render() {
        if (this.state.deleted) {
            return null;
        }
      
        return(
            <>
            <div style={{marginTop: "20px"}}> 
                <div className="container-list">
                    <h5>{ this.props.churchNameList }</h5>
                    <p>{this.props.location}</p>
                    <img  src={this.props.image1List} alt="" width="100px" />
                </div>
            </div>
            <button onClick={ this.handleDelete } >Delete</button> 
            </>
        );
    }
}

export default WishListClasa;