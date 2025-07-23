import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <section className='relative flex mt-lg h-[648px] items-center justify-center py-xl bg-red-200'>
        <Image src={"/images/hero-phone.png"} alt='Phone with tepago app' width={648} height={648} className='absolute top-0 left-0'/>
        <div className='flex flex-col items-center justify-center'>
        <h1 className='font-open-sans font-bold text-xl justify-center items-center'>
        Una sola cuenta, sin cuentos
        </h1>
        <p>Compra, paga, ahorra y envía dinero sin cobros. Todo claro, sin cuentos.</p>
        </div>

    </section>
  )
}
