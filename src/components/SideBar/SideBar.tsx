"use client"
import React, { useEffect, useState } from 'react'
import categories from '../data/categories'
import types from '../data/types'
import category_ids from '../data/category_ids';
import { FetchFromApi } from '../constants/FetchFromApi';
import Loader from '../Loader';
import Feed from '../Feed/Feed';

function SideBar() {
  const [selectedIndex, setSlectedIndex] = useState<any>('Movie');
  const [genre, setGenre] = useState<any>('Action');
  const [videos, setVideos] = useState([]);

  let val = "";


  for (const [key, value] of Object.entries(category_ids)) {
    if (genre === key) {
      val = value
      break;
    }

  }
  let lc = "all"
  if (selectedIndex == "Web Series") {
    lc = "series"
  } else if (selectedIndex == "Movie") {
    lc = "movie"
  }

  useEffect(() => {
    FetchFromApi(val, "filters", lc, "")
      .then((data) => {
        setVideos(data)
        
      })
      console.log("Hello");
  }, [genre]);

  
  

  return (
    <div className="p-2 flex m-0 w-screen">
      <div>
        <div>
          <h2 className='pl-12 mb-2 italic text-[22px] font-semibold cursor-pointer underline decoration-wavy text-white'>Categories</h2>
        </div>
        <div className='grid grid-row-20 grid-flow-row mt-4 '>
          {types.map((item, index) => (
            <button key={index} className={`row-span-1 h-10 w-50 text-lg rounded-xl mb-2 hover:bg-green-700 hover:scale-75 transition-all ${item == selectedIndex ? 'border-yellow-400 border-[2px] bg-green-800' : 'bg-purple-950'}`}
              onClick={() => setSlectedIndex(item)}
            >
              <h2>{item}</h2>
            </button>
          ))}
        </div>
        <hr className='h-[2px] my-2 bg-gray-900 border-1 dark:bg-gray-700' />
        <div className='grid grid-row-20 grid-flow-row mt-4'>
          {categories.map((item, index) => (
            <button key={index} className={`row-span-1 h-10 w-50 text-lg rounded-xl bg-purple-950 mb-2 hover:bg-red-700 hover:scale-75 transition-all ${item == genre ? 'border-yellow-400 border-[2px] bg-red-600' : 'bg-purple-950'}`}
              onClick={() => setGenre(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className='pl-5 mt-0 p-0 w-full'>
          {videos.length==0?(<Loader/>):(<Feed videos={videos} />)}
      </div>
    </div>


  )
}

export default SideBar