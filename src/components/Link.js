import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';

let Link = ({active, children, onClick}) => {
    if (active) {
        return (
            <span>{children}</span>
        );
    }

    return (
        <a onClick = {onClick}>{children}</a>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        active: state.filter === ownProps.filter
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter));
        }
    }
}

Link = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default Link;
