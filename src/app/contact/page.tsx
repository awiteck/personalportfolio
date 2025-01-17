import Link from 'next/link'
import { personalInfo } from '@/config/personal'
import { Mail } from 'lucide-react'

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-8 md:py-16">
      <Link 
        href="/"
        className="text-link hover:text-link-hover dark:text-link-dark dark:hover:text-link-dark-hover flex items-center gap-2 mb-8 hover:gap-3 transition-all"
      >
        ← Back home
      </Link>
      
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-primary dark:text-primary-dark">
        Get in touch
      </h1>
      
      <div className="space-y-8">
        {/* Email section */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-secondary dark:text-secondary-dark" />
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="link-default text-lg"
            >
              {personalInfo.email}
            </a>
          </div>
          

        </div>

        {/* Social links section */}
        <div className="pt-4">
          <div className="flex gap-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-default"
            >
              LinkedIn
            </a>
            <span className="text-gray-400">•</span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-default"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Optional Strava section - uncomment if you want to include it */}
        {/* <div className="pt-4">
          <p className="text-gray-600 dark:text-gray-400">
            If you're a runner, you can also find me on{' '}
            <a 
              href="https://strava.app.link/CV5MIDDr8Pb" 
              className="link-default"
              target="_blank"
              rel="noopener noreferrer"
            >
              Strava
            </a>
          </p>
        </div> */}
      </div>
    </main>
  )
}