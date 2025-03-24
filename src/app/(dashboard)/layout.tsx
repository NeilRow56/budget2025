import Navbar from '@/components/shared/navbar'
import { Toaster } from 'sonner'

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='relative flex h-screen w-full flex-col'>
      <Navbar />

      <main className='w-full'>
        {children}

        <Toaster />
      </main>
    </div>
  )
}
