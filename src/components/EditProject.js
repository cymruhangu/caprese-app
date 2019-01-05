import React from 'react';
import { connect } from 'react-redux';
import ProjectForm from './ProjectForm';
import { editProject, removeProject } from '../actions/projects';

const EditProject = (props) => {
    console.log(props);
    return (
        <div>
            <ProjectForm 
                expense={props.project}
                onSubmit={(project) => {
                    props.dispatch(editProject(props.project.id, project));
                    props.history.push('/'); 
                }}
            />
            <button onClick={(e) => {
                e.preventDefault();
                const id = props.project.id;
                props.dispatch(removeProject({id}));
                props.history.push('/'); 
            }}>Remove</button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        project: state.projects.find((project) => project.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditProject);