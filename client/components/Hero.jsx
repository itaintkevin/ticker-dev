import Filters from "./Filters";
import { useSelector } from 'react-redux'

export default function Hero() {
  const { user } = useSelector(
    (state) => state.auth
  );

  return (
    <div className="flex flex-col lg:flex-row justify-center lg:items-center justify-between h-[30%] lg:h-[20%] mt-8 mb-3">
      <div className="w-full lg:w-[65%]">
        <h1 className="flex flex-wrap text-4xl sm:text-5xl font-[rubik]">
          <div>Hello,&nbsp;</div>
          <div>{user && user.name}</div>
        </h1>
        <p className="text-md sm:text-lg mt-3 mb-1">
          25th February, 2023 | 06:50 PM
        </p>
        <p className="text-md sm:text-lg">
          You have 7 tasks to complete.
        </p>
      </div>
      <div className="min-w-[30%] my-5 lg:pl-5">
        <Filters/>
      </div>
    </div>
  )
}
