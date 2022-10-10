import React, {useState} from 'react'
import Input from '../../Components/Contact Us/inputfield';


export default function ContactUs() {

    const [name] = useState("");
    const [email] = useState("");


  return (
    <div className='max-w-screen max-h-screen'>
        <div className='md:bg-heroimage bg-cover bg-center h-screen flex justify-center items-center md:px-40 md:py-20'>
            <div className='md:bg-children bg-auto md:h-full md:w-full grid grid-cols-2'>
                <div className='md:mt-4'>
                    <div className='bg-white-400 flex flex-col items-center justify-center w-screen h-screen md:h-full md:w-full px-10 md:px-20 '>
                        <div className='font-scopeone text-3xl py-5 w-full flex justify-center'>
                            Contact Us
                        </div>
                        <div className='font-scopeone text-xl py-5 w-full'>
                                <Input
                                    label="Name"
                                    name="name"
                                    type="name"
                                    value={name}
                                />
                        </div>
                        <div className='font-scopeone text-xl py-5 w-full'>
                                <Input
                                    label="Email"
                                    name="email"
                                    type="email"
                                    value={email}
                                />
                        </div>
                        <div className='w-full py-5'>
                                <textarea
                                class="
                                    placeholder:text-left
                                    w-full
                                    px-6
                                    py-3
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    rounded-lg
                                    focus:text-gray-700 focus:bg-white-100 focus:border-blue-600 focus:outline-none
                                "
                                id="Textarea"
                                rows="3"
                                placeholder="Your message"
                                ></textarea>
                         </div>
                         <div className='md:py-5'>
                            <button className='bg-white-100 px-5 py-3 font-bold text-roboto'>
                                Submit
                            </button>
                         </div>
                    </div>
                </div>
                <div className='flex justify-center items-end'>
                    <div className='font-roboto text-7xl'>
                        <h1 className='outlining'>INTERIOR</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
