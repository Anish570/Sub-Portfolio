import React from 'react'
import DataCard from './DataCard'
import { IoLibrary } from "react-icons/io5";
import { RiCodeSSlashFill } from "react-icons/ri";
import { GrCodeSandbox } from "react-icons/gr";
import { RiFlutterFill } from "react-icons/ri";
import Client from './Client';

const About = () => {
  const carddata = [
    {
      icon: <IoLibrary />,
      title: "Ui/Ux Design",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat."
    },
    {
      icon: <RiFlutterFill />,
      title: "App Development",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat."
    },
    {
      icon: <GrCodeSandbox />,
      title: "Software Development",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat."
    },
    {
      icon: <RiCodeSSlashFill />,
      title: "Web Development",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat."
    }
  ]
  return (
    <div className='w-full'>
      <div className='w-full p-[10px]  sm:pt-[30px] sm:px-[60px]'>
        <div className='flex flex-col items-center '>
          <h2 className="text-black dark:text-white text-[26px] sm:text-[36px]  font-bold  my-1 sm:my-0 sm:mb-[15px] capitalize">
            About
          </h2>
          <p className='text-[12px] sm:text-[15px] sm:font-[500] mb-[16px]'>
            I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
          </p>
          <p className='text-[12px] sm:text-[15px] sm:font-[500]  mb-[16px]'>
            My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
          </p>
        </div>

        <div className="flex flex-col items-center mb-[10px] w-[100%] sm:w-[100%]  text-gray-400" style={{ color: '#a6a6a6', }}>
          <h3 className="text-black dark:text-white  text-[24px] font-medium leading-[36px] capitalize">
            What I Do!
          </h3>

          <div className='mt-[10px]'>
            {carddata.map((item, index) => (
              <DataCard key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
      <div className=''>
        <Client />
      </div>

    </div>
  )
}

export default About