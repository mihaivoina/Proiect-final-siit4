import React from 'react';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Visit.css';

const VisitCards = ({ churchNameList, image1List, location }) => {
    // "holder.js/100px180"
    // console.log("render de churchNameList si image1List:", churchNameList, image1List);
    
    return(
        // <div className="container">
        //     <h2>{ churchNameList }</h2>
        //     <img src={image1List} alt="" /> 
        // </div>

        // varianta cu css si float: left;
        
        // <div className="container">
        //     <div className="cont-posts">
        //         <Card className="card-display" style={{ width: '15rem' }}>
        //             <Card.Img variant="top" src={image1List}  />
        //                 <Card.Body>
        //                 <Card.Title>{ churchNameList }</Card.Title>
        //                     <Card.Text>
        //                         Some quick example text to build on the card title and make up the bulk of
        //                         the card's content.
        //                     </Card.Text>
        //                 <Button variant="primary">Go somewhere</Button>
        //                 </Card.Body>
        //         </Card>
        //     </div>
        // </div>

        // <div className="container cont-posts">
        //     <div className="card-display" >
        //         <img src={image1List} alt="" />
                    
        //             <div>{ churchNameList }</div>
        //                 <p>
        //                     Some quick example text to build on the card title and make up the bulk of
        //                     the card's content.
        //                 </p>
        //             <Button variant="primary">Go somewhere</Button>
                    
        //     </div>
        // </div>
        // <div className="jjj">

            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" style={{marginTop: "20px"}}> 
            {/* <div className="col-sm-3 card-posts">   */}

                <div className="card h-100" >
                {/* <div className="card h-100 card-display"> */}
                    <img className="card-img-top" src={image1List} alt="" />
                    <div className="card-body">
                        <h4 className="card-title text-center">{ churchNameList }</h4>
                        <p className="card-text text-center">{location}</p>
                    </div>
                    <div className="card-footer text-center">
                        <Link as={ Link } to="/visit/details" className="btn btn-primary">
                            Detalii
                        </Link>
                    </div>
                </div>
            </div>
        // </div>
        
    );
}

export default VisitCards;