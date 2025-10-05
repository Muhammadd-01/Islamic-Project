import { useState } from 'react'
import { motion } from 'framer-motion'

function BookCard({ book, onAddToCart }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setTilt({
      x: (y - 0.5) * 20,
      y: (x - 0.5) * -20
    })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
      }}
      className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer"
    >
      <div className="h-64 overflow-hidden bg-gradient-to-br from-gold/20 to-gray-900/20 dark:from-gold/30 dark:to-gray-700/30 flex items-center justify-center">
        <div className="text-6xl">{book.icon || '📖'}</div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{book.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-2">{book.author}</p>
        <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">{book.category}</p>
        {book.price && (
          <p className="text-2xl font-bold text-gold mb-4">${book.price}</p>
        )}
        <button 
          onClick={() => onAddToCart && onAddToCart(book)}
          className="w-full py-3 px-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold hover:scale-105 transition-transform duration-300"
        >
          {book.price ? 'Add to Cart' : 'Read Now'}
        </button>
      </div>
    </motion.div>
  )
}

export default BookCard