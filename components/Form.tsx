'use client'

import { FC } from 'react';
import { Input } from './ui/input';
import { ArrowRightIcon, Mail, MessageSquare, User } from 'lucide-react';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

interface Props { }

export const Form: FC<Props> = () => {
  return (
    <form className='flex flex-col gap-y-4'>
      {/*  Input */}
      <div className="relative flex items-center">
        <Input type='name' id='name' placeholder='Nombre' />
        <User className='absolute right-6' size={20} />
      </div>

      {/*  Input */}
      <div className="relative flex items-center">
        <Input type='email' id='email' placeholder='Correo' />
        <Mail className='absolute right-6' size={20} />
      </div>

      {/*  Testarea */}
      <div className="relative flex items-center">
        <Textarea id='message' placeholder='Escribe tu mensaje Aquí' />
        <MessageSquare className='absolute right-6 top-2' size={20} />
      </div>
      <Button className='flex items-center gap-x-1 max-w-[166px]'>Hablemos <ArrowRightIcon size={20} /></Button>
    </form>

  );
};
