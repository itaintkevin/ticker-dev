import { useState } from 'react'

export default function NewTaskButton() {

  const [addNewTask, setAddNewTask] = useState(false);

  const handleClick = () => {
    addNewTask
      ? setAddNewTask(false)
      : setAddNewTask(true)
  }

  return (
    <button onClick={handleClick} className="fixed lg:hidden bottom-8 right-8 bg-green-400 rounded-full drop-shadow-2xl p-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </button>
  )
}
