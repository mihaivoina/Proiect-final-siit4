import React from 'react';
import Button from 'react-bootstrap/Button';


const WishListDelete = ({churchId, churchNameList, image1List, location }) => {
    
    console.log(churchId);
    
    // onClick={this.deleteFromWishList}
    
    return(
        <>
        <Button type="btn" className="btn float-right" variant="primary "  >Delete</Button>
        
        {/* <div style={{marginTop: "20px"}}> 
            <div className="container-list">
                <h5>{ churchNameList }</h5>
                <p>{location}</p>
                <img  src={image1List} alt="" width="100px" />
            </div>
        </div> */}
        </>
            
        
    );
}


export default WishListDelete;