import React from 'react'
import Videos from '../Videos'

function Feed({videos}:{videos:any}) {

  return (
    <div className='flex flex-col'>
      <div>
        <h2 className='text-[24px] font-semibold italic m-3 text-white underline decoration-wavy'>Feed</h2>
      </div>
      <div>
        <div className='flex'>
          <Videos videos={videos}/>
        </div>
      </div>
    </div>
  )
}

export default Feed