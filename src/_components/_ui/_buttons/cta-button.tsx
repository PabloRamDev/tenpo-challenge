import React from 'react'
import clsx from 'clsx'

type ctaButtonProps = {
    text: string,
    isPrimary: boolean,
}
export default function CtaButton({text, isPrimary} : ctaButtonProps) {
  return (
    <div className={clsx('flex items-center justify-center rounded-md px-md w-full py-sm hover:bg-neutral-700 duration-100 bg-neutral-900 text-text-0 font-open-sans font-bold cursor-pointer', {'bg-primary-400 hover:bg-primary-300 text-text-900' : isPrimary})}>{text}</div>
  )
}
