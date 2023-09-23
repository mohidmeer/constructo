import Link from 'next/link'
import { AiFillClockCircle, AiFillMail, AiFillPhone } from 'react-icons/ai'
import {FaFacebookF, FaGooglePlus, FaLinkedin, FaLinkedinIn, FaTwitter} from 'react-icons/fa'
import {ImGooglePlus} from 'react-icons/im'

export default function TopBar({className=''}){
    return(
        <div className={`max-w-6xl mx-auto flex justify-between items-center p-6 ${className}`}>
            <div className="flex gap-4 px-10">
                <Link href={'/'}>
                    <FaFacebookF size={16} className='hover:text-primary duration-200' />
                </Link>
                <Link href={'/'}>
                    <FaTwitter size={16} className='hover:text-primary duration-200' />
                </Link>
                <Link href={'/'}>
                    <FaLinkedinIn size={16} className='hover:text-primary duration-200' />
                </Link>
                <Link href={'/'}>
                    <ImGooglePlus size={16} className='hover:text-primary duration-200' />
                </Link>
            </div>
            <div className='flex gap-8 cursor-pointer '>
                <div className='flex items-center gap-2 hover:text-primary'>
                    <AiFillClockCircle/>
                    <p className='text-sm'>Mon - Sat: 7:00 - 17:00</p>
                </div>
                <div className='flex items-center gap-2 hover:text-primary'>
                    <AiFillPhone/>
                    <p className='text-sm'> + 386 40 111 5555</p>
                </div>
                <div className='flex items-center gap-2 hover:text-primary'>
                    <AiFillMail/>
                    <p className='text-sm'>  info@yourdomain.com</p>
                </div>

            </div>
        </div>
    )
}