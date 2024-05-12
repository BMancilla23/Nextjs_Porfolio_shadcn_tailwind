import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

export const Logo = (props: Props) => {
  return (
    <Link href='/'>
      <h3><span className='text-rose-600'>|</span> BM <span className='text-rose-600'>|</span></h3>
    </Link>
  )
}