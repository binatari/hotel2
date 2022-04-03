import React from "react";
import Link from 'next/link'

const Footer = () => {
  return (
      <>
    <div className="grid grid-cols-1 md:grid-cols-3 container mx-auto gap-6 px-6 md:px-12">
      <div className="text-white px-6">
        <h2 className="text-2xl">Contact info</h2>
        <ul>
          <li>08037181261</li>
          <li>08036337700</li>
          <li><a href="https://instagram.com/alphamsa_int?utm_medium=copy_link" className="hover:text-[#AC8B12]">Connect on Instagram</a></li>
          <li>
            No.1 Ahmed Kigo Road, Off Shehu Lamino Avenue NITR Quarters, Kaduna
          </li>
        </ul>
      </div>
      <div className="text-white px-6">
        <h2 className="text-2xl">Quick Link</h2>
        <ul>
          <Link href={'/'}>
          <li className="cursor-pointer hover:text-[#AC8B12]">Home</li>
          </Link>
          <Link href={'/apartments'}>
          <li className="cursor-pointer hover:text-[#AC8B12]">Our Apartments</li>
          </Link>
          <Link href={'/about'}>
          <li className="cursor-pointer hover:text-[#AC8B12]">
           About Us
          </li>
          </Link>
        </ul>
      </div>
      <a href="mailto:alphamsaserviceapartment@gmail.com" className="flex flex-col items-center justify-center px-6">
        <img src={require('../public/icons/nosmoking.png').default.src} alt="" className="py-4" />
        <div className="flex bg-white items-center py-4 px-6 hover:text-[#AC8B12]">
         <img src={require('../public/icons/mail.png').default.src} alt="" className="max-h-[1.5rem] mr-4" />
         <h2 className="text-2xl underline">Contact us Via Email</h2>
        </div>
      </a>
    </div>
    <div className=" flex justify-center items-center text-white py-6 px-6 md:px-12 border-t-2 border-white border-opacity-20 mt-6">
      <p className="px-6"> &copy; 2022 Alphamsa Service Apartment. All rights reserved </p>
      </div>
    </> 
  );
};

export default Footer;
