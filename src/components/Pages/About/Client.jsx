import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Client = () => {


    const imgsdata = [
        {
            imgsrc: "https://cdn.pixabay.com/photo/2015/02/02/23/58/sign-621746_640.png",
        },
        {
            imgsrc: "https://cdn.pixabay.com/photo/2014/04/02/10/47/red-304573_640.png",
        },
        {
            imgsrc: "https://cdn.pixabay.com/photo/2016/09/24/20/11/dab-1692452_640.png",
        },
        {
            imgsrc: "https://cdn.pixabay.com/photo/2017/01/13/01/22/rocket-1976107_640.png",
        },
        {
            imgsrc: "https://cdn.pixabay.com/photo/2013/07/12/17/16/esperanto-151905_640.png",
        },
        {
            imgsrc: "https://cdn.pixabay.com/photo/2014/04/02/10/16/fire-303309_640.png",
        },
        {
            imgsrc: "https://cdn.pixabay.com/photo/2014/09/23/09/02/abstract-457345_640.png"
        }

    ]
    return (

        <>
            <div className="w-full sm:pb-[20px] px-[5px] pt-[10px] text-[#44566c] dark:bg-[#0d0d0d] dark:text-gray-400">
                <div className="text-black  dark:text-white text-[18px] sm:text-[24px] text-center font-medium">
                    Client
                </div>
                {/*   */}
                <div className=" sm:h-[95px] flex sm:px-[30px] py-4  sm:gap-5 overflow-x-auto scrollbar-hide scroll-smooth">
                    {
                        imgsdata.map((item, index) => (
                            <div key={index} className="min-w-[30px] min-h-[30px] sm:min-h-[70px] sm:min-w-[70px] mx-[13px] sm:mx-[25px] " >
                                <img src={item.imgsrc} alt="" className='' />
                            </div>
                        ))
                    }

                </div>

            </div>
            <div className='m-[20px] text-center text-[12px] sm:text-[16px] bg-white dark:text-white dark:bg-black  text-black'>
                <span>
                    © 2024 All Rights Reserved by Anishgtm.
                </span>
            </div>
        </>
    )
}

export default Client