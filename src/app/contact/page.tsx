import Link from 'next/link'
import { personalInfo } from '@/config/personal'

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      <Link 
        href="/"
        className="text-[#3E2723] hover:text-[#5D4037] mb-8 inline-block"
      >
        ← Back home
      </Link>
      
      <h1 className="text-2xl font-bold mb-8">Get in touch</h1>
      
      <div className="space-y-6">
        <div>
          {/* <h2 className="text-lg font-semibold mb-2">Email</h2> */}
          <p className="text-gray-700">Personal Email: <a href={`mailto:${personalInfo.email}`} className="text-[#3E2723] underline hover:text-[#5D4037]">{personalInfo.email}</a></p>
          
          <p className="text-gray-700"><br /><br />Well... that's all ya got. Sorry.</p>

          {/* <br />
          <br />
          <br />

          <p className="text-gray-700">On second thought, if you're feeling fancy, you can message me on <a href="https://strava.app.link/CV5MIDDr8Pb" className="text-[#3E2723] underline hover:text-[#5D4037]">Strava</a></p> */}
        </div>
      </div>
    </main>
  )
}