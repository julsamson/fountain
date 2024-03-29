import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='  bg-white shadow-lg shadow-black/40'>
      <section>

        <nav className='flex justify-between container mx-auto py-8'>

          <div>
            Logo
          </div>

          <div className='flex'>
            <ul className='flex items-center gap-x-5'>
              <li>
                <Link href='#' className='hover:text-red-600'>
                  HOME
                </Link>
              </li>
              <li>
                <Link href='/about-us' className='hover:text-red-600'>
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-red-600'>
                  TALENT
                </Link>
              </li>
              <li>
                <Link href='/contacts' className='hover:text-red-600'>
                  CONTACTS
                </Link>
              </li>
              <li>
                <Link href='/registration' className='hover:text-red-600'>
                  TALENT REGISTRATION
                </Link>
              </li>
              <li>
                <Link href='/login' className='hover:text-red-600'>
                  LOGIN
                </Link>
              </li>
            </ul>
            {/* <MenuOpenIcon /> */}

            <div>
              
            </div>
          </div>

        </nav>
      </section>
    </div>
  )
}
