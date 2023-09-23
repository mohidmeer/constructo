import Image from "next/image";
import c1 from '@/public/assets/images/consultation.jpg'
import c2 from '@/public/assets/images/consultation2.jpg'
import c3 from '@/public/assets/images/consultation3.jpg'

export default function Quote(){

    return(
        <div className="bg-gra p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mt-10 text-white">
                    <h5>FAST AND RELIABLE SERVICE FOR YOUR PROJECT OR A QUICK FIX, WE DO IT ALL!</h5>
                    <button className="btn-inv border border-transparent hover:border-white ">GET A QUOTE</button>
                </div>
                <div className="grid md:grid-cols-3 mt-10 gap-8">
                    <div className="">
                        <div className="relative w-full h-[200px]">
                            <Image src={c1} alt="construction" fill className="object-cover" />
                        </div>
                        <h6 className="font-semibold my-4 border-b ">PLANNING YOUR PROJECT FROM SCRATCH</h6>
                        <p className="text-light">Constructo Construction Inc provides building services to clients who value diligence, resourcefulness and creativity in a partner.</p>
                    </div>
                    <div className="">
                        <div className="relative w-full h-[200px]">
                            <Image src={c2} alt="construction" fill className="object-cover" />
                        </div>
                        <h6 className="font-semibold my-4 border-b ">PLANNING YOUR PROJECT FROM SCRATCH</h6>
                        <p className="text-light">Constructo Construction Inc provides building services to clients who value diligence, resourcefulness and creativity in a partner.</p>
                    </div>
                    <div className="">
                        <div className="relative w-full h-[200px]">
                            <Image src={c3} alt="construction" fill className="object-cover" />
                        </div>
                        <h6 className="font-semibold my-4 border-b ">PLANNING YOUR PROJECT FROM SCRATCH</h6>
                        <p className="text-light">Constructo Construction Inc provides building services to clients who value diligence, resourcefulness and creativity in a partner.</p>
                    </div>

                </div>

            </div>

        </div>
    )
}