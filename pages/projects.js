import NavBar from "@/components/NavBar";
import AppLayout from "@/layouts/AppLayout";
import Image from "next/image";
import pro from '@/public/assets/images/project-1.jpg'
import pro1 from '@/public/assets/images/slide-1.jpg'
import pro2 from '@/public/assets/images/slide2.jpg'
import Head from "next/head";


export default function Projects() {

    return (
        <AppLayout>
            <Head>
                <title>{'Projects'}</title>
                <meta name="description" content={"New Jersey Trusted Roofing Contractor. Protecting what matters the most. Whether you're in need of a full roof replacement or a roof repair, you can coun"} />
                <meta property="og:description" content={"New Jersey Trusted Roofing Contractor. Protecting what matters the most. Whether you're in need of a full roof replacement or a roof repair, you can coun"} />
                {/* <meta property="og:image" content={ogimgurl} />
                 <meta property="og:image:width" content="400" />
                    <meta property="og:image:height" content="400" /> */}
                <meta property="og:title" content={'Projects'} />


                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={'Projects'} />
                <meta name="twitter:description" content={"New Jersey Trusted Roofing Contractor. Protecting what matters the most. Whether you're in need of a full roof replacement or a roof repair, you can coun"} />
                {/* <meta name="twitter:image" content={ogimgurl} /> */}
            </Head>
            <NavBar />
            <div className="bg-secondary p-20" >
                <h3 className="text-white text-center">Projects</h3>
            </div>
            <div className="mx-auto max-w-6xl py-24">
                <div className="grid grid-cols-4 gap-x-4 gap-y-10">
                    <Card title={'MODREN BUILDING'} img={pro}/>
                    <Card title={'MODREN BUILDING'} img={pro2}/>
                    <Card title={'MODREN BUILDING'} img={pro2}/>
                    <Card title={'MODREN BUILDING'} img={pro2}/>
                    <Card title={'MODREN BUILDING'} img={pro}/> 
                    <Card title={'MODREN BUILDING'} img={pro2}/>
                    <Card title={'MODREN BUILDING'} img={pro2}/>
                    <Card title={'MODREN BUILDING'} img={pro}/>     
                </div>
            </div>
        </AppLayout>
    );
}

function Card({title,img}) {
    return (
        <div className="group cursor-pointer">
            <div className="overflow-hidden">
                <Image src={img} alt="project" className="group-hover:scale-110 duration-300 group-hover:brightness-50" />
            </div>
            <h6 className="text-center font-semibold mt-2 group-hover:text-primary duration-200 ">{title}</h6>

        </div>
    )
}