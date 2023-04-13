import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

import  SidebarVideos  from './SidebarVideos'
import { fetchFromApi } from '../utils/fetchFromApi'

const SearchDetail = () => {

  const {searchTerm}= useParams();
  console.log(searchTerm)
  // const [searchTerm,setSearchTerm]= useState('New')
  const [videosData,setVideosData]=useState([])


  useEffect(()=>{
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
    .then(data=>
       setVideosData(data.items)
    
      )
    
  },[searchTerm])

 // console.log(videosData)

  return (
    <main className='flex  h-[calc(100vh-84px)]'>
      {/* <Sidebar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/> */}
      <SidebarVideos videosData={videosData}  searchTerm={searchTerm}/>
    
    </main>
  )
}

export default SearchDetail