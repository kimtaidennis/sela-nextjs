'use client';

import { navLinks } from '@/constants'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Button } from "@/components/ui/button"


const Sidebar = () => {
    
    const pathname = usePathname();
  
    return (
        <aside className='sidebar'>
            <div className="flex size-f flex-col gap-4">
                <Link href={'/'} className='sidebar-logo'>
                    <Image src="/assets/images/logo-text.svg" alt='Logo' width={180} height={28} />
                </Link>
                <nav className='sidebar-nav'>
                    <SignedIn>
                        <ul className='sidebar-nav_elements'>
                            {
                                navLinks.slice(0,6).map( (link,i) => {
                                    const isActive = link.route === pathname
                                    return <li key={`li-${i}`} className={`sidebar-nav_element group ${ isActive ? 'bg-purple-gradient text-white' : 'text-slate-500' }`}>
                                        <Link href={link.route} className='sidebar-link'>
                                            <Image src={link.icon} alt='logo-icon' width={20} height={20} className={`${isActive && 'brightness-200'}`}/>
                                            { link.label}
                                        </Link>
                                    </li>
                                })
                            }
                        </ul>
                        <ul>
                            {
                                navLinks.slice(6).map( (link,i) => {
                                    const isActive = link.route === pathname
                                    return <li key={`li-${i}`} className={`sidebar-nav_element group ${ isActive ? 'bg-purple-gradient text-white' : 'text-slate-500' }`}>
                                        <Link href={link.route} className='sidebar-link'>
                                            <Image src={link.icon} alt='logo-icon' width={20} height={20} className={`${isActive && 'brightness-200'}`}/>
                                            { link.label}
                                        </Link>
                                    </li>
                                })
                            }
                            <li className='flex-center cursor-pointer gap-2 p-4 text-slate-600'><UserButton showName /></li>
                        </ul>
                    </SignedIn>
                    <SignedOut>
                        <Button asChild className='button bg-purple-gradient bg-cover'><Link href="/sign-in">Login</Link></Button>        
                    </SignedOut>
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar