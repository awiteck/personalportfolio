// src/app/page.tsx
import { personalInfo } from '@/config/personal'
import { projects } from '@/config/projects'
import Link from 'next/link'
import Image from 'next/image'
import BioSummary from '@/components/BioSummary';
import MobileNav from '@/components/MobileNav'

export default function Home() {
  const featuredProjects = projects.filter(p => p.isFeatured);
  return (
    <>
    <MobileNav />
    {/* Contact Link */}
      

      <main className="max-w-2xl mx-auto px-4 py-16">
        {/* Header section */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-primary dark:text-primary-dark">
              {personalInfo.name}
            </h1>
            <Link
              href="/contact"
              className="link-default"
            >
              Get in touch
            </Link>
          </div>
          <BioSummary />
        </div>

        {/* About Me */}
        <div className="hidden md:block">
          {/* About Me */}
          <div className="mb-16 text-primary dark:text-primary-dark">
            <h2 className="text-xl font-semibold mb-6">About Me</h2>
            <p>
            Hey, I'm Aidan. I graduated from Princeton in 2024 and majored in Operations Research and Financial Engineering (that's a long name! Basically, just a lot of <strong>machine learning</strong>, <strong>probability theory</strong>, and <strong>optimization</strong>). I also minored in <strong>Applications of Computing</strong> and <strong>Mandarin Chinese</strong>.

            <br /><br />

            I've been passionate about AI/ML for quite a while, and have been <a href="https://meetings.aps.org/Meeting/MAR20/Session/G20.3" className="link-default">building neural nets</a> for over 5 years now. 

            <br /><br />

            I was also on the varsity heavyweight rowing team. Now, I mostly run.
            </p>
          </div>


          {/* Projects List */}
          <div>
            <h2 className="text-xl font-semibold mb-6">My favorite projects</h2>
            <p className="text-primary dark:text-primary-dark italic mb-6">
              I've worked on a lot of stuff, but here are some of my favorites. To see everything, check out my{' '}
              <Link href="/projects" className="link-default">
                full project list
              </Link>
              .
            </p>
            
            <ul className="space-y-4">
              {featuredProjects.map((project) => (
                <li key={project.slug}>
                  <span className="text-md">
                    <Link 
                      href={`/portfolio/${project.slug}`}
                      className="link-default"
                    >
                      {project.name}
                    </Link>
                    : {project.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>


      {/* Desktop social icons */}
      <div className="fixed bottom-8 left-8 hidden md:flex gap-4">
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-70 hover:opacity-100 transition-opacity"
        >
          <Image 
            src="/icons/github.svg"
            alt="GitHub"
            width={32}
            height={32}
            className="dark:invert" // This will invert colors in dark mode
          />
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-70 hover:opacity-100 transition-opacity"
        >
          <Image 
            src="/icons/linkedin.svg"
            alt="LinkedIn"
            width={32}
            height={32}
            className="dark:invert" // This will invert colors in dark mode
          />
        </a>
      </div>

      {/* Mobile social icons */}
      <div className="fixed bottom-4 left-0 right-0 flex justify-center gap-6 md:hidden">
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-70 hover:opacity-100 transition-opacity"
        >
          <Image 
            src="/icons/github.svg"
            alt="GitHub"
            width={32}
            height={32}
            className="dark:invert" // This will invert colors in dark mode
          />
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-70 hover:opacity-100 transition-opacity"
        >
          <Image 
            src="/icons/linkedin.svg"
            alt="LinkedIn"
            width={32}
            height={32}
            className="dark:invert" // This will invert colors in dark mode
          />
        </a>
      </div>
    </>
  )
}
