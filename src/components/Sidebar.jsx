import React from 'react'
import data from '../utils/category'


const Sidebar = ({searchTerm,setSearchTerm}) => {
   
  return (
    <div className='  w-2/6 md:w-1/6    border-4 border-red-400  overflow-y-auto '>
    {/* <button className=' flex items-center px-2 h-12  w-full'><AiOutlineFire /><span>Trending</span></button> */}
    {data.map(cat=><button onClick={()=>setSearchTerm(cat.name)}  className={`${cat.name===searchTerm?"bg-amber-400":''} flex items-center px-2 h-12  w-full hover:bg-red-700 border-4`}>{cat.icon}<span className=' ml-6'>{cat.name}</span> </button>)}
</div>
  )
}

export default Sidebar