import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions'

let AddForm = ({dispatch}) => {
    let input;

    return (
        <form onSubmit={e => {
            e.preventDefault();
            dispatch(addTodo(input.value));
            input.value = "";
        }}>
            <input ref={node => {
                input = node;
            }} />
            <button type="submit">
                Submit
            </button>
        </form>
    );
};

AddForm = connect()(AddForm);

export default AddForm;
