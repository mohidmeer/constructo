import NavBar from "@/components/NavBar";
import AppLayout from "@/layouts/AppLayout";
import Head from "next/head";
import { Md30Fps, MdBook, MdMail, MdPhone } from "react-icons/md";

export default function Contact(){

    return (
       <>
        <Head>
                <title>{'Contact Us'}</title>
                <meta name="description" content={"New Jersey Trusted Roofing Contractor. Protecting what matters the most. Whether you're in need of a full roof replacement or a roof repair, you can coun"} />
                <meta property="og:description" content={"New Jersey Trusted Roofing Contractor. Protecting what matters the most. Whether you're in need of a full roof replacement or a roof repair, you can coun"} />
                {/* <meta property="og:image" content={ogimgurl} />
                 <meta property="og:image:width" content="400" />
                    <meta property="og:image:height" content="400" /> */}
                <meta property="og:title" content={'Contact Us'} />


                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={'Contact Us'} />
                <meta name="twitter:description" content={"New Jersey Trusted Roofing Contractor. Protecting what matters the most. Whether you're in need of a full roof replacement or a roof repair, you can coun"} />
                {/* <meta name="twitter:image" content={ogimgurl} /> */}
            </Head>

            <AppLayout>
                <NavBar />

                <div className="mx-auto max-w-6xl  flex   lg:flex-row md:flex-row flex-col  ">
            <section className="flex flex-col justify-center gap-8">
                <div className="flex justify-center items-center">
                   <div className=" p-4 rounded-lg border-b">
                        <div className="flex flex-col items-center">
                            <MdPhone size={50} className="bg-primary rounded-full text-white p-2"/>
                            <p className="font-bold">0345383369</p>
                        </div>
                   </div>
                </div>
                <div className="flex justify-center items-center">
                   <div className=" p-4 rounded-lg border-b">
                        <div className="flex flex-col items-center">
                            <MdMail size={50} className="bg-primary rounded-full text-white p-2"/>
                            <p className="font-bold">jhone@jane.com</p>
                        </div>
                   </div>
                </div>
                
                <div className="flex justify-center items-center">
                   <div className=" p- rounded-lg border-b">
                        <div className="flex flex-col items-center justify-center text-center">
                            <MdBook size={50} className="bg-primary rounded-full text-white p-2"/>
                            <p className="font-bold">South Florida Palm Beach County</p>
                        </div>
                   </div>
                </div>
            </section>
            <section className="bg-white dark:bg-gray-900 w-full">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Let’s chat and get a quote!.</p>
                    <form action="#" className="space-y-8">
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                            <input type="email" id="email" placeholder="name@gmail.com" required />
                        </div>
                        <div>
                            <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 ">Subject</label>
                            <input type="text" id="subject"  placeholder="Let us know how we can help you" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label for="message" className="block mb-2 text-sm font-medium text-gray-900 ">Your message</label>
                            <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900   " placeholder="Leave a comment..."></textarea>
                        </div>
                        <button type="submit" className="">Send message</button>
                    </form>
                </div>
            </section>

        </div>



            </AppLayout>
       </>
    )
}