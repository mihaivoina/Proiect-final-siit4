import React from 'react';
// import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Visit.css';

const VisitCards = ({ churchNameList, image1List, location, churchId }) => {
    
    return(
        
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" style={{marginTop: "20px"}}> 
            <div className="card h-100" >
                <img className="card-img-top" src={image1List} alt="" />
                <div className="card-body">
                    <h4 className="card-title text-center">{ churchNameList }</h4>
                    <p className="card-text text-center">{location}</p>
                </div>
                <div className="card-footer text-center">
                    <Link as={ Link } to={ `/visit/details/${churchId}` } className="btn btn-primary" >
                        Detalii
                    </Link>
                </div>
            </div>
        </div>
            
        
    );
}

export default VisitCards;