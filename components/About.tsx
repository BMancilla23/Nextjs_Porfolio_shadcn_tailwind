
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ExperienceData, InfoItem, QualificationData, SkillData, ToolsData } from '@/interfaces/aboutTypes'

import { User2, MailIcon, PhoneCall, GraduationCap, Calendar, Briefcase, Phone, HomeIcon } from 'lucide-react'
import Image from 'next/image'

const infoData: InfoItem[] = [
  {
    icon: <User2 size={20} />,
    text: 'Bryan Mancilla'
  },
  {
    icon: <PhoneCall size={20} />,
    text: '+51 935 855 675'
  },
  {
    icon: <MailIcon size={20} />,
    text: 'bmancilla119@gmail.com'
  },
  {
    icon: <Calendar size={20} />,
    text: 'Nacido el 29 de abril de 2000'
  },
  {
    icon: <GraduationCap size={20} />,
    text: 'Técnico en Desarrollo de Software'
  },
  {
    icon: <HomeIcon size={20} />,
    text: 'Lima, Canto Grande'
  },
]

const qualificationData: QualificationData[] = [
  {
    title: 'education',
    data: [
      {
        university: 'CERTUS',
        qualification: 'Desarrollo de Software',
        years: '2021 - 2024'
      },
      {
        university: 'Ed Team',
        qualification: 'Desarrollo Frontend',
        years: '2022 - 2023'
      },
      {
        university: 'Platzi',
        qualification: 'Desarrollo Backend',
        years: '2022 - 2023'
      },
      {
        university: 'Udemy',
        qualification: 'Desarrollo Full Stack',
        years: '2023 - Actual'
      },

    ]
  },

]

const experienceData: ExperienceData[] = [
  {
    title: 'experience',
    data: [
      {
        company: '',
        role: '',
        years: ''
      },
      /* {
        company: 'Empresa A',
        role: 'Desarrollador Full Stack',
        years: '2021 - 2023'
      }, */
    ]
  }
]

const skillData: SkillData[] = [
  {
    title: 'skills',
    data: [
      {
        name: 'HTML, CSS'
      },
      {
        name: 'Javascript'
      },
      {
        name: 'NodeJs'
      },
      {
        name: 'ReactJs'
      },
      {
        name: 'Angular'
      },
      {
        name: 'NextJs'
      }
    ]
  },

]
const toolsData: ToolsData[] = [
  {
    title: 'tools',
    data: [
      {
        imgPath: '/about/vscode.svg'
      },
      {
        imgPath: '/about/figma.svg'
      },
      {
        imgPath: '/about/notion.svg'
      },
      /* {
        imgPath: '/about/wordpress.svg'
      }, */
    ]
  }
]

type Props = {}

