import React from 'react';
import { Link } from 'react-router-dom';

export default class Register extends React.Component {
    render(){
        return(
            <div className="register">
                <h1>Register</h1>
                <form id="register">
                    <label for="first"> First Name:</label>
                    <input type="text" placeholder="first name" id="first" />
                    <label for="last"> Last Name:</label>
                    <input type="text" placeholder="last name" id="last" />
                    <label for="email"> Email:</label>
                    <input type="email" placeholder="email" id="last" />
                    <label for="password">Password:</label>
                    <input type="text" placeholder="password" id="last" />
                    <label for="password2">Repeat Password:</label>
                    <input type="text" placeholder="repeat password" id="password2" />
                    <button><Link exact to="/login">Submit</Link></button>
                </form>
            </div>
          );
    };
}