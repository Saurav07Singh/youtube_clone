

import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = ({ video :{id:{videoId},snippet }}) => {

  if(!videoId) return "Loading"
  return (
    
    
      <Link to={`/video/${videoId}`}>
      <div key={videoId} className=' h-72 w-72 border-4 rounded-lg shadow-xl cursor-pointer '>
      <img src={snippet?.thumbnails?.high?.url} alt="Youtube Image"/> 
      <p>{snippet?.title.slice(0,60)}</p>
      </div>
      </Link>
     
    
  )
}

export default VideoCard
