import React from 'react';
// import { Link } from 'react-router-dom';

export default class CloneProject extends React.Component {
    render(){
        return (
            <div>
                <h2>Project Templates:</h2>
                <h3>Select one to clone: </h3>
                <ul>
                <li>Thinkful - Redux</li>
                <li>Thinkful - React Libraries</li>
                <li>Thinkful - Authentication Frontend</li>
                <li>Templated Marketing Website</li>
                <li>Fullstack MERN Web App</li>
                </ul>
            </div>
        );
    }
}