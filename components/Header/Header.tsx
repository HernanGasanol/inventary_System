import React from 'react'
import Image from 'next/image'
import img from '../../public/images/shoes.jpg'

const Header = () => {
  return (
    <header>
        <div className="w-full h-[20%]">
             <Image src={img} width={100}  height={100} layout="responsive" alt="shoes" />
        </div>
    </header>
  )
}

export default Header