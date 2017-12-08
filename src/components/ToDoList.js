import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

let ToDoList = ({todos, dispatch}) => {
    return (
        <div>
            ToDoList
            <ul>
                {
                    todos.map((todo) => {
                        let onClick = () => {
                            dispatch(toggleTodo(todo.id));
                        };

                        return (
                            <li
                                key = {todo.id}
                                onClick = {onClick}
                                style = {{
                                    textDecoration: todo.completed ? 'line-through' : 'none'
                                }}>
                                {todo.text}
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    )
};

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case "SHOW_TODO":
            return todos.filter(todo => !todo.completed)
        case "SHOW_COMPLETED":
            return todos.filter(todo => todo.completed)
        default:
            return todos;
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        todos: getVisibleTodos(state.todos, ownProps.filter)
    }
};

ToDoList = connect(mapStateToProps)(ToDoList);

export default ToDoList;
