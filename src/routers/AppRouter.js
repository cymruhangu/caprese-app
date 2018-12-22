import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Dashboard from '../components/Dashboard';
import Login from '../components/Login';
import Register from '../components/Register';
import SplashPage from '../components/SplashPage';
import NotFoundPage from '../components/NotFoundPage';
import CloneProject from '../components/CloneProject';
import CreateProject from '../components/CreateProject';
import HelpPage from '../components/HelpPage';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div id="App">
            <Header />
            <Switch>
                <Route exact strict path="/" component={SplashPage}  />
                <Route exact strict path="/dashboard" component={Dashboard}  />
                <Route exact strict path="/login" component={Login}  />
                <Route exact strict path="/register" component={Register}  />
                <Route exact strict path="/project/:id" component={Register}  />
                <Route exact strict path="/projectcreate" component={CreateProject}  />
                <Route exact strict path="/projectclone" component={CloneProject}  />
                <Route exact strict path="/task/:id" component={Register}/>
                <Route exact strict path="/newtask" component={Register}  />
                <Route exact strict path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);


export default AppRouter;