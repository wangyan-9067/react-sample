import { combineReducers } from 'redux';
import {
    SELECT_SUBREDIT,
    RECEIVE_POSTS
} from '../actions'

function selectedSubreddit(state = 'reactjs', action) {
    switch (action.type) {
        case SELECT_SUBREDIT:
            return action.subreddit;
        default:
            return state;
    }
}

function posts(state = {}, action) {
    switch (action.type) {
        case RECEIVE_POSTS:
            return {...state, [action.subreddit]: action.posts}
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    selectedSubreddit,
    posts
});

export default rootReducer;
