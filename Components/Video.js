import React from 'react'
import ReactPlayer from 'react-player'


const Video = () => {
   
  return (
    <div className='w-full p-4'>
   <ReactPlayer width={'100%'}  height={'100%'} url={'alphamsa.mp4'}  controls={true}/>
    </div>
  )
}

export default Video