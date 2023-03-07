import React,{useEffect,useState} from 'react'
import Image from "../utils/images/landscape.jpg"
import { useParams } from 'react-router-dom'
import { fetchFromApi } from '../utils/fetchFromApi'
import ChannelCard from "./ChannelCard"
import VideoCard from "./VideoCard"
const ChannelDetail = () => {
  const {id}= useParams();
  const [channelDetail,setChannelDetail]= useState('');
  const [videoDetail,setVideoDetail]= useState([])

  useEffect(()=>{
    fetchFromApi(`channels?part=snippet&id=${id}`)
    .then(data=>setChannelDetail(data?.items[0]))
  
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
    .then(data=>setVideoDetail(data?.items))
  
  },[id])

  
  return (
    <div>
      <section className=' w-full border-4 h-56'><img className='h-full w-full' src={Image}/></section>
      <section className=' flex justify-center items-center -mt-20 mb-10'> 
        <ChannelCard channelDetail={channelDetail} />
      </section>
      <section className=' flex justify-center gap-2 flex-wrap'>
        {videoDetail!=undefined? videoDetail.map(video=><VideoCard video={video} />):""}
      </section>
 
    </div>
  )
}

export default ChannelDetail