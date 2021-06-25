import React from 'react';
import {Link} from "react-router-dom";
import "./Navigation.css"

function Navigation(){
    return (
        <div className="navigation__wrap">
            <Link to="/" className="navigation__items">Home</Link>
            <Link to="/about" className="navigation__items">About</Link>
        </div>
    )
}

export default Navigation;