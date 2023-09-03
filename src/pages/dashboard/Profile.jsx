// Images
import avatar from "../../assets/img/94.jpg";

// Icons
import EditIcon from '@mui/icons-material/Edit';

// Components
import DashNav from '../../components/dashboard/DashNav';


const Profile = () => {
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
                                    <h2 className="lg:text-[2.6rem] text-[1.4rem] lg:leading-normal leading-6 lg:tracking-wide">John Doe Akpabio</h2>
                                    <p className="opacity-50 lg:text-[1rem] text-[0.7rem]">
                                        <span className='font-bold'>ID:</span>  1543859042
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center h-[50px] pe-3">
                                <EditIcon sx={{transition: "ease-in-out all 0.4s"}} className="hover:scale-110 hover:cursor-pointer opacity-50 hover:opacity-100"/>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 rounded-xl block mx-7 mb-2 p-3 shadow bg-white">
                        <table className="text-left">
                            <h3 className="font-bold text-[1.4rem] w-[100%] uppercase pb-2">Profile Information</h3>
                            <hr className="mb-4 w-[70vw] bg-black/50 rounded p-[1.5px]"/>
                            <tbody className="table-grid">
                                <tr>
                                    <th>Email: </th>
                                    <td>admin@admin.com</td>
                                </tr>
                                <tr>
                                    <th>Gender: </th>
                                    <td>Male</td>
                                </tr>
                            </tbody>
                            <h3 className="font-bold text-[1.4rem] w-[100%] uppercase pb-2">Address</h3>
                            <hr className="mb-4 w-[70vw] bg-black/50 rounded p-[1.5px]"/>
                            <tbody className="table-grid">
                                <tr>
                                    <th>Street: </th>
                                    <td>15 on Herby</td>
                                </tr>
                                <tr>
                                    <th>City: </th>
                                    <td>Florida</td>
                                </tr>
                                <tr>
                                    <th>Postal Code: </th>
                                    <td>110053</td>
                                </tr>
                                <tr>
                                    <th>Country: </th>
                                    <td>United States</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Profile;
