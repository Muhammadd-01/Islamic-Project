import { useState } from 'react'
import { motion } from 'framer-motion'
import ArticleCard from '../components/ArticleCard'
import { articles } from '../data/mockData'

function Articles() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const categories = ['all', 'aqeedah', 'fiqh', 'seerah', 'contemporary']

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory)

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
          <h1 className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">Islamic Articles</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">In-depth articles on Islamic topics by verified scholars</p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`py-3 px-8 rounded-full font-semibold capitalize transition-all ${
                  selectedCategory === category
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                    : 'glass-card text-gray-900 dark:text-white hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <ArticleCard key={article.id} article={article} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Articles