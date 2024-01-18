import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function SimpleTodo() {

    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return (
        <div className='flex flex-col gap-3 justify-center items-center w-96'>
            Todos
            {todos.map(todo => (
                <li className='flex justify-between items-center w-96' key={todo.id}>
                    {todo.text}
                    <button className='' onClick={() => dispatch(removeTodo(todo.id))}>X</button>
                </li>
            ))}
        </div>
    )
}

export default SimpleTodo