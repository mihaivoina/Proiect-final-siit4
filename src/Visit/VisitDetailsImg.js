import React from 'react';
import './Visit.css'

const VisitDetailsImg = ({image}) => {
    return(
        <div className="col-xs-12 col-md-6 col-lg-4">
            <div>

            <img src={image} className="mx-auto d-block img-VisitD" alt="" />
            </div>
        </div>
    );
}

export default VisitDetailsImg;