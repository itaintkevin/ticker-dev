import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createTask, getTasks } from "@/redux/tasks/taskSlice";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function AddNewTask() {

  const dispatch = useDispatch();

  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    dueDate: "",
  })
  const { title, description, dueDate } = taskData;

  const handleChange = (e) => {
    setTaskData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");

  const handlePriority = (prop) => {
    setPriority(prop);
    console.log(priority);
  }

  const handleStatus = (prop) => {
    setStatus(prop);
    console.log(status);
  }

  const [prioritySelected, setPrioritySelected] = useState({
    High: false,
    Medium: false,
    Low: false,
  }); 

  const [statusSelected, setStatusSelected] = useState({
    Do: false,
    Doing: false,
    Done: false,
  });

  const handlePrioritySelected = (prop) => {
    const reset = {
      High: false,
      Medium: false,
      Low: false,
    }
    setPrioritySelected({...reset, [prop]: true})
  }

  const handleStatusSelected = (prop) => {
    const reset = {
      Do: false,
      Doing: false,
      Done: false,
    }
    setStatusSelected({...reset, [prop]: true})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = dispatch(createTask({title, description, dueDate, priority, status}));
    console.log(response);

    // if (response) {
    //   toast.error(response)
    // }

    if (response.user) {
      setPriority("");
      setStatus("");
      toast.success("Task Added Successfully");
    }

    dispatch(getTasks())
  }
  console.log(priority)

  return (
    <div className="h-full w-full mx-5">
      <ToastContainer/>
      <div className="dark:bg-[#212121] shadow-xl rounded-md bg-white w-[95%] h-max p-7 max-w-md">
        <div className="flex items-center justify-between mb-5 border-b border-neutral-300 pb-2">
          <h1 className="text-2xl font-bold">
            Add a New Task
          </h1>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <label htmlFor="title" className="text-lg font-semibold mb-1">
            Title:
          </label>
          <input 
            className="border border-neutral-300 dark:border-[#212121] focus:outline-neutral-500 rounded-md shadow-md p-2" 
            type="text"
            id="title" 
            name="title"
            value={title} 
            onChange={handleChange}/>
        </div>
        <div className="flex flex-col justify-center my-2">
          <label className="text-lg font-semibold mb-1">
            Description:
          </label>
          <input 
            className="border border-neutral-300 dark:border-[#212121] focus:outline-neutral-500 rounded-md shadow-md p-2" 
            type="text" 
            id="description" 
            name="description"
            value={description} 
            onChange={handleChange}/>
        </div>
        <div className="flex flex-col justify-center">
          <label className="text-lg font-semibold mb-1">
            Due Date:
          </label>
          <input 
            className="border border-neutral-300 dark:border-[#212121] focus:outline-neutral-500 rounded-md shadow-md p-2" 
            type="date" 
            id="dueDate" 
            name="dueDate"
            onChange={handleChange}/>
        </div>
        <div className="flex flex-col justify-center my-2">
          <label className="text-lg font-semibold mb-1">
            Priority:
          </label>
          <div className="flex">
            <button 
              onClick={() => {
                handlePriority('Low'); 
                handlePrioritySelected('Low')
              }} 
              className={`${
                prioritySelected.Low 
                  ? 'bg-green-300' 
                  : '' 
                } font-medium border-2 border-green-300 hover:bg-green-400 transition duration-300 text-md rounded-lg shadow-md px-3 py-0.5 mx-1`}
              >
                Low
              </button>
            <button 
              onClick={() => {
                handlePriority('Medium'); 
                handlePrioritySelected('Medium')
              }} 
              className={`${
                prioritySelected.Medium 
                  ? 'bg-yellow-200' 
                  : '' 
                } font-medium border-2 border-yellow-200 hover:bg-yellow-300 transition duration-300 text-md rounded-lg shadow-md px-3 py-0.5 mx-1`}
              >
                Medium
              </button>
            <button 
              onClick={() => {
                handlePriority('High'); 
                handlePrioritySelected('High')
              }} 
              className={`${
                prioritySelected.High 
                  ? 'bg-red-300' 
                  : '' 
                } font-medium border-2 border-red-300 hover:bg-red-400 transition duration-300 text-md rounded-lg shadow-md px-3 py-0.5 mx-1`}
              >
                High
              </button>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <label className="text-lg font-semibold mb-1">
            Status:
          </label>
          <div className="flex">
            <button 
              onClick={() => {
                handleStatus('To Do'); 
                handleStatusSelected('Do')
              }} 
              className={`${
                statusSelected.Do 
                  ? 'bg-green-300' 
                  : '' 
                } font-medium border-2 border-green-300 hover:bg-green-400 transition duration-300 text-md rounded-lg shadow-md px-3 py-0.5 mx-1`
              }
            >
                To Do
            </button>
            <button 
              onClick={() => {
                handleStatus('Doing'); 
                handleStatusSelected('Doing')
              }} 
              className={`${
                statusSelected.Doing 
                  ? 'bg-yellow-200' 
                  : '' 
                } font-medium border-2 border-yellow-200 hover:bg-yellow-300 transition duration-300 text-md rounded-lg shadow-md px-3 py-0.5 mx-1`}
              >
                Doing
              </button>
            <button 
              onClick={() => {
                handleStatus('Done'); 
                handleStatusSelected('Done')
              }} 
              className={`${
                statusSelected.Done 
                  ? 'bg-red-300' 
                  : '' 
                } font-medium border-2 border-red-300 hover:bg-red-400 transition duration-300 text-md rounded-lg shadow-md px-3 py-0.5 mx-1`}
              >
                Done
              </button>
          </div>
        </div>
        <button 
          onClick={handleSubmit} 
          className="text-md font-semibold dark:text-neutral-200 text-neutral-800 border-2 border-green-400 hover:bg-green-400 transition duration-300 rounded-md shadow-lg w-full my-5 p-2"
        >
          Add Task
        </button>
      </div>
    </div>
  )
}
