'use client'

import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// Import TreeCanvas with no SSR
const TreeCanvas = dynamic(() => import('./TreeCanvas'), { 
  ssr: false 
})

interface TreeLayoutProps {
  children: React.ReactNode
}

export default function TreeLayout({ children }: TreeLayoutProps) {
  const [pageHeight, setPageHeight] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // Set initial height
    setPageHeight(window.innerHeight)

    // Update height on resize
    const handleResize = () => {
      setPageHeight(window.innerHeight)
    }

    window.addEventListener('resize', handleResize)
    
    // Update height when content changes
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setPageHeight(Math.max(entry.contentRect.height, window.innerHeight))
      }
    })

    const content = document.getElementById('content')
    if (content) {
      observer.observe(content)
    }

    return () => {
      window.removeEventListener('resize', handleResize)
      observer.disconnect()
    }
  }, [])

  // Don't render trees until component is mounted on client
  if (!isMounted) {
    return <div id="content" className="relative z-10">{children}</div>
  }

  return (
    <div className="relative">
      {/* Left tree cluster */}
      <div className="fixed left-4 top-0 bottom-0 pointer-events-none hidden md:flex">
        <div className="relative w-[400px]">
          <div className="absolute left-0 top-0">
            <TreeCanvas height={pageHeight} trunkColor="#654321" />
          </div>
          <div className="absolute left-32 top-20">
            <TreeCanvas height={pageHeight * 0.9} trunkColor="#8B4513" />
          </div>
          <div className="absolute left-16 top-10">
            <TreeCanvas height={pageHeight * 0.95} trunkColor="#A0522D" />
          </div>
        </div>
      </div>

      {/* Right tree cluster */}
      <div className="fixed right-4 top-0 bottom-0 pointer-events-none hidden md:flex">
        <div className="relative w-[400px]">
          <div className="absolute right-0 top-0">
            <TreeCanvas height={pageHeight} trunkColor="#654321" />
          </div>
          <div className="absolute right-32 top-16">
            <TreeCanvas height={pageHeight * 0.85} trunkColor="#8B4513" />
          </div>
          <div className="absolute right-16 top-8">
            <TreeCanvas height={pageHeight * 0.92} trunkColor="#A0522D" />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div id="content" className="relative z-10">
        {children}
      </div>
    </div>
  )
}