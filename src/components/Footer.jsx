import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="glass-nav mt-20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Islamic AI Platform</h3>
            <p className="text-gray-600 dark:text-gray-400">Authentic Islamic guidance in the age of AI</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/quran" className="text-gray-600 dark:text-gray-400 hover:text-gold transition-colors">Quran</Link></li>
              <li><Link to="/library" className="text-gray-600 dark:text-gray-400 hover:text-gold transition-colors">Library</Link></li>
              <li><Link to="/learn" className="text-gray-600 dark:text-gray-400 hover:text-gold transition-colors">Learn Islam</Link></li>
              <li><Link to="/media" className="text-gray-600 dark:text-gray-400 hover:text-gold transition-colors">Media</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/ask-ai" className="text-gray-600 dark:text-gray-400 hover:text-gold transition-colors">Ask AI</Link></li>
              <li><Link to="/consultation" className="text-gray-600 dark:text-gray-400 hover:text-gold transition-colors">Consultation</Link></li>
              <li><Link to="/scholars" className="text-gray-600 dark:text-gray-400 hover:text-gold transition-colors">Scholars</Link></li>
              <li><Link to="/shop" className="text-gray-600 dark:text-gray-400 hover:text-gold transition-colors">Shop</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">About</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/roadmap" className="text-gray-600 dark:text-gray-400 hover:text-gold transition-colors">Roadmap</Link></li>
              <li><Link to="/feedback" className="text-gray-600 dark:text-gray-400 hover:text-gold transition-colors">Feedback</Link></li>
              <li><Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">&copy; 2025 Islamic AI Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer