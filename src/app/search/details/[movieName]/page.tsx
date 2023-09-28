import { FetchPostersFromApi } from '@/components/constants/FetchPostersFromApi';
import axios from 'axios';
import Image from 'next/image';
import React,{ useEffect, useState } from 'react'

const DescriptionPage = ({params}:{params:any}) => {
  const title = params.movieName;

  const [details, setDetails] = useState<any>();
  useEffect(()=>{
    axios.get(`https://www.omdbapi.com/?t=${title}&apikey=de71f961`).then((data)=>setDetails(data))
  },[title])

  const getposters = ():string =>{
    if(details.data!=undefined && details.data.Poster!="N/A"){
      return details.data.Poster;
    }
    return  '/defaultPoster.jpeg'
  }
  console.log(details)
  return (
    <div className='w-full flex justify-center'>
        <div className='bg-gray-700 shadow-lg shadow-gray-700/100 rounded-md'>
          <Image src={getposters()} alt="Movie Poster" width={80} height={80}/>
        </div>
        <div>
          
        </div>
    </div>
  )
}

export default DescriptionPage