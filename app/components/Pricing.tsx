import { FaLocationArrow } from "react-icons/fa";
import Magicbutton from "./magicbutton";
import { GlareCard } from "./ui/glare-card";
import Image from "next/image";
import apple from '@/public/p4.svg'
import { HiChevronDoubleRight } from "react-icons/hi";

const Pricing = () => {
    return ( 
        <div className="w-full" id='Pricing'>
            <p className="text-5xl font-bold m-auto text-center">Tailored for<span className="text-purple"> Your Needs.</span></p>
        <div className="flex flex-col md:flex-row justify-center gap-10 items-center w-full flex-wrap my-28">
        <GlareCard className="flex flex-col w-full p-10 ">
                <div className="flex flex-col justify-between h-full">
                    <h1 className="text-5xl text-purple font-bold">Mini</h1>
                    <div>
                        <p className="my-4 text-xl font-semibold">A sleek, single-page website designed for businesses that need a fast, professional online presence without breaking the bank.</p>
                    <p className="px-2 inline-flex justify-center items-center">{<HiChevronDoubleRight/>}Custom designed one-page website.</p>
                    <p className="px-2 inline-flex justify-center items-center">{<HiChevronDoubleRight/>}Mobile friendly and Ultra fast Performance.</p>
                    <p className="px-2 inline-flex justify-center items-center">{<HiChevronDoubleRight/>}Essential SEO and Contact Form.</p>
                    <p className="px-2 inline-flex justify-center items-center">{<HiChevronDoubleRight/>}1-week support (1 hour of tweaks).</p>
                    </div>
                    <div className="flex justify-between">
                    <p className="text-3xl">$<span className="text-purple font-bold"> 1000</span></p>
                    </div>
                </div>
            </GlareCard>
            <GlareCard className="flex flex-col w-full p-10 ">
                <div className="flex flex-col justify-between h-full">
                    <h1 className="text-5xl text-purple font-bold">Starter</h1>
                    <div>
                        <p className="my-4 text-xl font-semibold">A sleek, high-performance website designed for small businesses needing a clean and functional online presenece. Fast, mobile-friendly,  and optimized for conversions.</p>
                    <p className="inline-flex px-2 justify-center items-center">{<HiChevronDoubleRight/>}5 page responsive website.</p><br />
                    <p className="inline-flex px-2 justify-center items-center">{<HiChevronDoubleRight/>}Blazing fast performance.</p>
                    <p className="inline-flex px-2 justify-center items-center">{<HiChevronDoubleRight/>}Essential SEO and lead capture form.</p>
                    <p className="inline-flex px-2 justify-center items-center">{<HiChevronDoubleRight/>}1 Month Support (2 Hours of tweaks).</p>
                    </div>
                    <div className="flex justify-between">
                    <p className="text-3xl">$<span className="text-purple font-bold"> 2500</span></p>
                    </div>
                </div>
            </GlareCard>
            <GlareCard className="flex flex-col w-full p-10">
            <div className="flex flex-col justify-between h-full">
                    <h1 className="text-5xl text-purple font-bold">Standard</h1>
                    <div>
                        <p className="my-4 text-xl font-semibold">For businesses ready to scale with a custom design, advanced SEO, and sales-driven features. A perfect balance of aesthetics and functionality.</p>
                    <p className="inline-flex px-2 justify-center items-center">{<HiChevronDoubleRight/>}5-10 pages website with tailored branding.</p>
                    <p className="inline-flex px-2 justify-center items-center">{<HiChevronDoubleRight/>}Smooth Animations and Advanced SEO.</p><br />
                    <p className="inline-flex px-2 justify-center items-center">{<HiChevronDoubleRight/>}Light eCommerce.</p><br />
                    <p className="inline-flex px-2 justify-center items-center">{<HiChevronDoubleRight/>}1 Month Support (3 hours of tweaks).</p>
                    <p></p></div>
                    <div className="flex justify-between">
                    <p className="text-3xl">$<span className="text-purple font-bold"> 4000</span></p>
                    </div>
                </div>
            </GlareCard>
            <GlareCard className="flex flex-col w-full p-10">
            <div className="flex flex-col justify-between h-full">
                    <h1 className="text-5xl text-purple font-bold">Premium</h1>
                    <div>
                        <p className="my-4 text-xl font-semibold">A fully customized, high-performance solution for growing brands, eCommerce stores, and businesses needing  powerful features and stunning visuals.</p>
                        <ul>
                    <p className="inline-flex px-2 justify-center items-center">{<HiChevronDoubleRight/>}10+ page site with Advanced layouts and Animations</p>
                    <p className="inline-flex px-2 justify-center items-center">{<HiChevronDoubleRight/>}Full eCommerce (Stripe Integrations, Membership systems).</p>
                    <p className="inline-flex px-2 justify-center items-center">{<HiChevronDoubleRight/>}Comprehensive SEO + lead Gen Optimisations.</p>
                    <p className="inline-flex px-2 justify-center items-center">{<HiChevronDoubleRight/>}1 Month Support.</p></ul>
                    </div>
                    <div className="flex justify-between">
                    <p className="text-3xl">$<span className="text-purple font-bold"> 5000</span></p>
                    </div>
                </div>
            </GlareCard>
        </div>
        </div>
     );
}
 
export default Pricing;