import React from 'react'

import './style.css'

export const TodoList = ( todos, handleEdit, handleDelet )=>{
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map(( todo, i ) =>
                    TodoListItem( todo, i, handleEdit, handleDelet )
                )
            }
        </ul>
    )
}

const TodoListItem = ( todo, i, handleEdit, handleDelet ) => {
    return (

        <li key={ todo.id } className="list-group-item">
            <p 
            onClick={ ()=>handleEdit( todo.id ) }
            className={`${ todo.done && 'complete' }`}
            >
                { i+1}.- { todo.desc }
            </p>

            <button 
            className="btn btn-danger"
            onClick={ ()=> handleDelet( todo.id ) }>
                borrar
            </button>
        </li>
    )
}