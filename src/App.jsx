
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookmarks]=useState([])
  const [readingTime,setReadingTime]=useState(0)

  const handleAddToBookMark=(blog)=>{
    const newBookmark=[ ...bookmarks , blog]
    setBookmarks(newBookmark);
  }

  const handleMarkAsRead=time=>{
    const newReadingTime=readingTime+time;
    setReadingTime(newReadingTime);
  }

  return (
    <>
      
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookMark={handleAddToBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
      
    </>
  )
}

export default App
