import React from 'react';
import PropTypes from 'prop-types';

export default function Post({ title, index }) {
    return (
        <div>{`Post ${index}: ${title}`}</div>
    );
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
};
