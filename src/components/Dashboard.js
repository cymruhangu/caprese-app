import React from 'react';
import { Link } from 'react-router-dom';
import Clock from './clock';
import Timer from './Timer';

export default class Dashboard extends React.Component {
    render(){
        return(
            <div className="project-list">
                <Clock />
                <h1>This is the Dashboard</h1>
                <h3>Showing all user's projects and tasks.</h3>
                <div className="project-create">
                    <h2>Create a new project:</h2>
                    <button><Link exact to='./projectcreate'>Create New Project</Link></button>
                    <button><Link exact to='./projectclone'>Clone Project</Link></button>
                </div> 
                <Timer />
            </div>
        );
    };
}