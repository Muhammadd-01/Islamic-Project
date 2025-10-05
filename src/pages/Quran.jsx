import { useState } from 'react'
import { motion } from 'framer-motion'

function Quran() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSurah, setSelectedSurah] = useState(1)
  const [translation, setTranslation] = useState('english')

  const mockVerses = [
    { number: 1, arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful." },
    { number: 2, arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", translation: "All praise is due to Allah, Lord of the worlds." },
    { number: 3, arabic: "الرَّحْمَٰنِ الرَّحِيمِ", translation: "The Entirely Merciful, the Especially Merciful," },
    { number: 4, arabic: "مَالِكِ يَوْمِ الدِّينِ", translation: "Sovereign of the Day of Recompense." },
  ]

  return (
    <div className="min-h-screen py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">Holy Quran</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10 text-lg">Read, Search, and Understand with Tafseer & Translation</p>

          <div className="glass-card rounded-3xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <input
                type="text"
                placeholder="Search verses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="p-4 rounded-xl glass border-2 border-gray-200 dark:border-gray-700 focus:border-gold outline-none transition-colors text-gray-900 dark:text-white"
              />
              <select 
                value={selectedSurah} 
                onChange={(e) => setSelectedSurah(e.target.value)}
                className="p-4 rounded-xl glass border-2 border-gray-200 dark:border-gray-700 focus:border-gold outline-none transition-colors text-gray-900 dark:text-white"
              >
                <option value="1">1. Al-Fatihah</option>
                <option value="2">2. Al-Baqarah</option>
                <option value="3">3. Ali 'Imran</option>
              </select>
              <select 
                value={translation} 
                onChange={(e) => setTranslation(e.target.value)}
                className="p-4 rounded-xl glass border-2 border-gray-200 dark:border-gray-700 focus:border-gold outline-none transition-colors text-gray-900 dark:text-white"
              >
                <option value="english">English</option>
                <option value="urdu">Urdu</option>
                <option value="arabic">Arabic Only</option>
              </select>
            </div>

            <div className="space-y-6">
              {mockVerses.map((verse) => (
                <div key={verse.number} className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-transform duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold text-white flex items-center justify-center font-bold flex-shrink-0">
                      {verse.number}
                    </div>
                    <div className="flex-1">
                      <p className="text-3xl text-right mb-4 leading-loose text-gray-900 dark:text-white font-arabic">
                        {verse.arabic}
                      </p>
                      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        {verse.translation}
                      </p>
                      <button className="mt-4 text-gold hover:underline font-semibold">
                        View Tafseer
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Quran