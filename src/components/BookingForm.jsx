import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function BookingForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    scholar: '',
    type: 'consultation',
    topic: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      alert('Booking request submitted! (This is a demo)')
      console.log('Booking data:', formData)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form className="max-w-2xl mx-auto glass-card p-8 rounded-2xl" onSubmit={handleSubmit}>
      <div className="flex justify-between mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center flex-1">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${step >= s ? 'bg-gold text-white' : 'bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400'}`}>
              {s}
            </div>
            {s < 3 && <div className={`flex-1 h-1 mx-2 transition-all ${step > s ? 'bg-gold' : 'bg-gray-300 dark:bg-gray-700'}`}></div>}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Personal Information</h3>
            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-900 dark:text-white">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-xl glass border-2 border-gray-200 dark:border-gray-700 focus:border-gold outline-none transition-colors text-gray-900 dark:text-white"
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
                className="w-full p-3 rounded-xl glass border-2 border-gray-200 dark:border-gray-700 focus:border-gold outline-none transition-colors text-gray-900 dark:text-white"
                required
              />
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Consultation Details</h3>
            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-900 dark:text-white">Consultation Type</label>
              <select name="type" value={formData.type} onChange={handleChange} className="w-full p-3 rounded-xl glass border-2 border-gray-200 dark:border-gray-700 focus:border-gold outline-none transition-colors text-gray-900 dark:text-white">
                <option value="consultation">1:1 Consultation</option>
                <option value="class">Group Class</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-900 dark:text-white">Preferred Scholar</label>
              <select name="scholar" value={formData.scholar} onChange={handleChange} className="w-full p-3 rounded-xl glass border-2 border-gray-200 dark:border-gray-700 focus:border-gold outline-none transition-colors text-gray-900 dark:text-white" required>
                <option value="">Select a scholar</option>
                <option value="sheikh-ahmad">Sheikh Ahmad Al-Mansoor</option>
                <option value="dr-fatima">Dr. Fatima Hassan</option>
                <option value="mufti-ibrahim">Mufti Ibrahim Yusuf</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-900 dark:text-white">Topic</label>
              <input
                type="text"
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                placeholder="e.g., Marriage, Business Ethics, etc."
                className="w-full p-3 rounded-xl glass border-2 border-gray-200 dark:border-gray-700 focus:border-gold outline-none transition-colors text-gray-900 dark:text-white"
                required
              />
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Schedule & Message</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block mb-2 font-semibold text-gray-900 dark:text-white">Preferred Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl glass border-2 border-gray-200 dark:border-gray-700 focus:border-gold outline-none transition-colors text-gray-900 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-900 dark:text-white">Preferred Time</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl glass border-2 border-gray-200 dark:border-gray-700 focus:border-gold outline-none transition-colors text-gray-900 dark:text-white"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-900 dark:text-white">Additional Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Any specific questions or details..."
                className="w-full p-3 rounded-xl glass border-2 border-gray-200 dark:border-gray-700 focus:border-gold outline-none transition-colors text-gray-900 dark:text-white resize-none"
              ></textarea>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex gap-4">
        {step > 1 && (
          <button 
            type="button"
            onClick={() => setStep(step - 1)}
            className="flex-1 py-4 px-6 glass-card rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300 text-gray-900 dark:text-white"
          >
            Back
          </button>
        )}
        <button type="submit" className="flex-1 py-4 px-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300">
          {step === 3 ? 'Submit Booking' : 'Next'}
        </button>
      </div>
    </form>
  )
}

export default BookingForm