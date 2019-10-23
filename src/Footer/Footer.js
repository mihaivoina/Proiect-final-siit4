import React, { Component } from 'react';
import adept from './images/adept.png';
import wikipedia from './images/wikipedia.jpg';
import honterus from './images/honterus.png';
import kirsche from './images/kirsche.png';
import unesco from './images/unesco.png';
import cultura from './images/cultura.jpg';

import '../App.css'

class Footer extends Component {
    render() {
        return(
            <div className="footer">
                <div className="row">
                    <div className="col-md-2 col-sm-4 col-xs-6">
                        <a href="https://fundatia-adept.org/ro/home/" target="_blank"  rel="noopener noreferrer">
                            <img src={ adept } alt="" width="80px" />
                        </a>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-6">
                        <a href="https://ro.wikipedia.org/wiki/Pagina_principal%C4%83" target="_blank" rel="noopener noreferrer">
                            <img className="padding-logo-footer" src={wikipedia} alt="" width="80px" />
                        </a>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-6">
                        <a href="https://www.honterusgemeinde.ro/" target="_blank" rel="noopener noreferrer">
                            <img className="padding-logo-footer" src={honterus} alt="" width="80px" />
                        </a>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-6">
                        <a href="https://kirchenburgen.org" target="_blank" rel="noopener noreferrer">
                            <img className="padding-ogo-footer" src={kirsche} alt="" width="80px" />
                        </a>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-6">
                    <a href="https://whc.unesco.org/" target="_blank" rel="noopener noreferrer">
                        <img className="padding-logo-footer" src={unesco} alt="" width="80px" />
                    </a>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-6">
                    <a href="http://www.cultura.ro/culturaro " target="_blank" rel="noopener noreferrer">
                        <img className="padding-logo-footer" src={cultura} alt="" width="80px" />
                    </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;