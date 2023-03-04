import React from 'react'
import {useState} from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([])

    
const addTodo = todo => {
    //pour éviter les messages vides et longs espaces
    if(!todo.text || /^\s*$/.test(todo.text)){
        return
    }

    const newTodos = [todo,...todos]
    setTodos (newTodos)
    console.log (todo, ...todos)
}

const updateTodo = (todoId, newValue) => {
    if(!newValue.text || /^\s*$/.test(newValue.text)){
        return
    }
    setTodos (prev => prev.map(item=>(item.id === todoId ? newValue : item)))
}

const completeTodo = (id) => {
    let updatedTodos = todos.map(todo=>{
        if(todo.id===id){
            todo.isComplete = !todo.isComplete
        }
        return todo
    })
    setTodos(updatedTodos)
}

const removeTodo = id => {
    let removedArr = [...todos].filter(todo => todo.id !==id )
    setTodos(removedArr)
}

  return (
    <div>
        <h1>What's the plan for today?</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo todos={todos} completeTodo = {completeTodo} removeTodo={removeTodo} updateTodo ={updateTodo} />
    </div>
  )
}

export default TodoList