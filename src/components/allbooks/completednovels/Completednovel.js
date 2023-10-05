import React , {useEffect, useContext} from 'react'
import Completebook from './Completebook'
import bookContext from '../../../context/books/bookContext'
import { useNavigate } from 'react-router-dom'

const Completednovel = () => {

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
      <h2 className='mb-4'>Completed Novel</h2>
      <div className='row'>
        {books.map ((book) => {
          return <Completebook key={book._id} book={book} />
        })}
      </div>
    </div>
  )
}

export default Completednovel