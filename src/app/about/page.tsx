import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      <Link 
        href="/"
        className="text-[#3E2723] hover:text-[#5D4037] mb-8 inline-block"
      >
        ← Back home
      </Link>
      
      <h1 className="text-2xl font-bold mb-8">About Me</h1>
      
      {/* About Me */}
        <div>
            <p>
            Hey, I'm Aidan. I graduated from Princeton in 2024 and majored in Operations Resrearch and Financial Engineering (that's a long name! Basically, just a lot of <strong>machine learning</strong>, <strong>probability theory</strong>, and <strong>optimization</strong>). I also minored in <strong>Applications of Computing</strong> and <strong>Mandarin Chinese</strong>.

            <br /><br />

            I've been passionate about AI/ML for quite a while, and have been <a href="https://meetings.aps.org/Meeting/MAR20/Session/G20.3" className="text-[#967969] underline hover:text-[#5D4037]">building neural nets</a> for over 5 years now. 

            <br /><br />

            I was also on the varsity heavyweight rowing team. Now, I mostly run (currently training for Napa Marathon this March!).
            </p>
        </div>
    </main>
  )
}