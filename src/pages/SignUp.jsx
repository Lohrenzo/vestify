import { useRef } from 'react';
import { Link } from 'react-router-dom';

// motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';


const SignUp = () => {

    const form = useRef();

    const send = (e) => {
        e.preventDefault();
        e.target.reset();
    }

    return (
        <section className='lg:pt-[8rem] bg-white pt-[8rem] pb-5 grid grid-cols-1 mx-auto'>
            <motion.div
                variants={fadeIn('down', 0.4)} 
                initial="hidden" 
                whileInView={"show"} 
                viewport={{once: false, amount: 0.4}}           
                className='text-center mt-[1rem]'
            >
                <h2 className="text-[#06091D] text-[2.1rem] capitalize font-bold">Create an account</h2>
            </motion.div>
            <motion.div
                variants={fadeIn('left', 0.6)} 
                initial="hidden" 
                whileInView={"show"} 
                viewport={{once: false, amount: 0.4}}           
                className="shadow-xl m-4 mx-auto border rounded-xl bg-[white] px-5 w-[90%] lg:w-[50%]"
            >
                <form ref={form} onSubmit={send}>
                    <div className="grid grid-cols-1 gap-3 text-black w-full">
                        <small className='pt-6 text-[#06091D] opacity-50 text-xs'>All fields with <span className='text-[1.3rem]'>*</span> are required.</small>
                        <input required type="text" name='username' placeholder='Username *' className='bg-transparent p-3 rounded-t-lg border-2 placeholder:text-black focus:border-accent focus:outline-none transition-all'/>
                        <input required type="text" name='name' placeholder='Full Name *' className='bg-transparent p-3 rounded-t-lg border-2 placeholder:text-black focus:border-accent focus:outline-none transition-all'/>
                        <input required type="email" name='email' placeholder='Email Address *' className='bg-transparent p-3 border-2 placeholder:text-black focus:border-accent focus:outline-none transition-all'/>
                        <input type='number' name='phone' placeholder='Phone Number' className='bg-transparent p-3 border-2 placeholder:text-black focus:border-accent focus:outline-none transition-all'/>
                        <input required type='password' name='password' placeholder='Password *' className='bg-transparent p-3 border-2 placeholder:text-black focus:border-accent focus:outline-none transition-all'/>
                        <input required type='password' name='password2' placeholder='Confirm Password *' className='bg-transparent p-3 border-2 placeholder:text-black focus:border-accent focus:outline-none transition-all'/>
                        <div className="flex flex-row gap-x-3">
                            <input type="checkbox" className='checkbox' name="terms-conds" id="t&c" />
                            <a href="" className='text-black hover:text-black transition duration-200 hover:opacity-50'>I Accept the Terms And Privacy Policy</a>
                        </div>
                        <div className='text-center lg:text-right '>
                            <input type="submit" value="Register" className='btn-sky-outline cursor-pointer' />
                        </div>
                        <p className='mb-16 text-center'>Already have an account? <Link to="/login">Login Here</Link></p>
                    </div>
                </form>
            </motion.div>
        </section>
    );
}

export default SignUp;