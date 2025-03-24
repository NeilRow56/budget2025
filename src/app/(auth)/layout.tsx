import { Logo } from '@/components/shared/logo'

export default function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='max-w-container relative mx-auto mb-14 flex h-screen flex-col items-center justify-center'>
      <Logo />
      <div className='mt-12'>{children}</div>
    </div>
  )
}
