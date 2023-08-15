import { GppGood } from "@mui/icons-material";

const cardData = [
    {
        name: "Basic Trader",
        priceRange: "$500 - $1,000",
        features: ["$500 minimum", "8.5% ROI daily", "$250 Bonus", "$100 referral Bonus", "10 days period"]
    },
    {
        name: "Professional Trader",
        priceRange: "$1,000 - $5,000",
        features: ["$1,000 minimum", "11.1% ROI daily", "$500 Bonus", "$200 referral Bonus", "15 days period"]
    },
    {
        name: "Classic Trader",
        priceRange: "$1,000 - $5,000",
        features: ["$1,000 minimum", "11.1% ROI daily", "$500 Bonus", "$200 referral Bonus", "15 days period"]
    },
]

const PlanCards = () => {
    return (
        <section className="py-[4rem] lg:px-[12rem] bg-[#ffffff]">
            <div className="grid grid-cols-1 lg:grid-cols-3 text-center">
                {...cardData.map((data, index) => {
                    const {name, priceRange, features} = data;
                    return (
                        <div className="grid grid-cols-1 shadow-md shadow-[#06091D] bg-white text-black text-left py-5 rounded-lg my-2 mx-4">
                            <p className="text-[1.4rem] mb-3 px-[3rem]">{name}</p>
                            <p className="font-bold bg-[#028CCA] px-[3rem] py-2 text-white text-[1.8rem]">{priceRange}</p>
                            <div className="px-[3rem]">
                                {features.map((feature, index) => {
                                    return (
                                        <div className="flex flex-row py-3 text-left">
                                            <p className="w-[2rem]">
                                                <GppGood /> 
                                            </p>
                                            <p className="text=left">{feature}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default PlanCards;