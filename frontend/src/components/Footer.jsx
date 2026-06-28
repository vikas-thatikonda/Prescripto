import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate()
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Prescripto is a trusted platform for booking doctor appointments online. We connect patients with qualified healthcare professionals quickly and conveniently.</p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li onClick={() => {navigate('/'); window.scrollTo(0, 0);}} className="cursor-pointer hover:text-black">Home</li>
                    <li onClick={() => {navigate('/about'); window.scrollTo(0, 0);}} className="cursor-pointer hover:text-black">About us</li>
                    <li onClick={() => {navigate('/contact'); window.scrollTo(0, 0);}} className="cursor-pointer hover:text-black">Contact us</li>
                    <li className="cursor-pointer hover:text-black">Privacy policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91 98765 43210</li>
                    <li>support@prescripto.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center text-gray-500'>© 2026 Prescripto. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
