"use client"
import { navLinks } from '@/_lib/header-data'
import React from 'react'
import NavLink from './nav-link'
import Logo from '../logo'
import { IconButton } from '../_buttons/icon-button'
import { Menu } from 'lucide-react'

export default function Header() {

  return (
    <header className='flex sticky top-0 h-full max-h-[64px] bg-neutral-900 justify-between items-center px-lg md:px-2xl py-lg z-10'>
      <Logo width={80} height={40} />
        <nav className='hidden md:flex'>
            <ul className='flex items-center justify-center gap-8'>
             {navLinks.map(item => <li key={item.text}><NavLink href={item.href} isCta={item.isCta} text={item.text} /></li>)}   
            </ul>
        </nav>
        <IconButton className='xs:flex md:hidden' icon={Menu} />
    </header>
  )
}
