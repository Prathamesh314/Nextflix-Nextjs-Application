import React, { use } from 'react'
import VideoCard from './VideoCard';

const Videos =  ({videos}:{videos:any}) => {
  
  const videolist = videos.result;
  return (
    <div>
      <div className='flex flex-wrap gap-2'>
        {videolist.map((item:any,index:any)=>(
          <div key={index} className='p-2'>
            <VideoCard title={item.title} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Videos