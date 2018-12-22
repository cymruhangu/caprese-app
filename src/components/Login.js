import React from 'react';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
    render(){
        return(
            <div className="login">
                <h1>Login</h1>
                <form id="login-form">
                    <input type="text" placeholder="username"/>
                    <input type="text" placeholder="password"/>
                    <button ><Link exact to='./dashboard'>Submit</Link></button>
                </form>
            </div>
          );
    };
}