import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import ThreeBackground from '../components/ThreeBackground'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Login successful! (This is a demo)')
    navigate('/profile')
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center px-6 relative"
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
          <h1 className="text-4xl font-bold mb-3 text-gray-900 dark:text-white">Welcome Back</h1>
          <p className="text-gray-600 dark:text-gray-400">Sign in to continue your Islamic journey</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 font-semibold text-gray-900 dark:text-white">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 rounded-xl glass border-2 border-gray-200 dark:border-gray-700 focus:border-gold outline-none transition-colors text-gray-900 dark:text-white"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-900 dark:text-white">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 rounded-xl glass border-2 border-gray-200 dark:border-gray-700 focus:border-gold outline-none transition-colors text-gray-900 dark:text-white"
              required
            />
          </div>

          <div className="flex justify-between items-center">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded accent-gold" />
              <span className="text-sm text-gray-700 dark:text-gray-300">Remember me</span>
            </label>
            <Link to="/forgot-password" className="text-sm text-gold hover:underline">
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="w-full py-4 px-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300">
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Don't have an account?{' '}
            <Link to="/register" className="text-gold font-semibold hover:underline">
              Sign up
            </Link>
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-4">Or continue with</p>
          <div className="grid grid-cols-2 gap-4">
            <button className="py-3 px-6 glass-card rounded-xl font-semibold hover:scale-105 transition-transform duration-300 text-gray-900 dark:text-white">
              Google
            </button>
            <button className="py-3 px-6 glass-card rounded-xl font-semibold hover:scale-105 transition-transform duration-300 text-gray-900 dark:text-white">
              Apple
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Login