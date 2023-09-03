//  link
import { NavLink, Link } from 'react-router-dom';

// Icons
import EditIcon from '@mui/icons-material/Edit';
import HomeIcon from '@mui/icons-material/Home';
import { HiHome } from "react-icons/hi2";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StyleRoundedIcon from '@mui/icons-material/StyleRounded';
// AccountBoxIcon
import LogoutIcon from '@mui/icons-material/Logout';
import PaidIcon from '@mui/icons-material/Paid';
import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded';
import { BsFillPersonFill, BsPeopleFill, BsPersonFillAdd } from "react-icons/bs";
import { IoLogOut } from "react-icons/io5";
import { TiPlus } from "react-icons/ti";
import { RiRefreshFill, RiSwapFill } from "react-icons/ri";
import { GiMoneyStack, GiPayMoney } from "react-icons/gi";


const DashNav = () => {
    return (
            <div className='dash-nav overflow-hidden bg-[#000000] pt-[2rem] lg:h-[100vh]'>
                <div className="mx-3 h-[8vh]">
                    <h2 className="lg:text-[2rem] text-[1rem] tracking-wide text-center">Dashboard</h2>
                    <hr />
                </div>
                <div className="bg-[#3D8EE1] h-[88vh] overflow-y shadow">
                    <Link to="/dashboard">
                        <div className="sidebar-nav shadow hover:shadow-xl">
                            <HiHome style={{fontSize: "35px"}} className="bg-white/50 shadow-lg rounded-full p-1"/>
                            <p className="lg:text-[20px] text-[15px] capitalize">home</p>
                        </div>
                    </Link>
                    <Link to="/dashboard/deposit" className=''>
                        <div className="sidebar-nav shadow hover:shadow-xl">
                            <TiPlus style={{fontSize: "35px"}} className="bg-white/50 shadow-lg rounded-full p-1"/>
                            <p className="lg:text-[20px] text-[15px] capitalize">deposit</p>
                        </div>
                    </Link>
                    <div className="sidebar-nav shadow hover:shadow-xl">
                        <GiMoneyStack style={{fontSize: "35px"}} className="bg-white/50 shadow-lg rounded-full p-1"/>
                        <p className="lg:text-[20px] text-[15px] capitalize">withdraw</p>
                    </div>
                    <div className="sidebar-nav shadow hover:shadow-xl">
                        <RiSwapFill style={{fontSize: "35px"}} className="bg-white/50 shadow-lg rounded-full p-1"/>
                        <p className="lg:text-[20px] text-[15px] capitalize">swap</p>
                    </div>
                    <div className="sidebar-nav shadow hover:shadow-xl">
                        <StyleRoundedIcon style={{fontSize: "35px"}} className="bg-white/50 shadow-lg rounded-full p-1"/>
                        <p className="lg:text-[20px] text-[15px] capitalize">plans</p>
                    </div>
                    <div className="sidebar-nav shadow hover:shadow-xl">
                        <ReceiptRoundedIcon style={{fontSize: "35px"}} className="bg-white/50 shadow-lg rounded-full p-1"/>
                        <p className="lg:text-[20px] text-[15px] capitalize">history</p>
                    </div>
                    <Link to="/dashboard/profile">
                        <div className="sidebar-nav shadow hover:shadow-xl">
                            <BsFillPersonFill style={{fontSize: "35px"}} className="bg-white/50 shadow-lg rounded-full p-1"/>
                            <p className="lg:text-[20px] text-[15px] capitalize">profile</p>
                        </div>
                    </Link>
                    <div className="sidebar-nav shadow hover:shadow-xl">
                        <BsPersonFillAdd style={{fontSize: "35px"}} className="bg-white/50 shadow-lg rounded-full p-1"/>
                        <p className="lg:text-[20px] text-[15px] capitalize">referrals</p>
                    </div>
                    <div className="sidebar-nav shadow hover:shadow-xl">
                        <LogoutIcon style={{fontSize: "35px", color: "red"}} className="bg-white/50 shadow-lg rounded-full p-1"/>
                        <p className="lg:text-[20px] text-[15px] capitalize">logout</p>
                    </div>
                </div>
            </div>
    );
}

export default DashNav;
