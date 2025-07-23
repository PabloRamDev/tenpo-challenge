import { navLinks } from '@/_lib/header-data'
import React from 'react'
import NavLink from './nav-link'
import Logo from '../logo'

export default function Header() {
  return (
    <header className='flex sticky top-lg bg-neutral-900 h-full justify-between items-center rounded-full px-2xl py-lg z-10'>
      <Logo width={80} height={40} />
        <nav>
            <ul className='flex items-center justify-center gap-8'>
             {navLinks.map(item => <li key={item.text}><NavLink isCta={item.isCta} text={item.text} /></li>)}   
            </ul>
        </nav>
    </header>
  )
}
