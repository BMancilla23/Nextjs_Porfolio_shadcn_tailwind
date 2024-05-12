import { Form } from "@/components/Form";
import { HomeIcon, MailIcon, PhoneCall } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <section>
      <div className="container mx-auto max-w-7xl">
        {/* Text & Ilustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-26">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <div className="w-[30px] h-[2px] bg-primary"></div>
              <span className=""> Di Hola 👋</span>
            </div>
            <h1 className="h1 max-w-md mb-8">Vamos a trabajar juntos</h1>
            <p className="subtitle max-w-[400px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          {/* Iluisration */}

          <div className="hidden xl:flex justify-center w-full">   {/* bg-contain bg-top bg-no-repeat */}
            <Image src='/contact/contact.png' width={400} height={200} alt="" />
          </div>
        </div>
        {/* Info text & form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* Info text */}
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* Email */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>bmancilla119@gmail.com</div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>Lima, Canto Grande</div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <div>+51 935 855 675</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
}