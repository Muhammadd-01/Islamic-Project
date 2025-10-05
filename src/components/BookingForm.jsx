import { useState } from 'react'

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    scholar: '',
    type: 'consultation'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Booking request submitted! (This is a demo)')
    console.log('Booking data:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form className="max-w-2xl mx-auto glass-card p-8 rounded-2xl" onSubmit={handleSubmit}>
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

      <button type="submit" className="w-full py-4 px-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300">
        Book Consultation
      </button>
    </form>
  )
}

export default BookingForm