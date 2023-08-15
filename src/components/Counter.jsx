import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Counter = () => {
    const [ref, inView] = useInView({
		threshold: 0.3,
		triggerOnce: true,
	});

    return (
        <section className="py-[4rem] bg-[#06091D]">
            <div ref={ref} className="grid text-white font-bold grid-cols-1 lg:grid-cols-3 gap-2 py-4 lg:px-[10rem] justify-center items-center">
                <p className="text-center text-[2.8rem] lg:text-[3.4rem]">
                    <CountUp start={0} end={inView ? 20000 : 0} duration={3} />+ 
                    <p className="text-[18px] lg:text-[20px]">Happy Investors</p>
                </p>
                <p className="text-center text-[2.8rem] lg:text-[3.4rem]">
                    <CountUp start={0} end={inView ? 100 : 0} duration={3} />+ 
                    <p className="text-[18px] lg:text-[20px]">Employed Experts</p>
                </p>
                <p className="text-center text-[2.8rem] lg:text-[3.4rem]">
                    <CountUp start={0} end={inView ? 95 : 0} duration={3} />% 
                    <p className="text-[18px] lg:text-[20px]">Client Satisfaction</p>
                </p>
            </div>
        </section>
    );
};

export default Counter;
