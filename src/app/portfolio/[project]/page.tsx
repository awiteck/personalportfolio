// src/app/portfolio/[project]/page.tsx
import { projects } from '@/config/projects';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';

// Generate all possible static paths for the dynamic route
export async function generateStaticParams() {
  return projects.map((project) => ({
    project: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: { project: string };
}) {
  const project = projects.find((p) => p.slug === params.project);

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      <Link 
        href="/"
        className="text-[#3E2723] hover:text-[#5D4037] mb-8 inline-block"
      >
        ← Back to projects
      </Link>
      
      <h1 className="text-2xl font-bold mb-6">{project.name}</h1>
      
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
      
      <div className="prose">
        {project.fullDescription && (
          <div className="whitespace-pre-line">
            {project.fullDescription}
          </div>
        )}
        
        {project.technologies && (
          <div className="flex gap-2 my-4">
            {project.technologies.map(tech => (
              <span 
                key={tech}
                className="px-2 py-1 bg-gray-100 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex items-center gap-4 mt-6">
          {project.githubUrl && (
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800"
            >
              View on GitHub
            </a>
          )}
          
          {project.githubUrl && (project.liveUrl || Object.keys(project.otherUrls || {}).length > 0) && (
            <span className="text-gray-300">|</span>
          )}

          {project.liveUrl && (
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800"
            >
              Live Demo
            </a>
          )}

          {project.liveUrl && Object.keys(project.otherUrls || {}).length > 0 && (
            <span className="text-gray-300">|</span>
          )}

          {project.otherUrls && Object.entries(project.otherUrls).map(([label, url], index, array) => (
            <React.Fragment key={label}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800"
              >
                {label}
              </a>
              {index < array.length - 1 && (
                <span className="text-gray-300">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </main>
  )
}