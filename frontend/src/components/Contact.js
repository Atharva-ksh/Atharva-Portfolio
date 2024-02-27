import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { MailIcon } from "@heroicons/react/solid";


function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);


    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // const params = {
        //     from_name:e.target.elements.name.value,
        //     message:e.target.elements.message.value,
        //     email:e.target.elements.email.value
        // }
        console.log(e.target)
        emailjs.sendForm(
            'service_atharva',
            'template_usp2jwj',
            e.target,
            'SSct5RzWpEXtXARz5'
        )
            .then(
                (result) => {
                    setStateMessage('Message sent!');
                    setIsSubmitting(false);
                    alert('Message sent!');
                },
                (error) => {
                    setStateMessage('Something went wrong, please try again');
                    setIsSubmitting(false);
                    alert("Something went wrong, please try again");
                }
            );
        e.target.reset();
    };

    return (
        <section id="contact" className="relative">
            <br></br>
            <br></br>
            <div className="container shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-[2000px] mx-auto">
                <div className="flex items-end justify-center mb-4 ">
                    <MailIcon className="h-18 w-20 text-yellow-555" />
                </div>
                <div className='relative bg-gray-800 text-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-[2000px] mx-auto'>
                    <div className='absolute inset-0'>
                        <img
                            alt="contact"
                            className="w-full h-full object-cover object-center rounded-lg"
                            src='/images/contact.jpg'
                        />
                    </div>
                    <div className='relative z-10 bg-opacity-50 bg-gray-800 w-1/3 mx-auto p-8 rounded-lg'>
                        <div>
                            <h1 className='mx-auto text-center font-bold text-lg md:text-2xl'><b>Contact Me!</b></h1>
                        </div>
                        <form onSubmit={sendEmail} className="max-w-lg mx-auto">
                            <label className="block text-sm font-medium ">Name</label>
                            <input placeholder='Name' type="text" name="from_name" className="text-gray-900 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            <label className="block text-sm font-medium">Email</label>
                            <input placeholder='Email' type="email" name="from_email" className="text-gray-900 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            <label className="block text-sm font-medium">Message</label>
                            <textarea placeholder='Message' name="message" className="mt-1 mb-4 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900" />
                            <button type="" value="Send" disabled={isSubmitting} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Contact;