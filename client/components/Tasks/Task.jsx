import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, getTasks } from '../../redux/tasks/taskSlice'
import NewSubTask from '../SubTasks/NewSubTask';
import SubTask from '../SubTasks/SubTask';
import format from 'date-fns/format'

export default function Cards( {props} ) {
  const date = new Date();
  const formattedDate = format(date, `mm dd yyyy`);

  const dispatch = useDispatch();
  const [dropDown, setDropDown] = useState(false);
  const [newSubTask, setNewSubTask] = useState(false);
  const [editTaskBtn, setEditTaskBtn] = useState(false);

  const handleDropDown = () => {
    dropDown 
      ? setDropDown(false)
      : setDropDown(true);
  }

  const handleNewSubTask = () => {
    handleDropDown()
    newSubTask 
      ? setNewSubTask(false)
      : setNewSubTask(true);
  }

  const handleEditTaskBtn = () => {
    handleDropDown()
    editTaskBtn
      ? setEditTaskBtn(false)
      : setEditTaskBtn(true);
  }


  return (
    <div className="shadow-xl rounded-md dark:bg-[#212121] bg-white p-5 mb-7">
      <div className="flex flex-col font-semibold border-b border-neutral-300 dark:border-neutral-300/20 pb-2">
        <div className="flex flex-col sm:flex-row justify-between my-1">
          <div className='flex flex-col sm:flex-row justify-center sm:items-center'>
            <h3 className="font-bold text-lg mr-2">
              {props.title}
            </h3>
            <div className='flex'>
              <p className={`border-2 ${props.priority == "Low" ? 'dark:border-green-300 border-green-300 hover:bg-green-300' : `${props.priority == "Medium" ? 'dark:border-yellow-300 border-yellow-300 hover:bg-yellow-300' : 'dark:border-red-400 border-red-400 hover:bg-red-400'}`} transition duration-300 text-md rounded-md px-3 mr-1 h-max`}>
                {props.priority}
              </p>
              <p className={`border-2 ${props.status == "To Do" ? 'dark:border-green-300 border-green-300 hover:bg-green-300' : `${props.priority == "Doing" ? 'dark:border-yellow-300 border-yellow-300 hover:bg-yellow-300' : 'dark:border-red-400 border-red-400 hover:bg-red-400'}`}  transition duration-300 text-md rounded-md px-3 mx-1 h-max`}>
                {props.status}
              </p>
            </div>
          </div>
          <div>
            <button className={`${editTaskBtn ? 'dark:bg-neutral-600/30 bg-neutral-400' : 'dark:bg-neutral-200/20 bg-neutral-200'} hover:bg-neutral-400 transition duration-300 p-2 rounded-lg ml-2`} onClick={handleEditTaskBtn}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>                
            </button>
            <button 
              className="dark:bg-neutral-200/20 bg-neutral-200 hover:bg-neutral-400 transition duration-300 p-2 rounded-lg ml-2" 
              onClick={() => {
                dispatch(deleteTask(props._id))
              }}
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>    
            </button>
          {
            dropDown
              ? <button className="dark:bg-neutral-200/20 bg-neutral-200 hover:bg-neutral-400 transition duration-300 p-2 rounded-lg ml-2" onClick={handleDropDown}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                  </svg>
                </button>
              : <button className="dark:bg-neutral-200/20 bg-neutral-200 hover:bg-neutral-400 transition duration-300 p-2 rounded-lg ml-2" onClick={handleDropDown}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
          }
          </div>
        </div>
        <p className="text-md font-normal my-2">
          {props.description}
        </p>
        <div className='flex flex-col sm:flex-row justify-between'>
          <div>
          <div className="flex mb-1">
                <div>
                  Created At:
                </div>
                <p className="text-green-600 ml-2">
                {format(new Date(props.createdAt), "MMMM dd, yyyy - HH:MM aaaaa'm'")}
                </p>
            </div>
            <div className="flex mb-1">
                <div>
                  Updated At:
                </div>
                <p className="text-green-600 ml-2">
                  {format(new Date(props.updatedAt), "MMMM dd, yyyy - HH:MM aaaaa'm'")}
                </p>
            </div>
          </div>
          <div className='flex items-center'>
            <div className="mr-3">
              <div className="flex mb-1">
                <div>
                  Due Date:
                </div>
                <p className="text-green-600 ml-2">
                  {format(new Date(props.dueDate), "MMMM dd, yyyy")}
                </p>
              </div>
              <div className="flex">
                <p className="mr-2">Subtasks:</p>
                <p>1 / 7 Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {
          dropDown
            ? <div className=''>
                <NewSubTask/>
                <SubTask/>
              </div>
            : null
        }
      </div>
    </div>
  )
}
