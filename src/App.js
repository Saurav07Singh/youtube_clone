import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Feed,ChannelDetail,Navbar,SearchDetail,VideoDetail} from "./components"
import "./App.css"

const App = () => {
  return (
    <Router className="relative">
      <Navbar />
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchDetail />} />
      </Routes>
      
    </Router>
  )
}

export default App