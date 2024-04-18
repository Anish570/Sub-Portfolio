import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuItems = ({ data, onClose }) => {
  return (
    <div >
      <ul>
        <li>
          <NavLink
            onClick={onClose}
            to={data.hrefto}
            className={({ isActive }) => `${isActive ? "text-blue-500" : ""}`}
          >
            <div className='flex w-[90%] items-center gap-2 hover:text-[#1b74e4] 
              text-[13px] font-black hover:font-medium 
              transition-all ease-in-out duration-[0.3s]
               py-[5px] pl-[40px] text-left capitalize'>
              <div className='text-[20px] '> {data.icon}</div>
              <p className=' '>{data.title}</p>
            </div>
          </NavLink>
          <div className="">
            {/* Content goes here */}
          </div>

        </li>
      </ul>
    </div>
  );
}

export default MenuItems;
