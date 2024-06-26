"use client"

import { MobilesidebarLinks } from '@/constant'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'
import Link from 'next/link'

const MobileView = () => {
  const pathname = usePathname();
  const{data:session}=useSession()
  const admiEmail=process.env.NEXT_PUBLIC_ADMIN_EMAIL 

  return (
    
    <div className="drawer absolute left-0 top-0 z-10 md:invisible lg:invisible">
    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content">
      <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
        <Image src="/hamburger.svg" width={20} height={20} alt='hamberger'/>
      </label>
    </div> 
    <div className="drawer-side">
      <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay mt-0"></label>
      <ul className="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
        {/* Sidebar content here */}
        <li className='mt-0 flex w-full bg-gradient-to-r from-yellow-100 via-amber-400 to-amber-300 pt-0'><p className='text-2xl'> EthioDevHub</p></li>
        {MobilesidebarLinks.map((link)=>(
        <div key={link.label} className=''>
            <Link className={`${pathname === link.route ? 'flex w-full flex-row rounded-full bg-orange-500 p-2' : 'flex w-full flex-row rounded-full bg-none p-2'}`} href={link.route} >
                <Image src={link.imgURL} className='' alt='image' width={24} height={24}/>
                <p className='ml-10'>{link.label}</p>
                </Link>
        </div>
      ))
      }
         {session && session.user ? (
          <div className='flex flex-col'>
            {session.user?.email===admiEmail && <Link className='btn btn-primary mb-1' href="/admin">Admin</Link>}
          <Link className='btn btn-primary' href="api/auth/signout">signout</Link>
          </div>
         ):(
          <a href="/api/auth/signin" className='btn btn-primary'>signin</a>
         )}        
      </ul>
    </div>
  </div>
  )
}

export default MobileView