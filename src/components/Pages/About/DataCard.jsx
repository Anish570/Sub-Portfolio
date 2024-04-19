import React from 'react'

const DataCard = ({ data }) => {
  return (
    <div className="w-[100%] max-h-[170px] sm:max-h-[200px] overflow-hidden overflow-y-auto border border-solid
     border-[#353535] rounded-lg text-gray-400 flex gap-[10px] items-start sm:gap-[20px] ]
      mb-[15px] sm:mb-[30px] p-[10px] sm:p-[20px] ">
      <div className='mt-[6px]'>
        {data.icon}
      </div>
      <div>
        <div className="text-black dark:text-white text-lg font-medium  text-[33px] mb-[4px] sm:mb-[10px] capitalize">
          {data.title}
        </div>
        <div className='text-[12px] sm:text-[15px] sm:font-[500]  text-[#44566c]'>
          {data.desc}
        </div>
      </div>
    </div>

  )
}

export default DataCard