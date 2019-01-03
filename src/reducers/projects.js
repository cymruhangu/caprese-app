//PROJECTS REDUCER
const projectsInitialState = [];

export default (state = projectsInitialState, action) => {
    switch (action.type) {
        case 'ADD_PROJECT':
            return [
                ...state,
                action.project
            ];
        case 'REMOVE_PROJECT':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_PROJECT':
            return state.map((project) => {
                if(project.id === action.id){
                    return {
                        ...project, 
                        ...action.updates
                    };
                } else {
                    return project;
                }
        });
        default:
            return state;
    }
};