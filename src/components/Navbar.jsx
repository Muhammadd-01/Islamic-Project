import { Link } from 'react-router-dom'
import { useState } from 'react'
import DarkModeToggle from './DarkModeToggle'

function Navbar({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
            Islamic AI
          </Link>
          
          <button 
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="w-6 h-0.5 bg-gray-900 dark:bg-white transition-all"></span>
            <span className="w-6 h-0.5 bg-gray-900 dark:bg-white transition-all"></span>
            <span className="w-6 h-0.5 bg-gray-900 dark:bg-white transition-all"></span>
          </button>

          <ul className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-20 md:top-0 left-0 right-0 md:left-auto md:right-auto glass-nav md:bg-transparent md:backdrop-blur-none gap-6 p-6 md:p-0 items-center`}>
            <li><Link to="/" onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-gold dark:hover:text-gold font-medium transition-colors">Home</Link></li>
            <li><Link to="/ask-ai" onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-gold dark:hover:text-gold font-medium transition-colors">Ask AI</Link></li>
            <li><Link to="/quran" onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-gold dark:hover:text-gold font-medium transition-colors">Quran</Link></li>
            <li><Link to="/library" onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-gold dark:hover:text-gold font-medium transition-colors">Library</Link></li>
            <li><Link to="/shop" onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-gold dark:hover:text-gold font-medium transition-colors">Shop</Link></li>
            <li><Link to="/consultation" onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-gold dark:hover:text-gold font-medium transition-colors">Consultation</Link></li>
            <li><Link to="/articles" onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-gold dark:hover:text-gold font-medium transition-colors">Articles</Link></li>
            <li><Link to="/profile" onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-gold dark:hover:text-gold font-medium transition-colors">Profile</Link></li>
            <li><DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} /></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar