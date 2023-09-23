import Link from "next/link";

import {AiFillBuild} from  'react-icons/ai'

export default function NavBar({className = ''}){
   return(
    <div className={` ${className}   `}>
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
           <Logo/>
            <nav>
                <ul className="flex gap-4 ">
                    <li className="hover:text-primary border-r pr-2"><Link href={'/'}>Home</Link></li>
                    <li className="hover:text-primary border-r pr-2"><Link href={'/projects'}>Projects</Link></li>
                    <li className="hover:text-primary border-r pr-2"><Link href={'/services'}>Services</Link></li>
                    <li className="hover:text-primary border-r pr-2"><Link href={'/blogs'}>Blogs</Link></li>
                    <li className="hover:text-primary border-r pr-2"><Link href={'/contact-us'}>Contact Us</Link></li>
                    <li className="hover:text-primary border-r pr-2"><Link href={'/about-us'}>About Us</Link></li>
                </ul>
            </nav>
        </div>
    </div>
   )
}

function Logo(){
    return (
        <Link href={'/'} className="flex  justify-center items-center gap-2 ">
            <AiFillBuild size={32} className='text-primary'/>
            <p className='sm:block hidden whitespace-nowrap'>Host Building Group</p>
        </Link>
    );
}