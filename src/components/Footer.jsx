import { Routes, Route, NavLink, Link } from 'react-router-dom';

export default function Footer() {
    return (
        <section className="section pt-[5rem] lg:px-2 px-2 bg-[#06091D]">
            <div className='flex justify-center gap-y-5 gap-x-5 lg:flex-nowrap lg:flex-row flex-col lg:px-[10rem] px-[2rem] lg:mb-[3rem] mb-[2rem]'>
                <div className='lg:w-[30%]'>
                    <p className='text-left'>
                        <Link to='/' title='Home' className="cursor-pointer text-white duration-200 hover:text-[#028CCA]">
                            <h2 className='duration-200 font-bold text-[30px]'>Vestify</h2>
                        </Link>    
                    </p>
                    <p className='lg:text-justify pt-2 lg:me-4'>
                        We are a dynamic group whose main focus is to provide our clients with the best possible service, We apply a systematic and quantitative approach to investment management, with the aim of generating high-quality and diversifying alpha for its clients' portfolios.
                    </p>
                </div>
                <div className="grid grid-cols-2 lg:flex justify-around lg:flex-row gap-y-3 lg:gap-x-10">
                    <div className='lg:text-left lg:w-[30%]'>
                        <h3 className='uppercase mb-4 text-[20px] font-bold'>company</h3>
                        <ul className="lg:flex lg:flex-col justify-around gap-[10px]">
                            <p>
                                <Link to='/' title='Home' className='text-left text-inherit hover:text-inherit'>
                                    Home
                                </Link>
                            </p>
                            <p>
                                <Link to='/about' title='About Us' className='text-inherit hover:text-inherit'>
                                    About Us
                                </Link>
                            </p>
                            <p>
                                <Link to='/plans' title='Our Plans' className='text-inherit hover:text-inherit'>
                                    Plans
                                </Link>
                            </p>
                            <p>
                                <Link to='/contact-us' title='Contact Us' className='text-inherit hover:text-inherit'>
                                    Contact Us
                                </Link>
                            </p>
                        </ul>
                    </div>
                    <div className='lg:text-left lg:w-[50%]'>
                        <h3 className='uppercase mb-4 text-[20px] font-bold'>legal</h3>
                        <ul className="lg:flex lg:flex-col justify-around gap-[10px]">
                            <p>
                                <Link to='/' title='Home' activeclass='active' className='text-inherit hover:text-inherit'>
                                    Privacy Policy
                                </Link>
                            </p>
                            <p>
                                <Link to='/about' title='About Us' activeclass='active' className='text-inherit hover:text-inherit'>
                                    Terms and Conditions
                                </Link>
                            </p>
                            <p>
                                <Link to='/plans' title='Our Plans' activeclass='active' className='text-inherit hover:text-inherit'>
                                    Certificate of Incorporation
                                </Link>
                            </p>
                        </ul>
                    </div>
                </div>
                <div id='contact' className='lg:text-left lg:w-[20%]'>
                    <h3 className='uppercase mb-4 text-[20px] font-bold'>Contact</h3>
                    <ul className="lg:flex lg:flex-col justify-around gap-[10px]">
                        <p className='text-inherit hover:text-inherit'>
                            vestify@investment.com
                        </p>
                        <p className='text-inherit hover:text-inherit'>
                            House 46B housing Lodge,<br />United States of America.
                        </p>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="flex flex-col p-[2rem] justify-center items-center">
                <p className='pb-1 text-center'>Copyright © <span className='font-bold text-[1.2rem]'>2023.</span> All Rights Reserved by Vestify</p>
                <a className='opacity-10' target='blank' href="https://lovepik.com/images/png-crypto.html">Png vectors by Lovepik.com</a>
            </div>
        </section>
    );
}