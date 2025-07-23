"use client"
import { navLinks } from '@/_lib/header-data'
import React from 'react'
import NavLink from './nav-link'
import Logo from '../logo'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import { IconButton } from '../_buttons/icon-button'
import { Menu } from 'lucide-react'

export default function Header() {

  useGSAP(() => {

    const headerTween = gsap.timeline({
    scrollTrigger: {
      trigger: "#hero-section",
      start: "center center",
      end: "bottom bottom",
      markers: true,
      scrub: 1
    }})

    //    headerTween.fromTo("header", 
    //   {
    //   backgroundColor: "#12121230",
    //          backgroundFilter: "blur(10px)",

    // }
        headerTween.fromTo("header", {
        backgroundColor: "#121212",
        backgroundFilter: "blur(10px)",
        duration: 1
      },
      {
      backgroundColor: "transparent"}
    )
    


  },[])

  return (
    <header className='flex sticky top-0 h-full max-h-[64px] md:max-h-[88px] bg-neutral-900 justify-between items-center px-xl md:px-3xl py-lg z-10'>
      <Logo width={80} height={40} />
        <nav className='hidden md:flex'>
            <ul className='flex items-center justify-center gap-8'>
             {navLinks.map(item => <li key={item.text}><NavLink isCta={item.isCta} text={item.text} /></li>)}   
            </ul>
        </nav>
        <IconButton className='xs:flex md:hidden' icon={Menu} />
    </header>
  )
}
