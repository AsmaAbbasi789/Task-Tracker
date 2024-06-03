import { useState } from "react"
import {v4 as uuidv4} from 'uuid'
import TodoForm from "./TodoForm"
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";

function ToDoWrapper() {

 const [todos, setTodos] = useState([]);
 const [error, setError] = useState(false);

 const addTodo = (todo) => {

    if (todo.trim() === "") {
        setError(true);
        return;
    }

    const newTodo = {
      id: uuidv4(),
      task: todo,
      completed: false,
      isEditing: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setError(false);
    //console.log([...todos, newTodo]); 
  };

  const toggleComplete = id => {
    setTodos(todos.map(todo=> todo.id === id ? {
        ...todo, completed: !todo.completed
    } : todo))
  }

  const deleteTodo =id=> {
    setTodos(todos.filter(todo=> todo.id !== id))
  }
  
  const editTodo= id =>{
    setTodos(todos.map(todo=> todo.id === id ? {
        ...todo, isEditing : !todo.isEditing 
    } : todo
    ))
  }

  const editTask=( task, id) =>{
    setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing : !todo.isEditing} : todo ))
  }

  const updateTodo = (id, newTask = null) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, task: newTask !== null ? newTask : todo.task, isEditing: !todo.isEditing }
          : todo
      )
    );
  };

  return (
    <div className="bg-black max-w-md mx-auto rounded-md pb-9 pt-5 shadow-lg shadow-purple-500">
        <h1 className="text-white text-center font-semibold text-3xl pb-5">Task Tracker</h1>
        <TodoForm addTodo={addTodo} error={error}/>

        {todos.map((todo, index)=>(
            todo.isEditing ? (
                // eslint-disable-next-line react/jsx-key
                <EditTodoForm editTodo={updateTodo} task={todo} key={index}/>
            ) : (
            
                <Todo 
                task={todo} 
                key={index}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                editTodo={updateTodo}
                />
           )
        ))}
        
    </div>
  )
}

export default ToDoWrapper