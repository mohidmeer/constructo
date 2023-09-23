import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import slideImage1 from '@/public/assets/images/slide-1.jpg'
import slideImage2 from "@/public/assets/images/slide-1.jpg"
import slideImage3 from "@/public/assets/images/slide-1.jpg"
import slideImage4 from "@/public/assets/images/slide-1.jpg"
import NavBar from "./NavBar";
import TopBar from "./TopBar";


const slidesData = [

    { id: 1, subtitle:'Subtitle Goes Here' , title: 'BUILDING FOR SCOCIETY', paragraph: 'With more than Four Decades With more than Four Decades With more than Four Decades of Roofing Services with more than Four Decades with more than Four Decades with more than Four Decades of Roofing Services', img: slideImage1 },
    { id: 2, subtitle:'Subtitle Goes Here' , title: 'FROM CONCEPT TO CREATION', paragraph: 'With more than Four Decades With more than Four Decades With more than Four Decades of Roofing Services with more than Four Decades with more than Four Decades with more than Four Decades of Roofing Services', img: slideImage2 },
    { id: 3, subtitle:'Subtitle Goes Here' , title: 'WE ARE BUILDING HERITAGE', paragraph: 'With more than Four Decades With more than Four Decades With more than Four Decades of Roofing Services with more than Four Decades with more than Four Decades with more than Four Decades of Roofing Services', img: slideImage3 },
    { id: 3, subtitle:'Subtitle Goes Here' , title: 'TRADITION AND INOVATION', paragraph: 'With more than Four Decades With more than Four Decades With more than Four Decades of Roofing Services with more than Four Decades with more than Four Decades with more than Four Decades of Roofing Services', img: slideImage4 },
]


export default function Hero() {
    return (
        <div className="">
            <div className="relative">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}>
                    {
                        slidesData.map((slide) => (
                            <SwiperSlide key={slide.id}>
                                <Slide slide={slide} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div className="absolute  top-0  w-full z-10 ">
                    <div>
                        <TopBar className="text-white"/>
                    </div>
                    <NavBar className="text-white"/>
                </div>
            </div>
        </div>
    )
}

function Slide({ slide }) {
    return (
        <div className='w-full relative h-[80vh] text-white'>
            <Image src={slide.img} fill alt='hero-img' className='object-cover -z-10 brightness-50' />
            <div className='w-full h-full'>
                <div className='max-w-6xl h-full mx-auto flex flex-col justify-center p-4 '>
                    <div className='flex justify-start'>
                        <div className='flex flex-col gap-4 md:max-w-3xl'>
                                
                                <div>
                                <h3 className="text-primary">{slide.subtitle}</h3>    
                                <h2>{slide.title}</h2>
                                </div>
                                <p className='md:max-w-2xl'>{slide.paragraph}</p>
                                <div className="gap-4 flex ">
                                    <button className=' btn'>
                                        PURCHASE
                                    </button>
                                    <button className='btn-trans'>
                                        PURCHASE
                                    </button>
                                </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
