import Link from 'next/link'
import React from 'react'

interface NavLinkProps {
    text: string,
    isCta: string
    href: string
}
export default function NavLink({text, isCta, href} : NavLinkProps) {
  return (
     <Link href={href} data-iscta={isCta} className='text-neutral-0 font-open-sans text-xs data-[iscta=true]:bg-primary-400 data-[iscta=true]:px-2 data-[iscta=true]:py-1 data-[iscta=true]:rounded-md data-[iscta=true]:text-text-900 font-bold'>{text}</Link>
  )
}
