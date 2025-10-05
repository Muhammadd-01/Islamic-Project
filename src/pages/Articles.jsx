import { motion } from 'framer-motion'
import ArticleCard from '../components/ArticleCard'
import { mockArticles } from '../data/mockData'

function Articles() {
  return (
    <div className="min-h-screen py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">Islamic Articles & Insights</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
            Addressing modern challenges with authentic Islamic responses
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Articles