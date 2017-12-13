import React, { Component } from 'react';

export default class Picker extends Component {
    render() {
        const { value, options } = this.props
        return (
            <select value={value}>
                {
                    options.map((option, index) => (
                        <option value={option} key={index}>{option}</option>
                    ))
                }
            </select>
        );
    }
};
