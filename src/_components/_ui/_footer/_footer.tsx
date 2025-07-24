import React from 'react'
import Logo from '../logo'

export default function Footer() {
  return (
    <footer className='flex bg-neutral-900 py-xl px-xl'>
        <div>
            <Logo width={100} height={20} />
        </div>
    </footer>
  )
}
