"use client"
import axios from 'axios';
import React,{ useEffect, useState } from 'react'
import Image from 'next/image';


const VideoCard = ({title}:{title:string}) => {
  const [posters, setposters] = useState<any>('');
  useEffect(()=>{
    axios.get(`https://www.omdbapi.com/?t=${title}&apikey=de71f961`).then((data)=>setposters(data))
  },[title])

  const handleOnSubmit = () =>{

  }

  const getposters = ():string =>{
    if(posters.data!=undefined && posters.data.Poster!="N/A"){
      return posters.data.Poster;
    }
    return  '/defaultPoster.jpeg'
  }

  return (
    <div className='flex flex-col h-60 w-60 rounded-md hover:scale-105  transition-all bg-gray-900 shadow-lg shadow-blue-950 p-[10px] justify-around'>
        <Image src={getposters()} width='100' height='60' alt={title} className='justify-center w-[200px] h-[160px] pl-[35px]' />
        <p className='font-Mooli w-[200px] flex justify-between font-semibold pl-[25px]'>{title}</p>
    </div>
  )
}

export default VideoCard