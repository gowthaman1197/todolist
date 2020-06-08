import React from 'react'
import styles from './TodoList.module.css'

function TodoList({todoList, deleteTodo}) {
    const todoListResult = todoList.length ? (todoList.map((todo) => {
        return(            
            <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" key={todo.id}>{todo.content} <span className={styles.close} onClick={() => {deleteTodo(todo.id)}}><i className="fa fa-window-close" aria-hidden="true"></i>
            </span></li>
        )
    })) : (
        <p className="text-center">You have no todo's left :)</p>
    )
    return (
        <div className="col-12 col-sm-12 col-md-6 offset-md-3 col-lg-6 offset-lg-3">
                <ul className="list-group mb-5">
                    {
                        todoListResult
                    }
                </ul>
        </div>
    )
}

export default TodoList;