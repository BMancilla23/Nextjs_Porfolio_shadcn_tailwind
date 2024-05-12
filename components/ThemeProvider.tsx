'use client'

import { FC, ReactNode } from 'react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'

interface Props extends ThemeProviderProps{
  children: React.ReactNode
}

export const ThemeProvider: FC<Props> = ({children, ...props}: Props) => {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>
}