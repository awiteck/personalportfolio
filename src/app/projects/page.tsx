import Link from 'next/link'
import { projects } from '@/config/projects'
import { ArrowRight } from 'lucide-react'

export default function ProjectsPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-8 md:py-16">
      <Link 
        href="/"
        className="text-link hover:text-link-hover dark:text-link-dark dark:hover:text-link-dark-hover flex items-center gap-2 mb-8 hover:gap-3 transition-all"
      >
        ← Back home
      </Link>

      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-primary dark:text-primary-dark">
        All Projects
      </h1>

      <div className="space-y-6">
        {projects.map((project) => (
          <div 
            key={project.slug}
            className="group"
          >
            <Link 
              href={`/portfolio/${project.slug}`}
              className="block p-4 -mx-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <h2 className="text-lg font-medium text-primary dark:text-primary-dark group-hover:text-secondary dark:group-hover:text-secondary-dark">
                    {project.name}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>
                  
                  {/* {project.technologies && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.slice(0, 3).map(tech => (
                        <span 
                          key={tech}
                          className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 
                                   text-gray-600 dark:text-gray-400 
                                   rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-sm text-gray-500 dark:text-gray-500">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  )} */}
                </div>
                
                <ArrowRight className="w-5 h-5 text-gray-400 dark:text-gray-600 
                                     group-hover:text-secondary dark:group-hover:text-secondary-dark 
                                     group-hover:transform group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}