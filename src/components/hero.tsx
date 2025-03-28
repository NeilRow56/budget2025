'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const HeroSection = () => {
  const imageRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    const imageElement = imageRef.current

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const scrollThreshold = 100

      if (scrollPosition > scrollThreshold) {
        imageElement?.classList.add('scrolled')
      } else {
        imageElement?.classList.remove('scrolled')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className='px-4 pt-40 pb-20'>
      <div className='container mx-auto text-center'>
        <h1 className='bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text pr-2 pb-6 text-5xl font-extrabold tracking-tighter text-transparent md:text-8xl lg:text-[105px]'>
          Manage Your Finances <br /> with Intelligence
        </h1>
        <p className='mx-auto mb-8 max-w-2xl text-xl text-gray-600'>
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights.
        </p>
        <div className='flex justify-center space-x-4'>
          <Link href='/dashboard'>
            <Button size='lg' className='px-8'>
              Get Started
            </Button>
          </Link>
          <Link href='https://www.youtube.com/roadsidecoder'>
            <Button size='lg' variant='outline' className='px-8'>
              Watch Demo
            </Button>
          </Link>
        </div>
        <div className='hero-image-wrapper mt-5 md:mt-0'>
          <div ref={imageRef} className='hero-image'>
            <Image
              src='/banner.jpeg'
              width={1280}
              height={720}
              alt='Dashboard Preview'
              className='mx-auto rounded-lg border shadow-2xl'
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
