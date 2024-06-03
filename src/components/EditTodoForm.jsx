/* eslint-disable react/prop-types */
import  {useState} from 'react'

// eslint-disable-next-line react/prop-types
function EditTodoForm({editTodo, task}) {

    const [value, setValue] = useState(task.task);

    const handleSubmit=(e)=>{
        e.preventDefault();
        editTodo(task.id, value);

        //setValue("")
    }

  return (
    <form className='border border-5 border-black max-w-xs m-auto rounded-md' onSubmit={handleSubmit}>
        <div className="flex justify-center items-center">
            <input type="text" value={value} className='border border-purple-800 focus:outline-none h-12 focus:text-white text-white rounded-l-lg my-2 px-7 bg-black' 
            placeholder='Update Task'
            onChange={(e)=> setValue(e.target.value)}/>
            <button type='submit' className='bg-purple-500  rounded-r-lg w-24 h-12 text-white'>Update</button>
        </div>
    </form>
  )
}

export default EditTodoForm