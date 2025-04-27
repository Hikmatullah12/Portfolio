import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandCpp } from "react-icons/tb";
import { IoLogoPython } from "react-icons/io5";
import { ReactTyped,Typed } from "react-typed";
import pic from "../../public/Hikmat1.png"




export default function Home() {
  return (
    <div name="Home" className='max-w-screen-2x1 container mx-auto px-4 md:px-20 my-20'>
       <div className="flex flex-col md:flex-row">
       <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1' >
         <span className='text-x1'>Welcome In My Feed</span>
          <div className='flex space-x-1 text-2xl md:text-4xl'>
          <h1>Hello, I'm a </h1>
          {/**<span className='text-red-700 font-bold'>Developer</span>*/}
          <ReactTyped
          className='text-red-700 font-bold'
          strings={["Developer", "Programmer", "Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
          </div>
          <br />
         <p className='text-sm md:text-md text-justify'>I specialize in building responsive, dynamic, 
            and user-focused websites that don’t just look 
            good—they work beautifully across all devices.
            With a passion for clean design and efficient
            code, I turn ideas into real, functional digital
            experiences. Whether it’s front-end flair or back-end
            logic, I love crafting solutions that are both creative
             and powerful. Let’s build something meaningful together.</p>
                 <br />
                 {/* social media icon */}
                <div className='flex items-center flex-col md:flex-row space-y-6 md:space-y-0 justify-between'>
                <div className='space-y-2'>
                    <h1 className='font-bold'>Available on</h1>
                   <ul className='flex space-x-5'>
                   <li>
                        <a href="https://www.facebook.com" target='_blank'>
                        <FaSquareFacebook className='text-2xl cursor-pointer'/>
                        </a>
                    </li>
                    <li>
                    <a href="https://www.linkedin.com" target='_blank'>
                        <FaLinkedin className='text-2xl cursor-pointer'/>
                        </a>
                    </li>
                    <li>
                    <a href="https://www.youtube.com" target='_blank'>
                        <IoLogoYoutube className='text-2xl cursor-pointer'/>
                        </a>
                    </li>
                    <li>
                    <a href="https://www.telegram.com" target='_blank'>
                        <FaTelegram className='text-2xl cursor-pointer'/>
                        </a>
                    </li>
                   </ul>
                 </div>
                 <div className='space-y-2'>
                 <h1 className='font-bold'>Currrently working on</h1>
                   <ul className='flex space-x-5'>
                   <li>
                        {" "}
                        <FaReact
                        className='text-2xl cursor-pointe md:text-3xl hover:scale-100 rounded-full border-[2px]'/>
                    </li>
                    <li>
                      {" "}
                      <IoLogoJavascript
                      className='text-2xl cursor-pointer  md:text-3xl hover:scale-100 rounded-full border-[2px]'/>
                    </li>
                    <li>
                        {" "}
                        <TbBrandCpp 
                        className='text-2xl cursor-pointer md:text-3xl hover:scale-100 rounded-full border-[2px]'/>
                    </li>
                    <li>
                       {" "} 
                       <IoLogoPython 
                       className='text-2xl cursor-pointer md:text-3xl hover:scale-100 rounded-full border-[2px]'/>
                    </li>
                   </ul>
                 </div>
                </div>
       </div>
       <div className='md:w-1/2 md:ml-48 md:mt-20  mt-8 order-1'>
        <img src={pic} className='rounded-full md:w-[450px] md:h-[450px]' alt="" />
       </div>
       </div> 
       <hr />
    </div>

  )
}
