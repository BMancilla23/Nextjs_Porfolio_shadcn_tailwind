import Link from "next/link"
import { Button } from "./ui/button"

type Props = {}

export const Cta = (props: Props) => {
  return (
    <section className="py-24 bg-tertiary dark:bg-secondary/40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 max-w-xl text-center mb-8">¿Estás preparado para convertir tus ideas en realidad? Estoy aqui para ayudar</h2>
          <Link href='/contact'>
            <Button>Contáctame</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}