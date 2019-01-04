import React from 'react';
import { connect } from 'react-redux';
import ProjectListItem from './ProjectListItem';

const ProjectList = (props) => (
    <div>
        <h1>Project List:</h1>
        {
            props.projects.map((project, index) => (
                <ProjectListItem key={index}
                    {...project}
                />))
        }
        
    </div>
);

const mapStateToProps = (state) => {
    return {
        projects: state.projects
    }
};

export default connect(mapStateToProps)(ProjectList);

