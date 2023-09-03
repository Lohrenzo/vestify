import { useState } from 'react'
import { NavLink } from 'react-router-dom';

// Images
import imgSimple from "../assets/img/6194957.png";
import imgSimple2 from "../assets/img/6196251.png";
import imgPlans from "../assets/img/trade-chart.jpg";

// Icons
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import CreditScoreRoundedIcon from '@mui/icons-material/CreditScoreRounded';

{/* <a href="https://www.freepik.com/free-photo/street-statistics-debt-loss-globe_1150263.htm#query=trading%20charts&position=30&from_view=search&track=ais">Image by jcomp</a> on Freepik */}

// Components
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import GoToTop from '../GoToTop';
import TradingViewWidget from '../components/TradingViewWidget';
import Testimonials from '../components/Testimonials';
import Swipe from '../components/Swipe';
import Counter from '../components/Counter';
import FAQs from '../components/FAQs';
import Widget from '../components/Widget';
import WhyUs from '../components/WhyUs';


export default function Home() {
    return (
        <div className=''>
            <Nav />
            <section className='banner home-banner flex'>
                <div className="grid px-5 grid-cols-1 lg:grid-cols-1 items-center">
                    <div className='lg:text-left text-center lg:w-[50%] w-[100%] text-[3.2rem]'>
                        <h2 className='mb-5'>Creating wealth through trading assets online.</h2>
                        <p className='lg:text-[1rem] text-[1.2rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatibus consectetur iste esse vero non quaerat, quisquam libero, voluptatum odit tenetur.</p>
                    </div>
                </div>
            </section>
            <WhyUs />
                    {/* Image by <a href="https://www.freepik.com/free-vector/isometric-cryptocurrency-concept-with-phone_19962849.htm#query=cryptocurrency&position=25&from_view=search&track=sph">Freepik</a> */}
            <section className="offer bg-[#06091D]">
                <div className="flex gap-x-[3rem] lg:flex-nowrap flex-wrap-reverse py-[5rem] lg:px-[15rem]">
                    <img src={imgSimple} className='w-[400px] lg:mx-0 mx-auto object-contain' alt="" />
                    <div className='flex flex-col lg:ms-[100px] mx-5 mb-5 justify-center'>
                        <h2 className='lg:text-[3.4rem] text-[2.6rem] mb-5'>Simple</h2>
                        <p className='text-[20px] text-justify mb-[35px]'>Investing in bitcoin shouldn't be complicated. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates explicabo earum cumque numquam ex culpa dolor nobis ipsam.</p>
                        <div className='lg:block hidden'>
                            <NavLink to="/sign-up" title='Get Started' className="btn-white">Get Started</NavLink>
                        </div>
                    </div>
                </div>
                <div className="flex gap-x-[3rem] lg:flex-nowrap flex-wrap py-[5rem] lg:px-[15rem]">
                    <div className='flex flex-col lg:me-[100px] mx-5 mb-5 justify-center'>
                        <h2 className='lg:text-[3.4rem] text-[2.6rem] mb-5'>Market Analysis</h2>
                        <p className='text-[20px] text-justify mb-[35px]'>Our cut-through market analysis will help you get the edge you need to make smarter decisions and become a better Investor.</p>
                        <div>
                            <NavLink to="/sign-up" title='Get Started' className="btn-white">Get Started</NavLink>
                        </div>
                    </div>
                    <img src={imgSimple2} className='w-[400px] lg:mx-0 mx-auto object-contain' alt="" />
                </div>
            </section>
                    {/* Image by <a href="https://www.freepik.com/free-vector/isometric-cryptocurrency-concept-with-phone_19962849.htm#query=cryptocurrency&position=25&from_view=search&track=sph">Freepik</a> */}
                {/* <a href="https://www.freepik.com/free-vector/popular-cryptocurrency-logos-set_23678052.htm#query=cryptocurrency&position=0&from_view=keyword&track=sph">Image by myriammira</a> on Freepik */}
            <section className="plans-home bg-[#ffffff]">
                <div className="flex gap-x-[3rem] text-[#000000] lg:flex-nowrap lg:flex-row flex-col-reverse py-[5rem] px-4 lg:px-[15rem]">
                    <img src={imgPlans} className='w-[500px] lg:inline hidden lg:mx-0 mx-auto object-cover rounded-xl shadow-lg shadow-black' alt="" />
                    <div className='flex flex-col lg:ms-[100px] mx-5 mb-5 justify-center'>
                        <h2 className='lg:text-[3rem] text-[2.4rem] lg:text-left text-center mb-5'>We have plans for everyone</h2>
                        <p className='text-[20px] text-center lg:text-left mb-[35px]'>Check out our investment plans and get started with smart investments today.</p>
                        <div className='mb-2 lg:text-left text-center'>
                            <NavLink to="/plans" title='View Investment Plans' className="btn-sky">View Plans</NavLink>
                        </div>
                    </div>
                </div>
            </section>
            <section className="start-process py-[50px] px-3 bg-[#FBFBFB]">
                <div className="flex justify-center items-center gap-5 flex-wrap text-black">
                    <div>
                        <h3 className='lg:text-[2.4rem] text-[2rem] mb-5'>Easy steps to get started</h3>
                        <div className='lg:block hidden'>
                            <NavLink to="/sign-up" title='Get Started' className="btn-sky">Get Started</NavLink>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        <div className="p-2 rounded-lg bg-white flex gap-x-2 duration-300 shadow-md hover:shadow-lg">
                            <PersonAddAltRoundedIcon />
                            <div>
                                <h4>Step 1</h4>
                                <p>Create and verify your account.</p>
                            </div>
                        </div>
                        <div className="p-2 rounded-lg bg-white flex gap-x-2 duration-300 shadow-md hover:shadow-lg">
                            <CreditScoreRoundedIcon />
                            <div>
                                <h4>Step 2</h4>
                                <p>Choose a payment method and fund your account.</p>
                            </div>
                        </div>
                        <div className="p-2 rounded-lg bg-white flex gap-x-2 duration-300 shadow-md hover:shadow-lg">
                            <LocalOfferRoundedIcon />
                            <div>
                                <h4>Step 3</h4>
                                <p>Choose an investment plan of your choice.</p>
                            </div>
                        </div>
                        <div className="p-2 rounded-lg bg-white flex gap-x-2 duration-300 shadow-md hover:shadow-lg">
                            <AccountBalanceWalletRoundedIcon />
                            <div>
                                <h4>Step 4</h4>
                                <p>Make fast and easy withdrawals after every plan duration.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <TradingViewWidget />
            <Testimonials />
            <Counter />
            <FAQs />
            <Footer />
            <GoToTop />
        </div>
    );
};
