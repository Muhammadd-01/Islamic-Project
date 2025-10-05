import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BookCard from '../components/BookCard'
import { products } from '../data/mockData'

function Shop() {
  const [searchTerm, setSearchTerm] = useState('')
  const [priceRange, setPriceRange] = useState('all')
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const filteredItems = products.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPrice = priceRange === 'all' || 
                        (priceRange === 'under20' && item.price < 20) ||
                        (priceRange === '20to50' && item.price >= 20 && item.price <= 50) ||
                        (priceRange === 'over50' && item.price > 50)
    return matchesSearch && matchesPrice
  })

  const addToCart = (item) => {
    const existing = cart.find(c => c.id === item.id)
    if (existing) {
      setCart(cart.map(c => c.id === item.id ? {...c, quantity: c.quantity + 1} : c))
    } else {
      setCart([...cart, {...item, quantity: 1}])
    }
  }

  const removeFromCart = (itemId) => {
    setCart(cart.filter(c => c.id !== itemId))
  }

  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

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
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white">Islamic Bookshop</h1>
            <button 
              onClick={() => setShowCart(true)}
              className="relative py-3 px-6 glass-card rounded-xl font-semibold hover:scale-105 transition-transform duration-300 text-gray-900 dark:text-white"
            >
              View Cart ({cart.length})
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-gold text-white text-xs rounded-full flex items-center justify-center font-bold">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
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
              <BookCard key={item.id} book={item} onAddToCart={addToCart} />
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showCart && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowCart(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl glass-strong rounded-3xl p-8 max-h-[80vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Shopping Cart</h2>
                <button onClick={() => setShowCart(false)} className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🛒</div>
                  <p className="text-xl text-gray-600 dark:text-gray-400">Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map((item) => (
                      <div key={item.id} className="glass-card p-4 rounded-xl flex justify-between items-center">
                        <div>
                          <h3 className="font-bold text-gray-900 dark:text-white">{item.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Quantity: {item.quantity}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <p className="text-xl font-bold text-gold">${(item.price * item.quantity).toFixed(2)}</p>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 bg-red-500/80 backdrop-blur-xl rounded-lg hover:scale-110 transition-transform text-white"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">Total:</span>
                      <span className="text-3xl font-bold text-gold">${totalPrice.toFixed(2)}</span>
                    </div>
                    <button className="w-full py-4 px-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300">
                      Proceed to Checkout
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Shop