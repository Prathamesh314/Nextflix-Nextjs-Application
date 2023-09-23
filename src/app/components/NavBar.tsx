"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { UserButton } from "@clerk/nextjs";
import { FetchFromApi } from './constants/FetchFromApi';

function NavBar() {

    
    const [SearchTerm, setSearchTerm] = useState<any>('');
    
    const handleOnSubmit = async () =>{
        const data = await FetchFromApi('12','title','all',SearchTerm);
        console.log(data)
    }

  return (
    <div className='flex w-full h-24 items-center justify-between bg-blue-950'>
        <div className='flex p-2'>
            <Image src="/logo.png" alt="logo" width={80} height={30} className='rounded-xl cursor-pointer ml-3 hover:animate-bounce transition-all'/>
            <h2 className='font-sans mt-5 font-semibold ml-2 text-[28px] italic cursor-pointer hover:text-gray-400 hover:animate-ping transition-all'>Nextflix</h2>
        </div>
        <div className='flex mt-2'>
            <div className='flex items-center justify-center mr-8'>
                <input type='text' className='w-[320px] font-serif rounded-2xl p-2 text-black' placeholder='Search...' onChange={(e)=>setSearchTerm(e.target.value)}/>
                <button onClick={()=>{handleOnSubmit()}}>
                    <h2 className='w-15 text-3xl p-1 mr-4 items-center hover:scale-125 rounded-2xl transition-all'>🔍</h2>
                </button>
                <UserButton afterSignOutUrl="/"/>
            </div>    
        </div>
    </div>
  )
}

export default NavBar