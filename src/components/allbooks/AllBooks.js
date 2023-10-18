import React, { useContext } from 'react'
import TopNovels from './topnovels/TopNovels'
import Weeklynovel from './weeklynovels/Weeklynovel'
import Completednovel from './completednovels/Completednovel'
import bookContext from '../../context/books/bookContext'
import load from '../../loading-78.gif'

const AllBooks = () => {

  const { loading } = useContext(bookContext);

  return (
    <>
      { loading ?
         (//<div>Loading...</div>
          <div>
            <img src={load} style={{width:'10vw', height:'20vh', borderRadius:'100px', background:'none', marginTop:'17%', marginLeft:'45%'}} />
          </div>
        ) : (<div className='container'>
          <TopNovels />
          <Weeklynovel />
          <Completednovel />
        </div>
        )}
    </>

  )
}

export default AllBooks