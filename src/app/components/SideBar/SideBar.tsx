"use client"
import React, { useState } from 'react'
import categories from '../data/categories'
import types from '../data/types'

function SideBar() {
  const [selectedIndex, setSlectedIndex] = useState<any>('');
  const [genre, setGenre] = useState<any>('');
  // console.log(selectedIndex)
  return (
    <div className="p-2">
      <div>
        <h2 className='pl-12 mb-2 italic text-[22px] font-semibold cursor-pointer'>Categories</h2>
      </div>
      <div className='grid grid-row-20 grid-flow-row mt-4'>
        {types.map((item,index)=>(
          <button key={item}  className={`row-span-1 h-10 w-50 text-lg rounded-xl mb-2 hover:bg-green-700 hover:scale-75 transition-all ${item==selectedIndex?'border-yellow-400 border-[2px] bg-green-800':'bg-purple-950'}`}
          onClick={()=>setSlectedIndex(item)}
          >
            <h2>{item}</h2>
          </button>
        ))}
      </div>
      <hr className='h-px my-2 bg-gray-200 border-1 dark:bg-gray-700'/>
      <div className='grid grid-row-20 grid-flow-row mt-4'>
        {categories.map((item,index)=>(
          <button key={item} className={`row-span-1 h-10 w-50 text-lg rounded-xl bg-purple-950 mb-2 hover:bg-red-700 hover:scale-75 transition-all ${item==genre?'border-yellow-400 border-[2px] bg-red-600':'bg-purple-950'}`}
          onClick={()=>setGenre(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
    

  )
}

export default SideBar