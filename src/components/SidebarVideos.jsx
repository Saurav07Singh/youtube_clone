import React from 'react'
import VideoCard from "./VideoCard"
import ChannelCard from "./ChannelCard"


const SidebarVideos = ({videosData,searchTerm}) => {
    console.log(videosData)
  return (
    <div className='border-4 justify-center flex gap-3 flex-wrap flex-1 overflow-y-auto'>
      {videosData.map((video,idx)=>{
        return (
          video.id.videoId?<VideoCard video={video} />:<ChannelCard channelDetail={video}/>
        )
      }
      )}
     
    </div>
  )
}

export default SidebarVideos