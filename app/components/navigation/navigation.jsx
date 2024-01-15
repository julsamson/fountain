import React from 'react'
import Link from 'next/link'
import Sidebar from './sidebar/sidebar'
import Navbar from './navbar/navbar'

export default function Naviagtion() {
  return (
    <div className=''>
        <Navbar />
        <Sidebar />
    </div>
  )
}
