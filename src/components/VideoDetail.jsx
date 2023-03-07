import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import {fetchFromApi} from "../utils/fetchFromApi"
import ReactPlayer from 'react-player'
import VideoCard from "./VideoCard"
const VideoDetail = () => {
  const [videosData,setVideosData]= useState(null)
  const [relatedVideos,setRelatedVideos]= useState([])
  const {id} = useParams();


useEffect(()=>{
fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
.then(data=>setVideosData(data?.items[0]))

fetchFromApi(`search?part=snippet&relatedVideos=${id}&type=video`)
  .then(data=>setRelatedVideos(data.items))

},[id])

if(!videosData?.snippet) return "Loading..."

const{snippet:{channelId,channelTitle,title},statistics:{likeCount,viewCount}}= videosData


//console.log("RelatedVideos:-"+relatedVideos)

if(relatedVideos?.length===0) return "Loading..."
  return (
  
    <section className='pt-24  w-screen h-screen border-4 overflow-x-hidden md:flex md:gap-5'>
    <div className='h-full w-screen md:w-3/4'>
      <ReactPlayer height="80%" width="100%"  url={`https://www.youtube.com/watch?v=${id}`}  controls={true}/>
    <h1>{title}</h1>
    <span className=' flex justify-between items-center'>
    <Link to={`/channel/${channelId}`}>{channelTitle}</Link>
    <div className=' flex-row'>
    <p>{likeCount} likes</p>
    <p>{parseInt(viewCount).toLocaleString()} views</p>
    </div>
    </span>
    </div>
    <div className='h-3/4 w-screen md:h-full md:w-1/4 md:flex md:flex-col flex flex-row gap-5 overflow-x-auto   overflow-y-scroll'>
    {relatedVideos?.map(vid=><VideoCard video={vid}/>)  }
    </div>
    </section>
  
  )
}

export default VideoDetail