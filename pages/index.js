import Head from 'next/head'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Me from '../components/Me'
import NavBar from '../components/NavBar'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div className=' bg-slate-800 text-white h-screen*1.1 z-0 scrollbar-none'>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* NavBar */}
      <NavBar />
      
      {/* Hero */}
      <section id='hero'>
        <Hero />
      </section>

      
      {/* About Me */}
      <section id='me'>
        <Me />
      </section>
      
      {/* Projects */}
      <section id='projects'>
        <Projects />
      </section>
      
      
      {/* Skills */}
      
      <section id='skills'>
        <Skills />
      </section>


      {/* Footer */}
      <section id='contact'>
        <Footer />
      </section>


    </div>
  )
}
