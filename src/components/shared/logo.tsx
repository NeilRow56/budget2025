import { PiggyBank } from 'lucide-react'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href='/' className='flex items-center gap-2'>
      <PiggyBank className='stroke size-11 stroke-amber-500 stroke-[1.5]' />
      <p className='bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl leading-tight font-bold tracking-tighter text-transparent'>
        Budget Tracker
      </p>
    </Link>
  )
}
export const LogoMobile = () => {
  return (
    <Link href='/' className='flex items-center gap-2'>
      <p className='bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl leading-tight font-bold tracking-tighter text-transparent'>
        Budget Tracker
      </p>
    </Link>
  )
}
