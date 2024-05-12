'use client'
import { RiNodejsFill, RiReactjsFill, RiAngularjsFill } from 'react-icons/ri'

import React from 'react'

type Props = {
  containerStyles: string;
}

const ICONS = [
  {
    name: <RiNodejsFill className='absolute size-12 text-white' />
  },
  {
    name: <RiReactjsFill className='absolute size-12 text-white' />
  },
  {
    name: <RiAngularjsFill className='absolute size-12 text-white' />
  }
] as const

export const FloatingLanguages = ({ containerStyles }: Props) => {

  return (
    <>

      {
        ICONS.map((icon, i) => (
          <div key={i} className={containerStyles}>{icon.name}</div>
        ))
      }

    </>

  )
}
