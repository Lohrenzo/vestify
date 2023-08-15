import { useState, useEffect } from "react";

import SimpleImageSlider from "react-simple-image-slider";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// Images
import img1 from "../assets/img/pexels-mobile-tra.jpg";
import img2 from "../assets/img/6196251.png";


export default function testimonials() {
    const slides = [
        {
            url: img1,
            name: 'John',
            testimony: "I know nothing about trading, but Vestify has made it possible for me to invest and earn excellent weekly returns without my direct involvement.",
            role: "Investor"
        },
        {
            url: img2,
            name: 'Jane',
            testimony: "I was skeptical in the beginning, but i must say this is the best company I've invested in.",
            role: "Investor"
        },
        {
            url: img1,
            name: 'Paul',
            testimony: "With my investment on Vestify, I've made so much profits and I'm still making so much more. They make it seem so easy.",
            role: "Investor"
        },
    ];

    const [index, setIndex] = useState(0);
    const length = slides.length;
    
    function handleNext() {
        if (index < (length - 1)) {
            setIndex(index + 1);
        }
        else if (index == (length - 1)) {
            setIndex(0);
        }
    }

    function handlePrevious() {
        if (index != 0) {
            // if (index <= (length - 1) || index == 1) {
            setIndex(index - 1);
        }
        else if (index == 0) {
            setIndex(length - 1);
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {

            if (index != (length - 1)) {
                setIndex(index + 1);
            }
            // else if (index == (length - 1)) {
            //     setIndex(0);
            // }
            else {
                setIndex(index == 0);
            }
            // setIndex(
            //     index + 1
            // );
        }, 2000);
        return () => clearInterval(interval);
    }, [])

    let slide = slides[index];

    return (
        <section className="testimonials py-[45px] bg-[white] text-black px-3">
            <h3 className="text-center mb-[2rem] text-[2.2rem] lg:text-[2.6rem]">What Our Clients Are Saying</h3>
            <div className='flex justify-center items-center'>
                <button className="flex justify-center items-center rounded-full bg-[transparent] border-0 focus:outline-none" onClick={handlePrevious}><ArrowBackIosIcon /></button>
                <div className="flex justify-center items-center rounded-lg border shadow-xl text-center h-[200px] w-[400px]">
                    <img className="rounded-l-lg w-[150px] h-[200px] object-cover" src={slide.url} alt="Customer Picture" />
                    <div className="rounded-r-lg p-2 w-[250px] flex flex-col h-[200px] items-center overflow-y-auto">
                        <p>{slide.testimony}</p>
                        <h3 className="font-bold">{slide.name}</h3>
                        <small className="underline">{slide.role}</small>
                    </div>
                </div>
                <button className="flex justify-center items-center rounded-full bg-[transparent] border-0 focus:outline-none" onClick={handleNext}><ArrowForwardIosIcon /></button>
                {/* <SimpleImageSlider
                    width={690}
                    height={470}
                    images={slides}
                    showBullets={true}
                    showNavs={true}
                    autoPlay={true} 
                    autoPlayDelay = {3}
                    onStartSlide = {(index, length) => {
                        setImageNum(index);
                    }}
                /> */}
                <div>
                </div>
            </div>
        </section>
    );
};
