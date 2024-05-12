'use client';

import { ProjectCard } from "@/components/ProjectCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectItem } from "@/interfaces/workTypes";
import { TabsContent } from "@radix-ui/react-tabs";
import { useState } from "react";

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
    category: 'angular',
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
    category: 'angular',
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

// Elimina duplicados de categorías
const uniqueCategories = ["todos", ...projectData.map((item) => item.category)]
  .filter((value, index, self) => self.indexOf(value) === index);



export default function ProjectsPage() {
  const [categories, setCategories] = useState<string[]>(uniqueCategories)
  const [category, setCategory] = useState<string>('todos')

  console.log(category);

  // Filtrado de proyectos
  const filterProjects = projectData.filter((project) => {
    return category === 'todos' ? project : project.category === category;
  })

  console.log(filterProjects);

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Mis Proyectos
        </h2>
        {/* Tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          {/* w-full  dark:border-none*/}
          <TabsList className=" grid h-full md:grid-cols-5 md:border lg:max-w-[640px] mb-12 mx-auto ">
            {
              categories.map((category, index) => {
                return <TabsTrigger onClick={() => setCategory(category)} className="capitalize w-[162px] md:w-auto" value={category} key={index}>{category}</TabsTrigger>
              })
            }
          </TabsList>
          {/* Tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {
              filterProjects.map((project, index) => {
                return (
                  <TabsContent value={category} key={index}>
                    <ProjectCard project={project} />
                  </TabsContent>
                )
              })
            }
          </div>
        </Tabs>
      </div>
    </section>
  );
}