import React from 'react'
import clsx from 'clsx'

type ctaButtonProps = {
    text: string,
    isPrimary?: boolean,
    className?: string,
}
export default function CtaButton({text, isPrimary, className} : ctaButtonProps) {
  return (
    <div className={clsx('flex items-center justify-center rounded-md px-md w-full py-sm hover:bg-neutral-700 duration-100 bg-neutral-900 text-text-0 font-open-sans font-bold cursor-pointer', {'bg-primary-400 hover:bg-primary-300 text-text-900' : isPrimary}, {className})}>{text}</div>
  )
}
