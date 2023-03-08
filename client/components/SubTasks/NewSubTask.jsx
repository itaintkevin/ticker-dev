import { RxDragHandleDots2, RxTrash } from 'react-icons/rx'
import { MdEdit } from 'react-icons/md'
import { TiTick } from 'react-icons/ti'
import { useState } from 'react'

export default function NewSubTask() {
  
    const [createNewSubTask, setCreateNewSubTask] = useState(false);
    const [newSubTask, setNewSubTask] = useState("")

    const handleCreate = () => {
    }

    const handleNewSubTask = (e) => {
        setNewSubTask(e.target.value)
    }

  return (
    <div className="flex items-center justify-between dark:bg-neutral-200/10 bg-neutral-200 rounded-md p-2 my-3">
        <div className="flex items-center w-full">
            <input 
                className='text-md font-semibold rounded-md dark:bg-neutral-100/10 bg-neutral-100 px-2 py-1 w-full' 
                placeholder="Add a new subtask." 
                value={newSubTask}
                onChange={handleNewSubTask}
            />
        </div>
        <div className='flex items-center justify-end w-max ml-2'>
            <div className='flex items-center justify-center dark:bg-neutral-200/20 bg-neutral-400 rounded-md h-8 w-8'>
                <button onClick = {handleCreate}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
  )
}
