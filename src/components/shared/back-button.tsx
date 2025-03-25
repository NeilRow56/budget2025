import Link from 'next/link'
import { cn } from '@/lib/utils'
import { MoveLeft } from 'lucide-react'

export default function BackButton({
  href,
  text,
  className
}: {
  href: string
  text: string
  className?: string
}) {
  return (
    <Link
      href={href}
      className={cn(
        'text-muted-foreground hover:text-foreground inline-flex cursor-pointer items-center gap-1.5 text-sm transition-colors',
        className
      )}
    >
      <MoveLeft size={16} strokeWidth={1.25} />
      <span>{text}</span>
    </Link>
  )
}
