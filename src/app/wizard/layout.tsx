import { ReactNode } from 'react'

export default async function DashboardLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <main className='relative flex h-screen w-full flex-col items-center justify-center'>
      {children}
    </main>
  )
}
