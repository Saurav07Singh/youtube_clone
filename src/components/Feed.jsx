import React,{useState,useEffect} from 'react'

import Sidebar from './Sidebar'
import  SidebarVideos  from './SidebarVideos'
import { fetchFromApi } from '../utils/fetchFromApi'

const Feed = () => {
  const [searchTerm,setSearchTerm]= useState('New')
  const [videosData,setVideosData]=useState([])


  useEffect(()=>{
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
    .then(data=>setVideosData(data.items))
    
  },[searchTerm])

  return (
    <section className='flex pt-20 max-h-screen '>
      <Sidebar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <SidebarVideos videosData={videosData}  searchTerm={searchTerm}/>
    </section>
  )
}

export default Feed