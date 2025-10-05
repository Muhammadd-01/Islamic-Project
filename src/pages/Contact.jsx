import { useState } from 'react'
import { motion } from 'framer-motion'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    alert('Message sent successfully! (This is a demo)')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    { icon: '📧', title: 'Email', value: 'support@islamicai.com', link: 'mailto:support@islamicai.com' },
    { icon: '📱', title: 'Phone', value: '+1 (555) 123-4567', link: 'tel:+15551234567' },
    { icon: '📍', title: 'Address', value: '123 Islamic Center, City, Country', link: null },
    { icon: '🕐', title: 'Hours', value: 'Mon-Fri: 9AM-6PM', link: null },
  ]

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
          <h1 className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">Contact Us</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">We'd love to hear from you. Send us a message!</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-3xl p-8"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
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

                <div>
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

                <div>
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

                <div>
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

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="glass-card rounded-3xl p-8 mb-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="text-4xl">{info.icon}</div>
                      <div>
                        <h3 className="font-bold mb-1 text-gray-900 dark:text-white">{info.title}</h3>
                        {info.link ? (
                          <a href={info.link} className="text-gold hover:underline">{info.value}</a>
                        ) : (
                          <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-3xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Follow Us</h2>
                <div className="flex gap-4">
                  <a href="#" className="w-14 h-14 glass-card rounded-xl flex items-center justify-center text-2xl hover:scale-110 transition-transform duration-300">
                    📘
                  </a>
                  <a href="#" className="w-14 h-14 glass-card rounded-xl flex items-center justify-center text-2xl hover:scale-110 transition-transform duration-300">
                    🐦
                  </a>
                  <a href="#" className="w-14 h-14 glass-card rounded-xl flex items-center justify-center text-2xl hover:scale-110 transition-transform duration-300">
                    📷
                  </a>
                  <a href="#" className="w-14 h-14 glass-card rounded-xl flex items-center justify-center text-2xl hover:scale-110 transition-transform duration-300">
                    ▶️
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="glass-card rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-2 text-gray-900 dark:text-white">How do I book a consultation?</h3>
                <p className="text-gray-600 dark:text-gray-400">Visit our Consultation page and select your preferred scholar and time slot.</p>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-gray-900 dark:text-white">Is the AI verified by scholars?</h3>
                <p className="text-gray-600 dark:text-gray-400">Yes, all AI responses are trained and verified by qualified Islamic scholars.</p>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-gray-900 dark:text-white">What methodology do you follow?</h3>
                <p className="text-gray-600 dark:text-gray-400">We follow Ahlus-Sunnah wal-Jama'ah based on the Quran and authentic Sunnah.</p>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-gray-900 dark:text-white">How can I contribute?</h3>
                <p className="text-gray-600 dark:text-gray-400">Contact us to learn about volunteer opportunities and content contributions.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Contact