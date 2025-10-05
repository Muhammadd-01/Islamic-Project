import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ThreeBackground from '../components/ThreeBackground'

function Home() {
  return (
    <div>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <ThreeBackground />
        <motion.div 
          className="relative z-10 text-center max-w-4xl px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Authentic Islamic Guidance in the Age of AI
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-700 dark:text-gray-300 leading-relaxed">
            Get answers rooted in Quran, Hadith, and scholarly consensus. Consult verified scholars online.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/ask-ai" className="py-4 px-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300">
              Ask Now
            </Link>
            <Link to="/consultation" className="py-4 px-8 glass-card rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300 text-gray-900 dark:text-white">
              Consult Scholar
            </Link>
            <Link to="/quran" className="py-4 px-8 glass-card rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300 text-gray-900 dark:text-white">
              Read Quran
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Why Choose Islamic AI?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="glass-card p-8 rounded-2xl text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">AI-Powered Answers</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Get instant responses with authentic Quran and Hadith references</p>
            </motion.div>
            <motion.div 
              className="glass-card p-8 rounded-2xl text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-5xl mb-4">👨‍🏫</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Verified Scholars</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Book consultations with qualified scholars from Ahlus-Sunnah</p>
            </motion.div>
            <motion.div 
              className="glass-card p-8 rounded-2xl text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Educational Content</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Read articles addressing modern challenges with Islamic wisdom</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home