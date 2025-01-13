import Link from 'next/link'
import { projects } from '@/config/projects'

export default function ProjectsPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      <Link 
        href="/"
        className="text-[#3E2723] hover:text-[#5D4037] mb-8 inline-block"
      >
        ← Back home
      </Link>

      <h1 className="text-2xl font-bold mb-8">All Projects</h1>

      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.slug}>
            <span className="text-md">
              <Link 
                href={`/portfolio/${project.slug}`}
                className="text-[#967969] underline hover:text-[#5D4037]"
              >
                {project.name}
              </Link>
              : {project.description}
            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}