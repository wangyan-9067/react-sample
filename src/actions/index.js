export const SELECT_SUBREDIT = 'SELECT_SUBREDIT';

export function selectSubreddit(subreddit) {
    return {
        type: SELECT_SUBREDIT,
        subreddit
    };
}
