import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-50' src={assets.click2cure_logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Click2Cure is your one-stop platform for hassle-free doctor appointments and healthcare solutions. We connect patients with trusted medical professionals, making it easy to book consultations anytime, anywhere. Your health is just a click away!</p>
        </div>

        <div>
  <p className='text-xl font-medium mb-5'>COMPANY</p>
  <ul className='flex flex-col gap-2 text-gray-600'>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About us</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    <li><Link to="/">Privacy policy</Link></li>
  </ul>
</div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91 12345-67890</li>
            <li>contact@click2cure.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025 @ click2cure.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
