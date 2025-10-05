function BookCard({ book }) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
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
        <button className="w-full py-3 px-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold hover:scale-105 transition-transform duration-300">
          {book.price ? 'Add to Cart' : 'Read Now'}
        </button>
      </div>
    </div>
  )
}

export default BookCard