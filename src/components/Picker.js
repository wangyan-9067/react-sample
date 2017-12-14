import React, { Component } from 'react';

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
