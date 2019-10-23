import React from 'react';
import './Visit.css';

const SearchBox = ({ searchChange }) => {
    
    return(
        <div className="input-wraper">
            <input 
            type="search" 
            placeholder="Cauta dupa judet" 
            className="input-container"
            onChange={searchChange}
            />
        </div>
    );
    
}

export default SearchBox;