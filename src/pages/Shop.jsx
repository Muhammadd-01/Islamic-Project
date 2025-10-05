import { useState } from 'react'
import { motion } from 'framer-motion'
import BookCard from '../components/BookCard'
import { mockShopItems } from '../data/mockData'

function Shop() {
  const [searchTerm, setSearchTerm] = useState('')
  const [priceRange, setPriceRange] = useState('all')

  const filteredItems = mockShopItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPrice = priceRange === 'all' || 
                        (priceRange === 'under20' && item.price < 20) ||
                        (priceRange === '20to50' && item.price >= 20 && item.price <= 50) ||
                        (priceRange === 'over50' && item.price > 50)
    return matchesSearch && matchesPrice
  })

  return (
    <div className="min-h-screen py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">Islamic Bookshop</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10 text-lg">Purchase authentic Islamic books and resources</p>

          <div className="glass-card rounded-3xl p-6 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="p-4 rounded-xl glass border-2 border-gray-200 dark:border-gray-700 focus:border-gold outline-none transition-colors text-gray-900 dark:text-white"
              />
              <select 
                value={priceRange} 
                onChange={(e) => setPriceRange(e.target.value)}
                className="p-4 rounded-xl glass border-2 border-gray-200 dark:border-gray-700 focus:border-gold outline-none transition-colors text-gray-900 dark:text-white"
              >
                <option value="all">All Prices</option>
                <option value="under20">Under $20</option>
                <option value="20to50">$20 - $50</option>
                <option value="over50">Over $50</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <BookCard key={item.id} book={item} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Shop