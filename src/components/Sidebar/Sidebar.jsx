import React from 'react'
import Profile from './Profile'
import Info from './Info'
import Social from './Social'
import Downloadbtn from './Downloadbtn'

const Sidebar = () => {
  return (
    <div className={` flex flex-col items-center px-[5px] sm:px-[10px] py-[20px]  `}>
      <Profile />
      <Social />
      <Info />
      <Downloadbtn />
    </div>
  )
}

export default Sidebar