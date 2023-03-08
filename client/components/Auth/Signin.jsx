import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { toast } from 'react-toastify'
import { login, reset } from '../../redux/auth/authSlice'
import { useRouter } from 'next/router'

export default function Signin() {

    const router = useRouter();
    const dispatch = useDispatch(); 

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const { email, password } = formData;

        useEffect(() => {
        if(isError) {
            toast.error(message);
        }

        if(isSuccess || user) {
            router.push('/dashboard')
        }

        dispatch(reset());
        console.log("signin");
    }, [user, isError, isSuccess, message, router, dispatch]) 

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        
        const userData = {
            email,
            password
        }

        dispatch(login(userData));
    }

  return (
    <div className="w-[300px]">
    <h1 className="text-4xl text-center font-[rubik]">
        Welcome Back!
    </h1>
    <p className="text-md text-center my-1.5">
        Please enter your details.
    </p>
    <form onSubmit={onSubmit}>
        <div className="flex flex-col w-max my-5">
            <label htmlFor="email">E-mail</label>
            <input 
                className="border-2 border-white/20 focus:border-white/60 transition duration-300 outline-none bg-[#171717] rounded-md w-[300px] py-2 px-5 mt-2" 
                id="email"
                name="email" 
                type="text" 
                required 
                value={email}
                placeholder="Enter your email address"
                onChange={onChange}
            />
        </div>
        <div className="flex flex-col w-max my-5">
            <label htmlFor="password">Password</label>
            <input 
                className="border-2 border-white/20 focus:border-white/60 transition duration-300 outline-none bg-[#171717] rounded-md w-[300px] py-2 px-5 mt-2" 
                id="password"
                name="password" 
                type="password" 
                required 
                value={password}
                placeholder="Enter your password"
                onChange={onChange}
            />
        </div>
        <button 
            className="text-xl border-2 border-green-400 hover:bg-green-400 hover:text-[#171717] transition duration-500 font-semibold text-center rounded-md w-full py-2 px-5 my-2.5"
        >
            Sign In
        </button>
    </form>
    <p className="text-center mt-2">
        Don&apos;t have an account?&nbsp; 
        <button type="submit" className="text-green-400">
            Sign up.
        </button>
    </p>
</div>
  )
}
