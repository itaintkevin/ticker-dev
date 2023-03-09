import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { toast } from 'react-toastify'
import { register, reset } from '../../redux/auth/authSlice'
import { useRouter } from 'next/router'
import { setLogin } from '../../redux/auth/authSlice'

export default function Signup() {

    const router = useRouter();
    const dispatch = useDispatch(); 

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    })

    const { name, email, password, password2 } = formData;

    useEffect(() => {
        if(isError) {
            toast.error(message);
        }

        if(isSuccess || user) {
            router.push('/dashboard')
        }

        dispatch(reset());
        console.log("signup");
    }, [user, isError, isSuccess, message, router, dispatch]) 

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSignIn = () => {
        dispatch(setLogin());
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (password !== password2) {
            toast.error("Passwords do not match");
        } else {
            const userData = {
                name,
                email,
                password
            }
            
            dispatch(register(userData));
        }
    }

  return (
    <div className="w-[300px]">
    <h1 className="text-4xl text-center font-[rubik]">
        Hey, Welcome!
    </h1>
    <p className="text-md text-center my-1.5">
        Please enter your details.
    </p>
    <form onSubmit={onSubmit}>
        <div className="flex flex-col w-max my-5">
            <label htmlFor="name">Name</label>
            <input 
                className="border-2 border-white/20 focus:border-white/60 transition duration-300 outline-none bg-[#171717] rounded-md w-[300px] py-2 px-5 mt-2" 
                id="name"
                name="name" 
                type="text" 
                required 
                value={name}
                placeholder="Enter your name"
                onChange={onChange}
            />
        </div>
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
        <div className="flex flex-col w-max my-5">
            <label htmlFor="password2">Confirm Password</label>
            <input 
                className="border-2 border-white/20 focus:border-white/60 transition duration-300 outline-none bg-[#171717] rounded-md w-[300px] py-2 px-5 mt-2" 
                id="password2"
                name="password2" 
                type="password" 
                required 
                value={password2}
                placeholder="Enter your password"
                onChange={onChange}
            />
        </div>
        <button 
            className="text-xl border-2 border-green-400 hover:bg-green-400 hover:text-[#171717] transition duration-500 font-semibold text-center rounded-md w-full py-2 px-5 my-2.5"
        >
            Sign Up
        </button>
    </form>
    <p className="text-center mt-2">
        Have an account?&nbsp; 
        <button onClick={handleSignIn} type="submit" className="text-green-400">
            Sign in.
        </button>
    </p>
</div>
  )
}
