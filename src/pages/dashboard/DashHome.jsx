// Images
import avatar from "../../assets/img/94.jpg";

// Icons
// import EditIcon from '@mui/icons-material/Edit';

// Components
import DashNav from '../../components/dashboard/DashNav';

const DashHome = () => {
    return (
        <div>
            <section className='dashboard h-[100vh] w-[100vw]'>
                <DashNav />
                <div className="overflow-y-auto overflow-x-hidden pt-[2rem] px-2 lg:h-[100vh] text-[#000000]">
                    <div className='bg-[gray] dash-top w-[100%] h-[180px] border-0 rounded-xl text-[3.2rem]'>
                    </div>
                    <div className="relative">
                        <div className="absolute flex flex-row items-center justify-between mx-7 lg:px-3 px-2 rounded-xl h-[124px] top-[-62px] left-0 right-0 shadow bg-white">
                            <div className="flex flex-row items-center justify-start gap-4">
                                <img src={avatar} className="object-contain border rounded-xl w-[100px] h-[100px]" width={100} height={100} alt="" />
                                <div>
                                    <h2 className="lg:text-[2.6rem] text-[1.4rem] lg:leading-normal leading-6 lg:tracking-wide">&#36; 0.00</h2>
                                    <p className="opacity-50 lg:text-[1rem] text-[0.7rem]">
                                        <span className='font-bold'>ID:</span>  1543859042
                                    </p>
                                </div>
                            </div>
                            {/* <div className="flex items-center justify-center h-[50px] pe-3">
                                <EditIcon sx={{transition: "ease-in-out all 0.4s"}} className="hover:scale-110 hover:cursor-pointer opacity-50 hover:opacity-100"/>
                            </div> */}
                        </div>
                    </div>
                    <div className="mt-20 rounded-xl grid lg:grid-cols-2 grid-cols-1 gap-[2rem] mx-7 mb-2 p-3 shadow bg-[white]">
                        <div className="flex flex-col hover:shadow-lg bals">
                            <h3>Total Profit</h3>
                            <p>&#x24; 0.00</p>
                        </div>
                        <div className="flex flex-col hover:shadow-lg bals">
                            <h3>Referral Bonus</h3>
                            <p>&#x24; 0.00</p>
                        </div>
                        <div className="flex flex-col hover:shadow-lg bals">
                            <h3>Total Deposit</h3>
                            <p>&#x24; 0.00</p>
                        </div>
                        <div className="flex flex-col hover:shadow-lg bals">
                            <h3>Total Withdrawal</h3>
                            <p>&dollar; 0.00</p>
                        </div>
                    </div>
                    <div className="mt-20 rounded-xl grid grid-cols-1 gap-[2rem] mx-7 mb-2 p-3 shadow bg-[white]">
                        <h2>Active Plan(s)</h2>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default DashHome;
