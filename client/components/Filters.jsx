

export default function Filters() {
  return (
    <div>
        <h3 className="text-2xl font-base font-[nunito] border-b border-neutral-300 mb-3 pb-1">
          Choose Filter:
        </h3>
        <div className="flex my-2">
          <p className="text-lg font-medium mr-2">Priority:</p>
          <p className="border-2 border-green-300 hover:bg-green-400 transition duration-300 text-md font-semibold rounded-md px-3 mx-1 shadow-md h-max">Low</p>
          <p className="border-2 border-yellow-200 hover:bg-yellow-300 transition duration-300 text-md font-semibold rounded-md px-3 mx-1 shadow-md h-max">Medium</p>
          <p className="border-2 border-red-300 hover:bg-red-400 transition duration-300 text-md font-semibold rounded-md px-3 mx-1 shadow-md h-max">High</p>
        </div>
        <div className="flex">
          <p className="text-lg font-medium mr-4">Status:</p>
          <p className="border-2 border-green-300 hover:bg-green-400 transition duration-300 text-md font-semibold rounded-md px-3 mx-1 shadow-md h-max">To Do</p>
          <p className="border-2 border-yellow-200 hover:bg-yellow-300 transition duration-300 text-md font-semibold rounded-md px-3 mx-1 shadow-md h-max">Doing</p>
          <p className="border-2 border-red-300 hover:bg-red-400 transition duration-300 text-md font-semibold rounded-md px-3 mx-1 shadow-md h-max">Done</p>
        </div>
    </div>
  )
}
