import React from 'react'
import { Socials } from './Socials'

type Props = {}

export const Footer = (props: Props) => {
  return (
    <footer className='bg-secondary py-12'>
      <div className="container mx-auto">
        <div className='flex flex-col items-center justify-center'>
          {/* Socials */}
          <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4' iconStyles='text-primary text-[20px] dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all' />
          {/* Copyright */}
          <div className="text-muted-foreground">
            Copyright &copy; Bryan Mancilla. Todos los derechos reservados
          </div>
        </div>
      </div>
    </footer>
  )
} 
