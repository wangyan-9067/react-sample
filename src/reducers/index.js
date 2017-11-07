import { combineReducers } from 'redux';

const todos = (state = [], action) => {
    switch (action.type) {
        case "ADD_TO_DO":
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text
                }
            ];
        default:
            return state;
    }
};

const appReducers = combineReducers({
    todos
});

export default appReducers;
