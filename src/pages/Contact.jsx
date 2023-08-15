import { useRef } from 'react';
// import emailjs from 'emailjs-com';

// motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.sendForm(
    //   process.env.REACT_APP_SERVICE_ID,
    //   process.env.REACT_APP_TEMPLATE_ID,
    //   form.current,
    //   process.env.REACT_APP_PUBLIC_KEY
    // ).then(
    //   (response) => {
    //     alert("Email Sent Successfully!", response.status, response.text)
    //   },
    //   (err) => {
    //     alert("FAILED!!!", err)
    //   }
    //   // result => alert(result.text),
    //   // error => alert(error.text)
    // );

    e.target.reset();
  };

  return (
    <section className='banner text-[#000000] bg-white flex items-center justify-center '>
      <div className="mx-auto lg:mt-[4rem] mt-[10rem] px-5 w-full">
        <div className='flex items-center justify-center flex-col px-5 lg:flex-row gap-[2rem] w-full'>
          {/* <div id="alert-1" class="flex p-4 mb-4 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
            <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Info</span>
            <div class="ml-3 text-sm font-medium">
              {{response}}
            </div>
              <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-1" aria-label="Close">
                <span class="sr-only">Close</span>
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </div> */}
          <motion.div
            variants={fadeIn('right', 0.6)} 
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once: false, amount: 0.7}}           
            className='text-center lg:mt-0 mt-[2rem] lg:text-left'
          >
            <h2 className="blow text-[#06091D] text-[2.1rem] capitalize font-bold">Get In touch with us</h2>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.6)} 
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once: false, amount: 0.4}}           
            className="w-full lg:mt-[9rem] lg:w-[50%]"
          >
            <form ref={form} onSubmit={sendEmail}>
              <div className="flex flex-col gap-3 w-full">
                <small className=' text-xs'>All fields with <span className='text-[1.3rem]'>*</span> are required.</small>
                <input required type="text" name='name' placeholder='Full Name *' className='bg-transparent p-3 rounded-t-lg border-2 placeholder:text-black focus:border-accent focus:outline-none transition-all'/>
                <input required type="email" name='email' placeholder='Email Address *' className='bg-transparent p-3 border-2 placeholder:text-black focus:border-accent focus:outline-none transition-all'/>
                <input type='number' name='phone' placeholder='Phone Number' className='bg-transparent p-3 border-2 placeholder:text-black focus:border-accent focus:outline-none transition-all'/>
                <textarea required name="message" placeholder='Enter A Message *' className='bg-transparent p-3 rounded-b-lg border-2 placeholder:text-black focus:border-accent focus:outline-none transition-all'></textarea>
                <div className='text-center lg:text-right mb-32'>
                  <input type="submit" value="Send Message" className='btn btn-sky cursor-pointer' />
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
};

export default Contact;
