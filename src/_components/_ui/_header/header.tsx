import { navLinks } from '@/_lib/header-data'
import Link from 'next/link'
import React from 'react'
import NavLink from './nav-link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className='flex sticky top-8 bg-neutral-900 h-auto justify-between items-center rounded-full px-32 py-8'>
      <Link href={"/"}>
       <Image src={"/tepago.svg"} alt='tepago logo' width={80} height={40}/>
      </Link>

        <nav>
            <ul className='flex items-center justify-center gap-8'>
             {navLinks.map(item => <li key={item.text}><NavLink isCta={item.isCta} text={item.text} /></li>)}   
            </ul>
        </nav>
    </header>
  )
}
