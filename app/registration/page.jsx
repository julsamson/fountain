import React from 'react'
import Naviagtion from '../components/navigation/navigation'
import Footer from '../components/footer/footer'
import Link from 'next/link'
// import QuillEditor from '../about-us/quill'

export default function Registration() {
    return (
        <div>
            <Naviagtion />
            <section>
                <div>
                    <form action="post">
                        <div>
                            <div>
                                <label htmlFor="user">
                                    UserName*
                                </label><br />
                                <input type="text" name='user' id='user' placeholder='Your Username' required className='w-80 rounded-lg p-2' /> <br /><br />
                                <label htmlFor="fname">
                                    First Name*
                                </label><br />
                                <input type="text" name='fname' id='fname' placeholder='john' required className='w-80 rounded-lg p-2' /> <br /><br />
                                <label htmlFor="lname">
                                    Last Name*
                                </label><br />
                                <input type="text" name='lname' id='lname' placeholder='Doe' required className='w-80 rounded-lg p-2' /> <br /><br />
                            </div>
                            <div>
                                <label htmlFor="email">
                                    Email*
                                </label><br />
                                <input type="email" name='email' id='email' placeholder='example@.com' required className='w-80 rounded-lg p-2' /> <br /><br />
                                <label htmlFor="fname">
                                    Password*
                                </label><br />
                                <input type="password" name='pswd' id='pswd' placeholder='' required className='w-80 rounded-lg p-2' /> <br /><br />
                                <label htmlFor="lname">
                                    Confirm Password*
                                </label><br />
                                <input type="password" name='cpswd' id='cpswd' placeholder='confirm password' required className='w-80 rounded-lg p-2' /> <br /><br />
                            </div>
                        </div>
                        <div>
                            <div className='flex'>
                                <label htmlFor="about-you">
                                    About You
                                </label>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                                    </svg>
                                </span><br />
                            </div>
                            <div>
                                <textarea name="description" id="" cols="40" rows="10" className='rounded-lg'></textarea>
                            </div><br /><br />
                        </div>
                        <div>
                            <label htmlFor="category">
                                Talent Categories
                            </label><br />
                            <input type="text" name='category' id='category' placeholder='' required className='w-80 rounded-lg p-2' /> <br /><br />

                            <div >
                                <h1 className='pb-3'>Gender</h1>
                                <input type="radio" name='gender' id='male' placeholder='' required className='' value='Male' />
                                <label htmlFor="male" className='px-2 pr-4'>Male</label>
                                <input type="radio" name='gender' id='female' placeholder='' required className='' value='Female' />
                                <label htmlFor="female" className='px-2 pr-4'>Female</label>
                            </div>

                            <div>
                                <label htmlFor="country">
                                    Country
                                </label><br />
                                <input type="text" name='country' id='country' placeholder='choose a country' required className='w-80 rounded-lg p-2' /> <br /><br />

                                <label htmlFor="lang">
                                    Language Spoken
                                </label><br />
                                <input type="text" name='lang' id='lang' placeholder='select language' className='w-80 rounded-lg p-2' /> <br /><br />

                                <Link href='#' className='py-5'>
                                    show privacy policy
                                </Link><br />
                                <input type="checkbox" name='policy' id='policy' required />
                                Please confirm that you have agreed to our privacy policy
                            </div>
                        </div>

                        <button type='submit' className='px-9 py-2 bg-red-400 rounded-lg'>Register</button>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    )
}
