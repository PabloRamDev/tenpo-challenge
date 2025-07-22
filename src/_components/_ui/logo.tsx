import Link from 'next/link'
import Image from 'next/image'


export default function Logo({width, height} : {width: number, height: number}) {
  return (
    <Link href={"/"}>
       <Image src={"/tepago.svg"} alt='tepago logo' width={width} height={height}/>
    </Link>
  )
}
