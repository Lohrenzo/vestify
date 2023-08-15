// Images
import img1 from "../assets/img/binance2.png"
import img2 from "../assets/img/coinbase.png"
import img3 from "../assets/img/iq-options.png"

const Partners = () => {
    return (
        <section className="bg-white p-2 flex flex-col justify-center items-center">
            <h3 className="capitalize text-black opacity-50 font-bold text-[1.2rem]">official partners:</h3>
            <div className="flex flex-col lg:flex-row lg:gap-x-[3rem]">
                <img src={img1} className="object-contain h-[100px]" width={250} alt="Partner 1" />
                <img src={img3} className="object-contain opacity-70 h-[100px]" width={250} alt="Partner 2" />
                <img src={img2} className="object-contain h-[100px]" width={250} alt="Partner 2" />
            </div>
        </section>
    );
};

export default Partners;
