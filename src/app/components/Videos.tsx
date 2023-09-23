import React ,{useState} from 'react'
import { FetchPostersFromApi } from './constants/FetchPostersFromApi';

const Videos =  ({videos}:{videos:any}) => {
  const [posters, setposters] = useState<any>();
  FetchPostersFromApi("The Avengers").then((data)=>setposters(data));
  console.log(posters)
  const videolist = videos.result;
  return (
    <div>
      <div className='flex flex-wrap gap-2'>
        {videolist.map((item:any,index:any)=>(
          <div key={index}>
            {item.title}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Videos