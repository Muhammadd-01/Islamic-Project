import { useState } from 'react'
import { motion } from 'framer-motion'
import BookCard from '../components/BookCard'
import { mockBooks } from '../data/mockData'

function Library() {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('all')

  const filteredBooks = mockBooks.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         book.author.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = category === 'all' || book.category === category
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">Islamic Library</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10 text-lg">Access authentic Islamic books and resources</p>

          <div className="glass-card rounded-3xl p-6 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Search books by title or author..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="p-4 rounded-xl glass border-2 border-gray-200 dark:border-gray-700 focus:border-gold outline-none transition-colors text-gray-900 dark:text-white"
              />
              <select 
                value={category} 
                onChange={(e) => setCategory(e.target.value)}
                className="p-4 rounded-xl glass border-2 border-gray-200 dark:border-gray-700 focus:border-gold outline-none transition-colors text-gray-900 dark:text-white"
              >
                <option value="all">All Categories</option>
                <option value="Aqeedah">Aqeedah</option>
                <option value="Fiqh">Fiqh</option>
                <option value="Hadith">Hadith</option>
                <option value="Tafseer">Tafseer</option>
                <option value="Seerah">Seerah</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Library