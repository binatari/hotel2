import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
const Drawer = ({show, handleShow}) => {
  const router = useRouter()
  const handleClick = (e) =>{
    e.preventDefault()
    handleShow(false)
    router.push(e.target.id)
  }
  return (
    <div className={`w-screen h-screen bg-white top-0 left-0 md:hidden z-[100] ${show? 'fixed':'hidden'}`}>
        <ul className='flex flex-col'>
        <li className='flex items-center justify-end px-12'>
        <button className={`w-10 h-12 py-1  md:hidden flex justify-end ${show && 'opened mt-5'}`} onClick={()=>handleShow(!show)}>
      <svg className='w-full h-full' viewBox="0 0 100 100">
        <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
        <path className="line line2" d="M 20,50 H 80" />
        <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
      </svg>
      </button>
      </li>
            <button id='/' className=' px-6 py-2 text-center my-4' onClick={(e)=>handleClick(e)}>
            Home
            </button>
           
            <button id='/apartments' className=' px-6 py-2 text-center my-4' onClick={(e)=>handleClick(e)}>
            Our Apartments
            </button>
            <button id='/about' className=' px-6 py-2 text-center my-4' onClick={(e)=>handleClick(e)}>
             About Us
            </button>
            <li className='bg-black px-6 py-2 text-white text-center my-4'>
              <a href="https://api.whatsapp.com/send?phone=%2B2348037181261&text&app_absent=0">
             <button className='bg-black'>
                Book Now 
             </button>
             </a>
            </li>
        </ul>
    </div>
  )
}

export default Drawer