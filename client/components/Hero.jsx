import Filters from "./Filters";
import { useSelector } from 'react-redux'
import format from 'date-fns/format'

export default function Hero() {
  const { user } = useSelector( (state) => state.auth );
  const { tasks } = useSelector( (state) => state.tasks );

  const userName = user !== null ? user.name : "";
  const numberOfTasks = tasks.length;
  const date = new Date();
  const formattedDate = format(date, `PPPP`)

  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-between lg:items-center h-[30%] lg:h-[20%] mt-8 mb-3">
      <div className="w-full lg:w-[65%]">
        <h1 className="flex flex-wrap text-4xl sm:text-5xl font-[rubik]">
          <div>Hello,&nbsp;</div>
          <div>{user && userName.charAt(0).toUpperCase() + userName.slice(1)}</div>
        </h1>
        <p className="text-md sm:text-lg mt-3 mb-1">
          {formattedDate}
        </p>
        <p className="text-md sm:text-lg">
          {`You have ${numberOfTasks} ${numberOfTasks > 1 ? 'tasks' : 'task'} to complete.`}
        </p>
      </div>
      <div className="min-w-[30%] my-5 lg:pl-5">
        <Filters/>
      </div>
    </div>
  )
}
