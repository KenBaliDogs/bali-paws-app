import type { ReactNode } from 'react'
import BottomNav from './BottomNav'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="max-w-[430px] mx-auto min-h-screen bg-black relative">
      <main className="pb-24">
        {children}
      </main>
      <BottomNav />
    </div>
  )
}
