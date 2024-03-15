import Link from 'next/link'
import React from 'react'

type Props = {
    title: string,
    address: string,
    Icon: any,
}

export default function MenuItem({title, address, Icon}: Props) {
  return (
    <Link href={address} className='hover:text-amber-500'>
        <Icon className='text-2xl sm:hidden'/>
        <p className='uppercase hidden sm:inline text-sm'>{title}</p>
    </Link>
  )
}