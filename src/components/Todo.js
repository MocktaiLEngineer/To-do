import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Todo = ( { todo, todos, setTodos } ) => {

  const deleteHandler = () => {
    setTodos(todos.filter(item => item.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(todos.map( (item) => {
      if (item.id === todo.id){
        return {
          ...item, completed: !item.completed
        }
      }
      return item;
    }))
  }

  return (
    <div className="todo">
      <p className={`todo-item ${todo.completed ? "completed": ""}`}>{todo.text}</p>
        
        <div className='todo-actions'>
            <FontAwesomeIcon icon={faCheck} onClick={completeHandler} />
            <FontAwesomeIcon icon={faTrash} onClick={deleteHandler} />
        </div>
    </div>
  )
}

export default Todo;