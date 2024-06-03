/* eslint-disable react/prop-types */
// import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import {  faTrash } from "@fortawesome/free-solid-svg-icons";

function Todo({task, toggleComplete, deleteTodo, editTodo}) {
  return (
      <div className="mt-3 max-w-xs flex items-center px-3 py-3 bg-purple-500 mx-auto rounded-sm">
        <p onClick={()=> toggleComplete(task.id)} className={`text-white hover:cursor-pointer text-[17px] flex-grow-1 ${task.completed? `line-through`: ``}`}>{task.task}</p>
        <div className="ml-auto">
          <FontAwesomeIcon onClick={()=> editTodo(task.id)} className="text-white ml-3 hover:cursor-pointer" icon={faPenToSquare} />
          <FontAwesomeIcon onClick={()=> deleteTodo(task.id)} className="text-white ml-3 hover:cursor-pointer" icon={faTrash} />
        </div>
      </div>
  )
}

export default Todo