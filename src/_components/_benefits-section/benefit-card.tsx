import Image from 'next/image'
import React from 'react'


type benefitCardProps = {
    title: string,
    image: string,
    description: string,

}
export default function BenefitCard({title, image, description} : benefitCardProps) {

  return (
<div className='relative flex flex-col w-full items-center justify-start gap-md md:gap-xl bg-primary-400 rounded-4xl p-lg md:py-xl aspect-square overflow-clip'>
  <div className='flex flex-col gap-xs'>
    <h3 className='text-neutral-900 font-open-sans font-bold text-md md:text-lg text-center leading-[90%]'>
      {title}
    </h3>
    <p className='w-full text-center'>
      {description}
    </p>
  </div>

    <div className='absolute bottom-[-25%] md:bottom-[-15%] w-[250px] md:w-[300px] h-auto'>
      <Image
        src={image}
        alt='benefit card image'
        width={300}
        height={300}
        className='w-full h-full'
      />
    </div>
</div>
  )
}
