import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { removeProject } from '../actions/projects';
import Timer from './Timer';
import prettyMs from 'pretty-ms';

const ProjectView = (props) => {
    // console.log(props);
    const id = props.project.id;
    return (
        <div>
            <h1>Project Page</h1>
            <h2>{props.project.name}</h2>
            <h3>{props.project.id}</h3>
            <p>{props.project.description}</p>
            <p>{props.project.owner}</p>
            <h3>Project Budget: {prettyMs(props.project.budget)}</h3>
            <h3>Remaining Budget: {prettyMs(props.project.remaining)}</h3>
        
            <button onClick={(e) => {
                e.preventDefault();
                props.dispatch(removeProject({id}));
                props.history.push('/'); 
            }}>Remove</button>

            <Timer id={id}/>
        </div>

    )
}


const mapStateToProps = (state, props) => {
    return {
        project: state.projects.find((project) => project.id === props.match.params.id)
    };
};
export default connect(mapStateToProps)(ProjectView);