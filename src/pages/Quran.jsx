import { useState } from 'react'
import { motion } from 'framer-motion'

function Quran() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSurah, setSelectedSurah] = useState(1)
  const [translation, setTranslation] = useState('english')
  const [activeTab, setActiveTab] = useState('recitation')
  const [bookmarks, setBookmarks] = useState([])
  const [isPlaying, setIsPlaying] = useState(false)

  const mockVerses = [
    { number: 1, arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful.", tafseer: "This verse is known as Bismillah and is recited at the beginning of every Surah except Surah At-Tawbah..." },
    { number: 2, arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", translation: "All praise is due to Allah, Lord of the worlds.", tafseer: "This verse establishes that all forms of praise belong to Allah alone, who is the Rabb (Lord, Sustainer) of all creation..." },
    { number: 3, arabic: "الرَّحْمَٰنِ الرَّحِيمِ", translation: "The Entirely Merciful, the Especially Merciful,", tafseer: "These two names of Allah emphasize His mercy. Ar-Rahman refers to His general mercy for all creation..." },
    { number: 4, arabic: "مَالِكِ يَوْمِ الدِّينِ", translation: "Sovereign of the Day of Recompense.", tafseer: "Allah is the Master and Judge of the Day of Judgment, when all will be held accountable for their deeds..." },
  ]

  const toggleBookmark = (verseNumber) => {
    if (bookmarks.includes(verseNumber)) {
      setBookmarks(bookmarks.filter(v => v !== verseNumber))
    } else {
      setBookmarks([...bookmarks, verseNumber])
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-10 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">Holy Quran</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10 text-lg">Read, Listen, and Understand with Tafseer & Translation</p>

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

            <div className="flex gap-2 mb-6 border-b border-gray-200 dark:border-gray-700">
              {['recitation', 'translation', 'tafseer'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-3 px-6 font-semibold capitalize transition-all ${activeTab === tab ? 'text-gold border-b-2 border-gold' : 'text-gray-600 dark:text-gray-400'}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="glass-card p-6 rounded-2xl mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-12 h-12 rounded-full bg-gold text-white flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    {isPlaying ? (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Surah Al-Fatihah</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Reciter: Mishary Rashid Alafasy</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 glass rounded-lg hover:bg-gold/20 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-gold h-2 rounded-full" style={{width: '35%'}}></div>
              </div>
            </div>

            <div className="space-y-6">
              {mockVerses.map((verse) => (
                <motion.div 
                  key={verse.number} 
                  className="glass-card p-6 rounded-2xl hover-lift"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: verse.number * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold text-white flex items-center justify-center font-bold flex-shrink-0">
                      {verse.number}
                    </div>
                    <div className="flex-1">
                      {(activeTab === 'recitation' || activeTab === 'translation') && (
                        <p className="text-3xl text-right mb-4 leading-loose text-gray-900 dark:text-white font-arabic">
                          {verse.arabic}
                        </p>
                      )}
                      {(activeTab === 'translation' || activeTab === 'tafseer') && (
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                          {verse.translation}
                        </p>
                      )}
                      {activeTab === 'tafseer' && (
                        <div className="glass p-4 rounded-xl">
                          <h4 className="font-semibold text-gold mb-2">Tafseer:</h4>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {verse.tafseer}
                          </p>
                        </div>
                      )}
                      <div className="flex gap-3 mt-4">
                        <button 
                          onClick={() => toggleBookmark(verse.number)}
                          className={`text-sm font-semibold transition-colors ${bookmarks.includes(verse.number) ? 'text-gold' : 'text-gray-600 dark:text-gray-400 hover:text-gold'}`}
                        >
                          {bookmarks.includes(verse.number) ? '★ Bookmarked' : '☆ Bookmark'}
                        </button>
                        <button className="text-sm text-gray-600 dark:text-gray-400 hover:text-gold font-semibold transition-colors">
                          Share
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Quran