import { NavLink } from 'react-router-dom';

// Images
import imgPlans from "../assets/img/trade-blackwhite.jpg";
import bgImg from '../assets/img/98.jpg';

// Components
import PlanCards from '../components/PlanCards';

export default function Plans() {
    return (
        <div>
            <section className='h-[100vh] w-full bg-[#ffffff] text-[#000000] flex items-center justify-center'>
                <div className="grid lg:mt-[4rem] grid-cols-1 lg:grid-cols-2 items-center">
                    <div className='lg:ps-[10rem] lg:text-justify text-center lg:text-[3rem] text-[2.8rem]'>
                        <h2 className='mb-5 text-[#028CCA] capitalize'>Simple, Affordable and Profitable Plans For You</h2>
                        <p className='text-[1.2rem] lg:px-0 px-3'>
                            We are here to help Investors earn huge profit with their capital. Our Motive is to help and build our investor's with Confidence. Our name is synonymous with effective and profitable crypto trading solutions and investments.
                        </p>
                    </div>
                    <img className='bg-img mx-auto h-[500px] object-cover w-[400px] lg:inline hidden' src={bgImg} alt="Image" />
                </div>
            </section>
            <PlanCards />
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
        </div>
    )
};
