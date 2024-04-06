import React from 'react'

const DataCard = ({data}) => {
  return (
    <div className=" w-[90%] md:w-[338px] md:h-[200px] border border-solid
     border-[#353535] rounded-lg text-gray-400 flex gap-[20px] grid-area-auto leading-[28px]
      mb-[30px] p-[20px] ">
        <div>
            {data.icon}
        </div>
        <div>
           <div className="text-black dark:text-white text-lg font-medium  text-[33px] my-0 mb-[10px] capitalize">
           {data.title}
           </div>
            <div className='text-[#44566c]'>
            {data.desc}
            </div>
        </div>
    </div>

  )
}

export default DataCard