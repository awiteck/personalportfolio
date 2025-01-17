// src/app/portfolio/[project]/page.tsx
import { projects } from '@/config/projects'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'
import type { Metadata, ResolvingMetadata } from 'next'
import { ExternalLink } from 'lucide-react'

type Props = {
  params: Promise<{ project: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

// Generate metadata for the page
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const projectSlug = (await params).project
  const project = projects.find(p => p.slug === projectSlug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.name} - Portfolio`,
    description: project.description,
  }
}

// Generate all possible static paths for the dynamic route
export async function generateStaticParams() {
  return projects.map((project) => ({
    project: project.slug,
  }))
}

export default async function ProjectPage({
  params,
  searchParams,
}: Props) {
  const projectSlug = (await params).project
  const project = projects.find(p => p.slug === projectSlug)

  if (!project) {
    notFound()
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      <Link 
        href="/"
        className="text-link hover:text-link-hover dark:text-link-dark dark:hover:text-link-dark-hover flex items-center gap-2 mb-8 hover:gap-3 transition-all"
      >
        ← Back home
      </Link>
      
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-primary dark:text-primary-dark">
        {project.name}
      </h1>
      
      {project.image && (
        <div className="w-full aspect-[16/9] relative mb-8">
          <Image
            src={`/images/projects/${project.image}`}
            alt={project.name}
            fill
            className="object-contain rounded-lg"
            priority
          />
        </div>
      )}
      
      <div className="prose dark:prose-invert max-w-none">
        {project.fullDescription && (
          <div className="text-primary dark:text-gray-300 whitespace-pre-line leading-relaxed">
            {project.fullDescription}
          </div>
        )}
        
        {project.technologies && (
          <div className="flex flex-wrap gap-2 my-6">
            {project.technologies.map(tech => (
              <span 
                key={tech}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 
                         text-gray-700 dark:text-gray-300 
                         rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex flex-wrap items-center gap-4 mt-8 border-t dark:border-gray-800 pt-6">
          {project.githubUrl && (
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-default flex items-center gap-2"
            >
              View on GitHub
            </a>
          )}
          
          {project.githubUrl && (project.liveUrl || Object.keys(project.otherUrls || {}).length > 0) && (
            <span className="text-gray-300 dark:text-gray-700">|</span>
          )}

          {project.liveUrl && (
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-default flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}

          {project.liveUrl && Object.keys(project.otherUrls || {}).length > 0 && (
            <span className="text-gray-300 dark:text-gray-700">|</span>
          )}

          {project.otherUrls && Object.entries(project.otherUrls).map(([label, url], index, array) => (
            <React.Fragment key={label}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-default flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                {label}
              </a>
              {index < array.length - 1 && (
                <span className="text-gray-300 dark:text-gray-700">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </main>
  )
}