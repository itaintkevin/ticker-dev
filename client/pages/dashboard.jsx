import { useEffect } from 'react'
import Task from '@/components/Tasks/Task'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import NewButton from '@/components/Tasks/NewTaskButton'
import NewTask from '@/components/Tasks/AddNewTask'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { getTasks, reset } from '../redux/tasks/taskSlice'

export default function Dashboard() { 
  const router = useRouter();
  const dispatch = useDispatch();

  const { user } = useSelector( (state) => state.auth );
  
  const { tasks, isLoading, isError, message } = useSelector( (state) => state.tasks )

  useEffect(() => {
    if(isError) {
      console.log(message);
    }

    if(!user) router.push('/')
    
    dispatch(getTasks())

    console.log(user)
    console.log(tasks)
    console.log("dashboard");

    return () => {
      dispatch(reset())
    }

  }, [user, router, dispatch]);

  return (
    <>
      <Head>
        <title>Ticker | Dashboard</title>
        <meta name="description" content="To-Do List Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="dark:bg-[#171717] min-h-screen w-full">
        <div className="container relative mx-auto p-5">
          <Navbar/>
          <Hero/>
          <section className='flex justify-between'>
            <div className="w-full lg:w-[65%]">
              {tasks.length > 0 && tasks !== "undefined"
                ? (tasks.map((task) => (
                    <Task key={task._id} props={task}/>
                  )))
                : (<div>
                    <h1>
                      You don't have any tasks.
                    </h1>
                    <p>
                      Create new tasks to be able to see them.
                    </p>
                  </div>
                  )
              }
            </div>
            <div className="hidden lg:block lg:min-w-[30%]">
              <NewTask/>
            </div>
          </section>
          <NewButton/>
        </div>
      </main>
    </>
  )
}
