import { useState } from "react"
import Navbar from "../components/Navbar"
import Head from 'next/head'
import Signin from "@/components/Auth/Signin"
import Signup from "@/components/Auth/Signup"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Home() {
  const [authComponent, setAuthComponent] = useState({
    signin: true,
    signup: false
  });
  
  const handleAuth = () => {

  }

  return (
    <>
        <Head>
            <title>Ticker | Login</title>
            <meta name="description" content="To-Do List Application" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="dark:bg-[#171717] w-full">
        <ToastContainer/>
        <div className="flex flex-col container h-screen mx-auto p-5">
          <Navbar />
          <div className="flex items-center justify-center h-full">
            {
              authComponent.signin == true
                ? <Signin/>
                : <Signup/>
            }
          </div>
        </div>
      </main>
    </>
  )
}
