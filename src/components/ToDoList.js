import React from 'react';
import { connect } from 'react-redux';

let ToDoList = ({todos, dispatch}) => (
    <div>
        ToDoList
        <ul>
            {todos.map((todo, index) => (
                <li key = {index}>{todo.text}</li>
            ))}
        </ul>
    </div>
);

let mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
};

ToDoList = connect(mapStateToProps)(ToDoList);

export default ToDoList;
