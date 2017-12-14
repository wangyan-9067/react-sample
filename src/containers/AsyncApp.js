import React, { Component } from 'react';
import { connect } from 'react-redux';
import Picker from '../components/Picker';
import { selectSubreddit } from '../actions';

class AsyncApp extends Component {
    onChange(value) {
        const { dispatch } = this.props;

        dispatch(selectSubreddit(value));
    }

    render() {
        const { selectedSubreddit } = this.props;

        return (
            <div>
                <Picker
                    value={selectedSubreddit}
                    options={['reactjs', 'frontend']}
                    onChange={(value) => this.onChange(value)}
                />
            </div>
        );
    };
};

function mapStateToProps(state) {
    return {
        selectedSubreddit: state.selectedSubreddit
    };
}

AsyncApp = connect(mapStateToProps)(AsyncApp);

export default AsyncApp;
