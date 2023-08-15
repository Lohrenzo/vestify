import { useState, useRef } from 'react';

//  link
import { Routes, Route, NavLink, Link } from 'react-router-dom';

// Icons
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// Pages
import Home from '../pages/Home';
import About from '../pages/About';
import Plans from '../pages/Plans';
import Contact from '../pages/Contact';


export default function Nav() {

    const [open, setOpen] = useState(false);
    const navRef = useRef();

    // function Open() {
    //     navRef.current.style.left = "0px";
    // }

    function ToggleNav() {
        setOpen(!open);
    }

    return (
        <>
            <nav className="flex items-center lg:justify-around justify-between lg:px-0 sm:px-[2rem] py-[1.8rem] lg:border-b-2 lg:shadow lg:shadow-[#028CCA] overflow-x-hidden fixed bg-[#06091D] inset-x-0 top-0" >
                <Link to='/' title='Home' className="cursor-pointer items-center justify-center">
                    <h2 className='logo duration-200 text-[#028CCA] hover:text-[#ffffff] font-bold text-[35px]'>Vestify</h2>
                </Link>
                <button onClick={ToggleNav} className='p-[8px] transition hover:scale-125 duration-400 border-0 lg:hidden inline focus:outline-none bg-transparent'>
                    {open == false ? <MenuIcon sx={{ fontSize: "2.4rem"}} /> : <CloseIcon sx={{ fontSize: "2.4rem"}} />}
                </button>
                <div className="lg:flex hidden items-center justify-around gap-[6rem]">
                    <ul className="relative lg:flex block lg:flex-nowrap text-[1.3rem] items-center justify-around gap-[4rem] block">
                        <NavLink to='/' title='Home' activeclass='active' className='nav-link'>
                            Home
                        </NavLink>
                        <NavLink to='/about' title='About Us' activeclass='active' className='nav-link'>
                            About Us
                        </NavLink>
                        <NavLink to='/plans' title='Our Plans' activeclass='active' className='nav-link'>
                            Plans
                        </NavLink>
                        {/* <NavLink to='/features' title='Features' activeclass='active' className='nav-link'>
                            Features
                        </NavLink> */}
                        <NavLink to='/contact-us' title='Contact Us' activeclass='active' className='nav-link'>
                            Contact Us
                        </NavLink>
                    </ul>
                    <div className="flex justify-between item-center gap-x-3">
                        {/* <NavLink to="/sign-in" title='Sign In' className="btn-white">Sign In</NavLink> */}
                        <NavLink to="/sign-up" title='Get Started' className="btn-sky-outline">Get Started</NavLink>
                    </div>
                </div>
            </nav>
            {open == false ? 
                <div className="navbar opacity-0 left-[-1000px] lg:hidden grid grid-cols-1 gap-[1rem]"> 
                    <ul className="relative block gap-[1rem] grid grid-cols-1">
                        <NavLink to='/' title='Home' activeclass='active' className='text-left navLink'>
                            Home
                        </NavLink>
                        <NavLink to='/about' title='About Us' activeclass='active' className='navLink'>
                            About Us
                        </NavLink>
                        <NavLink to='/plans' title='Our Plans' activeclass='active' className='navLink'>
                            Plans
                        </NavLink>
                        {/* <NavLink to='/features' title='Features' activeclass='active' className='navLink'>
                            Features
                        </NavLink> */}
                        <NavLink to='/contact-us' title='Contact Us' activeclass='active' className='navLink'>
                            Contact Us
                        </NavLink>
                    </ul>
                    <div className="flex justify-between item-center gap-x-3">
                        {/* <NavLink to="/sign-in" title='Sign In' className="btn-white">Sign In</NavLink> */}
                        <NavLink to="/sign-up" title='Get Started' className="btn-sky-outline">Get Started</NavLink>
                    </div>
                </div>
                :
                <div className="navbar border-b border-[#028CCA] opacity-100 left-[0px] lg:hidden grid grid-cols-1 gap-[1rem]">
                    <ul className="relative block gap-[1rem] grid grid-cols-1">
                        <NavLink to='/' title='Home' activeclass='active' className='text-left navLink'>
                            Home
                        </NavLink>
                        <NavLink to='/about' title='About Us' activeclass='active' className='navLink'>
                            About Us
                        </NavLink>
                        <NavLink to='/plans' title='Our Plans' activeclass='active' className='navLink'>
                            Plans
                        </NavLink>
                        {/* <NavLink to='/features' title='Features' activeclass='active' className='navLink'>
                            Features
                        </NavLink> */}
                        <NavLink to='/contact-us' title='Contact Us' activeclass='active' className='navLink'>
                            Contact Us
                        </NavLink>
                    </ul>
                    <div className="flex justify-between item-center gap-x-3">
                        {/* <NavLink to="/sign-in" title='Sign In' className="btn-white">Sign In</NavLink> */}
                        <NavLink to="/sign-up" title='Get Started' className="btn-sky-outline">Get Started</NavLink>
                    </div>
                </div>
            }


            <Routes>
                <Route path='/' element={ <Home /> }></Route>
                <Route path='/about' element={ <About /> }></Route>
                <Route path='/plans' element={ <Plans /> }></Route>
                <Route path='/contact-us' element={ <Contact /> }></Route>
            </Routes>
        </>
    );
};
