'use client'

import Link from 'next/link';
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill
} from 'react-icons/ri'

type Props = {
  containerStyles: string;
  iconStyles: string;
}

const ICONS = [
  {
    path: '/',
    name: <RiYoutubeFill/>
  },
  {
    path: '/',
    name: <RiLinkedinFill/>
  },
  {
    path: '/',
    name: <RiGithubFill/>
  },
  {
    path: '/',
    name: <RiFacebookFill/>
  },
  {
    path: '/',
    name: <RiInstagramFill/>
  },
] as const

export const Socials = ({containerStyles, iconStyles}: Props) => {
  return (
    <div className={`${containerStyles}`}>
      {
        ICONS.map((icon, index) => (
          <Link href={icon.path} key={index}>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        ))
      }
    </div>
  )
}