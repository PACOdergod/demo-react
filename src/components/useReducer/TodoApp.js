import React, { useEffect, useReducer } from 'react'
import { useForm } from '../../hooks/useForm'

import './style.css'
import { TodoList } from './TodoList'
import { todoReducer } from './todoReducer'

const init = ()=>{
    return JSON.parse( localStorage.getItem('todos') ) || []
}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, [], init )

    const [ {description}, handleInputChange, reset ] = useForm({
        description: ''
    })

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ))
    }, [todos])


    const handleSubmit = ( e )=>{
        e.preventDefault()

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch( action )
        reset()
    }

    const handleDelet = (todoId) =>{
        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch( action )
    }

    const handleEdit = ( todoId )=>{
        dispatch({
            type: 'edit',
            payload: todoId
        })
    }
    

    
    return (
        <div>
            <h1>Todo App: ({ todos.length })</h1>
            <hr></hr>

            <div className="row">

                <div className="col-7">
                    { TodoList( todos, handleEdit, handleDelet ) }
                </div>


                <div className="col-5">
                    <h4>Agregar tarea</h4>
                    <hr></hr>

                    <form onSubmit={ handleSubmit }>
                        <input
                        type="text"
                        name="description"
                        className="form-controll"
                        placeholder="Aprender ..."
                        autoComplete="off"
                        value={ description }
                        onChange={ handleInputChange }/>

                        <button 
                        type="submit"
                        className="btn btn-outline-primary mt-1">
                            Agregar
                        </button>
                    </form>
                    
                </div>

            </div>
        </div>
    )
}