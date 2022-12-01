import React, { useState } from 'react';

function App() {
	const [ todolist, setTodoList ] = useState([]);
	const [ newtask, setNewTask ] = useState('');
	const handleChange = (event) => {
		setNewTask(event.target.value);
	};
	const addTask = () => {
		const newTodolist = [ ...todolist, newtask ];
		setTodoList(newTodolist);
	};
  const deleteTask = (taskname) => {
    const newTodolist = todolist.filter((task) => {
      return task !== taskname
    });
    setTodoList(newTodolist);
  }
	return (
		<React.Fragment>
			<div className='bg-[#242424] h-screen text-white'>
				<div className='flex justify-center items-center p-[70px]'>
					<div className='p-[20px] bg-[#1A1A1A] shadow-xl w-[350px] rounded-lg'>
						<input
							className='mr-[20px] h-[35px] rounded-lg text-black p-[5px]'
							type='text'
							onChange={handleChange}
						/>
						<button onClick={addTask} className='bg-[#9498F8] p-[6px] px-[19px] rounded-lg'>
							Add Task
						</button>
					</div>
				</div>
				<div className='flex justify-center items-center'>
					<div className=' bg-[#1A1A1A] shadow-xl w-[350px] rounded-lg p-[5px] px-[10px]'>
						{todolist.map((task) => {
							return (
                <>
								<div className="flex items-center justify-between">
									<div>
										<h1 className='p-[10px]'>&#x25BA; {task}</h1>
									</div>
									<div>
                    <button onClick={() => deleteTask(task)}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>
                    </button>
									</div>
								</div>
                </>
							);
						})}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default App;
