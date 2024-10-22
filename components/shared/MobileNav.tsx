'use client'
import React from 'react'
import Image from 'next/image'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'
  

const MobileNav = () => {

    const pathname = usePathname();
    
    return (
        <header className="header">
            <Link href={'/'} className='flex items-center gap-2 md:py-2' >
                <Image src="/assets/images/logo-text.svg" alt='Logo' width={180} height={28} />
            </Link>
            <nav className='flex gap-2'>
                <SignedIn>
                    <UserButton />
                    <Sheet>
                    <SheetTrigger><Image src="/assets/icons/menu.svg" alt='Logo' width={28} height={28} className='cursor-pointer'/></SheetTrigger>
                        <SheetContent className='sheet-content sm:w-64'>
                            <>
                                <Image src="/assets/images/logo-text.svg" alt='Logo' width={152} height={23} />
                                <ul className='header-nav_elements'>
                            {
                                navLinks.map( (link,i) => {
                                    const isActive = link.route === pathname
                                    return <li key={`li-${i}`} className={`p-18 ${ isActive && 'gradient-text' }`}>
                                        <Link href={link.route} className='sidebar-link cursor-pointer'>
                                            <Image src={link.icon} alt='logo-icon' width={20} height={20}/>
                                            { link.label}
                                        </Link>
                                    </li>
                                })
                            }
                        </ul>
                            </>
                        </SheetContent>
                    </Sheet>

                </SignedIn>
                <SignedOut>
                    <Button asChild className='button bg-purple-gradient bg-cover'><Link href="/sign-in">Login</Link></Button>    
                </SignedOut>
            </nav>
        </header>
    )
}

export default MobileNav