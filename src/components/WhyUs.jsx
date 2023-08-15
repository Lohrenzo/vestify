
// Icons
import Groups3Icon from '@mui/icons-material/Groups3';
import GppGoodIcon from '@mui/icons-material/GppGood';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';

// Why Choose Us Data
const whyUs = [
    {
        icon: <Groups3Icon sx={{ fontSize: 50 }} />,
        name: "Beginner Friendly",
        description: "New to trading? Don't you worry, our Platform will help you get started with making smart investments.",
    },
    {
        icon: <GppGoodIcon sx={{ fontSize: 50 }} />,
        name: "Qualified Experts",
        description: "We are qualified experts and our major aim is to help you make profits.",
    },
    {
        icon: <AccountBalanceWalletRoundedIcon sx={{ fontSize: 50 }} />,
        name: "Affordable Plans",
        description: "Our plans are pocket friendly. So no matter how much you are looking to start with, we have something for you.",
    },
    {
        icon: <LocalOfferRoundedIcon sx={{ fontSize: 50 }} />,
        name: "Special Bonuses",
        description: "We offer special bonuses and discounts to Investors over time.",
    },
    {
        icon: <HandshakeRoundedIcon sx={{ fontSize: 50 }} />,
        name: "Guaranteed Returns",
        description: "Here, great technical know-how have been put to work paving way for high yields trades.",
        // profits are 100% guaranteed 
    },
]

const WhyUs = () => {
    return (
        <section className="why-us py-[3rem]">
            <h2 className='text-[3rem] text-center mb-5'>Why Choose Us?</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 mx-[6%] lg:mx-[12%] px-5 gap-[25px]">
                {whyUs.map((why, index) => {
                    const {icon, name, description} = why;
                    return (
                        <div className="rounded-lg p-5 h-[300px] flex flex-col items-center justify-center bg-black/70" key={index}>
                            <h4 className='mx-auto pb-2 text-[2rem]'>{icon}</h4>
                            <h4 className='text-[20px] tracking-wider font-semibold mb-6'>{name}</h4>
                            <p className='text-center px-5 text-md tracking-wide leading-relaxed scroll overflow-y-auto h-[14rem]'>{description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default WhyUs;