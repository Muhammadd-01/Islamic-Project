import { useState } from 'react'
import { motion } from 'framer-motion'

function Debunk() {
  const [searchQuery, setSearchQuery] = useState('')

  const misconceptions = [
    {
      id: 1,
      myth: 'Islam was spread by the sword',
      truth: 'Islam spread primarily through trade, scholarship, and the exemplary character of Muslims. Historical evidence shows peaceful propagation.',
      category: 'History',
      sources: ['Quran 2:256', 'Historical records']
    },
    {
      id: 2,
      myth: 'Islam oppresses women',
      truth: 'Islam granted women rights 1400 years ago that many societies only recognized recently, including property rights, education, and consent in marriage.',
      category: 'Women',
      sources: ['Quran 4:19', 'Hadith collections']
    },
    {
      id: 3,
      myth: 'Muslims worship a different God',
      truth: 'Muslims worship the same God as Jews and Christians - the God of Abraham. "Allah" is simply the Arabic word for God.',
      category: 'Theology',
      sources: ['Quran 29:46', 'Biblical references']
    },
    {
      id: 4,
      myth: 'Jihad means holy war',
      truth: 'Jihad means "struggle" or "striving" - primarily the internal struggle against sin. Armed defense is only permitted under strict conditions.',
      category: 'Concepts',
      sources: ['Quran 22:39', 'Hadith on greater jihad']
    },
    {
      id: 5,
      myth: 'Islam is incompatible with science',
      truth: 'The Quran encourages seeking knowledge. Islamic civilization preserved and advanced science during the Dark Ages.',
      category: 'Science',
      sources: ['Quran 96:1-5', 'Islamic Golden Age']
    },
    {
      id: 6,
      myth: 'Muslims hate non-Muslims',
      truth: 'Islam teaches respect and kindness to all people. The Quran explicitly permits friendship and good relations with peaceful non-Muslims.',
      category: 'Relations',
      sources: ['Quran 60:8', 'Prophetic examples']
    },
  ]

  const categories = ['All', 'History', 'Women', 'Theology', 'Concepts', 'Science', 'Relations']
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredMisconceptions = misconceptions.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
    const matchesSearch = item.myth.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.truth.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
          <h1 className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">Debunk Misconceptions</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">Clarifying common misunderstandings about Islam with evidence</p>

          <div className="glass-card rounded-3xl p-8 mb-12">
            <input
              type="text"
              placeholder="Search misconceptions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-4 rounded-xl glass border-2 border-gray-200 dark:border-gray-700 focus:border-gold outline-none transition-colors text-gray-900 dark:text-white text-lg"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`py-3 px-8 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                    : 'glass-card text-gray-900 dark:text-white hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {filteredMisconceptions.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl">❌</div>
                  <div className="flex-1">
                    <span className="px-3 py-1 rounded-full text-sm font-semibold bg-red-500/20 text-red-600 dark:text-red-400 mb-3 inline-block">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{item.myth}</h3>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl">✅</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">The Truth:</h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.truth}</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Sources:</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.sources.map((source, idx) => (
                      <span key={idx} className="px-3 py-1 glass rounded-full text-sm text-gray-700 dark:text-gray-300">
                        {source}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredMisconceptions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 dark:text-gray-400">No misconceptions found matching your search.</p>
            </div>
          )}

          <div className="glass-card rounded-3xl p-8 mt-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Have a Question?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">Can't find what you're looking for? Ask our AI or consult with a scholar.</p>
            <div className="flex gap-4 justify-center">
              <button className="py-4 px-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold hover:scale-105 transition-transform duration-300">
                Ask AI
              </button>
              <button className="py-4 px-8 glass-card rounded-xl font-bold hover:scale-105 transition-transform duration-300 text-gray-900 dark:text-white">
                Consult Scholar
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Debunk