import { useState } from 'react'
import { motion } from 'framer-motion'

function Feedback() {
  const [rating, setRating] = useState(0)
  const [formData, setFormData] = useState({
    category: 'general',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your feedback! (This is a demo)')
    setFormData({ category: 'general', subject: '', message: '' })
    setRating(0)
  }

  const categories = [
    { value: 'general', label: 'General Feedback', icon: '💬' },
    { value: 'bug', label: 'Bug Report', icon: '🐛' },
    { value: 'feature', label: 'Feature Request', icon: '✨' },
    { value: 'content', label: 'Content Suggestion', icon: '📝' },
    { value: 'scholar', label: 'Scholar Feedback', icon: '👨‍🏫' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-10 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">Share Your Feedback</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">Help us improve IslamicAI with your valuable input</p>

          <div className="glass-card rounded-3xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Rate Your Experience</h2>
            <div className="flex justify-center gap-4 mb-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className={`text-5xl transition-all hover:scale-110 ${
                    star <= rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'
                  }`}
                >
                  ★
                </button>
              ))}
            </div>
            {rating > 0 && (
              <p className="text-center text-gray-600 dark:text-gray-400">
                {rating === 5 ? 'Excellent! 🎉' : rating === 4 ? 'Great! 👍' : rating === 3 ? 'Good 👌' : rating === 2 ? 'Fair 😐' : 'Needs Improvement 😕'}
              </p>
            )}
          </div>

          <div className="glass-card rounded-3xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Feedback Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setFormData({ ...formData, category: category.value })}
                  className={`p-4 rounded-xl font-semibold transition-all ${
                    formData.category === category.value
                      ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                      : 'glass-card text-gray-900 dark:text-white hover:scale-105'
                  }`}
                >
                  <div className="text-3xl mb-2">{category.icon}</div>
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Tell Us More</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 font-semibold text-gray-900 dark:text-white">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Brief summary of your feedback"
                  className="w-full p-4 rounded-xl glass border-2 border-gray-200 dark:border-gray-700 focus:border-gold outline-none transition-colors text-gray-900 dark:text-white"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold text-gray-900 dark:text-white">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="8"
                  placeholder="Share your thoughts, suggestions, or report issues..."
                  className="w-full p-4 rounded-xl glass border-2 border-gray-200 dark:border-gray-700 focus:border-gold outline-none transition-colors text-gray-900 dark:text-white resize-none"
                  required
                ></textarea>
              </div>

              <button type="submit" className="w-full py-4 px-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300">
                Submit Feedback
              </button>
            </form>
          </div>

          <div className="glass-card rounded-3xl p-8 mt-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Why Your Feedback Matters</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="font-bold mb-2 text-gray-900 dark:text-white">Shape the Future</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Your input directly influences our development priorities</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🤝</div>
                <h3 className="font-bold mb-2 text-gray-900 dark:text-white">Community Driven</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">We build features that our community truly needs</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="font-bold mb-2 text-gray-900 dark:text-white">Quick Response</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">We review and respond to all feedback within 48 hours</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Feedback