const filtersReducerDefaultState = {
    text: '',
    sortBy: '',
}

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state, 
                text: action.text
            };        
        default:
        return state;
    }
};