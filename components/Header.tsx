'use client'

import React, { useEffect, useState } from 'react'
import { ThemeToggler } from './ThemeToggler'
import { Logo } from './Logo'
import { Nav } from './Nav'
import { MobileNav } from './MobileNav'
import { usePathname } from 'next/navigation'

type Props = {}

export const Header = (props: Props) => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const pathName = usePathname()

  useEffect(() => {

    const handleScroll = () => {
      const threshold = 50;
      setIsSticky(window.scrollY > threshold)
    }

    window.addEventListener('scroll', handleScroll)

   return () => window.removeEventListener('scroll', handleScroll)
    
  }, [pathName])
  

  return (
    <header className={`${isSticky ? 'py-4 bg-gray-100 shadow-lg dark:bg-gray-950' : 'py-6 bg:transparent dark:bg-transparent'} sticky top-0 z-30 transition-all`}> {/* ${pathName === '/' && 'bg-[#fef9f5]'} */}
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            {/* Nav */}
            <Nav 
            containerStyles='hidden xl:flex gap-x-8 items-center'
            linkStyles='relative hover:text-primary transition-all'
            underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
            />
            <ThemeToggler />
            {/* MobileNav */}
            <div className='xl:hidden'>
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

