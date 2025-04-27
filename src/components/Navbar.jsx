import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
import pic from "../../public/Hikmat.png"
import {Link, link} from "react-scroll"



function Navbar() {
  const [menu, setMenu]= useState(false);
  const navItems = [
      {
        id: 1,
        text: "Home",
      },
      {
        id: 2,
        text: "About",
      },
      {
        id: 3,
        text: "Portfolio",
      },
      {
        id: 4,
        text: "Experiance",
      },
      {
        id: 5,
        text: "Contact",
      },
  ]

  return (
    <> 
    <div name="Navbar" className="max-w-screen-2x1 container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 left-0  right-0 z-50 bg-white">
    <div className="flex justify-between items-center h-16">
        <div className="flex space-x-2"> 
            <img src={pic} className="h-12 w-12 rounded-full" alt="logo" />
            <h1 className='font-semibold text-x1 cursor-pointer'>
              Hikma <span className='text-green-500 text-2xl'>T</span>
            <p className='text-sm'>Web developer</p>
            </h1>
            
        </div>
        {/* desktop navbar */}
        <div>
            <ul className='hidden md:flex space-x-8'>
              {navItems.map(({id,text})=>(
                <li className='hover:scale-105 duration-200 cursor-pointer' 
                key={id}
                > 
                 <Link to={text} 
                 smooth={true}
                 duration={500}
                 activeClass='active'> {text} </Link>
                  </li>
              ))}
            </ul>
            <div onClick={()=>setMenu(!menu)} className='md:hidden'>
              {menu? <IoIosClose size={24} />:<FiMenu size={24} />}
               </div>
        </div>
    </div>
    {/* moblie navbar */}
    {
      menu && (
        <div className='bg-white'>
        <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-4'>
          {navItems.map(({id,text}) => (
            <li 
            className='hover:scale-105 duration-200 cursor-pointer' 
            key={id}
            > 
             <Link 
             onClick={()=>setMenu(!menu)}
             to={text} 
             smooth={true}
             duration={500}
             activeClass='active'
             > 
             {text}
             </Link>
              </li>
          ))}
                </ul>
        </div>
      )
    }
    </div>
    </>
  )
}

export default Navbar