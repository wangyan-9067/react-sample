import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    selectSubreddit,
    fetchPosts
} from '../actions';
import Picker from '../components/Picker';
import Post from '../components/Post';

class AsyncApp extends Component {
    onChange(value) {
        const { dispatch } = this.props;

        dispatch(selectSubreddit(value));
    }

    componentDidMount() {
        const { dispatch, selectedSubreddit } = this.props;

        dispatch(fetchPosts(selectedSubreddit));
    }

    componentDidUpdate(prevProps) {
        const { dispatch, selectedSubreddit } = this.props;

        if (selectedSubreddit !== prevProps.selectedSubreddit) {
            dispatch(fetchPosts(selectedSubreddit));
        }
    }

    render() {
        const { selectedSubreddit, posts } = this.props;

        return (
            <div>
                <Picker
                    value={selectedSubreddit}
                    options={['reactjs', 'frontend']}
                    onChange={(value) => this.onChange(value)}
                />
                {
                    posts.map((post, index) => (
                        <Post {...post} key={index} index={index} />
                    ))
                }
            </div>
        );
    };
};

function mapStateToProps(state) {
    return {
        selectedSubreddit: state.selectedSubreddit,
        posts: state.posts[state.selectedSubreddit] || []
    };
}

AsyncApp = connect(mapStateToProps)(AsyncApp);

export default AsyncApp;
