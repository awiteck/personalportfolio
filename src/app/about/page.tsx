import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      <Link 
        href="/"
        className="text-link hover:text-link-hover dark:text-link-dark dark:hover:text-link-dark-hover flex items-center gap-2 mb-8 hover:gap-3 transition-all"
      >
        ← Back home
      </Link>
      
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-primary dark:text-primary-dark">
        About Me
      </h1>
      
      {/* About Me */}
      <div className="space-y-6 text-primary dark:text-gray-300">
        <p>
          Hey, I'm Aidan. I graduated from Princeton in 2024 and majored in Operations Research 
          and Financial Engineering (that's a long name! Basically, just a lot of{' '}
          <strong className="text-primary dark:text-primary-dark">machine learning</strong>,{' '}
          <strong className="text-primary dark:text-primary-dark">probability theory</strong>, and{' '}
          <strong className="text-primary dark:text-primary-dark">optimization</strong>). 
          I also minored in{' '}
          <strong className="text-primary dark:text-primary-dark">Applications of Computing</strong>{' '}
          and{' '}
          <strong className="text-primary dark:text-primary-dark">Mandarin Chinese</strong>.
        </p>

        <p>
          I've been passionate about AI/ML for quite a while, and have been{' '}
          <Link 
            href="https://meetings.aps.org/Meeting/MAR20/Session/G20.3" 
            className="link-default"
            target="_blank"
            rel="noopener noreferrer"
          >
            building neural nets
          </Link>{' '}
          for over 5 years now.
        </p>

        <p>
          I was also on the varsity heavyweight rowing team. Now, I mostly run.
        </p>
      </div>
    </main>
  )
}