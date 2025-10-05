import { useState } from 'react'
import { motion } from 'framer-motion'
import BookCard from '../components/BookCard'
import { books } from "../data/mockData.js";

function Library() {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('all')
  const [favorites, setFavorites] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const booksPerPage = 8

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         book.author.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = category === 'all' || book.category === category
    return matchesSearch && matchesCategory
  })

  const totalPages = Math.ceil(filteredBooks.length / booksPerPage)
  const currentBooks = filteredBooks.slice((currentPage - 1) * booksPerPage, currentPage * booksPerPage)

  const toggleFavorite = (bookId) => {
    if (favorites.includes(bookId)) {
      setFavorites(favorites.filter(id => id !== bookId))
    } else {
      setFavorites([...favorites, bookId])
    }
  }

  const categories = ['all', 'Aqeedah', 'Fiqh', 'Hadith', 'Tafseer', 'Seerah', 'History']

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
          <h1 className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">Islamic Library</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10 text-lg">Access authentic Islamic books and resources</p>

          <div className="glass-card rounded-3xl p-6 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                placeholder="Search books by title or author..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="p-4 rounded-xl glass border-2 border-gray-200 dark:border-gray-700 focus:border-gold outline-none transition-colors text-gray-900 dark:text-white"
              />
              <div className="flex gap-2">
                <button className="py-3 px-6 glass-card rounded-xl font-semibold hover:scale-105 transition-transform duration-300 text-gray-900 dark:text-white">
                  All Books
                </button>
                <button className="py-3 px-6 glass-card rounded-xl font-semibold hover:scale-105 transition-transform duration-300 text-gold">
                  Favorites ({favorites.length})
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`py-2 px-4 rounded-xl font-semibold capitalize transition-all ${category === cat ? 'bg-gold text-white' : 'glass-card text-gray-900 dark:text-white hover:scale-105'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
            {currentBooks.map((book) => (
              <div key={book.id} className="relative">
                <BookCard book={book} />
                <button
                  onClick={() => toggleFavorite(book.id)}
                  className="absolute top-4 right-4 w-10 h-10 glass-card rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <span className={`text-xl ${favorites.includes(book.id) ? 'text-gold' : 'text-gray-400'}`}>
                    {favorites.includes(book.id) ? '★' : '☆'}
                  </span>
                </button>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="py-2 px-4 glass-card rounded-xl font-semibold hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-gray-900 dark:text-white"
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`py-2 px-4 rounded-xl font-semibold transition-all ${currentPage === i + 1 ? 'bg-gold text-white' : 'glass-card text-gray-900 dark:text-white hover:scale-105'}`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="py-2 px-4 glass-card rounded-xl font-semibold hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-gray-900 dark:text-white"
              >
                Next
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Library