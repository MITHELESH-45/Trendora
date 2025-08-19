import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
       <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 tex-sm'>

        <div className=''>
             <img src={assets.logo} className='mb-4 w-60' alt="" />
             <p className='w-full mid:w-2/3 text-gray-600'>
               Trendora is your go-to destination for modern and elegant fashion. We are committed to providing high-quality products that combine style, comfort, and durability.
             </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>

            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91343435435</li>
                <li>admin@trendora.com</li>

            </ul>
        </div>

       </div>
       <div>
           <hr />
           <p className='py-5 text-sm text-center'>Copyright 2025@ trendora.com -All Right Reserved.</p>
       </div>
    </div>
  )
}

export default Footer
