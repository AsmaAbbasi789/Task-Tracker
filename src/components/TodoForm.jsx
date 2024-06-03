import  {useState} from 'react'

// eslint-disable-next-line react/prop-types
function TodoForm({addTodo, error}) {

    const [value, setValue] = useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(value)
        addTodo(value)
        if (value.trim() !== "") {
            setValue("");
        }
    }   

  return (
    <form className='border border-5 border-black max-w-xs m-auto rounded-md' onSubmit={handleSubmit}>
        <div className="flex justify-center items-center ">
            <input type="text" value={value} className='border border-purple-800 h-12 focus:outline-none text-white rounded-l-lg my-2 px-7 bg-black' 
            placeholder='What is the task for today... ?'
            onChange={(e)=> setValue(e.target.value)}/>
            <button type='submit' className='bg-purple-500  rounded-r-lg w-24 h-12 text-white'>Add Task</button>
        </div>
        {error ? <p className='text-red-500 text-xs h-7'>*Please enter a task</p> : <p className='h-7'></p>}
    </form>
  )
}

export default TodoForm