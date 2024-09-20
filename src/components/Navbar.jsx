import React from 'react'
import Image from "next/image";


const Navbar = () => {
  return (
    <nav className='h-[60px] w-full flex items-center md:pl-[190px]'>
        <ul className='flex items-center gap-6'>
          <li className="flex items-center gap-2 text-[14px]">
            Home
            <Image src={"/down.png"} width={10} height={10} alt="arrow" />
          </li>
          <li className="flex items-center gap-2 text-[14px]">
            Shop
            <Image src={"/down.png"} width={10} height={10} alt="arrow" />
          </li>
          <li className="flex items-center gap-2 text-[14px]">
            Pages
            <Image src={"/down.png"} width={10} height={10} alt="arrow" />
          </li>
          <li className="flex items-center gap-2 text-[14px]">
            Blog
            <Image src={"/down.png"} width={10} height={10} alt="arrow" />
          </li>
          <li className="flex items-center gap-2 text-[14px]">
            About us
            <Image src={"/down.png"} width={10} height={10} alt="arrow" />
          </li>
          <li className="flex items-center gap-2 text-[14px]">
            Contact us
            <Image src={"/down.png"} width={10} height={10} alt="arrow" />
          </li>
        </ul>
      </nav>
  )
}

export default Navbar