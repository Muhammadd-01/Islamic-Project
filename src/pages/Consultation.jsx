import { motion } from 'framer-motion'
import BookingForm from '../components/BookingForm'
import { mockScholars } from '../data/mockData'

function Consultation() {
  return (
    <div className="min-h-screen py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">Book a Consultation</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
            Schedule online sessions with verified scholars for personalized guidance
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {mockScholars.map((scholar) => (
              <div key={scholar.id} className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold to-gray-900 mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {scholar.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{scholar.name}</h3>
                <p className="text-gold font-semibold mb-2">{scholar.specialization}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Available: {scholar.availability}</p>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Schedule Your Session</h2>
            <BookingForm />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Consultation