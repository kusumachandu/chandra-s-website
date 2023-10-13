import Image from 'next/image'

import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import AboutSection from '@/components/AboutSection'
import ProjectSection from '@/components/ProjectSection'
import EmailSection from '@/components/EmailSection'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
      <Navbar />
      <div className='container mt-24 mx-auto px-12 py-4'>
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  )
}


// import { Resend } from 'resend';

// const resend = new Resend('re_Q1FyZudA_2cWLxYN5GSVak4Rb27DHvqix');

// resend.emails.send({
//   from: 'onboarding@resend.dev',
//   to: 'kusumachandu43@gmail.com',
//   subject: 'Hello World',
//   html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
// });
 
