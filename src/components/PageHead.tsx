import React from 'react'
import { Link } from 'react-router-dom'

const PageHead = ({ pageName,link }) => {
  return (
    <div className='bg-[#2B2B2B] px-6 sm:px-12 md:px-10 lg:px-32 xl:px-68 pb-8 pt-12 md:pb-12 md:pt-24'>
      <p className='text-[50px] md:text-[60px] font-bold'>{pageName}</p>
      <p>
        <Link to={'/'} className='font-bold'>Home</Link> {"-->"} <Link to={link} className='text-gray-300'>{pageName}</Link>
      </p>
    </div>
  )
}

export default PageHead
