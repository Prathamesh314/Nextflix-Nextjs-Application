"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { UserButton } from "@clerk/nextjs";
import { useRouter } from 'next/navigation';
import favicon from '../app/favicon.ico'

function NavBar() {

    const navigate = useRouter()
    const [SearchTerm, setSearchTerm] = useState<any>('');
    
    const handleOnSubmit = () =>{
        navigate.push(`/search/${SearchTerm}`)
    }

    const takeToHomePage = () =>{
        navigate.push('/')
    }

  return (
    <div className='flex w-full h-24 items-center justify-between bg-gradient-to-r  from-gray-950 via-blue-950 to-red-950 shadow-md border-b-2'>
        <div className='flex p-2'>
            <Image src={favicon} alt="logo" width={70} height={30} className='rounded-xl cursor-pointer ml-3 hover:animate-bounce transition-all'  onClick={takeToHomePage}/>
        </div>
        <div className='flex mt-2'>
            <div className='flex items-center justify-center mr-8'>
                <div className='flex bg-white rounded-lg mr-3'>
                    <input type='text' className='block sm:w-[300px] font-serif rounded-2xl p-2 text-black' placeholder='Search...' onChange={(e)=>setSearchTerm(e.target.value)}/>
                    <button onClick={()=>{handleOnSubmit()}}>
                        <h2 className='w-15 text-3xl p-1 mr-4 items-center hover:scale-125 rounded-2xl transition-all'>🔍</h2>
                    </button>
                </div>
                
                <UserButton afterSignOutUrl="/"/>
            </div>    
        </div>
    </div>
  )
}

export default NavBar