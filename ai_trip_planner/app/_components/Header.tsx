import React from 'react'
import Image from 'next/image'
// import path from 'path'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SignInButton } from '@clerk/nextjs'

const menuOptions = [
    {
        name : 'Home',
        path : '/'
    },
    {
        name : 'Pricing',
        path : '/pricing'
    },
    {
        name : 'Contact',
        path : '/contact-us'
    }
]

const Header = () => {
  return (
    <div className='flex justify-between items-center p-5'>
        <div className='flex gap-2 items-center'>
            <Image src={'/logo.svg'} alt='logo' width={30} height={30} />
            <h2 className='font-bold text-2xl'>AI TRIP PLANNER</h2>
        </div>

        <div className='flex gap-5 items-center'>
            {menuOptions.map((menu, index) => (
                <Link key={menu.path} href={menu.path}>
                    <h2 className='text-lg hover:scale-105 transition-all hover:text-primary'>
                        {menu.name}
                    </h2>
                </Link>
            ))}
        </div>

        <SignInButton>
            <Button>
                Get Started
            </Button>
        </SignInButton>
    </div>
  )
}

export default Header