import { useState } from 'react'
import { motion } from 'framer-motion'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent! (This is a demo)')
    console.log('Contact form data:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen py-10 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">Contact Us</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10 text-lg">
            Have questions or feedback? We'd love to hear from you
          </p>

          <form className="glass-card rounded-3xl p-8" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-900 dark:text-white">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 rounded-xl glass border-2 border-gray-200 dark:border-gray-700 focus:border-gold outline-none transition-colors text-gray-900 dark:text-white"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-900 dark:text-white">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 rounded-xl glass border-2 border-gray-200 dark:border-gray-700 focus:border-gold outline-none transition-colors text-gray-900 dark:text-white"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-900 dark:text-white">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-4 rounded-xl glass border-2 border-gray-200 dark:border-gray-700 focus:border-gold outline-none transition-colors text-gray-900 dark:text-white"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-900 dark:text-white">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full p-4 rounded-xl glass border-2 border-gray-200 dark:border-gray-700 focus:border-gold outline-none transition-colors text-gray-900 dark:text-white resize-none"
                required
              ></textarea>
            </div>

            <button type="submit" className="w-full py-4 px-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact