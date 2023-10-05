import React, { useContext, useEffect } from 'react'
import Topbook from './Topbook'
import bookContext from '../../../context/books/bookContext'
import { useNavigate } from 'react-router-dom'

const TopNovels = () => {

  const navigate = useNavigate();
  const { getbooks, books } = useContext(bookContext);
  // const { items, getbooks1} = useContext(bookContext);
  // console.log(items)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getbooks();
      // getbooks1();
    } else {
      navigate('/login')
    }
    // eslint-disable-next-line
  }, [])

  // Check if items is an array before mapping over it
  // if (!Array.isArray(items.items)) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className='container my-4'>
      <h2 className='mb-2'>Top Novel</h2>
      <div className='row'>
        {books.map((book) => {
          return <Topbook key={book._id} book={book} />
        })}

        {/* {items.items.map((item) => {
          return <Topbook key={item.novelId} item={item} />
        })} */}
      </div>
    </div>

  )
}

export default TopNovels