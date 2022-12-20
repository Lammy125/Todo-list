import React from 'react'
import Header from './Header'
import InputTodo from './InputTodo'
import NavBar from './NavBar'
import TodoList from './TodoList'

const TodoContainer = () => {
  return (
    <div className='todoContainer'>
        <NavBar/>
        <div className='todoBody'>
            <Header/>
            <InputTodo/>
            <TodoList/>
        </div>
    </div>
  )
}

export default TodoContainer