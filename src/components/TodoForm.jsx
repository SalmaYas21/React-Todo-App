import React from 'react'
import { useState , useEffect , useRef} from 'react'

function TodoForm (props) {
const [input, setInput] = useState(props.edit ? props.edit.value : '')

/* it's basically for inserting typing dès l'entrée dans la page */
const inputRef = useRef(null)

useEffect(()=>{
  inputRef.current.focus()
})
/****************************************/

const handleChange = e => {
    /* here on entre le changement dans la valeur de l'input */
    setInput(e.target.value)
}

const handleSubmit = e => {
    e.preventDefault(); 
    /* here on empeche la page d'être rafraichie à chaque fois qu'on appuie sur le bouton de soumission */

    props.onSubmit({
        id: Math.floor(Math.random()*1000),
        text: input,
    })

    setInput('')
}

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        {props.edit ? ( 
        /* cas où l'on est dans update */
        <>
        <input onChange={handleChange}
        type="text" 
        placeholder='Update your todo' 
        value={input} 
        name="text" 
        className='todo-input'
        ref= {inputRef} />
        <button className='todo-button'>Update Todo</button>
        </>) : ( 
           /* cas où l'on est dans le nouvel article */
          <>
          <input onChange={handleChange}
          type="text" 
          placeholder='Add a Todo' 
          value={input} 
          name="text" 
          className='todo-input'
          ref= {inputRef} />
          <button className='todo-button'>Add Todo</button>
          </>) }
       
    </form>
  )
}

export default TodoForm