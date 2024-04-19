import Navbar from './components/Nav/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';


function App() {

  const className = {};
  return (
    <div className="w-full bg-gradient-to-br from-purple-200 to-sky-200 dark:bg-gradient-to-br dark:from-purple-500 dark:to-pink-500 flex justify-center ">
      <div className=' w-[95%] sm:w-[100%] sm:p-[50px] pb-[60px] overflow-x-hidden  md:h-[100vh] text-black dark:text-white' style={{
        /* Hide the scrollbar */
        scrollbarWidth: 'none', /* Firefox */

      }}>
        <div>

          <Navbar className="mt-[10px] sm:mt-[0px]" />

        </div>

        <div className='flex flex-col sm:flex-row sm:justify-center w-full px-[10px] sm:px-[50px] gap-4 my-8 sm:mb-0 sm:mt-16'>
          <div className='min-w-[90%] sm:max-h-[760px] sm:min-w-[25%] 
           bg-white text-black overflow-hidden
            dark:text-white dark:bg-black  rounded-[14px]'>
            <Sidebar />
          </div>
          <div className='w-[100%] sm:min-w-[75%] min-h-[50px] sm:max-h-[760px] rounded-[15px]
           bg-white  text-black dark:bg-black dark:text-white 
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
