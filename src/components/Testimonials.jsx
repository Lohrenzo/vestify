import { useState, useEffect } from "react";

// import SimpleImageSlider from "react-simple-image-slider";
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
    
    function handleNext() {
        if (index < (slides.length - 1)) {
            setIndex((prevIndex) => (prevIndex + 1));
            console.log("Next pressed");
        } else {
            setIndex(slides.length - 1);
            console.log("Next ended");
        }
    }

    const handlePrevious = () => {
        if (index == 0) {
            setIndex(0);
            console.log("Previous ended")
        } 
        else {
            setIndex((prevIndex) => (prevIndex - 1));
            console.log("Previous pressed")
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % slides.length);
          console.log(index);
        }, 3000);

        return () => clearInterval(interval);
    }, [index]);  
    
    const slide = slides[index];

    return (
        <section className="testimonials py-[45px] bg-[white] text-black w-[100vw] overflow-x-hidden px-[1px] lg:px-3">
            <h3 className="text-center mb-[2rem] text-[1.7rem] lg:text-[2.4rem]">What Our Clients Are Saying</h3>
            <div className='flex justify-center items-center'>
                <button className="flex justify-center items-center rounded-full bg-[transparent] border-0 focus:outline-none" onClick={handlePrevious}><ArrowBackIosIcon /></button>
                {/* {slides.map((slide, index) => ( */}
                    <div className={`show-active flex justify-center items-center rounded-lg border shadow-xl text-center h-[150px] lg:h-[200px] w-[400px]`}>
                        <img className="rounded-l-lg w-[40%] h-[150px] lg:w-[150px] lg:h-[200px] object-cover" src={slide.url} alt={`${slide.name} Picture`} />
                        <div className="rounded-r-lg p-2 flex flex-col w-[60%] h-[150px] lg:w-[250px] lg:h-[200px] items-center overflow-y-auto">
                            <p className="lg:text-[1rem] text-[0.6rem]">{slide.testimony}</p>
                            <h3 className="font-bold lg:text-[1rem] text-[0.6rem]">{slide.name}</h3>
                            <small className="underline lg:text-[1rem] text-[0.5rem]">{slide.role}</small>
                        </div>
                    </div>
                {/* ))} */}
                <button className="flex justify-center items-center rounded-full bg-[transparent] border-0 focus:outline-none" onClick={handleNext}><ArrowForwardIosIcon /></button>
                <div>
                </div>
            </div>
        </section>
    );
};
