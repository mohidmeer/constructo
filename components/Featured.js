import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import slideImage1 from '@/public/assets/images/slide1.jpg'
import slideImage2 from '@/public/assets/images/slide2.jpg'
import slideImage3 from '@/public/assets/images/slide3.jpg'
import slideImage4 from '@/public/assets/images/slide4.jpg'




const slidesData = [

    { id: 1, title: 'BUILDING FOR SCOCIETY', img: slideImage1 },
    { id: 2, title: 'FROM CONCEPT TO CREATION', img: slideImage2 },
    { id: 3, title: 'WE ARE BUILDING HERITAGE', img: slideImage3 },
    { id: 3, title: 'TRADITION AND INOVATION', img: slideImage4 },
]

export default function Featured() {

    return (
        <div className="bg-secondary py-20 text-white">
            <div className="max-w-6xl mx-auto">
                <h5 className="my-10">FEATURED WORK</h5>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{
                        delay: 2000,
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
            </div>
        </div>
    )
}

function Slide({ slide }) {
    return (
        <div className='w-full relative text-white h-[300px] group cursor-pointer overflow-hidden'>
            <Image src={slide.img} fill alt='hero-img' className='object-cover -z-10 group-hover:scale-110 duration-300 ' />
            <div className="w-full h-full flex justify-center items-center bg-black/50 opacity-0 group-hover:opacity-100">
                <h6 className=''>{slide.title}</h6>
            </div>
            
        </div>
    );
}