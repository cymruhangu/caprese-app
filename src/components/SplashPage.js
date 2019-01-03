import React from 'react';
import {Link} from 'react-router-dom';
import './SplashPage.css';

export default class SplashPage extends React.Component {
    render(){
        return (
            <div className="splash">
                <h1>The Caprese App</h1>
                <h2>More than just a tomato timer.</h2>
                <button><Link to="/login">Login</Link></button>
                <button><Link to="/register" >Register</Link></button>
            </div>
        );
    }   
}

