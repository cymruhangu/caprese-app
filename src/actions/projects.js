import uuid from 'uuid';
//Projects must be an object
// const initialState = {
//     projects : {
//         byId : {},
//         allIds: []
//     },
//     tasks: {
//         byId : {},
//         allIds : []
//     },
//     users: {
//         byId : {},
//         allIds : []
//     }
// };

//ADD PROJECT
export const addProject = (
    { 
        name = '',
        description = '', 
        owner = '',
        budget = 0, 
        remaining = 0, 
        tasks = []
    }= {}
) =>({
    type: 'ADD_PROJECT',
    project: {
        id: uuid(),
        name,
        owner,
        description,
        budget,
        remaining,
        tasks
    }
});

//REMOVE PROJECT
export const removeProject = ({ id } = {}) => ({
    type: 'REMOVE_PROJECT',
    id
});

//EDIT PROJECT
export const editProject = (id, updates) => ({
    type: 'EDIT_PROJECT',
    id,
    updates
});

