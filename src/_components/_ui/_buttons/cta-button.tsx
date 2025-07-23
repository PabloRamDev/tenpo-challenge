import React from 'react'
import clsx from 'clsx'

type ctaButtonProps = {
    text: string,
    isPrimary: boolean,
}
export default function CtaButton({text, isPrimary} : ctaButtonProps) {
  return (
    <div className={clsx('rounded-md p-md bg-neutral-900 text-text-0', {'bg-primary-400 text-text-900' : isPrimary})}>{text}</div>
  )
}
