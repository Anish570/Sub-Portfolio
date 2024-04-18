import MenuItems from './components/Nav/MenuItems';
import Navbar from './components/Nav/Navbar';
import { CgProfile } from "react-icons/cg";
import { FaRegFileAlt } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { SiBlogger } from "react-icons/si";
import { RiContactsBookFill } from "react-icons/ri";
import Sidebar from './components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Footer from './components/Footer/Footer';


function App() {
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
  const showMenu = (data) => {
    setIsMenuOpen(data)
  }
  console.log("data in setIsMenuOpen", setIsMenuOpen)
  const className = {};
  return (
    <div className="w-full bg-gradient-to-br from-purple-200 to-sky-200 dark:bg-gradient-to-br dark:from-purple-500 dark:to-pink-500 flex justify-center ">
      <div className=' w-[95%] sm:w-[100%] sm:p-[50px] pb-[60px] overflow-x-hidden  md:h-[100vh] text-black dark:text-white' style={{
        /* Hide the scrollbar */
        scrollbarWidth: 'none', /* Firefox */

      }}>
        <div>
          <Navbar className="" showMenu={showMenu} />

          <div className={`${isMenuOpen ? "block h-[230px]  " : "hidden h-[-230px]"} top-[15%] transition-all ease-linear duration-[0.5s] absolute z-[11]  w-full mt-[20px] bg-gray-300 text-black pl-16 
          rounded-[12px] shadow-[#ededed] 
            text-[28px] py-[20px]
           dark:bg-[#1d1d1d] dark:text-[#a6a6a6]`}>
            {
              menuItems.map((item, index) => (
                <MenuItems key={index} data={item} />
              ))
            }
          </div>
        </div>

        <div className='flex flex-col sm:flex-row sm:justify-center w-full px-[20px] sm:px-[50px] gap-4 my-8 sm:mb-0 sm:mt-16'>
          <div className='min-w-[90%] sm:h-full sm:min-w-[25%] h-full 
           bg-white text-black overflow-hidden
            dark:text-white dark:bg-black  rounded-[14px]'>
            <Sidebar />
          </div>
          <div className='min-w-[90%]  sm:min-w-[75%] sm:h-[750px] rounded-[15px]
           bg-white relative text-black dark:bg-black dark:text-white 
           overflow-hidden scrollbar-hide sm:overflow-x-hidden sm:overflow-y-scroll '
            style={{
              scrollbarWidth: 'none',
            }}>
            <Outlet />
          </div>
        </div>

        <div className='flex items-center justify-center'>
          <Footer />
        </div>
      </div>
    </div>


  )
}

export default App
