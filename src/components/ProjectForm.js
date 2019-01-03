import React from 'react';
import { Link } from 'react-router-dom';

export default class ProjectForm extends React.Component {
    render(){
        return (
            <div>        
                <form className="create-form">
                    <label for="project-name"> Project Name:</label>
                    <input type="text" placeholder="project name" id="project-name" />
                    <label for="project-description"> Description:</label>
                    <input type="textarea" placeholder="project description" id="project-description" />
                    <label for="budget"> Time Budget(hours):</label>
                    <input type="number" id="budget" />
                    <label for="used">Time Used:</label>
                    <input type="number" id="used" />
                    <label for="remaining">Time Remaining:</label>
                    <input type="number"  id="remaining" /> 
                    <button><Link exact to='./dashboard'>Submit</Link></button>
                </form>
            </div>
        )
    };
} 