
// Link (next js)
import Link from 'next/link';

// Next hooks
import { usePathname } from 'next/navigation'

// Framer motion
import {motion} from 'framer-motion'

type Props = {
  containerStyles: string;
  linkStyles: string;
  underlineStyles?: string;
}

const LINKS = [
  { path: '/', name: 'Inicio' },
  { path: '/projects', name: 'Proyectos' },
  { path: '/contact', name: 'Contacto' }
] as const

export const Nav = ({ containerStyles, linkStyles, underlineStyles }: Props) => {

  const path = usePathname()

  return (
    <nav className={`${containerStyles}`}>
      {
        LINKS.map((link, index) => (
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles}`}>
            {link.path === path && (
              <motion.span
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                transition={{ type: 'tween' }}
                layoutId='underline'
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        ))
      }
    </nav>
  )
}
