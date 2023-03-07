import React from 'react'
import {TiTick} from "react-icons/ti";
import { Link } from 'react-router-dom';
const ChannelCard = ({ channelDetail}) => {
  console.log(channelDetail)
  return (
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <div className=' h-72 w-72 flex justify-center flex-col items-center rounded-lg shadow-xl cursor-pointer '>
      <img className=' h-52 w-72 rounded-full' src={channelDetail?.snippet?.thumbnails?.high?.url} alt="Youtube Image"/> 
      <span className='flex mt-5 items-center'>{channelDetail?.snippet?.title.slice(0,30)} <TiTick className=' text-xl' /></span>
      <span>{channelDetail?.statistics?.subscriberCount} Subscribers</span>
      </div>
      </Link>
    
  )
}

export default ChannelCard