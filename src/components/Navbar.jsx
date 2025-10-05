import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import DarkModeToggle from './DarkModeToggle'

function Navbar({ darkMode, toggleDarkMode, cartCount, onSettingsClick }) {
  const [isOpen, setIsOpen] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white hover:text-gold transition-colors">
            Islamic AI
          </Link>
          
          <button 
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`w-6 h-0.5 bg-gray-900 dark:bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-900 dark:bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-900 dark:bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>

          <ul className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-20 md:top-0 left-0 right-0 md:left-auto md:right-auto glass-nav md:bg-transparent md:backdrop-blur-none gap-6 p-6 md:p-0 items-center`}>
            <li><Link to="/" onClick={() => setIsOpen(false)} className="relative text-gray-700 dark:text-gray-300 hover:text-gold dark:hover:text-gold font-medium transition-colors group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
            </Link></li>
            <li><Link to="/ask-ai" onClick={() => setIsOpen(false)} className="relative text-gray-700 dark:text-gray-300 hover:text-gold dark:hover:text-gold font-medium transition-colors group">
              Ask AI
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
            </Link></li>
            <li><Link to="/quran" onClick={() => setIsOpen(false)} className="relative text-gray-700 dark:text-gray-300 hover:text-gold dark:hover:text-gold font-medium transition-colors group">
              Quran
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
            </Link></li>
            <li><Link to="/library" onClick={() => setIsOpen(false)} className="relative text-gray-700 dark:text-gray-300 hover:text-gold dark:hover:text-gold font-medium transition-colors group">
              Library
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
            </Link></li>
            <li><Link to="/shop" onClick={() => setIsOpen(false)} className="relative text-gray-700 dark:text-gray-300 hover:text-gold dark:hover:text-gold font-medium transition-colors group">
              Shop
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
            </Link></li>
            <li><Link to="/scholars" onClick={() => setIsOpen(false)} className="relative text-gray-700 dark:text-gray-300 hover:text-gold dark:hover:text-gold font-medium transition-colors group">
              Scholars
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
            </Link></li>
            <li><Link to="/learn" onClick={() => setIsOpen(false)} className="relative text-gray-700 dark:text-gray-300 hover:text-gold dark:hover:text-gold font-medium transition-colors group">
              Learn
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
            </Link></li>
            
            {/* Cart Icon */}
            <li className="relative">
              <button className="p-2 rounded-full glass-card hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-white text-xs rounded-full flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </button>
            </li>

            {/* Settings Icon */}
            <li>
              <button 
                onClick={onSettingsClick}
                className="p-2 rounded-full glass-card hover:scale-110 transition-transform duration-300"
              >
                <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </li>

            {/* Profile Dropdown */}
            <li className="relative">
              <button 
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gray-900 flex items-center justify-center text-white font-bold hover:scale-110 transition-transform duration-300"
              >
                A
              </button>
              {showProfileMenu && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-2 w-48 glass-card rounded-xl p-2 shadow-xl"
                >
                  <Link to="/profile" onClick={() => setShowProfileMenu(false)} className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gold/20 rounded-lg transition-colors">
                    Profile
                  </Link>
                  <Link to="/feedback" onClick={() => setShowProfileMenu(false)} className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gold/20 rounded-lg transition-colors">
                    Feedback
                  </Link>
                  <button className="w-full text-left px-4 py-2 text-red-500 hover:bg-red-500/20 rounded-lg transition-colors">
                    Logout
                  </button>
                </motion.div>
              )}
            </li>

            <li><DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} /></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar