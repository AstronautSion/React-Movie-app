import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
 
function Navigation() {
    return <div className="nav">
        <Link to="/React-Movie-app/">Home</Link>
        <Link to="/React-Movie-app/about">About</Link>
    </div>
}

export default Navigation;