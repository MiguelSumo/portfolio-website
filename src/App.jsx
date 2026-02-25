import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Navbar } from "@/layout/Navbar"
import { Hero } from "@/sections/Hero"
import { About } from "@/sections/About"
import { Projects } from "@/sections/Projects"
import { Experience } from "@/sections/Experience"
import { References } from "@/sections/References"
import { Contact } from "@/sections/Contact"
import { Footer } from "@/layout/Footer"


function App() {
  return( 
  <div className="min-h-screen overflow-x-hidden">
          <Navbar />
      <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <References />
          <Contact />
      </main>
      <Footer />
      <Analytics />
      <SpeedInsights />
  </div>
  );
}

export default App;