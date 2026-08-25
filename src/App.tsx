import { useState } from 'react'
import Hero from './components/sections/Hero'
import LoadingScreen from './components/ui/LoadingScreen'
import CustomCursor from './components/ui/CustomCursor'
import GradientBlobs from './components/ui/GradientBlobs'
import ScrollProgress from './components/ui/ScrollProgress'
import BackgroundScene from './components/three/BackgroundScene'
import About from './components/sections/About'
import Education from './components/sections/Education'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import { useSmoothScroll } from './hooks/useSmoothScroll'

function App() {
  useSmoothScroll()

  const [showLoading, setShowLoading] = useState(false)
  const [showPortfolio, setShowPortfolio] = useState(false)

  const handleViewWork = () => {
    setShowLoading(true)
  }

  const handleLoadingComplete = () => {
    setShowLoading(false)
    setShowPortfolio(true)
  }

  return (
    <main className="relative bg-navy-950">
      <ScrollProgress />
      <GradientBlobs />
      <CustomCursor />

      {!showPortfolio && <Hero onViewWork={handleViewWork} />}
      {showLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      {showPortfolio && (
        <>
          <BackgroundScene />
          <div id="portfolio-content">
            <About />
            <Education />
            <Experience />
            <Projects />
            <Contact />
          </div>
        </>
      )}
    </main>
  )
}

export default App