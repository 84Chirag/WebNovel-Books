import React from 'react'
import TopNovels from './topnovels/TopNovels'
import Weeklynovel from './weeklynovels/Weeklynovel'
import Completednovel from './completednovels/Completednovel'

const AllBooks = () => {
  return (
    <>
    <div className='container'>
    <TopNovels />
    <Weeklynovel />
    <Completednovel />
    </div>
    </>
    
  )
}

export default AllBooks