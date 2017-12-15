import fetch from 'cross-fetch';

export const SELECT_SUBREDIT = 'SELECT_SUBREDIT';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export function selectSubreddit(subreddit) {
    return {
        type: SELECT_SUBREDIT,
        subreddit
    };
};

function receivePosts(subreddit, json) {
    return {
        type: RECEIVE_POSTS,
        subreddit,
        posts: json.data.children.map(child => child.data)
    }
}

export function fetchPosts(subreddit) {
    return (dispatch, getState) => {
        const posts = getState().posts[subreddit];

        if (!posts) {
            return fetch(`https://www.reddit.com/r/${subreddit}.json`)
                .then(response => response.json())
                .then(json => dispatch(receivePosts(subreddit, json)));
        }
    };
};
