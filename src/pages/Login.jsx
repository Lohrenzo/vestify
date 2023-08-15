import { useRef } from 'react';
import { Link } from 'react-router-dom';

// motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';

const Login = () => {
    const form = useRef();

    const send = (e) => {
        e.preventDefault();
        e.target.reset();
    }

    return (
        <section className='lg:pt-[8rem] lg:h-[95vh] bg-white pt-[8rem] pb-5 grid grid-cols-1 mx-auto'>
            <motion.div
                variants={fadeIn('down', 0.4)} 
                initial="hidden" 
                whileInView={"show"} 
                viewport={{once: false, amount: 0.4}}           
                className='text-center mt-[2rem]'
            >
                <h2 className="text-[#06091D] text-[2.1rem] capitalize font-bold">Welcome Back</h2>
            </motion.div>
            <motion.div
                variants={fadeIn('left', 0.6)} 
                initial="hidden" 
                whileInView={"show"} 
                viewport={{once: false, amount: 0.4}}           
                className="shadow-xl m-4 mx-auto border rounded-xl bg-[white] px-5 w-[90%] lg:w-[50%]"
            >
                <form ref={form} onSubmit={send}>
                    <div className="grid grid-cols-1 pt-7 gap-3 text-black w-full">
                        <input required type="email" name='email' placeholder='Email Address' className='bg-transparent p-3 border-2 placeholder:text-black focus:border-accent focus:outline-none transition-all'/>
                        <input required type='password' name='password' placeholder='Password' className='bg-transparent p-3 border-2 placeholder:text-black focus:border-accent focus:outline-none transition-all'/>
                        <div className="flex flex-row gap-x-3">
                            <input type="checkbox" className='checkbox' name="terms-conds" id="t&c" />
                            <p className='text-black hover:text-black transition duration-200 opacity-70'>Remember me</p>
                        </div>
                        <div className='text-center lg:text-right '>
                            <input type="submit" value="Login" className='btn-sky cursor-pointer' />
                        </div>
                        <p className='lg:mb-16 mb-10 text-center'>Don't have an account? <Link to="/sign-up" className='text-[#028CCA] hover:text-[#06091D]'>Sign Up Here</Link></p>
                    </div>
                </form>
            </motion.div>
        </section>
    );
}

export default Login;