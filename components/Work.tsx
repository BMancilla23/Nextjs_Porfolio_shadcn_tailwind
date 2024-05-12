'use client'

import { ProjectItem } from '@/interfaces/workTypes'
import Link from 'next/link'

// Import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import swipper styles
import 'swiper/css'
import 'swiper/css/pagination'

// Import required modules
import { Pagination } from 'swiper/modules'
import { Button } from './ui/button'
import { ProjectCard } from './ProjectCard'

type Props = {}

const projectData: ProjectItem[] = [
  {
    image: '/work/3.png',
    category: 'react js',
    name: 'Nexa Website',
    description: 'Consectetur dolor qui commodo aute adipisicing ea pariatur et pariatur nisi veniam deserunt do.',
    link: '/',
    github: '/'
  },
  {
    image: '/work/4.png',
    category: 'next js',
    name: 'Solstice Website',
    description: 'Velit eu nostrud ipsum cillum minim incididunt fugiat do.',
    link: '/',
    github: '/'

  },
  {
    image: '/work/2.png',
    category: 'next js',
    name: 'Lumina Website',
    description: 'Velit eu nostrud ipsum cillum minim incididunt fugiat do.',
    link: '/',
    github: '/'

  },
  {
    image: '/work/1.png',
    category: 'next js',
    name: 'Evolve Website',
    description: 'Velit eu nostrud ipsum cillum minim incididunt fugiat do.',
    link: '/',
    github: '/'

  },
  {
    image: '/work/3.png',
    category: 'next js',
    name: 'Ignite Website',
    description: 'Consectetur dolor qui commodo aute adipisicing ea pariatur et pariatur nisi veniam deserunt do.',
    link: '/',
    github: '/'
  },
  {
    image: '/work/4.png',
    category: 'next js',
    name: 'Envision Website',
    description: 'Velit eu nostrud ipsum cillum minim incididunt fugiat do.',
    link: '/',
    github: '/'

  },
  {
    image: '/work/1.png',
    category: 'next js',
    name: 'Serenity Website',
    description: 'Velit eu nostrud ipsum cillum minim incididunt fugiat do.',
    link: '/',
    github: '/'

  },
  {
    image: '/work/3.png',
    category: 'fullstack',
    name: 'Nova Website',
    description: 'Consectetur dolor qui commodo aute adipisicing ea pariatur et pariatur nisi veniam deserunt do.',
    link: '/',
    github: '/'
  },
  {
    image: '/work/2.png',
    category: 'next js',
    name: 'Zenith Website',
    description: 'Velit eu nostrud ipsum cillum minim incididunt fugiat do.',
    link: '/',
    github: '/'

  },
]

export const Work = (props: Props) => {
  return (
    <section className='relative mb-12 xl:my-24'>
      <div className='container mx-auto'>
        {/* text */}
        <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
          <h2 className='section-title mb-4'>Proyectos recientes</h2>
          <p className='subtitle mb-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <Link href='/projects'>
            <Button>Ver todos</Button>
          </Link>
        </div>
        {/* Slider */}
        <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
          <Swiper className='h-[480px]' slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2
              }
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* Mostrar solo los primeros 4 proyectos para las diapositivas. */}
            {
              projectData.slice(0, 4).map((project, index) => {
                return (
                  <SwiperSlide key={index}>
                    <ProjectCard project={project} />
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
      </div>
    </section>
  )
}