import React from 'react'
import Footer from '../components/footer/footer'
import Naviagtion from '../components/navigation/navigation'

export default function Contacts() {
    return (
        <div>
            <Naviagtion />
            <section className='flex flex-wrap w-screen container mx-auto'>
                <div className='w-[50%] inline-block'>
                    <div>
                        <h1 className='pt-2 text-2xl font-semibold'>
                            Get In Touch
                        </h1>
                        <div className='py-2'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quod sint aspernatur consequuntur, reiciendis eligendi,
                            sed omnis voluptas nulla in fugit pariatur dolor cumque
                            facere culpa, dolorem ipsum totam animi? Ipsam?
                        </div>
                        <form action="" className='space-y-1 mb-2'>
                            <label htmlFor="name">
                                Your Name:
                            </label> <br />
                            <input type="text" name='name' id='name' placeholder='Fountain' required className='w-80 rounded-lg p-2' /> <br /><br />

                            <label htmlFor="email">
                                Your Email:
                            </label> <br />
                            <input type="email" name='email' id='email' placeholder='Fountain@.email.com' required className='w-80 rounded-lg p-2' /> <br /><br />

                            <label htmlFor="subject">
                                Subject:
                            </label> <br />
                            <input type="text" name='sujbect' id='subject' placeholder='what your want to about' required className='w-80 rounded-lg p-2' /> <br /><br />

                            <label htmlFor="message">
                                Message:
                            </label> <br />
                            <textarea name="message" id="message" cols="40" rows="10" aria-invalid='false' className='rounded-lg p-2'></textarea> <br /><br />

                            <input type="submit" value='Send' className='border border-red-500 bg-red-500 p-2 rounded-lg text-xl' />
                        </form>
                    </div>
                </div>
                <div className='w-[50%] inline-block pt-3 rounded-lg overflow-hidden'>
                    <iframe loading="lazy" src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" title="Arusha city, Arusha, Tanzania" aria-label="Arusha city, Arusha, Tanzania" className='w-full h-[588px]'></iframe>
                </div>
            </section>
            <Footer />
        </div>
    )
}
