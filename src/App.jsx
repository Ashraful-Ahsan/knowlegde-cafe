
import './App.css'
import Blog from './Components/Blog'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {


  return (
    <>
      
      <Header></Header>
      <div className='md:flex'>
      <Blog></Blog>
      <Bookmarks></Bookmarks>
      </div>
      
    </>
  )
}

export default App
