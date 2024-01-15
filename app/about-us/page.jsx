import React from 'react'
import Link from 'next/link'
import Naviagtion from '../components/navigation/navigation'
import Footer from '../components/footer/footer'

export default function About() {
  return (
    <div>
      <Naviagtion />
      <section>
        {/* paragraphy */}
        <div>
          <span>
            <h2>
              WELCOME TO OUR AGENCY
            </h2>
            <h1>
              Who We Are?
            </h1>
          </span>
        </div>

      </section>
      <Footer />
    </div>
  )
}
