import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Login functionality - Demo only')
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-10 px-6">
      <motion.div 
        className="w-full max-w-md glass-card rounded-3xl p-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">Welcome Back</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 font-semibold text-gray-900 dark:text-white">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full p-4 rounded-xl glass border-2 border-gray-200 dark:border-gray-700 focus:border-gold outline-none transition-colors text-gray-900 dark:text-white"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-900 dark:text-white">Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full p-4 rounded-xl glass border-2 border-gray-200 dark:border-gray-700 focus:border-gold outline-none transition-colors text-gray-900 dark:text-white"
              required
            />
          </div>

          <button type="submit" className="w-full py-4 px-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300">
            Sign In
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600 dark:text-gray-400">
          Don't have an account? <Link to="/register" className="text-gold font-semibold hover:underline">Register</Link>
        </p>
      </motion.div>
    </div>
  )
}

export default Login