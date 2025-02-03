import React from 'react'
import { projects } from '../data'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

const Recentprojects = () => {
  const title1 = 'Check live site'
  const title2 = 'Currently under progress'
  return (
    <div className='py-10' id="projects">
      <h1 className='heading'>
        A small selection of {' '}
        <span className='text-purple'>Recent projects</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-4 mt-10'>
        {projects.map(({id, title, des, img, link, iconLists,})=>(
            <div key={id} className='lg:min-h-[32.5rem] h-[42rem] lg:h=[32rem] sm:w-[570px] sm:h-[41rem] w-[80vw] flex items-center justify-center'>
                <PinContainer title = {title} href={ id !== 1? link : ''} className='w-full'>
                    <div className='relative flex items-center justify-center sm:w-[70vw] sm:h-[30vh] lg:w-[35vw] overflow-hidden h-[30vh] mb-10'>
                        <div className='relative w-full h-full overflow-hidden lg:rounded-3xl' style={{backgroundColor:'#13162D'}}>
                            <img src="/bg.png" alt="bg-img" />
                        </div>
                        <img 
                        src={img} 
                        alt="cover"
                        className='z-10 absolute bottom-0 w-full h-full' />
                    </div>
                    <h1 className='md:text-xl font-bold lg:text-xl py-4 text-base line-clamp-1'>{title}</h1>
                    <p>
                        {des}
                    </p>
                    <div className='flex justify-between py-7'>
                        <div className='flex justify-center items-center gap-5'>
                        {iconLists.map((icon, index)=>(
                            <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                            style={{
                                transform:`translateX(-${5*index*2}px)`
                            }}>
                            <img src={icon} alt="" className='p-2'/>
                            </div>
                        ))}
                        </div>
                        <div className='flex justify-center items-center'>
                        <a href="" className='text-purple hover:underline mx-2'>{id !== 1 ? title1 : title2}</a>
                        <FaLocationArrow/>
                        </div>
                    </div>
                </PinContainer>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Recentprojects