export const About = (props: Props) => {

  /* const getData = (arr: any, title: string) => {
    return arr.find((item: any) => item.title === title);
  } */

  /*  console.log(getData(qualificationData, 'education')); */

  console.log(qualificationData);


  return (
    <section className='pb-12 xl:py-12'>
      <div className="max-w-7xl container mx-auto">
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>Acerca de mí</h2>

        <div className='flex'>
          <div className="hidden xl:flex flex-1 relative">
            <div className='relative w-[450px] h-[450px]  shadow-md dark:shadow-sm  rounded-md dark:shadow-white '>
              <Image className='absolute bottom-0 left-8 ' width={350} height={250} src='/about/developer.png' alt='' />
            </div>
          </div>
          {/* Tabs */}
          <div className="flex-1">
            <Tabs defaultValue='personal'>
              <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Información</TabsTrigger>
                <TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>Calificaciones</TabsTrigger>
                <TabsTrigger className='w-[162px] xl:w-auto' value='skills' >Habilidades</TabsTrigger>
              </TabsList>
              {/* Tabs content */}
              <div className='text-lg mt-12 xl:mt-8'>
                {/* Personal */}
                <TabsContent value='personal'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-4'>Profesional enfocado en el desarrollo web</h3>
                    <p className='subtitle max-w-xl mx-auto xl:mx-0'>Me especializo en la creación de sitios web intuitivos con tecnología moderna, brindando experiencias de usuario dinámicas y atractivas.</p>
                    {/* Icons */}
                    <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                      {
                        infoData.map((item, index) => (
                          <div className='flex items-center gap-x-4 mx-auto xl:mx-0' key={index}>
                            <div className='text-primary'>{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        ))
                      }
                    </div>
                    {/* Languages */}
                    <div className='flex flex-col gap-y-2'>
                      <div className='text-primary'>Habilidad lingüística</div>
                      <div className="border-b border-border"></div>
                      <div>English A2, Spanish</div>
                    </div>
                  </div>
                </TabsContent>
                {/* Qualifications */}
                <TabsContent value='qualifications'>
                  <div>
                    <h3 className='h3 mb-8 text-center xl:text-left'>
                      Mi Viaje Asombroso
                    </h3>
                    {/* Experience & education wrapper */}
                    <div className="grid md:grid-cols-1 gap-y-8 justify-center"> {/* Agregar md:grid-cols-2 gap-y-8 */}
                      {/* Experience */}
                      {/* <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <Briefcase />
                          <h4 className='capitalize font-medium'>
                            {
                              experienceData[0].title
                            }
                          </h4>

                        </div>
                      
                        <div className='flex flex-col gap-y-8'>
                          
                          {
                            experienceData[0].data.map(({ company, role, years }, index) => (
                              <div className='flex gap-x-8 group' key={index}>
                                <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                  <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'>
                                  </div>
                                </div>
                                <div>
                                    <div className='font-semibold text-xl leading-none mb-2'>{company}</div>
                                    <div className='text-lg loading-none text-muted-foreground mb-4'>{role}</div>
                                    <div className='text-base font-medium'>{years}</div>
                                  </div>
                              </div>
                            ))
                          }
                        </div>
                      </div> */}
                      {/* Education */}
                      <div className='flex flex-col items-center gap-y-8'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <GraduationCap size={28} />
                          <h4 className='capitalize font-medium'>
                            {
                              qualificationData[0].title
                            }
                          </h4>

                        </div>
                        {/* List */}
                        <div className='grid grid-cols-2 justify-center gap-y-8 gap-x-8'> {/* flex flex-col gap-y-8 */}

                          {
                            qualificationData[0].data.map(({ university, qualification, years }, index) => (
                              <div className='flex gap-x-8 group' key={index}>
                                <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                  <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'>
                                  </div>
                                </div>
                                <div>
                                  <div className='font-semibold text-xl leading-none mb-2'>{university}</div>
                                  <div className='text-lg loading-none text-muted-foreground mb-4'>{qualification}</div>
                                  <div className='text-base font-medium'>{years}</div>
                                </div>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value='skills'>
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Herramientas del día a día</h3>
                    {/* skills */}
                    <div className='mb-16'>
                      <h4 className='text-xl font-semibold mb-2'>Habilidades</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* skill list */}
                      <div className='grid grid-cols-3'>
                        {
                          skillData[0].data.map(({name}, index) => (
                            <div className='w-2/4 text-center xl:text-left mx-auto xl:mx-0' key={index}>
                              <div className="font-medium">
                                {name}
                              </div>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                     {/* tools */}
                     <div>
                      <h4 className='text-xl font-semibold mb-2 xl:text-left'>Herramientas</h4>
                      <div className='border-b border-border mb-4'></div>
                      <div className='flex gap-x-8 justify-center xl:justify-start'>
                      {
                          toolsData[0].data.map(({imgPath}, index) => (
                            <div key={index}>
                              <Image src={imgPath} width={48} height={48} alt=''/>
                            </div>
                          ))
                        }
                      </div>
                     </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}