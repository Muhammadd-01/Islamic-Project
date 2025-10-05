import { motion } from 'framer-motion'
import BookingForm from '../components/BookingForm'

function Consultation() {
  const scholars = [
    { name: 'Sheikh Ahmad Al-Mansoor', specialty: 'Fiqh & Islamic Law', experience: '15 years', image: '👨‍🏫', rating: 4.9, reviews: 234 },
    { name: 'Dr. Fatima Hassan', specialty: 'Quran & Tafseer', experience: '12 years', image: '👩‍🏫', rating: 4.8, reviews: 189 },
    { name: 'Mufti Ibrahim Yusuf', specialty: 'Hadith & Aqeedah', experience: '20 years', image: '👨‍🏫', rating: 5.0, reviews: 312 },
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
          <h1 className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">Consult a Scholar</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">Book 1:1 consultations or group classes with verified scholars</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {scholars.map((scholar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center hover-lift"
              >
                <div className="text-6xl mb-4">{scholar.image}</div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{scholar.name}</h3>
                <p className="text-gold font-semibold mb-2">{scholar.specialty}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{scholar.experience} experience</p>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-yellow-400 text-xl">★</span>
                  <span className="font-bold text-gray-900 dark:text-white">{scholar.rating}</span>
                  <span className="text-gray-600 dark:text-gray-400">({scholar.reviews} reviews)</span>
                </div>
                <button className="w-full py-3 px-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold hover:scale-105 transition-transform duration-300">
                  View Profile
                </button>
              </motion.div>
            ))}
          </div>

          <div className="glass-card rounded-3xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Book Your Consultation</h2>
            <BookingForm />
          </div>

          <div className="glass-card rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Why Consult Our Scholars?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="text-3xl">✓</div>
                <div>
                  <h3 className="font-bold mb-2 text-gray-900 dark:text-white">Verified Credentials</h3>
                  <p className="text-gray-600 dark:text-gray-400">All scholars are verified with authentic Islamic education from recognized institutions</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">✓</div>
                <div>
                  <h3 className="font-bold mb-2 text-gray-900 dark:text-white">Ahlus-Sunnah Methodology</h3>
                  <p className="text-gray-600 dark:text-gray-400">Following the understanding of the Salaf and authentic Islamic scholarship</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">✓</div>
                <div>
                  <h3 className="font-bold mb-2 text-gray-900 dark:text-white">Flexible Scheduling</h3>
                  <p className="text-gray-600 dark:text-gray-400">Book sessions at times convenient for you, with online video consultations</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">✓</div>
                <div>
                  <h3 className="font-bold mb-2 text-gray-900 dark:text-white">Confidential & Private</h3>
                  <p className="text-gray-600 dark:text-gray-400">Your consultations are completely private and confidential</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Consultation