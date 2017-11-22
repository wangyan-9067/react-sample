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

let mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
};

ToDoList = connect(mapStateToProps)(ToDoList);

export default ToDoList;
