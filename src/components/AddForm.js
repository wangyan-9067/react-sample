import React from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../actions'

let AddForm = (dispatch) => {
    let input;

    return (
        <form onSubmit={e => {
            e.preventDefault();
            dispatch(addToDo(input.value));
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
