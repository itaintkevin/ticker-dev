import { useState, useEffect } from 'react';
import { BsClockHistory } from 'react-icons/bs'
import { createAvatar } from '@dicebear/core';
import { adventurer } from '@dicebear/collection';
import Image from 'next/image';
import {useTheme} from "next-themes";
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../redux/auth/authSlice'
import { useRouter } from 'next/router'

export default function Navbar() {

  const router = useRouter();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  
	const [dataUri, setDataUri] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [userMenu, setUserMenu] = useState(false);

  const {systemTheme , theme, setTheme} = useTheme();

  const renderThemeChanger= () => {

    const currentTheme = theme === "system" ? systemTheme : theme ;

    if(currentTheme === "dark"){
      return (
        <button onClick={() => setTheme('light')} className='flex justify-center items-center h-14 w-14 dark:bg-neutral-200/10 bg-neutral-300 hover:bg-neutral-400 transition duration-300 rounded-full'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="sun w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>
        </button>
      )
    }

    else {
      return (
        <button onClick={() => setTheme('dark')} className='flex justify-center items-center h-14 w-14 dark:bg-neutral-200/10 bg-neutral-300 hover:bg-neutral-400 transition duration-300 rounded-full'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="moon w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
        </button>
      )
    }
 };

	useEffect(() => {
		const date = new Date();
		const avatar = createAvatar(adventurer, {
			seed: `${date.getTime()}`,
		});
		const uri = avatar.toDataUriSync();
		setDataUri(uri);
	}, []);

  const handleTheme = () => {
    darkMode
      ? setDarkMode(false)
      : setDarkMode(true);
  }

  const handleUserMenu = () => {
    userMenu
      ? setUserMenu(false)
      : setUserMenu(true);
  }

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    router.push('/');
  }

  return (
    <div className='flex items-center justify-between'>
        <div className="flex items-center">
            <span className='text-3xl sm:text-4xl font-[rubik]'>
                ticker
            </span>
            <span className="mx-2">
                <BsClockHistory size={30}/>
            </span>
        </div>
        <div className='relative flex items-center'>
          <div className='mr-2'>
            {renderThemeChanger()}
          </div>
          <button onClick={handleUserMenu} className='flex items-center justify-center h-14 w-14 dark:bg-neutral-200/10 bg-neutral-300 hover:bg-neutral-400 transition duration-300 object-contain rounded-full'>
            <Image
              className='h-auto w-full'
              src={dataUri}
              alt='Avatar'
              width={100}
              height={100}
            />
          </button>
          {userMenu
              ? <button onClick={handleLogout} className='text-md font-semibold bg-red-400 hover:bg-red-500 rounded-full p-4 ml-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
                  </svg>
                </button>
              : null 
          }
        </div>
    </div>
  )
}
