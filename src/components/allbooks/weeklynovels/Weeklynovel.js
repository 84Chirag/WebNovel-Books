import React, { useContext, useEffect } from 'react'
import Weekbook from './Weekbook'
import bookContext from '../../../context/books/bookContext'
import { useNavigate } from 'react-router-dom'

const Weeklynovel = () => {
  const navigate = useNavigate();
  const { books, getbooks } = useContext(bookContext);
  useEffect (()=>{
    if (localStorage.getItem('token')) {
      getbooks();
    } else {
      navigate('/login')
    }
  },[])
  return (
    <div className='container my-4'>
      <h2 className='mb-4'>Weekly Novel</h2>
      <div className='row'>
        {books.map ((book)=>{
          return <Weekbook key={book._id} book={book} />
        })}
      </div>
    </div>
  )
}

export default Weeklynovel