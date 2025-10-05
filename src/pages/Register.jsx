import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import ThreeBackground from '../components/ThreeBackground'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    alert('Registration successful! (This is a demo)')
    navigate('/profile')
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center px-6 py-12 relative"
    >
      <div className="fixed inset-0 opacity-20">
        <ThreeBackground />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md glass-strong rounded-3xl p-8 relative z-10"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-3 text-gray-900 dark:text-white">Create Account</h1>
          <p className="text-gray-600 dark:text-gray-400">Join our Islamic learning community</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 font-semibold text-gray-900 dark:text-white">Full Name</label>
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
            <label className="block mb-2 font-semibold text-gray-900 dark:text-white">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-4 rounded-xl glass border-2 border-gray-200 dark:border-gray-700 focus:border-gold outline-none transition-colors text-gray-900 dark:text-white"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-900 dark:text-white">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-4 rounded-xl glass border-2 border-gray-200 dark:border-gray-700 focus:border-gold outline-none transition-colors text-gray-900 dark:text-white"
              required
            />
          </div>

          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="w-5 h-5 rounded accent-gold mt-1" required />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              I agree to the Terms of Service and Privacy Policy
            </span>
          </label>

          <button type="submit" className="w-full py-4 px-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300">
            Create Account
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="text-gold font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Register