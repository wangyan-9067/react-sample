import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Picker extends Component {
    render() {
        const { value, options, onChange } = this.props
        return (
            <select value={value} onChange={e => onChange(e.target.value)}>
                {
                    options.map((option, index) => (
                        <option value={option} key={index}>{option}</option>
                    ))
                }
            </select>
        );
    }
};

Picker.propTypes = {
    value: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onChange: PropTypes.func.isRequired
};
