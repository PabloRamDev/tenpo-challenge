import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='flex sticky top-8 bg-neutral-900 h-auto p-8 justify-between items-center rounded-full'>


        <nav>
            <ul className='flex items-center justify-center'>
                <li>
                    <Link as={"li"} className='text-neutral-0 font-open-sans font-bold' href={"#persona"}>Persona</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}
