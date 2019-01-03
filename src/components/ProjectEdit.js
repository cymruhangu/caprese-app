import React from 'react';
import { connect } from 'react-redux';
import Timer from '../components/Timer';
import prettyMs from 'pretty-ms';

const ProjectEdit = (props) => {
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
            
            <Timer id={id}/>
        </div>

    )
}


const mapStateToProps = (state, props) => {
    return {
        project: state.projects.find((project) => project.id === props.match.params.id)
    };
};
export default connect(mapStateToProps)(ProjectEdit);