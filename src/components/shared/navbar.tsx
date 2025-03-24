'use client'

import React, { useState } from 'react'
import { Logo, LogoMobile } from './logo'
import { ThemeToggle } from './theme-toggle'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Button, buttonVariants } from '../ui/button'
import { cn } from '@/lib/utils'
import { UserButton } from '@clerk/nextjs'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
    </>
  )
}

const items = [
  {
    name: 'Dashboard',
    href: '/'
  },
  {
    name: 'Manage',
    href: '/manage'
  },
  {
    name: 'Categories',
    href: '/categories'
  },
  {
    name: 'Transactions',
    href: '/transactions'
  }
]

function DesktopNavbar() {
  return (
    <div className='bg-background hidden border-separate border-b md:block'>
      <nav className='container mx-auto flex items-center justify-between px-8'>
        <div className='flex h-[80px] min-h-[60px] items-center gap-x-4'>
          <Logo />

          <div className='flex h-full'>
            {items.map(item => (
              <NavbarItem key={item.name} href={item.href} name={item.name} />
            ))}
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <ThemeToggle />
          <UserButton />
        </div>
      </nav>
    </div>
  )
}

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='bg-background block border-separate md:hidden'>
      <nav className='container flex items-center justify-between px-8'>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button className='md:hidden' variant={'ghost'} size='icon'>
              <Menu className='' />
            </Button>
          </SheetTrigger>
          <SheetTitle></SheetTitle>
          <SheetContent className='w-[400px] sm:w-[540px]' side='left'>
            <Logo />
            <div className='flex flex-col gap-1 pt-4'>
              {items.map(item => (
                <NavbarItem
                  key={item.name}
                  href={item.href}
                  name={item.name}
                  clickCallback={() => setIsOpen(prev => !prev)}
                />
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <div className='flex h-[80px] min-h-[60px] items-center gap-x-4'>
          <LogoMobile />
        </div>
        <ThemeToggle />
        <UserButton />
      </nav>
    </div>
  )
}

function NavbarItem({
  name,
  href,
  clickCallback
}: {
  name: string
  href: string
  clickCallback?: () => void
}) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <div className='relative flex items-center'>
      <Link
        href={href}
        className={cn(
          buttonVariants({
            variant: 'ghost'
          }),
          'text-muted-foreground hover:text-foreground w-full justify-start text-lg',
          isActive && 'text-foreground'
        )}
        onClick={() => {
          if (clickCallback) clickCallback()
        }}
      >
        {name}
      </Link>
      {isActive && (
        <div className='bg-foreground absolute -bottom-[2px] left-1/2 hidden h-[2px] w-[80%] -translate-x-1/2 rounded-xl md:block' />
      )}
    </div>
  )
}
