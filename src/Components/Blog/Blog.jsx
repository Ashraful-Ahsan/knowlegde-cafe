import PropTypes from 'prop-types';
import Blogs from '../Blogs';
import { FaBookmark  } from '../../../node_modules/react-icons/fa'


const Blog = ({ blog, handleAddToBookMark ,handleMarkAsRead}) => {
    
  const { title, cover_image , author, author_image, reading_time, posted_date, hashtags} = blog;

  return (
    <div className='mb-20 space-y-3'>
    <img className='w-[900px] h-[600px] mb-8' src={cover_image} alt={`cover picture of title ${title}`}/>
    <div className='flex justify-between mb-2 '>
        <div className='flex'>
        <img className='w-14 h-14 rounded-full' src={author_image} alt="" />
        <div className='ml-6'>
        <h3 className='text-2xl'>{author}</h3>
        <p>{posted_date}</p>
        </div>

        </div>
        <div>
        <span>{reading_time} min read</span>
        <button onClick={()=>handleAddToBookMark(blog)}  className='ml-2 text-red-600 text-2xl'><FaBookmark></FaBookmark></button>
        </div>
    </div>
    <h2 className='text-4xl'>{title}</h2>
    <p>
        {
            hashtags.map((hash,idx)=><span key={idx}><a href="">{hash}</a></span>)
        }
    </p>
    <button onClick={()=>handleMarkAsRead(reading_time)} className='text-purple-800 font-bold underline '>Mark As Read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookMark: PropTypes.func,
  handleMarkAsRead: PropTypes.func

};

export default Blog;
