import React from 'react';
import { Link } from 'react-router-dom';


const ProjectListItem = ({id, name, owner, description, budget, remaining}) => (
    <div>
        <Link to={`/project/${id}`}>
            <h3>Project Name: {id}</h3>
        </Link>
        
        <p>budget: {budget} remaining: {remaining}</p>
    </div>
);


export default ProjectListItem;