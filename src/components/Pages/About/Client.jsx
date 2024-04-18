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
            imgsrc: "https://cdn.pixabay.com/photo/2016/11/07/13/04/yoga-1805784_640.png",
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
        // bg-[#f8fbfb]
        <>
            <div className="space-y-[30px] w-[110%] h-[220px] bg-red-800  text-[#44566c] dark:bg-[#0d0d0d] dark:text-gray-400">
                <div className="text-black dark:text-white text-[24px] text-center font-medium">
                    Client
                </div>
                {/*   */}
                <div className="w-[100%] h-[95px] flex px-[30px] gap-5 overflow-x-auto scrollbar-hide scroll-smooth">

                    {
                        imgsdata.map((item, index) => (
                            //  text-center overflow-hidden  object-contain
                            <div key={index} className="img md:min-h-[95px] md:min-w-[95px]  px-[12px] " >
                                <img src={item.imgsrc} alt="" className='min-w-[65px] min-h-[55px] md:min-h-[95px] md:min-w-[85px] ' />
                            </div>
                        ))
                    }

                </div>

            </div>
            <div className='mt-[20px] flex items-center justify-center bg-white dark:text-white dark:bg-black  text-black'>
                <span>
                    © 2024 All Rights Reserved by Anishgtm.
                </span>
            </div>
        </>
    )
}

export default Client