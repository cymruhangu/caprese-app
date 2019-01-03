import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { addProject } from './actions/projects';
import configureStore from './store/configureStore';
// import 'normalize.css/normalize.css';
import './index.css';
import AppRouter from './routers/AppRouter'
import * as serviceWorker from './serviceWorker';

const store = configureStore();

store.dispatch(addProject(
    {   "name": 'Redux',
                "owner": 'mkim',
                "description": 'Learn Redux',
                "budget": 600000,
                "remaining": 600000,
                "tasks": [
                    {"name": 'Task 1', "budget": 66600000, "remaining": 66600000},
                    {"name": 'Task 2', "budget": 66600000, "remaining": 66600000}   
                ]   
            }
));

store.dispatch(addProject(
    {   "name": 'Remodel Kitchen',
                "owner": 'mkim',
                "description": 'New cabinets, counter, and floor',
                "budget": 240000,
                "remaining": 240000,
                "tasks": [
                    {"name": 'Task 1', "budget": 144000000, "remaining": 144000000},
                    {"name": 'Task 2', "budget": 144000000, "remaining": 144000000} 
                ]  
            }
));

// const state = store.getState();
// console.log(state);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);



ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
