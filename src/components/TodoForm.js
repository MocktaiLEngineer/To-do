import React from 'react'

const TodoForm = ({  inputText, setInputText, todos, setTodos, status, setStatus }) => {

  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  }

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, 
      { text: inputText, completed: false, id: Math.random() * 1000}
    ]);
    setInputText("");
  }

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

  return (
    <form className='TodoForm'>
        <input value={inputText} onChange={inputTextHandler} type='text' className='todo-input' placeholder='What task do you have for today?'/>
        <button onClick={submitTodoHandler} type='submit' className='todo-btn'>Add Task</button>
        {/* <div className="select"> */}
          <select onChange={statusHandler} name="todos" className='select'>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        {/* </div> */}
    </form>
  )
}

export default TodoForm