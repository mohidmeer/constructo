import Image from "next/image";
import client from '@/public/assets/images/client-1.png'

export default function Clients(){

    return(
        <div className="mx-auto max-w-6xl my-20 text-secondary">
            <h4 className="text-center mb-16 ">
                <span className="border-b p-4">CLIENTS THAT TRUST US</span></h4>

            <div className="border-y grid grid-cols-5 cursor-pointer ">
                <div className="group"><Image src={client} alt="client" className="group-hover:scale-150 duration-300"/></div>
                <div className="group"><Image src={client} alt="client" className="group-hover:scale-150 duration-300"/></div>
                <div className="group"><Image src={client} alt="client" className="group-hover:scale-150 duration-300"/></div>
                <div className="group"><Image src={client} alt="client" className="group-hover:scale-150 duration-300"/></div>
                <div className="group"><Image src={client} alt="client" className="group-hover:scale-150 duration-300"/></div>
            </div>
            <p className="my-5 text-muted font-bold text-center">some of our clients that trust us, be sure to be one of them</p>
        </div>
    )
}