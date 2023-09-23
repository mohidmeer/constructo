import { useState } from "react";
import {BsFillCheckCircleFill} from 'react-icons/bs';
import wrker from '@/public/assets/images/worker2.jpg'
import Image from "next/image";


const states= [
    {id:0,name:'Construction',title:'WHAT WE OFFER', offer:['Wooden Houses','Brick Construction','Metal Works'], para:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec erat erat. Integer blandit, nulla quis fermentum hendrerit, nisi diam viverra metus, porta semper est ipsum et sapien.'   },
    {id:1,name:'Renovations',title:'WHAT WE OFFER' , offer:['Green House','Construction building','Alternative tech'], para:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec erat erat. Integer blandit, nulla quis fermentum hendrerit, nisi diam viverra metus, porta semper est ipsum et sapien.' },
    {id:2,name:'Consulting',title:'WHAT WE OFFER'  , offer:['Wooden Houses','Brick Construction','Metal Works'], para:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec erat erat. Integer blandit, nulla quis fermentum hendrerit, nisi diam viverra metus, porta semper est ipsum et sapien.' },
    {id:3,name:'Contractor',title:'WHAT WE OFFER'  , offer:['Wooden Houses','Brick Construction','Metal Works'], para:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec erat erat. Integer blandit, nulla quis fermentum hendrerit, nisi diam viverra metus, porta semper est ipsum et sapien.' },

]



export default function Offer(){


    const [accordian,setAccordian] = useState(0)
    return (
        <div className=" py-20">
            <div className="mx-auto max-w-6xl">
                <div className="grid grid-cols-5 gap-6">
                    <div className="flex flex-col">
                        {states.map((s)=>(
                            <button key={s.id} className={` border-y border-r w-[200px] py-4 border-l-8 border-l-transparent ${accordian==s.id && '!border-l-black '} `} onClick={()=>{setAccordian(s.id)}}>
                                {s.name}
                            </button>
                        ))}
                    </div>
                    <div className="col-span-2 text-light text-sm font-semibold ">
                        <h5 className="mb-6 text-secondary">WHAT WE OFFER</h5>
                        <div className="flex flex-col gap-3">
                            {states[accordian].offer.map((i)=>(
                                <div key={i} className="flex gap-2 items-center">
                                    <BsFillCheckCircleFill className="text-primary"/>
                                    <p >{i}</p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-4">{states[accordian].para}</p>
                        <p className="mt-4">{states[accordian].para}</p>
                        
                    </div>
                    <div className="col-span-2 text-light">
                        <Image src={wrker} alt='worker' />
                        <p className="text-xl text-black font-semibold mt-2 ">GET YOUR FREE CONSULTING</p>
                        <p className="text-sm  mt-2">Have an idea, a dream? We can make it happen. Join our family, we offer free consultation to achieve your goals with creativity and quality that you deserve.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}