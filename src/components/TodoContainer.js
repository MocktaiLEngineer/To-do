import React, {useState, useEffect} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

const TodoContainer = () => {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus ] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);


  useEffect( () => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter( todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter( todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  return (
    <div className='TodoContainer'>
        <TodoForm inputText={inputText} setInputText = {setInputText} todos={todos} setTodos={setTodos} status={status} setStatus={setStatus} filteredTodos={filteredTodos} setFilteredTodos={setFilteredTodos}/>
        { filteredTodos.map( (todo) => {
            return <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>
          } 
        )}
    </div>

  )
}

export default TodoContainer