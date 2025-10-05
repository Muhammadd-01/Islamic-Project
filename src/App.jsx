import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import SettingsModal from './components/SettingsModal'
import Home from './pages/Home'
import AskAI from './pages/AskAI'
import Consultation from './pages/Consultation'
import Articles from './pages/Articles'
import ScholarDashboard from './pages/ScholarDashboard'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Library from './pages/Library'
import Shop from './pages/Shop'
import Quran from './pages/Quran'
import LearnIslam from './pages/LearnIslam'
import Debunk from './pages/Debunk'
import Media from './pages/Media'
import Roadmap from './pages/Roadmap'
import Scholars from './pages/Scholars'
import Feedback from './pages/Feedback'

function AnimatedRoutes() {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/ask-ai" element={<AskAI />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/scholar-dashboard" element={<ScholarDashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/library" element={<Library />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/quran" element={<Quran />} />
        <Route path="/learn" element={<LearnIslam />} />
        <Route path="/debunk" element={<Debunk />} />
        <Route path="/media" element={<Media />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/scholars" element={<Scholars />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDark)
    if (isDark) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('darkMode', 'true')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('darkMode', 'false')
    }
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode}
          cartCount={cartCount}
          onSettingsClick={() => setShowSettings(true)}
        />
        <div className="flex-1 pt-20">
          <AnimatedRoutes />
        </div>
        <Footer />
        <ScrollToTop />
        <SettingsModal 
          isOpen={showSettings} 
          onClose={() => setShowSettings(false)}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </div>
    </Router>
  )
}

export default App