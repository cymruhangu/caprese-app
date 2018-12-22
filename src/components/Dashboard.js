import React from 'react';
import { Link } from 'react-router-dom';
import Clock from './clock';
import Timer from './Timer';
import prettyMs from 'pretty-ms';

export default class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            projects: [
            {   "name": 'Redux',
                "budget": 133200000,
                "remaining": 133200000   
            },
            {   "name": 'Remodel Kitchen',
                "budget": 288000000,
                "remaining": 288000000
            }
            ]
        }
    }
    render(){
        return(
            <div className="project-list">
                <Clock />
                <h1>This is the Dashboard</h1>
                <h3>Showing all user's projects.</h3>
                <div className="projects">
                    <p>Name: {this.state.projects[0].name} Budget: {prettyMs(this.state.projects[0].budget)} Remaining:  {prettyMs(this.state.projects[0].remaining)}  <i class="far fa-clock"></i></p>
                    <p>Name: {this.state.projects[1].name} Budget: {prettyMs(this.state.projects[1].budget)} Remaining:  {prettyMs(this.state.projects[1].remaining)}   <i class="far fa-clock"></i></p>
                </div>
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