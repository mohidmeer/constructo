import Link from 'next/link'
import {AiFillBuild} from  'react-icons/ai'

export default function Footer(){

    return (

        <div className="bg-secondary">
            <div className="max-w-6xl mx-auto">
                <div className="px-4 py-10">
                    <div className="grid grid-cols-4 gap-4 text-white">
                        <div>
                        <h6 className='uppercase mb-4 '>About</h6>
                            <Logo/>
                            <p className='mt-4 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam turpis quam, sodales in ante sagittis, varius efficitur mauri</p>
                        </div>
                        <div className='ml-10'>
                            <h6 className='uppercase '>Navigation</h6>

                            <div className='flex flex-col mt-4 gap-1 text-sm'>
                                <Link className='hover:text-primary duration-300' href={'/'}>Home</Link>
                                <Link className='hover:text-primary duration-300' href={'/'}>Services</Link>
                                <Link className='hover:text-primary duration-300' href={'/'}>Blogs</Link>
                                <Link className='hover:text-primary duration-300' href={'/'}>Contact Us</Link>
                                <Link className='hover:text-primary duration-300' href={'/'}>About Us</Link>

                            </div>
                        </div>
                        <div className=''>
                            <h6 className='uppercase '>Tags</h6>
                            <div className='flex flex-wrap gap-2 mt-4'>
                                <button className='tags'>Home</button>
                                <button className='tags'>Moderen</button>
                                <button className='tags'>Simple</button>
                                <button className='tags'>Asthetic</button>
                                

                            </div>
                        </div>
                        <div>
                            <h6 className='uppercase '>Recents</h6>
                            <div className='flex flex-col mt-4 gap-1 text-sm'>
                                <Link className='hover:text-primary duration-300' href={'/'}>Moderen</Link>
                                <Link className='hover:text-primary duration-300' href={'/'}>Architecture</Link>
                                <Link className='hover:text-primary duration-300' href={'/'}>Funky</Link>
                                <Link className='hover:text-primary duration-300' href={'/'}>Corporate Tower</Link>

                            </div>
                          

                        </div>

                    </div>


                </div>
            </div>
            <Foot/>
        </div>
    )
}


function Foot(){
    return(
        <div className="p-4 bg-[#0f0f0f] text-white text-center">
        <p>Hostbuilding Group | © 2023 Constructo, All rights reserved</p>
    </div>
    )
}
function Logo(){

    return(
        <Link href={'/'} className="flex  items-center gap-2 ">
            <AiFillBuild size={40} className='text-primary'/>
            <p className='text-white !font-semibold'>Host Building Group</p>
            

        </Link>
    )
}