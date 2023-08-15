import CountUp from "react-countup";

const Counter = () => {
    return (
        <section className="py-[4rem] bg-[#06091D]">
            <div className="grid text-white font-bold grid-cols-1 lg:grid-cols-3 gap-2 py-4 px-[10rem] justify-center items-center">
                <p className="text-center text-[2.8rem] lg:text-[3.4rem]">
                    <CountUp start={0} end={20000} duration={2} />+ 
                    <p className="text-[18px] lg:text-[20px]">Happy Investors</p>
                </p>
                <p className="text-center text-[2.8rem] lg:text-[3.4rem]">
                    <CountUp start={0} end={100} duration={2} />+ 
                    <p className="text-[18px] lg:text-[20px]">Employed Experts</p>
                </p>
                <p className="text-center text-[2.8rem] lg:text-[3.4rem]">
                    <CountUp start={0} end={95} duration={2} />% 
                    <p className="text-[18px] lg:text-[20px]">Client Satisfaction</p>
                </p>
            </div>
        </section>
    );
};

export default Counter;
