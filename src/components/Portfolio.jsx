import React from 'react'
import react from '../../public/react.png'
import python from '../../public/python.png'
import javascript from '../../public/javascript.png'
import sql from '../../public/sql.png'
import cpp from '../../public/cpp.png'
import css from '../../public/css.png'
import html from '../../public/html.png'
function Portfolio() {
    const cardItem=[
        {
            id:1,
            logo:react,
            name:"React"
        },
        {
            id:2,
            logo:python,
            name:"Python"
        },
        {
            id:3,
            logo:javascript,
            name:"Javascript"
        },
        {
            id:4,
            logo:sql,
            name:"SQL"
        },
        {
            id:5,
            logo:cpp,
            name:"CPP"
        },
        {
            id:6,
            logo:css,
            name:"CSS"
        },
        {
            id:7,
            logo:html,
            name:"HTML"
        },
      
    ]
  return (
    <div name="Portfolio"className='max-w-screen-2x1 container mx-auto px-4 md:px-20 mt-10'>
        <div>
            <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
            <span className='underline'>Featured Project</span>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 my-5 ml- '>
                {
                    cardItem.map(({id,logo,name}) => (
                        <div className="md:w-[260px] md:h-[300px]  rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"key={id}> 
                            <img src={logo} className="w-[120px] h-[120px] p-1 border-[2px] rounded-full "alt="" />
                            <div>
                                <div className='font-bold text-xl mb-2' >{name}</div>
                                <p className=' text-gray-700'>
                                I have strengthened my skills in this technology through hands-on project experience.
                                </p>
                            </div>
                            <div className='px-2 py-3 space-x-3 justify-around'>
                                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-2 rounded'>Details</button>
                                <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-3 py-2 rounded'>Source Code</button>
                                <br />
                                <br />
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Portfolio