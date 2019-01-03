import React from 'react';
// import Clock from './clock';
// import prettyMs from 'pretty-ms';
import { connect } from 'react-redux';
import ProjectList from './ProjectList';

class Dashboard extends React.Component {
        render(){
        return(
            <div className="project-list">
                <h2>This is the Dashboard</h2>
                <ProjectList />
                
            </div>
        );
    };
}

const mapStateToProps = (state) => ({
        projects: state.projects
});

export default connect(mapStateToProps)(Dashboard);