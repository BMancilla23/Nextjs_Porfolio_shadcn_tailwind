
import Link from 'next/link'
import { RiBriefcase4Fill, RiTeamFill, RiTodoFill, RiArrowDownSLine } from 'react-icons/ri'
import { Button } from './ui/button'
import { Download, Send } from 'lucide-react'
import { Socials } from './Socials'
import { DevImg } from './DevImg'
import { Badge } from './Badge'
import { RiNodejsFill, RiReactjsFill, RiAngularjsFill, RiNextjsFill } from 'react-icons/ri'

type Props = {}

export const Hero = (props: Props) => {
  return (
    <section className='py-14 xl:py-24 bg-no-repeat bg-bottom dark:bg-none bg-cover'>
      <div className="container mx-auto max-w-7xl ">
        <div className='flex justify-between gap-x-8 '>
          <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
            <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>Desarrollador Web</div>
            <h1 className='h1 mb-2'>Hola, mi nombre es Bryan Mancilla</h1>
            <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>Aspirante a desarrollador web, creativo y enfocado en la mejora continua, me impulsa el potencial de la tecnología para crear experiencias nuevas.</p>
            <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
              <Link href='/contact'>
                <Button className='gap-x-2'>Contactame <Send size={18} /> </Button>
              </Link>
              <Button variant='secondary' className='gap-x-2'>Descargar CV <Download size={18} /> </Button>
            </div>
            <Socials containerStyles={'flex gap-x-6 mx-auto xl:mx-0'} iconStyles={'text-foreground text-[22px] hover:text-primary transition-all'} />
          </div>
          <div className='hidden xl:flex relative '>
            {/* <Badge
              containerStyles={'absolute top-[24%] -left-[5rem]'}
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              endCountText={''}
              badgeText={'Años de experiencia'} /> */}

            {/*  <Badge
              containerStyles={'absolute top-[80%] -left-[1rem]'}
              icon={<RiTodoFill />}
              endCountNum={10}
              endCountText={'k'}
              badgeText={'Proyectos terminados'} /> */}
            <Badge
              containerStyles={'absolute top-[24%] -left-[5rem]'}
              icon={<RiTodoFill />}
              endCountNum={10}
              /*  endCountText={'k'} */
              badgeText={'Proyectos terminados'} />
            <div className="w-[450px] h-[450px] bg-gray-200 dark:bg-[#212123] bg-no-repeat relative -top-1 -right-2 rounded-full shadow-lg overflow-hidden transition duration-500 ease-in-out">
              <DevImg
                containerStyles='w-[510px] h-[462px] absolute -bottom-16'
                imgSrc='/hero/developer.png'
              /
              >

            </div>
            <div className="absolute  top-[60%] left-[0] flex flex-wrap gap-6 pointer-events-none ">
              <div className={'relative bg-primary rounded-full w-20 h-20 flex items-center justify-center'} >
                <RiNodejsFill className='absolute size-12 text-white' />
              </div>
            </div>
            <div className="absolute top-[90%] left-[40%] flex flex-wrap gap-6 pointer-events-none ">
              <div className={'relative bg-primary rounded-full w-20 h-20 flex items-center justify-center'} >
                <RiReactjsFill className='absolute size-12 text-white' />
              </div>
            </div>
            <div className="absolute top-[70%] left-[80%] flex flex-wrap gap-6 pointer-events-none ">
              <div className={'relative bg-primary rounded-full w-20 h-20 flex items-center justify-center'}>
                <RiAngularjsFill className='absolute size-12 text-white' />
              </div>
            </div>

            <div className="absolute top-[20%] left-[90%] flex flex-wrap gap-6 pointer-events-none ">
              <div className={'relative bg-primary rounded-full w-20 h-20 flex items-center justify-center'}>
                <RiNextjsFill className='absolute size-12 text-white' />
              </div>
            </div>

          </div>

        </div>


        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className='text-3xl text-primary' />
        </div>
      </div>
    </section>
  )
}