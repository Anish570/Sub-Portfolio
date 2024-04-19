import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import MenuItems from './MenuItems';
import { CgProfile } from "react-icons/cg";
import { FaRegFileAlt } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { SiBlogger } from "react-icons/si";
import { RiContactsBookFill } from "react-icons/ri";

const MenuHamburger = ({ showMenu }) => {
  const menuItems = [
    {
      title: "About",
      icon: <CgProfile />,
      hrefto: ""
    },
    {
      title: "Resume",
      icon: <FaRegFileAlt />,
      hrefto: "resume"
    },
    {
      title: "Works",
      icon: <MdWork />,
      hrefto: "works"
    },
    {
      title: "Blogs",
      icon: <SiBlogger />,
      hrefto: "blogs"
    },
    {
      title: "Contact",
      icon: <RiContactsBookFill />,
      hrefto: "contact"
    }
  ]
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleClick = () => {
    setIsMenuOpen((prev) => !prev)
    showMenu(isMenuOpen);
  }
  const onClose = () => {
    setIsMenuOpen((prev) => !prev)
  }
  return (
    <>
      <div className='transition-all' onClick={handleClick}>
        {isMenuOpen ? <IoClose className='text-3xl' /> : <GiHamburgerMenu className='text-3xl' />}
      </div>
      <div className={`${isMenuOpen ? "  " : "hidden "} w-[95%] top-[20%] transition-all ease-linear duration-[0.5s] absolute z-[11]  bg-gray-300 text-black pl-16 
          rounded-[12px] shadow-[#ededed] 
            text-[28px] sm:py-[20px]
           dark:bg-[#1d1d1d] dark:text-[#a6a6a6]`}>
        {
          menuItems.map((item, index) => (
            <MenuItems key={index} data={item} onClose={onClose} />
          ))
        }
      </div>
    </>
  )
}

export default MenuHamburger


