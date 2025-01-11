import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import NavItems from './NavItems'
import { Separator } from '../ui/separator'
const MobileNav = () => {
  return (
    <nav className='md:hidden'>
<Sheet>
  <SheetTrigger className='align-middle'>
  <Image
            src="/assets/icons/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
  </SheetTrigger>
  <SheetContent>
  <Image 
            src="/assets/icons/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
       <Separator className='border border-gray-50' />
          <NavItems/>
  </SheetContent>
</Sheet>

    </nav>
  )
}

export default MobileNav