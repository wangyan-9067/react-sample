import React, { Component } from 'react';
import { connect } from 'react-redux';
import Picker from '../components/Picker';

class AsyncApp extends Component {
    render() {
        const { selectedSubreddit } = this.props;

        return (
            <div>
                <Picker
                    value={selectedSubreddit}
                    options={['reactjs', 'frontend']}
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
