import React from 'react'
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
const Info = () => {
  const infodata = [
    {
      icon: <MdOutlinePhoneAndroid />,
      title: "Phone",
      des: "+977 9815834567"
    },
    {
      icon: <TfiEmail />,
      title: "Email",
      des: "anish@gmail.com"
    },
    {
      icon: <FaLocationDot />,
      title: "Location",
      des: "+977 9815834567"
    },
    {
      icon: <SlCalender />,
      title: "Birthday",
      des: "Dec 22, 2002"
    }
  ]
  return (
    <div className='w-[95%] md:w-[90%] bg-[#f3f6f6] dark:bg-[#1d1d1d] dark:text-[#a6a6a6] rounded-[16px] text-[#44566c] my-0 mb-[30px] sm:py-[20px] px-[15px] text-left'>
      {
        infodata.map((item, index) => (
          <div key={index} className='flex  sm:justify-start sm:items-center gap-[10px] sm:py-[10px] text-left text-[#a6a6a6]'>
            <div className=' text-[#e93b81] flex items-center text-[22px] '>
              {item.icon}
            </div>
            <div>
              <span className='text-[#44566c] dark:text-[#a6a6a6] text-[12px] line-height-[18px] mt-0 mb-3 text-left capitalize'>
                {item.title}
              </span>
              <p className="text-black dark:text-white text-[12px] sm:text-[14px] place-self-auto leading-[24px] text-left capitalize">
                {item.des}
              </p>

            </div>

          </div>

        ))
      }
    </div>


  )
}

export default Info

