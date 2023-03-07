import React,{useState} from 'react'
import { BsYoutube } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { ImYoutube2 } from 'react-icons/im';
import { Link,useNavigate } from 'react-router-dom';

const Navbar = () => {

  const [searchTerm,setSearchTerm]= useState('')
  const navigate= useNavigate();


  function handleSubmit(e){
    e.preventDefault();

    if(searchTerm!=='')
    navigate(`/search/${searchTerm}`)

  }


  return (
    <section className='bg-black border-4 border-red-800 overflow-hidden w-full flex justify-between items-center px-5 py-2  fixed '>
        <span className='text-4xl cursor-pointer flex justify-center items-center text-red-700'><Link to='/'><BsYoutube className='cursor-pointer mr-1'/></Link><ImYoutube2 className=' text-white text-6xl' /></span>
        <form onSubmit={handleSubmit} className='w-1/2 relative md:w-1/4 '>
        <input 
        spellCheck="false" 
        className='w-full mr-10 rounded-md pl-6 pr-12 py-1 ' 
        value={searchTerm}
        onChange={(e)=>{
            setSearchTerm(e.target.value)
        }}
        />
       <button> <BiSearchAlt className=' text-red-700 pointer-events-none absolute w-11 top-2 right-3'  /> </button>
        </form>
    </section>
  )
}

export default Navbar