import Image from "next/image"


type Props = {
  containerStyles: string;
  imgSrc: string
}

export const DevImg = ({containerStyles, imgSrc}: Props) => {
  return (
    <div className={containerStyles} >
      <Image width={400} height={400} src={imgSrc} priority alt=""/>
    </div>
  )
}