import { combineReducers } from 'redux';
import {
    SELECT_SUBREDIT
} from '../actions'

function selectedSubreddit(state = 'reactjs', action) {
    switch (action.type) {
        case SELECT_SUBREDIT:
            return action.subreddit;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    selectedSubreddit
});

export default rootReducer;
