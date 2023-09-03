import { NavLink } from 'react-router-dom';

// Images
// import bgImg from "../assets/img/street-statistics.jpg";
import imgSimple from "../assets/img/87.jpg";
import imgSimple2 from "../assets/img/94.jpg";
import imgPlans from "../assets/img/trade-blackwhite.jpg";

// Components
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import GoToTop from '../GoToTop';
import Partners from "../components/Partners";
import WhyUs from "../components/WhyUs";
import Counter from "../components/Counter";

const About = () => {
    return (
        <div>
            <Nav />
            <section className='banner banner-about flex'>
                {/* <img className='bg-img' src={bgImg} alt="Background Image" /> */}
                <div className="grid lg:mt-[4rem] mt-[-2rem] px-5 grid-cols-1 lg:grid-cols-1 items-center">
                    <div className='lg:px-[15rem] lg:text-justify text-center text-[3.2rem]'>
                        <h2 className='mb-5 capitalize'>About us</h2>
                        <p className='text-[1rem]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatibus consectetur iste esse vero non quaerat, quisquam libero, voluptatum odit tenetur. <br />
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta iste aliquam possimus dolore assumenda nulla, ipsam delectus neque placeat expedita amet quis dolorem, quas ab aspernatur voluptatibus! A, nesciunt sint.
                        </p>
                    </div>
                    {/* <div className='flex justfy-center lg:ms-[10rem] lg:block hidden'><img src={imgIntro} className='h-[30rem] rounded-md ' alt="" /></div> */}
                </div>
            </section>
            <section className="offer bg-[#ffffff] text-black">
                <div className="flex gap-x-[3rem] lg:flex-nowrap flex-wrap py-[5rem] lg:px-[15rem]">
                    <div className='flex flex-col lg:me-[100px] mx-5 mb-5 justify-center'>
                        <h2 className='lg:text-[3.2rem] text-[2.6rem] mb-5'>Who Are We?</h2>
                        <p className='text-[20px] text-justify mb-[35px]'>
                            Our cut-through market analysis will help you get the edge you need to make smarter decisions and become a better Investor. <br />
                            The key pillars we operate on are transparency, client-focus and technology, and with a strong track record of putting the client first in everything we do, Coin Farming Shares is here to establish a new standard of excellence in multi-asset online trading.
                        </p>
                    </div>
                    <img src={imgSimple2} className='w-[400px] object-contain' alt="" />
                    {/* Image by <a href="https://www.freepik.com/free-vector/isometric-cryptocurrency-concept-with-phone_19962849.htm#query=cryptocurrency&position=25&from_view=search&track=sph">Freepik</a> */}
                </div>
                <div className="flex gap-x-[3rem] lg:flex-nowrap flex-wrap-reverse py-[5rem] lg:px-[15rem]">
                    <img src={imgSimple} className='w-[400px] object-contain' alt="" />
                    {/* Image by <a href="https://www.freepik.com/free-vector/isometric-cryptocurrency-concept-with-phone_19962849.htm#query=cryptocurrency&position=25&from_view=search&track=sph">Freepik</a> */}
                    <div className='flex flex-col lg:ms-[100px] mx-5 mb-5 justify-center'>
                        <h2 className='lg:text-[3.4rem] text-[2.6rem] mb-5'>Our Mission</h2>
                        <p className='text-[20px] text-justify mb-[35px]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, explicabo quibusdam perferendis molestiae sapiente inventore fuga hic id, itaque reprehenderit consequuntur debitis ullam at architecto maxime natus? Cumque, fugit perferendis! <br />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt consequatur maxime, quod commodi voluptate ipsa quam illo veniam molestiae facilis quibusdam architecto minus? Doloremque debitis porro facere beatae culpa voluptatibus.
                        </p>
                    </div>
                </div>
                {/* <a href="https://www.freepik.com/free-vector/popular-cryptocurrency-logos-set_23678052.htm#query=cryptocurrency&position=0&from_view=keyword&track=sph">Image by myriammira</a> on Freepik */}
            </section>
            <Partners />
            <WhyUs />
            <Counter />
            <section className="plans-home bg-[#ffffff]">
                <div className="flex gap-x-[3rem] text-[#000000] lg:flex-nowrap flex-wrap-reverse py-[5rem] px-4 lg:px-[15rem]">
                    <img src={imgPlans} className='lg:inline hidden w-[500px] rounded-xl shadow shadow-black' alt="" />
                    <div className='flex flex-col lg:ms-[100px] lg:mx-5 mx-auto mb-5 justify-center'>
                        <h2 className='lg:text-[3rem] text-[2.4rem] lg:text-left text-center mb-5'>Ready to start?</h2>
                        <p className='text-[20px] text-center lg:text-left mb-[35px]'>Check out our investment plans and get started today.</p>
                        <div className='mb-2 lg:text-left text-center'>
                            <NavLink to="/sign-up" title='View Investment Plans' className="btn-sky">Get Started</NavLink>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <GoToTop />
        </div>
    );
}

export default About;

