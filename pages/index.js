import Clients from "@/components/Clients";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Offer from "@/components/Offer";
import Quote from "@/components/Quote";
import TopBar from "@/components/TopBar";
import AppLayout from "@/layouts/AppLayout";
import Head from "next/head";


export default function Home() {
  return (

   <>
          <Head>   
                <title>{'Constructo'}</title>
                <meta name="description" content={"New Jersey Trusted Roofing Contractor. Protecting what matters the most. Whether you're in need of a full roof replacement or a roof repair, you can coun"} />
                <meta property="og:description" content={"New Jersey Trusted Roofing Contractor. Protecting what matters the most. Whether you're in need of a full roof replacement or a roof repair, you can coun"} />
                {/* <meta property="og:image" content={ogimgurl} />
                 <meta property="og:image:width" content="400" />
                    <meta property="og:image:height" content="400" /> */}
                <meta property="og:title" content={'Constructo'} />


                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={'Constructo'} />
                <meta name="twitter:description" content={"New Jersey Trusted Roofing Contractor. Protecting what matters the most. Whether you're in need of a full roof replacement or a roof repair, you can coun"} />
                {/* <meta name="twitter:image" content={ogimgurl} /> */}
            </Head>
    <AppLayout>
      
      <Hero/>
      <Quote/>
      <Featured/>
      <Offer/>
      <Clients/>
       
    </AppLayout>
   </>
  )
}
