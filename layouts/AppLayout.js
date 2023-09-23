import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import TopBar from '@/components/TopBar';
import { Montserrat } from 'next/font/google'
import { useEffect, useState } from 'react';
const montserrat = Montserrat({ subsets: ['latin'] })







export default function AppLayout({children}){

    const [isNavbarVisible, setIsNavbarVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY>200){
 
                setIsNavbarVisible(true)
            } 
            if (window.scrollY<200){
           
                setIsNavbarVisible(false)
            } 
        
        };
        window.addEventListener('scroll', handleScroll);
    
      }, []);


    return (
        <div className={`${montserrat.className}`}>
            
            <div className={`bg-white fixed w-full z-20 top-0 left-0  ${!isNavbarVisible?'hidden':''} `}  >
                <NavBar/>
            </div>
            
            {children}
            <Footer/>
        </div>
    );
}