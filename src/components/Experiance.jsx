import React from 'react'
import php from '../../public/php.png'
import python from '../../public/python.png'
import javascript from '../../public/javas.png'
import oracle from '../../public/oracle.png'
import cpp from '../../public/cpp.png'
import css from '../../public/css1.png'
import html from '../../public/html1.png'
function Experiance() {
    const cardItem=[
        {
            id:1,
            logo:php,
            name:"php"
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
            logo:oracle,
            name:"ORACLE"
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
    <div name="Experiance"className='max-w-screen-2x1 container mx-auto px-4 md:px-20 my-16'>
        <div>
            <h1 className='text-3xl font-bold mb-5'>Experiance</h1>
            <p >
               I've more than 2 years of experiance in below technologes.
            </p>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-7 my-3'>
                {
                    cardItem.map(({id,logo,name}) => (
                        <div className="flex flex-col item-center justify-center rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"key={id}> 
                            <img src={logo} className="w-[150px] rounded-full "alt="" />
                            <div>
                                <div className='px-14 font-bold' >{name}</div>
                                
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Experiance