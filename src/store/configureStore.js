import { createStore, combineReducers } from 'redux';
import projectsReducer from '../reducers/projects';
import filtersReducer from '../reducers/filters';
import timerReducer from '../reducers/timer';

export default () => {
    const store = createStore(
        combineReducers({
            projects: projectsReducer,
            filters: filtersReducer,
            timer: timerReducer
        })
    );
    return store;
} 