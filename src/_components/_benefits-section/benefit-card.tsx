import Image from 'next/image'
import React from 'react'

type benefitCardProps = {
    title: string,
    image: string,
    description: string
}
export default function BenefitCard({title, image, description} : benefitCardProps) {
  return (
    <div className='flex flex-col md:flex-row w-full items-center md:items-center justify-center gap-xl'>
        <div className='flex flex-col'>
          <h3 className='text-neutral-900 font-graphie text-lg'>
            {title}
        </h3>
        <p className='w-full'>
{description}
        </p>
        </div>

    <div className='relative bg-primary-400 rounded-xl flex flex-col items-center justify-start max-w-[400px] md:w-[400px] aspect-square p-lg '>
        <div className='absolute bottom-[-10%]'>
      <Image src={image} alt='benefit card image' width={500} height={500}/>
      </div>

    </div>
    </div>
  )
}
